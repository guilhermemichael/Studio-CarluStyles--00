from django.contrib import admin

from apps.pricing.models import ServicePrice

from .models import Service


class ServicePriceInline(admin.TabularInline):
    model = ServicePrice
    extra = 0


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "category",
        "price_mode",
        "requires_evaluation",
        "is_featured",
        "is_active",
        "sort_order",
    )
    list_filter = ("category", "price_mode", "requires_evaluation", "is_featured", "is_active")
    search_fields = ("name", "slug", "short_description")
    prepopulated_fields = {"slug": ("name",)}
    inlines = [ServicePriceInline]
