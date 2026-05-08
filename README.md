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

## Funcionalidades iniciais

- Home premium com identidade Luxury Beauty Lab
- Catálogo de serviços e tratamentos
- Precificação fixa, por comprimento, por faixa e sob avaliação
- Calculadora de preço com manequim digital
- Tabela visual de comprimentos
- Galeria de produtos profissionais reais
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

O caminho de produção recomendado está em `docs/hosting.md`.

Resumo:

```bash
cp .env.production.example .env
sh infra/scripts/deploy.sh
```

## Observação de ativos

Os logos, a tabela visual de comprimento e as fotos de produtos foram adicionados em `frontend/public/assets`. As fotos institucionais da Carlu que aparecem no material de referência ainda precisam ser salvas como arquivos no workspace para entrarem no hero editorial definitivo.
