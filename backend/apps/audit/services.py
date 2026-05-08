from .models import AuditEvent


def record_audit_event(request, status_code: int) -> None:
    forwarded = request.META.get("HTTP_X_FORWARDED_FOR", "")
    ip_address = forwarded.split(",")[0].strip() or request.META.get("REMOTE_ADDR")

    AuditEvent.objects.create(
        path=request.path[:240],
        method=request.method[:12],
        ip_address=ip_address,
        user_agent=request.META.get("HTTP_USER_AGENT", "")[:1000],
        status_code=status_code,
    )
