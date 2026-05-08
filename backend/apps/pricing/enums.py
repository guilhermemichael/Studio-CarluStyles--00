from enum import StrEnum


class PriceMode(StrEnum):
    FIXED = "fixed"
    BY_LENGTH = "by_length"
    EVALUATION = "evaluation"
    RANGE = "range"


class HairLength(StrEnum):
    SHORT = "short"
    MEDIUM = "medium"
    LONG = "long"
    EXTRA_LONG = "extra_long"


HAIR_LENGTH_LABELS = {
    HairLength.SHORT: "Curto",
    HairLength.MEDIUM: "Médio",
    HairLength.LONG: "Longo",
    HairLength.EXTRA_LONG: "Extra longo",
}

HAIR_LENGTH_DESCRIPTIONS = {
    HairLength.SHORT: "Até a linha do queixo.",
    HairLength.MEDIUM: "Até a linha dos ombros.",
    HairLength.LONG: "Abaixo dos ombros.",
    HairLength.EXTRA_LONG: "Abaixo do busto ou próximo à cintura.",
}

HAIR_LENGTH_ORDER = {
    HairLength.SHORT.value: 1,
    HairLength.MEDIUM.value: 2,
    HairLength.LONG.value: 3,
    HairLength.EXTRA_LONG.value: 4,
}
