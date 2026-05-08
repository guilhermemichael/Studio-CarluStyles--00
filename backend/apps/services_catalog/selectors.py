from django.db.models import QuerySet

from .models import Service


class ServiceSelector:
    def list_active_services(self) -> QuerySet[Service]:
        return (
            Service.objects.filter(is_active=True)
            .prefetch_related("prices")
            .order_by("category", "sort_order", "name")
        )

    def list_featured_services(self) -> QuerySet[Service]:
        return (
            Service.objects.filter(is_active=True, is_featured=True)
            .prefetch_related("prices")
            .order_by("sort_order", "name")
        )
