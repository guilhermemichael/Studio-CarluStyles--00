from django.contrib import admin

from .models import ServicePrice


@admin.register(ServicePrice)
class ServicePriceAdmin(admin.ModelAdmin):
    list_display = ("service", "hair_length", "price", "min_price", "max_price", "label")
    list_filter = ("hair_length",)
    search_fields = ("service__name", "label")
