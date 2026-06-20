from pydantic import BaseModel, Field


class HairLengthSchema(BaseModel):
    id: str
    label: str
    description: str


class PriceSimulationCreateSchema(BaseModel):
    service_slug: str = Field(min_length=1, max_length=160)
    service_name: str = Field(min_length=1, max_length=140)
    hair_length: str = Field(default="", max_length=20)
    volume: str = Field(default="", max_length=40)
    goal: str = Field(default="", max_length=80)
    estimated_price: str = Field(default="", max_length=80)
    source: str = Field(default="price_experience", max_length=40)
