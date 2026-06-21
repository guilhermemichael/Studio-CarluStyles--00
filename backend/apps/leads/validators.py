import re

PHONE_RE = re.compile(r"^\+?[0-9()\-\s]{10,32}$")
BRAZIL_DDD_RE = re.compile(r"^(?:55)?[1-9][0-9]9?[0-9]{8}$")


def validate_whatsapp(value: str) -> None:
    if not PHONE_RE.match(value):
        raise ValueError("WhatsApp inválido.")

    digits = re.sub(r"\D", "", value)

    if not BRAZIL_DDD_RE.match(digits):
        raise ValueError("Informe um WhatsApp brasileiro válido com DDD.")
