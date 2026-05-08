import os

from django.core.asgi import get_asgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.prod")

django_application = get_asgi_application()

from api.main import create_api_app  # noqa: E402

application = create_api_app()
application.mount("/", django_application)
