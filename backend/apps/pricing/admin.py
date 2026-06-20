from django.contrib import admin
from django.db.models import Count
from django.utils import timezone

from .models import PriceSimulation, ServicePrice


@admin.register(ServicePrice)
class ServicePriceAdmin(admin.ModelAdmin):
    list_display = ("service", "hair_length", "price", "min_price", "max_price", "label")
    list_filter = ("hair_length",)
    search_fields = ("service__name", "label")


@admin.register(PriceSimulation)
class PriceSimulationAdmin(admin.ModelAdmin):
    change_list_template = "admin/pricing/price_simulation/change_list.html"
    date_hierarchy = "created_at"
    list_display = (
        "service_name",
        "hair_length",
        "volume",
        "goal",
        "estimated_price",
        "source",
        "created_at",
    )
    list_filter = ("hair_length", "volume", "goal", "source", "created_at")
    readonly_fields = (
        "service_slug",
        "service_name",
        "hair_length",
        "volume",
        "goal",
        "estimated_price",
        "source",
        "created_at",
    )
    search_fields = ("service_name", "service_slug", "goal", "estimated_price")

    def has_add_permission(self, request):
        return False

    def changelist_view(self, request, extra_context=None):
        now = timezone.localtime()
        month_start = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)
        month_queryset = PriceSimulation.objects.filter(created_at__gte=month_start)

        trends = {
            "total": month_queryset.count(),
            "services": list(
                month_queryset.values("service_name")
                .annotate(total=Count("id"))
                .order_by("-total", "service_name")[:5]
            ),
            "lengths": list(
                month_queryset.exclude(hair_length="")
                .values("hair_length")
                .annotate(total=Count("id"))
                .order_by("-total", "hair_length")[:5]
            ),
            "goals": list(
                month_queryset.exclude(goal="")
                .values("goal")
                .annotate(total=Count("id"))
                .order_by("-total", "goal")[:5]
            ),
        }

        context = {
            **(extra_context or {}),
            "trend_month": now.strftime("%B/%Y"),
            "trend_dashboard": trends,
        }

        return super().changelist_view(request, context)
