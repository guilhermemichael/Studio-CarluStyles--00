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

- Home editorial premium com narrativa de impacto, desejo, confiança e conversão
- Navbar minimalista com CTA único, link discreto para o Django Admin e atalho `Ctrl + Shift + A`
- Catálogo de serviços e tratamentos
- Precificação fixa, por comprimento, por faixa e sob avaliação
- Calculadora concierge com manequim digital, volume, objetivo e registro anônimo de simulações
- Dashboard de tendências no Django Admin para acompanhar serviços, comprimentos e objetivos mais calculados
- Cache estratégico com Redis para catálogo público e endpoints de preço
- Quiz de cronograma capilar com captação de lead e diagnóstico inicial
- Tabela visual de comprimentos
- Galeria filtrável com skeleton loading e imagens responsivas
- Backend Django com admin e modelos
- FastAPI com endpoints públicos
- Pipeline seguro de imagem
- Infra Nginx/PostgreSQL/Redis
- Política de privacidade inicial

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
- Admin: http://localhost/admin/
- API Health: http://localhost/api/health
- API Docs: http://localhost/api/docs

## Hospedagem

O caminho mais rápido recomendado está em `docs/hosting-vercel-render.md`.
O caminho VPS com Docker Compose está em `docs/hosting.md`.

## Deploy

Frontend em produção:

https://studio-carlu-styles.vercel.app/

Status atual:

- Frontend publicado na Vercel
- CTAs oficiais apontando para WhatsApp, Instagram e Google Maps corretos
- SEO por página com título, descrição, canonical, OpenGraph e dados estruturados locais
- Calculadora enviando serviço, comprimento, volume, objetivo e estimativa para o WhatsApp
- CTA final montando mensagem com dia e horário escolhidos para perguntar disponibilidade
- Frontend com lint/build válidos e `npm audit` sem vulnerabilidades conhecidas
- Backend pronto no repositório, com hospedagem em Render/Railway ainda pendente
- Fotos institucionais da Carlu ainda pendentes como arquivos versionados

Resumo:

```bash
cp .env.production.example .env
sh infra/scripts/deploy.sh
```

## Roadmap imediato

- Salvar as fotos institucionais reais em `frontend/public/assets/carlu/`
- Trocar o fallback visual do hero pela melhor foto editorial da Carlu
- Publicar o backend com PostgreSQL e Redis
- Atualizar `VITE_API_BASE_URL` para o domínio real da API
- Atualizar `VITE_ADMIN_URL` para a URL real do Django Admin
- Conectar domínio próprio na Vercel

## Observação de ativos

Os logos, a tabela visual de comprimento e as fotos de produtos foram adicionados em `frontend/public/assets`. As fotos institucionais da Carlu que aparecem no material de referência ainda precisam ser salvas como arquivos no workspace para entrarem no hero editorial definitivo.
