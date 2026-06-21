from api.security.validators import normalize_text

from .models import ClientLead
from .validators import validate_whatsapp


def create_lead(payload: dict, ip_address: str | None, user_agent: str) -> ClientLead:
    name = normalize_text(payload["name"], 120)
    whatsapp = normalize_text(payload["whatsapp"], 32)
    hair_length = normalize_text(payload.get("hair_length", ""), 20)
    chemical_history = normalize_text(payload.get("chemical_history", ""), 2000)
    message = normalize_text(payload.get("message", ""), 2000)

    validate_whatsapp(whatsapp)

    if not payload.get("consent_privacy_policy"):
        raise ValueError("Consentimento da política de privacidade é obrigatório.")

    return ClientLead.objects.create(
        name=name,
        whatsapp=whatsapp,
        desired_service_id=payload.get("desired_service_id"),
        hair_length=hair_length,
        chemical_history=chemical_history,
        message=message,
        consent_privacy_policy=True,
        ip_address=ip_address,
        user_agent=user_agent[:1000],
    )
