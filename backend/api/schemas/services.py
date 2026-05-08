from pydantic import BaseModel


class PriceItemSchema(BaseModel):
    length: str
    label: str
    value: str


class ServicePriceSchema(BaseModel):
    mode: str
    display: str
    items: list[PriceItemSchema]


class ServiceSchema(BaseModel):
    id: int
    name: str
    slug: str
    category: str
    shortDescription: str
    requiresEvaluation: bool
    price: ServicePriceSchema
