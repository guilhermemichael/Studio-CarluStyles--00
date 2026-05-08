from .models import GalleryImage, ProductLine


class GallerySelector:
    def list_public_images(self):
        return GalleryImage.objects.filter(is_public=True).order_by("sort_order", "-created_at")

    def list_featured_images(self):
        return self.list_public_images().filter(is_featured=True)

    def list_active_product_lines(self):
        return ProductLine.objects.filter(is_active=True).order_by("brand", "name")
