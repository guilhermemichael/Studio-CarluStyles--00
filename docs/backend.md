# Backend

O backend segue separação por camadas:

- `models`: estrutura persistente.
- `selectors`: consultas otimizadas.
- `services`: regras de negócio.
- `schemas`: contratos FastAPI.
- `admin`: manutenção interna.

Apps principais:

- `brand`: perfil de marca.
- `services_catalog`: serviços, categorias e seed.
- `pricing`: modos de preço, comprimentos e apresentação.
- `gallery`: galeria, produtos e pipeline de imagem.
- `leads`: leads e consentimento.
- `seo`: OpenGraph, schema e rotas indexáveis.
- `audit`: eventos administrativos.

Comando inicial:

```bash
python manage.py migrate
python manage.py seed_services
```
