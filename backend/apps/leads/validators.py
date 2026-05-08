import re

PHONE_RE = re.compile(r"^\+?[0-9()\-\s]{10,32}$")


def validate_whatsapp(value: str) -> None:
    if not PHONE_RE.match(value):
        raise ValueError("WhatsApp inválido.")
