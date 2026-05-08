from django.db import models

from apps.core.models import TimeStampedModel


class BrandProfile(TimeStampedModel):
    name = models.CharField(max_length=120)
    slogan = models.CharField(max_length=180)
    description = models.TextField()
    instagram_url = models.URLField(blank=True)
    google_maps_url = models.URLField(blank=True)
    whatsapp_number = models.CharField(max_length=32, blank=True)
    primary_logo = models.ImageField(upload_to="brand/logo/", blank=True, null=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "perfil de marca"
        verbose_name_plural = "perfis de marca"
        ordering = ["-is_active", "name"]

    def __str__(self) -> str:
        return self.name
