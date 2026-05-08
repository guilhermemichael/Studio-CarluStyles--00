.PHONY: install-frontend build-frontend dev-frontend backend-check compose-up compose-down seed

install-frontend:
	cd frontend && npm install

build-frontend:
	cd frontend && npm run build

dev-frontend:
	cd frontend && npm run dev

backend-check:
	cd backend && python -m compileall .

compose-up:
	docker compose up --build

compose-down:
	docker compose down

seed:
	cd backend && python manage.py seed_services
