#!/usr/bin/env sh
set -eu

timestamp="$(date +%Y%m%d-%H%M%S)"
mkdir -p backups
docker compose exec -T postgres pg_dump -U "${POSTGRES_USER:-studiocarlu}" "${POSTGRES_DB:-studiocarlu}" > "backups/studiocarlu-${timestamp}.sql"
