from pydantic import BaseModel


class HairLengthSchema(BaseModel):
    id: str
    label: str
    description: str
