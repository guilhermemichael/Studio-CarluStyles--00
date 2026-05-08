#!/usr/bin/env sh
set -eu

if [ "${1:-}" = "" ]; then
  echo "Uso: restore_postgres.sh caminho/do/backup.sql"
  exit 1
fi

docker compose exec -T postgres psql -U "${POSTGRES_USER:-studiocarlu}" "${POSTGRES_DB:-studiocarlu}" < "$1"
