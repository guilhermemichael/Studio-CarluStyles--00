from django.db import transaction

from apps.pricing.models import ServicePrice

from .models import Service
from .seed_data import INITIAL_SERVICES


@transaction.atomic
def seed_initial_services() -> int:
    created_or_updated = 0

    for index, item in enumerate(INITIAL_SERVICES, start=1):
        prices = item["prices"]
        defaults = {key: value for key, value in item.items() if key != "prices"}
        service, _created = Service.objects.update_or_create(
            slug=item["slug"],
            defaults={**defaults, "sort_order": index},
        )
        service.prices.all().delete()

        for price in prices:
            ServicePrice.objects.create(service=service, **price)

        created_or_updated += 1

    return created_or_updated
