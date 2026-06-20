from django.db import models

from apps.pricing.enums import HairLength
from apps.services_catalog.models import Service


class ServicePrice(models.Model):
    HAIR_LENGTH_CHOICES = [(length.value, length.value) for length in HairLength]

    service = models.ForeignKey(
        Service,
        on_delete=models.CASCADE,
        related_name="prices",
    )
    hair_length = models.CharField(
        max_length=20,
        choices=HAIR_LENGTH_CHOICES,
        blank=True,
        null=True,
    )
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    min_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    max_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    label = models.CharField(max_length=80, blank=True)

    class Meta:
        indexes = [
            models.Index(fields=["service", "hair_length"]),
        ]
        verbose_name = "preço de serviço"
        verbose_name_plural = "preços de serviço"

    def __str__(self) -> str:
        label = self.hair_length or self.label or "preço"
        return f"{self.service} - {label}"


class PriceSimulation(models.Model):
    service_slug = models.SlugField(max_length=160)
    service_name = models.CharField(max_length=140)
    hair_length = models.CharField(max_length=20, blank=True)
    volume = models.CharField(max_length=40, blank=True)
    goal = models.CharField(max_length=80, blank=True)
    estimated_price = models.CharField(max_length=80, blank=True)
    source = models.CharField(max_length=40, default="price_experience")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        indexes = [
            models.Index(fields=["created_at", "service_slug"]),
            models.Index(fields=["hair_length", "created_at"]),
        ]
        ordering = ["-created_at"]
        verbose_name = "simulação de preço"
        verbose_name_plural = "simulações de preço"

    def __str__(self) -> str:
        return f"{self.service_name} - {self.estimated_price or 'sem estimativa'}"
