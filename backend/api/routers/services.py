from fastapi import APIRouter

from apps.pricing.services import CurrencyFormatter, ServicePricePresenter
from apps.services_catalog.seed_data import INITIAL_SERVICES
from apps.services_catalog.selectors import ServiceSelector

router = APIRouter(prefix="/services", tags=["services"])


def _fallback_payload() -> dict:
    items = []
    formatter = CurrencyFormatter()

    for index, service in enumerate(INITIAL_SERVICES, start=1):
        items.append(
            {
                "id": index,
                "name": service["name"],
                "slug": service["slug"],
                "category": service["category"],
                "shortDescription": service.get("short_description", ""),
                "requiresEvaluation": service.get("requires_evaluation", False),
                "price": _present_seed_price(service, formatter),
            }
        )

    return {"items": items, "source": "seed"}


def _present_seed_price(service: dict, formatter: CurrencyFormatter) -> dict:
    price_mode = service["price_mode"]
    prices = service.get("prices", [])

    if price_mode == "evaluation":
        return {"mode": "evaluation", "display": "Sob avaliação", "items": []}

    if price_mode == "fixed" and prices:
        price = prices[0]
        prefix = f"{price.get('label')} " if price.get("label") else ""
        return {
            "mode": "fixed",
            "display": f"{prefix}{formatter.format_brl(price['price'])}",
            "items": [],
        }

    if price_mode == "range" and prices:
        price = prices[0]
        return {
            "mode": "range",
            "display": (
                f"{formatter.format_brl(price['min_price'])} "
                f"a {formatter.format_brl(price['max_price'])}"
            ),
            "items": [],
        }

    if price_mode == "by_length":
        labels = {
            "short": "Curto",
            "medium": "Médio",
            "long": "Longo",
            "extra_long": "Extra longo",
        }
        return {
            "mode": "by_length",
            "display": "Por comprimento",
            "items": [
                {
                    "length": price["hair_length"],
                    "label": labels[price["hair_length"]],
                    "value": formatter.format_brl(price["price"]),
                }
                for price in prices
            ],
        }

    return {"mode": "unavailable", "display": "Consulte o valor", "items": []}


@router.get("/")
async def list_services():
    selector = ServiceSelector()
    presenter = ServicePricePresenter(CurrencyFormatter())

    try:
        services = selector.list_active_services()
        payload = []

        for service in services:
            payload.append(
                {
                    "id": service.id,
                    "name": service.name,
                    "slug": service.slug,
                    "category": service.category,
                    "shortDescription": service.short_description,
                    "requiresEvaluation": service.requires_evaluation,
                    "price": presenter.present(service),
                }
            )

        return {"items": payload, "source": "database"}
    except Exception:
        return _fallback_payload()
