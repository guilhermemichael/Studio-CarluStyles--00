# Hospedagem: Vercel + Render

Este é o caminho recomendado para publicar rápido:

```text
Frontend React/Vite -> Vercel
Backend Django + FastAPI -> Render
PostgreSQL -> Render
Redis/Key Value -> Render
```

## 1. Frontend na Vercel

No painel da Vercel:

```text
Add New Project
Import Git Repository
guilhermemichael/Studio-CarluStyles
```

Configuração:

```text
Framework Preset: Vite
Root Directory: frontend
Install Command: npm install
Build Command: npm run build
Output Directory: dist
```

Variáveis:

```env
VITE_API_BASE_URL=https://api-studio-carlu.onrender.com/api
VITE_SITE_URL=https://studio-carlu-styles.vercel.app
VITE_WHATSAPP_URL=https://wa.me/5583981580195?text=Ol%25C3%25A1%252C+gostaria+de+agendar+um+hor%25C3%25A1rio%2521+
VITE_INSTAGRAM_URL=https://www.instagram.com/studio_carlustyles?igsh=bjZyOWFqdW80cm9j
VITE_GOOGLE_MAPS_URL=https://maps.app.goo.gl/TzdoJmZgWnTHzkNh9?g_st=ic
```

Depois de configurar domínio próprio:

```env
VITE_API_BASE_URL=https://api.studiocarlustyles.com.br/api
VITE_SITE_URL=https://studiocarlustyles.com.br
```

O arquivo `frontend/vercel.json` já inclui fallback de SPA para React Router.

## 2. Backend na Render

Use o `render.yaml` na raiz do repositório para criar:

- Web Service Docker: `studio-carlu-backend`
- PostgreSQL: `studio-carlu-postgres`
- Key Value Redis-compatible: `studio-carlu-redis`

No painel da Render:

```text
New
Blueprint
Connect GitHub
Repository: guilhermemichael/Studio-CarluStyles
Blueprint file: render.yaml
```

Durante a criação, preencha:

```env
WHATSAPP_URL=https://wa.me/5583981580195?text=Ol%25C3%25A1%252C+gostaria+de+agendar+um+hor%25C3%25A1rio%2521+
GOOGLE_MAPS_URL=https://maps.app.goo.gl/TzdoJmZgWnTHzkNh9?g_st=ic
DJANGO_ADMIN_PATH=acesso-operacional-carlu-2026/
DJANGO_ADMIN_ACCESS_KEY=troque-por-um-segredo-real
DJANGO_ADMIN_ALLOWED_IPS=
CORS_ALLOW_CREDENTIALS=false
```

O backend usa um ASGI único:

```text
/api/* -> FastAPI
/<DJANGO_ADMIN_PATH>* -> Django Admin
```

Healthcheck:

```text
https://api-studio-carlu.onrender.com/api/health
```

Admin:

```text
https://api-studio-carlu.onrender.com/acesso-operacional-carlu-2026/
```

Se `DJANGO_ADMIN_ACCESS_KEY` estiver definida, o acesso precisa enviar o header `X-Admin-Access-Key` com o valor configurado. Para uso humano direto pelo navegador, prefira restringir por `DJANGO_ADMIN_ALLOWED_IPS`.

## 3. Criar admin na Render

Abra o Shell do serviço `studio-carlu-backend` e rode:

```bash
python manage.py createsuperuser
```

## 4. Domínio ideal

```text
www.studiocarlustyles.com.br -> Vercel
studiocarlustyles.com.br     -> Vercel
api.studiocarlustyles.com.br -> Render backend
```

Atualize na Render:

```env
DJANGO_ALLOWED_HOSTS=api-studio-carlu.onrender.com,api.studiocarlustyles.com.br
DJANGO_CSRF_TRUSTED_ORIGINS=https://api-studio-carlu.onrender.com,https://api.studiocarlustyles.com.br
CORS_ALLOWED_ORIGINS=https://studio-carlu-styles.vercel.app,https://studiocarlustyles.com.br,https://www.studiocarlustyles.com.br
DJANGO_ADMIN_PATH=acesso-operacional-carlu-2026/
DJANGO_ADMIN_ACCESS_KEY=troque-por-um-segredo-real
CORS_ALLOW_CREDENTIALS=false
```

Atualize na Vercel:

```env
VITE_API_BASE_URL=https://api.studiocarlustyles.com.br/api
VITE_SITE_URL=https://studiocarlustyles.com.br
```
