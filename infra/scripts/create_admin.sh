#!/usr/bin/env sh
set -eu

docker compose exec django python manage.py createsuperuser
