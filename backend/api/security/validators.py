import re

TAG_RE = re.compile(r"<[^>]*>")


def normalize_text(value: str, max_length: int) -> str:
    cleaned = TAG_RE.sub("", value or "")
    cleaned = " ".join(cleaned.strip().split())
    return cleaned[:max_length]
