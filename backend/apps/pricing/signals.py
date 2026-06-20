from django.core.cache import cache
from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver

from .models import ServicePrice

SERVICE_CACHE_KEYS = ["api:services:list:v1"]


def clear_public_price_cache() -> None:
    cache.delete_many(SERVICE_CACHE_KEYS)


@receiver(post_save, sender=ServicePrice)
@receiver(post_delete, sender=ServicePrice)
def clear_price_cache_on_change(**kwargs) -> None:
    clear_public_price_cache()
