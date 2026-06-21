from django.conf import settings
from django.http import HttpResponseNotFound

from .services import record_audit_event


def _admin_prefix() -> str:
    return "/" + settings.ADMIN_PATH.strip("/")


def _is_admin_path(path: str) -> bool:
    admin_prefix = _admin_prefix()
    return path == admin_prefix or path.startswith(f"{admin_prefix}/")


def _client_ip(request) -> str:
    forwarded_for = request.META.get("HTTP_X_FORWARDED_FOR", "")

    if forwarded_for:
        return forwarded_for.split(",")[0].strip()

    return request.META.get("REMOTE_ADDR", "")


class AdminAccessGuardMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if _is_admin_path(request.path):
            allowed_ips = set(getattr(settings, "ADMIN_ALLOWED_IPS", []))
            access_key = getattr(settings, "ADMIN_ACCESS_KEY", "")
            incoming_key = request.headers.get("X-Admin-Access-Key") or request.headers.get(
                "X-Admin-Key", ""
            )
            client_ip = _client_ip(request)

            ip_allowed = not allowed_ips or client_ip in allowed_ips
            key_allowed = not access_key or incoming_key == access_key

            if not ip_allowed or not key_allowed:
                return HttpResponseNotFound()

        return self.get_response(request)


class AuditRequestMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)

        if _is_admin_path(request.path):
            record_audit_event(request, response.status_code)

        return response
