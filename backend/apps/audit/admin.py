from django.contrib import admin

from .models import AuditEvent


@admin.register(AuditEvent)
class AuditEventAdmin(admin.ModelAdmin):
    list_display = ("method", "path", "status_code", "ip_address", "created_at")
    list_filter = ("method", "status_code")
    search_fields = ("path", "ip_address", "user_agent")
    readonly_fields = ("path", "method", "ip_address", "user_agent", "status_code", "created_at")
