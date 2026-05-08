from decimal import Decimal
from typing import TYPE_CHECKING

from .enums import HAIR_LENGTH_LABELS, HAIR_LENGTH_ORDER, HairLength, PriceMode

if TYPE_CHECKING:
    from apps.services_catalog.models import Service


class CurrencyFormatter:
    def format_brl(self, value: Decimal) -> str:
        normalized = f"{value:,.2f}"
        normalized = normalized.replace(",", "X")
        normalized = normalized.replace(".", ",")
        normalized = normalized.replace("X", ".")

        return f"R$ {normalized}"


class ServicePricePresenter:
    def __init__(self, formatter: CurrencyFormatter):
        self.formatter = formatter

    def present(self, service: "Service") -> dict:
        if service.price_mode == PriceMode.EVALUATION:
            return {
                "mode": "evaluation",
                "display": "Sob avaliação",
                "items": [],
            }

        if service.price_mode == PriceMode.FIXED:
            price = service.prices.first()

            if price is None or price.price is None:
                return self._unavailable()

            prefix = f"{price.label} " if price.label else ""

            return {
                "mode": "fixed",
                "display": f"{prefix}{self.formatter.format_brl(price.price)}",
                "items": [],
            }

        if service.price_mode == PriceMode.BY_LENGTH:
            items = []
            ordered_prices = sorted(
                service.prices.all(),
                key=lambda price: HAIR_LENGTH_ORDER.get(price.hair_length or "", 99),
            )

            for price in ordered_prices:
                if price.hair_length is None or price.price is None:
                    continue

                hair_length = HairLength(price.hair_length)
                items.append(
                    {
                        "length": price.hair_length,
                        "label": HAIR_LENGTH_LABELS[hair_length],
                        "value": self.formatter.format_brl(price.price),
                    }
                )

            return {
                "mode": "by_length",
                "display": "Por comprimento",
                "items": items,
            }

        if service.price_mode == PriceMode.RANGE:
            price = service.prices.first()

            if price is None or price.min_price is None or price.max_price is None:
                return self._unavailable()

            return {
                "mode": "range",
                "display": (
                    f"{self.formatter.format_brl(price.min_price)} "
                    f"a {self.formatter.format_brl(price.max_price)}"
                ),
                "items": [],
            }

        return {
            "mode": "unknown",
            "display": "Consulte o valor",
            "items": [],
        }

    def _unavailable(self) -> dict:
        return {
            "mode": "unavailable",
            "display": "Consulte o valor",
            "items": [],
        }
