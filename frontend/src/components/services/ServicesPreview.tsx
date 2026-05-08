import { ArrowRight } from "lucide-react";

import { services } from "../../features/services/catalog";
import { ServiceCard } from "./ServiceCard";
import { ButtonLink } from "../ui/Button";

export function ServicesPreview() {
  const featured = services.filter((service) => service.featured).slice(0, 6);

  return (
    <section className="bg-black px-4 py-20 text-pearl sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-ui text-sm font-semibold text-gold">Serviços principais</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Técnica, acabamento e cuidado em cada escolha.
            </h2>
          </div>
          <ButtonLink href="/servicos" tone="ghost" icon={<ArrowRight size={18} aria-hidden="true" />}>
            Catálogo completo
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
