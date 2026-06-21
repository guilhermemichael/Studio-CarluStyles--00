import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { getServiceDisplayPrice } from "../../features/pricing/pricing";
import { productImages, services } from "../../features/services/catalog";
import { ButtonLink } from "../ui/Button";
import { ResponsiveImage } from "../ui/ResponsiveImage";

const featuredServices = services.filter((service) => service.featured).slice(0, 5);

export function EditorialServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = featuredServices[activeIndex] ?? featuredServices[0];
  const activeImage = productImages[(activeService?.id ?? 1) % productImages.length];

  return (
    <section className="bg-obsidian px-6 py-32 text-pearl lg:px-16 lg:py-44">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <p className="font-ui text-xs font-semibold uppercase text-gold">
            Serviços
          </p>
          <h2 className="mt-4 font-display text-5xl leading-tight">
            Protocolos com leitura técnica e acabamento autoral.
          </h2>
          <p className="mt-6 max-w-xl font-body text-sm leading-7 text-pearl/62">
            Menos vitrine genérica, mais clareza: cada serviço aparece com contexto,
            faixa de valor e uma estética de consultoria.
          </p>
          <ButtonLink href="/servicos" tone="ghost" className="mt-8" icon={<ArrowRight size={18} aria-hidden="true" />}>
            Catálogo completo
          </ButtonLink>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <div className="divide-y divide-pearl/10 border-y border-pearl/10">
              {featuredServices.map((service, index) => (
                <button
                  key={service.slug}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className="group grid w-full gap-3 py-6 text-left transition duration-500"
                >
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-3xl leading-none text-pearl transition duration-500 group-hover:translate-x-2 group-hover:text-gold">
                      {service.name}
                    </span>
                    <span className="shrink-0 font-ui text-xs uppercase text-pearl/45">
                      {getServiceDisplayPrice(service)}
                    </span>
                  </span>
                  <span className="max-w-lg font-body text-sm leading-6 text-pearl/58">
                    {service.shortDescription}
                  </span>
                </button>
              ))}
            </div>

            <ResponsiveImage
              src={activeImage.src}
              alt={activeImage.alt}
              className="min-h-[420px] rounded-md border border-pearl/10"
              imageClassName="transition duration-700 hover:scale-[1.02]"
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
