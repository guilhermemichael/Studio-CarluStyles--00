from django.db import models

from apps.core.models import TimeStampedModel
from apps.services_catalog.models import Service


class LeadStatus(models.TextChoices):
    NEW = "new", "Novo"
    CONTACTED = "contacted", "Contato feito"
    SCHEDULED = "scheduled", "Agendado"
    CANCELLED = "cancelled", "Cancelado"
    DONE = "done", "Atendido"


class ClientLead(TimeStampedModel):
    name = models.CharField(max_length=120)
    whatsapp = models.CharField(max_length=32)
    desired_service = models.ForeignKey(
        Service,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )
    hair_length = models.CharField(max_length=20, blank=True)
    chemical_history = models.TextField(blank=True)
    message = models.TextField(blank=True)
    status = models.CharField(
        max_length=20,
        choices=LeadStatus.choices,
        default=LeadStatus.NEW,
    )
    consent_privacy_policy = models.BooleanField(default=False)
    ip_address = models.GenericIPAddressField(blank=True, null=True)
    user_agent = models.TextField(blank=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "lead"
        verbose_name_plural = "leads"

    def __str__(self) -> str:
        return f"{self.name} - {self.whatsapp}"
