import os

import django
from django.apps import apps
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.prod")

if not apps.ready:
    django.setup()

from api.routers import brand, gallery, health, leads, pricing, services  # noqa: E402


def _cors_origins() -> list[str]:
    raw_origins = os.environ.get("CORS_ALLOWED_ORIGINS", "")

    if raw_origins:
        return [origin.strip() for origin in raw_origins.split(",") if origin.strip()]

    return [
        "http://localhost:5173",
        "https://studiocarlustyles.com.br",
        "https://www.studiocarlustyles.com.br",
    ]


def create_api_app() -> FastAPI:
    app = FastAPI(
        title="Studio Carlu Styles API",
        version="1.0.0",
        docs_url="/api/docs",
        redoc_url="/api/redoc",
        openapi_url="/api/openapi.json",
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=_cors_origins(),
        allow_credentials=True,
        allow_methods=["GET", "POST"],
        allow_headers=["Content-Type", "Authorization"],
    )

    app.include_router(health.router, prefix="/api")
    app.include_router(brand.router, prefix="/api")
    app.include_router(services.router, prefix="/api")
    app.include_router(pricing.router, prefix="/api")
    app.include_router(gallery.router, prefix="/api")
    app.include_router(leads.router, prefix="/api")

    return app


app = create_api_app()
