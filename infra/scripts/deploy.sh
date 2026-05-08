#!/usr/bin/env sh
set -eu

if [ ! -f .env ]; then
  echo "Arquivo .env não encontrado. Copie .env.production.example para .env e preencha os segredos."
  exit 1
fi

git pull --ff-only
docker compose up -d --build --remove-orphans
docker compose ps

echo "Deploy concluído. Verifique https://studiocarlustyles.com.br e https://studiocarlustyles.com.br/api/health"
