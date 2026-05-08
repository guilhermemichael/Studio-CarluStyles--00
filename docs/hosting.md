# Hospedagem

## Caminho recomendado

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
- `VITE_WHATSAPP_NUMBER`
- `VITE_GOOGLE_MAPS_URL`

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
https://studiocarlustyles.com.br/admin/
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
- WhatsApp oficial configurado.
- Usuário admin criado.
- Backup PostgreSQL agendado.
- Fotos de clientes com autorização.
