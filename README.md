# Studio Carlu Styles Ecosystem

Aplicação web premium para apresentação institucional, catálogo de serviços, tabela de preços, galeria segmentada, captação de leads e administração interna da Studio Carlu Styles.

## Stack

- Python 3.12+
- Django
- FastAPI
- PostgreSQL
- Redis
- React
- TypeScript
- Vite
- Tailwind CSS
- Nginx
- Docker Compose

## Identidade

Nome: Studio Carlu Styles  
Slogan: Beleza técnica com sofisticação e cuidado premium.

## Funcionalidades

- Home editorial premium com narrativa de autoridade, desejo, confiança e conversão
- Posicionamento local para cabeleireira em São Francisco, PB
- Catálogo de serviços e tratamentos
- Precificação fixa, por comprimento, por faixa e sob avaliação
- Calculadora concierge com manequim digital, volume, objetivo e envio intencional da simulação pelo WhatsApp
- Quiz de cronograma capilar com captação de lead, consentimento LGPD e honeypot anti-spam
- Rate limit nos endpoints públicos de leads e simulações
- Dashboard de tendências no Django Admin para acompanhar serviços, comprimentos e objetivos mais calculados
- Cache estratégico com Redis para catálogo público e endpoints de preço
- Tabela visual de comprimentos
- Galeria filtrável com skeleton loading e imagens responsivas
- SEO por página, `robots.txt`, `sitemap.xml`, manifesto PWA, favicons e dados estruturados locais
- Backend Django com admin protegido por caminho configurável, chave opcional e allowlist opcional de IPs
- FastAPI com endpoints públicos, CORS sem credenciais e headers de cache para leituras públicas
- Pipeline seguro de imagem
- Infra Nginx/PostgreSQL/Redis
- Política de privacidade com base LGPD, retenção, terceiros e canal de solicitação

## Rodando localmente

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Build do frontend:

```bash
cd frontend
npm run build
```

Stack completa:

```bash
cp .env.example .env
docker compose up --build
```

Endpoints:

- Frontend: http://localhost
- Admin: caminho definido por `DJANGO_ADMIN_PATH`
- API Health: http://localhost/api/health
- API Docs: http://localhost/api/docs

## Admin

O admin não fica exposto em `/admin/`. Configure o caminho privado com:

```env
DJANGO_ADMIN_PATH=acesso-operacional-carlu-2026/
DJANGO_ADMIN_ACCESS_KEY=
DJANGO_ADMIN_ALLOWED_IPS=
```

Em produção, defina `DJANGO_ADMIN_ACCESS_KEY` ou `DJANGO_ADMIN_ALLOWED_IPS` para adicionar uma barreira antes do Django Admin. Quando `DJANGO_ADMIN_ACCESS_KEY` estiver definida, envie o header `X-Admin-Access-Key` com o valor configurado.

## Hospedagem

O caminho mais rápido recomendado está em `docs/hosting-vercel-render.md`.
O caminho VPS com Docker Compose está em `docs/hosting.md`.

## Deploy

Frontend em produção:

https://studio-carlu-styles.vercel.app/

Status atual:

- Frontend publicado na Vercel
- CTAs oficiais apontando para WhatsApp, Instagram e Google Maps corretos
- SEO por página com título, descrição, canonical, OpenGraph, sitemap, robots e dados estruturados locais
- Calculadora enviando serviço, comprimento, volume, objetivo e estimativa para o WhatsApp
- CTA final montando mensagem com dia e horário escolhidos para perguntar disponibilidade
- Backend pronto no repositório, com hospedagem em Render/Railway ainda pendente
- Fotos institucionais reais da Carlu ainda pendentes como arquivos versionados

Resumo VPS:

```bash
cp .env.production.example .env
sh infra/scripts/deploy.sh
```

## Roadmap imediato

- Salvar as fotos institucionais reais em `frontend/public/assets/carlu/`
- Trocar o fallback visual do hero pela melhor foto editorial real da Carlu
- Publicar o backend com PostgreSQL e Redis
- Atualizar `VITE_API_BASE_URL` para o domínio real da API
- Definir `DJANGO_ADMIN_PATH`, `DJANGO_ADMIN_ACCESS_KEY` e `DJANGO_ADMIN_ALLOWED_IPS` no ambiente de produção
- Conectar domínio próprio na Vercel

## Observação de ativos

Os logos, a tabela visual de comprimento, os ícones PWA e as fotos de produtos foram adicionados em `frontend/public/assets` e `frontend/public`. As fotos institucionais da Carlu que aparecem no material de referência ainda precisam ser salvas como arquivos no workspace para entrarem no hero editorial definitivo.
