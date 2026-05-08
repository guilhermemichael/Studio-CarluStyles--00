from django.contrib import admin

from .models import ClientLead


@admin.register(ClientLead)
class ClientLeadAdmin(admin.ModelAdmin):
    list_display = ("name", "whatsapp", "desired_service", "hair_length", "status", "created_at")
    list_filter = ("status", "hair_length", "consent_privacy_policy")
    search_fields = ("name", "whatsapp", "message", "chemical_history")
    readonly_fields = ("ip_address", "user_agent", "created_at", "updated_at")
