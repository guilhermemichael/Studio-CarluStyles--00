from django.core.management.base import BaseCommand

from apps.services_catalog.services import seed_initial_services


class Command(BaseCommand):
    help = "Carrega ou atualiza os serviços iniciais da Studio Carlu Styles."

    def handle(self, *args, **options):
        count = seed_initial_services()
        self.stdout.write(self.style.SUCCESS(f"{count} serviços carregados."))
