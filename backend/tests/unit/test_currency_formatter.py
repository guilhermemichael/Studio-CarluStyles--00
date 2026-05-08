from decimal import Decimal

from apps.pricing.services import CurrencyFormatter


def test_format_brl_uses_brazilian_separators():
    formatter = CurrencyFormatter()

    assert formatter.format_brl(Decimal("1234.50")) == "R$ 1.234,50"
