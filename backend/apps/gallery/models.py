from django.db import models


class GalleryCategory(models.TextChoices):
    BLONDE = "blonde", "Loiros"
    BRUNETTE = "brunette", "Morenos"
    ILLUMINATED_BRUNETTE = "illuminated_brunette", "Morenos iluminados"
    RED_HAIR = "red_hair", "Ruivos"
    TREATMENT = "treatment", "Tratamentos"
    FINISHING = "finishing", "Finalizações"
    BEFORE_AFTER = "before_after", "Antes e depois"
    KIDS = "kids", "Kids"
    PRODUCT = "product", "Produtos profissionais"


class GalleryImage(models.Model):
    title = models.CharField(max_length=140)
    category = models.CharField(max_length=40, choices=GalleryCategory.choices)
    image = models.ImageField(upload_to="gallery/original/")
    alt_text = models.CharField(max_length=180)
    description = models.TextField(blank=True)
    is_featured = models.BooleanField(default=False)
    is_public = models.BooleanField(default=True)
    client_authorized = models.BooleanField(default=False)
    sort_order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["sort_order", "-created_at"]
        verbose_name = "imagem da galeria"
        verbose_name_plural = "imagens da galeria"

    def __str__(self) -> str:
        return self.title


class ProductLine(models.Model):
    name = models.CharField(max_length=120)
    brand = models.CharField(max_length=120)
    category = models.CharField(max_length=80)
    indication = models.CharField(max_length=180, blank=True)
    expected_result = models.CharField(max_length=180, blank=True)
    premium_score = models.PositiveIntegerField(default=100)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["brand", "name"]
        verbose_name = "linha de produto"
        verbose_name_plural = "linhas de produto"

    def __str__(self) -> str:
        return f"{self.brand} {self.name}"
