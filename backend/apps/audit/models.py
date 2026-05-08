from django.db import models


class AuditEvent(models.Model):
    path = models.CharField(max_length=240)
    method = models.CharField(max_length=12)
    ip_address = models.GenericIPAddressField(blank=True, null=True)
    user_agent = models.TextField(blank=True)
    status_code = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "evento de auditoria"
        verbose_name_plural = "eventos de auditoria"

    def __str__(self) -> str:
        return f"{self.method} {self.path}"
