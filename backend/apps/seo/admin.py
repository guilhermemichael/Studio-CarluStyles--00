from django.contrib import admin

from .models import SeoPage


@admin.register(SeoPage)
class SeoPageAdmin(admin.ModelAdmin):
    list_display = ("path", "title", "is_indexable", "updated_at")
    list_filter = ("is_indexable",)
    search_fields = ("path", "title", "description")
