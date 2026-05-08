from django.contrib import admin

from .models import BrandProfile


@admin.register(BrandProfile)
class BrandProfileAdmin(admin.ModelAdmin):
    list_display = ("name", "slogan", "is_active", "updated_at")
    list_filter = ("is_active",)
    search_fields = ("name", "slogan", "description")
