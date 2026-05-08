from pydantic import BaseModel


class GalleryImageSchema(BaseModel):
    id: int
    title: str
    category: str
    imageUrl: str
    altText: str
    description: str
    isFeatured: bool
