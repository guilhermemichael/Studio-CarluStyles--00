from django.core.cache import cache
from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver

from .models import Service

SERVICE_CACHE_KEYS = ["api:services:list:v1"]


@receiver(post_save, sender=Service)
@receiver(post_delete, sender=Service)
def clear_service_cache_on_change(**kwargs) -> None:
    cache.delete_many(SERVICE_CACHE_KEYS)
