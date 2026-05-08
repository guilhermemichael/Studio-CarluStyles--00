import os

from .models import BrandProfile

OFFICIAL_WHATSAPP_URL = (
    "https://wa.me/5583981580195?text=Ol%25C3%25A1%252C+gostaria+de+agendar+"
    "um+hor%25C3%25A1rio%2521+"
)
OFFICIAL_INSTAGRAM_URL = (
    "https://www.instagram.com/studio_carlustyles?igsh=bjZyOWFqdW80cm9j"
)
OFFICIAL_GOOGLE_MAPS_URL = "https://maps.app.goo.gl/TzdoJmZgWnTHzkNh9?g_st=ic"


def get_default_brand_payload() -> dict:
    return {
        "name": "Studio Carlu Styles",
        "slogan": "Beleza técnica com sofisticação e cuidado premium.",
        "description": (
            "O Studio Carlu Styles é um espaço de beleza especializado em cuidados "
            "capilares, tratamentos, químicas, finalizações e transformações, unindo "
            "técnica, sofisticação e cuidado personalizado em cada atendimento."
        ),
        "instagramUrl": os.environ.get("INSTAGRAM_URL", OFFICIAL_INSTAGRAM_URL),
        "googleMapsUrl": os.environ.get("GOOGLE_MAPS_URL", OFFICIAL_GOOGLE_MAPS_URL),
        "whatsappUrl": os.environ.get("WHATSAPP_URL", OFFICIAL_WHATSAPP_URL),
        "whatsappNumber": "5583981580195",
    }


def serialize_brand(profile: BrandProfile | None) -> dict:
    if profile is None:
        return get_default_brand_payload()

    return {
        "name": profile.name,
        "slogan": profile.slogan,
        "description": profile.description,
        "instagramUrl": profile.instagram_url or os.environ.get("INSTAGRAM_URL", OFFICIAL_INSTAGRAM_URL),
        "googleMapsUrl": profile.google_maps_url
        or os.environ.get("GOOGLE_MAPS_URL", OFFICIAL_GOOGLE_MAPS_URL),
        "whatsappUrl": os.environ.get("WHATSAPP_URL", OFFICIAL_WHATSAPP_URL),
        "whatsappNumber": profile.whatsapp_number,
        "logoUrl": profile.primary_logo.url if profile.primary_logo else "",
    }
