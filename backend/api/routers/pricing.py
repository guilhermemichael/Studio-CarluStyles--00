from fastapi import APIRouter, HTTPException

from apps.pricing.enums import HAIR_LENGTH_DESCRIPTIONS, HAIR_LENGTH_LABELS, HairLength
from apps.pricing.services import CurrencyFormatter
from apps.services_catalog.seed_data import INITIAL_SERVICES

router = APIRouter(prefix="/pricing", tags=["pricing"])


@router.get("/hair-lengths")
async def list_hair_lengths() -> dict:
    return {
        "items": [
            {
                "id": length.value,
                "label": HAIR_LENGTH_LABELS[length],
                "description": HAIR_LENGTH_DESCRIPTIONS[length],
            }
            for length in HairLength
        ]
    }


@router.get("/estimate")
async def estimate_price(service_slug: str, hair_length: HairLength = HairLength.MEDIUM) -> dict:
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

    return {
        "service": service["name"],
        "hairLength": hair_length.value,
        "mode": service["price_mode"],
        "display": display,
    }
