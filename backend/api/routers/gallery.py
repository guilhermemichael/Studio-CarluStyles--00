from fastapi import APIRouter

from apps.gallery.selectors import GallerySelector

router = APIRouter(prefix="/gallery", tags=["gallery"])


@router.get("/")
async def list_gallery_images() -> dict:
    try:
        images = GallerySelector().list_public_images()
        return {
            "items": [
                {
                    "id": image.id,
                    "title": image.title,
                    "category": image.category,
                    "imageUrl": image.image.url,
                    "altText": image.alt_text,
                    "description": image.description,
                    "isFeatured": image.is_featured,
                }
                for image in images
            ],
            "source": "database",
        }
    except Exception:
        return {"items": [], "source": "database-unavailable"}


@router.get("/product-lines")
async def list_product_lines() -> dict:
    try:
        lines = GallerySelector().list_active_product_lines()
        return {
            "items": [
                {
                    "id": line.id,
                    "name": line.name,
                    "brand": line.brand,
                    "category": line.category,
                    "indication": line.indication,
                    "expectedResult": line.expected_result,
                    "premiumScore": line.premium_score,
                }
                for line in lines
            ],
            "source": "database",
        }
    except Exception:
        return {"items": [], "source": "database-unavailable"}
