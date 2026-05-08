from .models import BrandProfile


class BrandSelector:
    def get_active_profile(self) -> BrandProfile | None:
        return BrandProfile.objects.filter(is_active=True).order_by("-updated_at").first()
