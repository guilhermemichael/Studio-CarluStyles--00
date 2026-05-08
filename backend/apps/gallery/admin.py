from django.contrib import admin

from .models import GalleryImage, ProductLine


@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "is_featured", "is_public", "client_authorized")
    list_filter = ("category", "is_featured", "is_public", "client_authorized")
    search_fields = ("title", "alt_text", "description")


@admin.register(ProductLine)
class ProductLineAdmin(admin.ModelAdmin):
    list_display = ("brand", "name", "category", "premium_score", "is_active")
    list_filter = ("brand", "category", "is_active")
    search_fields = ("name", "brand", "indication", "expected_result")
