from fastapi import APIRouter, HTTPException, Request

from api.schemas.leads import LeadCreateSchema
from api.security.rate_limit import InMemoryRateLimiter
from apps.leads.services import create_lead

router = APIRouter(prefix="/leads", tags=["leads"])
lead_limiter = InMemoryRateLimiter(max_hits=5, window_seconds=60 * 60)


def _client_ip(request: Request) -> str:
    forwarded_for = request.headers.get("x-forwarded-for", "")

    if forwarded_for:
        return forwarded_for.split(",")[0].strip()

    return request.client.host if request.client else "unknown"


@router.post("/")
async def create_client_lead(payload: LeadCreateSchema, request: Request) -> dict:
    if payload.website:
        return {"status": "ignored", "message": "Lead recebido com segurança."}

    if not lead_limiter.allow(_client_ip(request)):
        raise HTTPException(status_code=429, detail="Muitas tentativas. Tente novamente mais tarde.")

    try:
        lead = create_lead(
            payload.model_dump(),
            ip_address=_client_ip(request),
            user_agent=request.headers.get("user-agent", ""),
        )
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    except Exception as exc:
        raise HTTPException(status_code=503, detail="Lead temporariamente indisponível.") from exc

    return {
        "id": lead.id,
        "status": lead.status,
        "message": "Lead recebido com segurança.",
    }
