from fastapi import APIRouter, HTTPException, Request
from django.core.cache import cache

from api.schemas.pricing import PriceSimulationCreateSchema
from api.security.rate_limit import InMemoryRateLimiter
from apps.pricing.enums import HAIR_LENGTH_DESCRIPTIONS, HAIR_LENGTH_LABELS, HairLength
from apps.pricing.models import PriceSimulation
from apps.pricing.services import CurrencyFormatter
from apps.services_catalog.seed_data import INITIAL_SERVICES

router = APIRouter(prefix="/pricing", tags=["pricing"])
CACHE_TIMEOUT_SECONDS = 60 * 60 * 12
simulation_limiter = InMemoryRateLimiter(max_hits=12, window_seconds=60 * 60)


def _client_ip(request: Request) -> str:
    forwarded_for = request.headers.get("x-forwarded-for", "")

    if forwarded_for:
        return forwarded_for.split(",")[0].strip()

    return request.client.host if request.client else "unknown"


def _cache_get(key: str):
    try:
        return cache.get(key)
    except Exception:
        return None


def _cache_set(key: str, payload: dict) -> None:
    try:
        cache.set(key, payload, CACHE_TIMEOUT_SECONDS)
    except Exception:
        return None


@router.get("/hair-lengths")
async def list_hair_lengths() -> dict:
    cache_key = "api:pricing:hair-lengths:v1"
    cached = _cache_get(cache_key)

    if cached is not None:
        return cached

    payload = {
        "items": [
            {
                "id": length.value,
                "label": HAIR_LENGTH_LABELS[length],
                "description": HAIR_LENGTH_DESCRIPTIONS[length],
            }
            for length in HairLength
        ]
    }
    _cache_set(cache_key, payload)

    return payload


@router.get("/estimate")
async def estimate_price(service_slug: str, hair_length: HairLength = HairLength.MEDIUM) -> dict:
    cache_key = f"api:pricing:estimate:v1:{service_slug}:{hair_length.value}"
    cached = _cache_get(cache_key)

    if cached is not None:
        return cached

    service = next((item for item in INITIAL_SERVICES if item["slug"] == service_slug), None)

    if service is None:
        raise HTTPException(status_code=404, detail="Serviço não encontrado.")

    formatter = CurrencyFormatter()
    display = "Consulte o valor"
    prices = service.get("prices", [])

    if service["price_mode"] == "evaluation":
        display = "Sob avaliação"
    elif service["price_mode"] == "fixed" and prices and prices[0].get("price") is not None:
        label = f"{prices[0].get('label')} " if prices[0].get("label") else ""
        display = f"{label}{formatter.format_brl(prices[0]['price'])}"
    elif service["price_mode"] == "range" and prices:
        display = (
            f"{formatter.format_brl(prices[0]['min_price'])} "
            f"a {formatter.format_brl(prices[0]['max_price'])}"
        )
    elif service["price_mode"] == "by_length":
        match = next(
            (price for price in prices if price.get("hair_length") == hair_length.value),
            None,
        )
        if match is not None:
            display = formatter.format_brl(match["price"])

    payload = {
        "service": service["name"],
        "hairLength": hair_length.value,
        "mode": service["price_mode"],
        "display": display,
    }
    _cache_set(cache_key, payload)

    return payload


@router.post("/simulations", status_code=201)
async def record_price_simulation(payload: PriceSimulationCreateSchema, request: Request) -> dict:
    if payload.website:
        return {"status": "ignored"}

    if not simulation_limiter.allow(_client_ip(request)):
        raise HTTPException(status_code=429, detail="Muitas simulações. Tente novamente mais tarde.")

    simulation = PriceSimulation.objects.create(
        service_slug=payload.service_slug,
        service_name=payload.service_name,
        hair_length=payload.hair_length,
        volume=payload.volume,
        goal=payload.goal,
        estimated_price=payload.estimated_price,
        source=payload.source,
    )

    return {"id": simulation.id, "status": "recorded"}
