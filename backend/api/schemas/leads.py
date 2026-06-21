from pydantic import BaseModel, Field


class LeadCreateSchema(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    whatsapp: str = Field(min_length=10, max_length=32)
    desired_service_id: int | None = None
    hair_length: str = Field(default="", max_length=20)
    chemical_history: str = Field(default="", max_length=2000)
    message: str = Field(default="", max_length=2000)
    consent_privacy_policy: bool
    website: str = Field(default="", max_length=120)
