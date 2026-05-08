def normalize_text(value: str, max_length: int) -> str:
    return value.strip()[:max_length]
