from apps.pricing.services import CurrencyFormatter, ServicePricePresenter
from apps.services_catalog.selectors import ServiceSelector


def get_service_selector() -> ServiceSelector:
    return ServiceSelector()


def get_price_presenter() -> ServicePricePresenter:
    return ServicePricePresenter(CurrencyFormatter())
