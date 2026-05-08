from fastapi import APIRouter

from apps.brand.selectors import BrandSelector
from apps.brand.services import serialize_brand

router = APIRouter(prefix="/brand", tags=["brand"])


@router.get("/")
async def get_brand() -> dict:
    try:
        profile = BrandSelector().get_active_profile()
        return serialize_brand(profile)
    except Exception:
        return serialize_brand(None)
