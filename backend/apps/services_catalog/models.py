from django.db import models

from apps.core.models import TimeStampedModel
from apps.pricing.enums import PriceMode


class ServiceCategory(models.TextChoices):
    QUICK = "quick", "Serviços rápidos"
    FINISHING = "finishing", "Finalização"
    TREATMENT = "treatment", "Tratamentos"
    CHEMICAL = "chemical", "Químicas"
    TRANSFORMATION = "transformation", "Transformações"


class Service(TimeStampedModel):
    PRICE_MODE_CHOICES = [(mode.value, mode.value) for mode in PriceMode]

    name = models.CharField(max_length=140)
    slug = models.SlugField(max_length=160, unique=True)
    category = models.CharField(max_length=40, choices=ServiceCategory.choices)
    short_description = models.CharField(max_length=240, blank=True)
    long_description = models.TextField(blank=True)
    price_mode = models.CharField(max_length=20, choices=PRICE_MODE_CHOICES)
    requires_evaluation = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        indexes = [
            models.Index(fields=["is_active", "category", "sort_order"]),
        ]
        ordering = ["category", "sort_order", "name"]
        verbose_name = "serviço"
        verbose_name_plural = "serviços"

    def __str__(self) -> str:
        return self.name
