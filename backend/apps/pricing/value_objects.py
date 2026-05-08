from dataclasses import dataclass
from decimal import Decimal

from .enums import HairLength


@dataclass(frozen=True)
class LengthPrice:
    hair_length: HairLength
    price: Decimal
