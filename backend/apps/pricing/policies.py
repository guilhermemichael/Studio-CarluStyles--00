from .enums import PriceMode


def requires_length(price_mode: str) -> bool:
    return price_mode == PriceMode.BY_LENGTH.value


def requires_professional_evaluation(price_mode: str, explicit_flag: bool) -> bool:
    return explicit_flag or price_mode == PriceMode.EVALUATION.value
