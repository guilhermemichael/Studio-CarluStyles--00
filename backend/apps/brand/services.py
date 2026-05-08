from .models import BrandProfile


def get_default_brand_payload() -> dict:
    return {
        "name": "Studio Carlu Styles",
        "slogan": "Beleza técnica com sofisticação e cuidado premium.",
        "description": (
            "Atelier capilar premium com diagnóstico, tratamentos profissionais "
            "e acabamento estético refinado."
        ),
        "instagramUrl": "https://www.instagram.com/studio_carlustyles",
        "googleMapsUrl": "",
        "whatsappNumber": "",
    }


def serialize_brand(profile: BrandProfile | None) -> dict:
    if profile is None:
        return get_default_brand_payload()

    return {
        "name": profile.name,
        "slogan": profile.slogan,
        "description": profile.description,
        "instagramUrl": profile.instagram_url,
        "googleMapsUrl": profile.google_maps_url,
        "whatsappNumber": profile.whatsapp_number,
        "logoUrl": profile.primary_logo.url if profile.primary_logo else "",
    }
