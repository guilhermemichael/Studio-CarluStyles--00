from fastapi import APIRouter, HTTPException, Request

from api.schemas.leads import LeadCreateSchema
from apps.leads.services import create_lead

router = APIRouter(prefix="/leads", tags=["leads"])


@router.post("/")
async def create_client_lead(payload: LeadCreateSchema, request: Request) -> dict:
    try:
        lead = create_lead(
            payload.model_dump(),
            ip_address=request.client.host if request.client else None,
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
