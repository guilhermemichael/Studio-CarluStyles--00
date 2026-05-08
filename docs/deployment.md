# Deploy

Ambiente esperado:

- Docker e Docker Compose.
- Domínio apontando para o servidor.
- Certificados TLS configurados no Nginx ou em camada externa.
- `.env` com segredos reais.

Fluxo:

```bash
cp .env.example .env
docker compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d
```

Checklist mínimo:

- `DJANGO_DEBUG=false`
- `POSTGRES_PASSWORD` forte
- `DJANGO_SECRET_KEY` forte
- WhatsApp oficial configurado
- Google Maps configurado
- Fotos autorizadas revisadas
- HTTPS ativo
- Backup ativo
