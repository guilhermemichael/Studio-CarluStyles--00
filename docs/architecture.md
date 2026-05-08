# Arquitetura

O Studio Carlu Styles nasce como monorepo com três frentes:

- `frontend`: React + TypeScript + Vite + Tailwind para a experiência pública.
- `backend`: Django para admin/modelos e FastAPI para endpoints públicos rápidos.
- `infra`: Caddy, Nginx, PostgreSQL, Redis e scripts operacionais.

Fluxo macro:

```text
Cliente -> Caddy HTTPS -> Nginx -> Frontend
                               -> FastAPI
                               -> Django Admin
FastAPI/Django -> PostgreSQL
FastAPI/Django -> Redis
```

O frontend já pode operar com dados locais para experiência imediata. O backend oferece a trilha para transformar esses dados em conteúdo administrável.
