from django.contrib import admin
from django.conf import settings
from django.http import JsonResponse
from django.urls import path


def django_health(_request):
    return JsonResponse({"status": "ok", "service": "studio-carlu-django"})


urlpatterns = [
    path(settings.ADMIN_PATH, admin.site.urls),
    path("django-health/", django_health),
]
