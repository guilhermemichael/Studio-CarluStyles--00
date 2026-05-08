from .models import ClientLead
from .validators import validate_whatsapp


def create_lead(payload: dict, ip_address: str | None, user_agent: str) -> ClientLead:
    validate_whatsapp(payload["whatsapp"])

    if not payload.get("consent_privacy_policy"):
        raise ValueError("Consentimento da política de privacidade é obrigatório.")

    return ClientLead.objects.create(
        name=payload["name"],
        whatsapp=payload["whatsapp"],
        desired_service_id=payload.get("desired_service_id"),
        hair_length=payload.get("hair_length", ""),
        chemical_history=payload.get("chemical_history", ""),
        message=payload.get("message", ""),
        consent_privacy_policy=True,
        ip_address=ip_address,
        user_agent=user_agent[:1000],
    )
