from io import BytesIO
from pathlib import Path
from uuid import uuid4

import magic
from PIL import Image, ImageOps, UnidentifiedImageError

ALLOWED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}
ALLOWED_MIME_TYPES = {"image/jpeg", "image/png", "image/webp"}
MAX_UPLOAD_BYTES = 8 * 1024 * 1024
MAX_IMAGE_PIXELS = 24_000_000

Image.MAX_IMAGE_PIXELS = MAX_IMAGE_PIXELS


class ImageValidationError(Exception):
    pass


class SecureImageProcessor:
    def validate_size(self, file_size: int) -> None:
        if file_size > MAX_UPLOAD_BYTES:
            raise ImageValidationError("Arquivo excede o tamanho máximo permitido.")

    def validate_extension(self, filename: str) -> None:
        extension = Path(filename).suffix.lower()

        if extension not in ALLOWED_EXTENSIONS:
            raise ImageValidationError("Extensão de arquivo não permitida.")

    def validate_mime(self, raw_bytes: bytes) -> None:
        detected_mime = magic.from_buffer(raw_bytes, mime=True)

        if detected_mime not in ALLOWED_MIME_TYPES:
            raise ImageValidationError("Tipo real do arquivo não permitido.")

    def generate_filename(self) -> str:
        return f"{uuid4().hex}.webp"

    def process(self, raw_bytes: bytes, output_path: Path) -> Path:
        try:
            with Image.open(BytesIO(raw_bytes)) as image:
                image = ImageOps.exif_transpose(image)
                image = image.convert("RGB")

                if image.width > 1920:
                    ratio = 1920 / image.width
                    height = int(image.height * ratio)
                    image = image.resize((1920, height), Image.Resampling.LANCZOS)

                image.save(
                    output_path,
                    format="WEBP",
                    quality=82,
                    method=6,
                    optimize=True,
                )

                return output_path

        except UnidentifiedImageError as exc:
            raise ImageValidationError("Arquivo enviado não é uma imagem válida.") from exc
