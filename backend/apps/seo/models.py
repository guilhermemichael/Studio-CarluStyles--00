from django.db import models


class SeoPage(models.Model):
    path = models.CharField(max_length=180, unique=True)
    title = models.CharField(max_length=180)
    description = models.CharField(max_length=260)
    og_image = models.ImageField(upload_to="seo/og/", blank=True, null=True)
    is_indexable = models.BooleanField(default=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["path"]
        verbose_name = "página SEO"
        verbose_name_plural = "páginas SEO"

    def __str__(self) -> str:
        return self.path
