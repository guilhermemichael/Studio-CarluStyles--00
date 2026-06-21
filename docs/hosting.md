# Hospedagem

## Caminho recomendado para publicar rápido

Use Vercel + Render. O passo a passo está em `docs/hosting-vercel-render.md`.

```text
Frontend React/Vite -> Vercel
Backend Django + FastAPI -> Render
PostgreSQL -> Render
Redis/Key Value -> Render
```

## Caminho VPS

Para esta stack, use uma VPS Ubuntu com Docker Compose. A aplicação tem frontend,
Django, FastAPI, PostgreSQL, Redis, Nginx interno e Caddy externo para HTTPS
automático.

## 1. Apontar o domínio

No provedor de DNS do domínio, configure:

```text
A     studiocarlustyles.com.br      IP_DO_SERVIDOR
A     www.studiocarlustyles.com.br  IP_DO_SERVIDOR
```

Se o servidor tiver IPv6, configure também `AAAA`.

## 2. Preparar o servidor

Entre por SSH:

```bash
ssh root@IP_DO_SERVIDOR
```

Instale Docker:

```bash
curl -fsSL https://raw.githubusercontent.com/guilhermemichael/Studio-CarluStyles/main/infra/scripts/install_docker_ubuntu.sh -o install_docker_ubuntu.sh
sh install_docker_ubuntu.sh
```

Saia do SSH e entre novamente para o grupo `docker` ser aplicado.

## 3. Clonar o projeto

```bash
git clone https://github.com/guilhermemichael/Studio-CarluStyles.git
cd Studio-CarluStyles
```

## 4. Criar o ambiente

```bash
cp .env.production.example .env
nano .env
```

Gere uma chave Django:

```bash
openssl rand -base64 48
```

Preencha no `.env`:

- `ACME_EMAIL`
- `DJANGO_SECRET_KEY`
- `POSTGRES_PASSWORD`
- `VITE_WHATSAPP_URL`
- `VITE_GOOGLE_MAPS_URL`
- `DJANGO_ADMIN_PATH`
- `DJANGO_ADMIN_ACCESS_KEY`
- `DJANGO_ADMIN_ALLOWED_IPS`

## 5. Subir a aplicação

```bash
sh infra/scripts/deploy.sh
```

## 6. Criar usuário admin

```bash
sh infra/scripts/create_admin.sh
```

Admin:

```text
https://studiocarlustyles.com.br/acesso-operacional-carlu-2026/
```

Healthcheck:

```text
https://studiocarlustyles.com.br/api/health
```

## 7. Atualizar depois

No servidor:

```bash
cd Studio-CarluStyles
sh infra/scripts/deploy.sh
```

## Checklist de produção

- Domínio apontando para o IP correto.
- Portas 80 e 443 liberadas.
- `.env` preenchido com segredos reais.
- `DJANGO_DEBUG=false`.
- Admin fora de `/admin/`, com caminho privado e proteção por chave ou IP.
- WhatsApp oficial configurado.
- Usuário admin criado.
- Backup PostgreSQL agendado.
- Fotos de clientes com autorização.
