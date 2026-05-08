import { Calculator, MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";

import { calculateServicePrice, getHairLengthLabel } from "../../features/pricing/pricing";
import { hairLengths, services, type HairLengthId } from "../../features/services/catalog";
import { buildWhatsAppUrl } from "../../lib/whatsapp";
import { MannequinEngine } from "./MannequinEngine";

const pricedServices = services.filter((service) => service.priceMode !== "evaluation");

export function PriceCalculator() {
  const [selectedServiceSlug, setSelectedServiceSlug] = useState("luzes-mechas");
  const [selectedLength, setSelectedLength] = useState<HairLengthId>("medium");
  const selectedService = useMemo(
    () => pricedServices.find((service) => service.slug === selectedServiceSlug) ?? pricedServices[0],
    [selectedServiceSlug],
  );
  const displayPrice = calculateServicePrice(selectedService, selectedLength);

  return (
    <section className="bg-carbon px-4 py-20 text-pearl sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="font-ui text-sm font-semibold text-gold">Calculadora de preço</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Valor estimado com contexto técnico.
          </h2>
          <p className="mt-5 max-w-2xl font-body text-sm leading-7 text-pearl/65">
            Serviços químicos e transformações podem variar conforme histórico químico,
            densidade, volume e avaliação profissional.
          </p>

          <div className="mt-8 grid gap-4">
            <label className="grid gap-2 font-ui text-sm font-semibold text-pearl">
              Serviço
              <select
                value={selectedServiceSlug}
                onChange={(event) => setSelectedServiceSlug(event.target.value)}
                className="min-h-12 rounded-lg border border-pearl/12 bg-black px-4 font-body text-sm text-pearl outline-none transition focus:border-gold"
              >
                {pricedServices.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 font-ui text-sm font-semibold text-pearl">
              Comprimento
              <select
                value={selectedLength}
                onChange={(event) => setSelectedLength(event.target.value as HairLengthId)}
                className="min-h-12 rounded-lg border border-pearl/12 bg-black px-4 font-body text-sm text-pearl outline-none transition focus:border-gold"
              >
                {hairLengths.map((length) => (
                  <option key={length.id} value={length.id}>
                    {length.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-8 rounded-lg border border-gold/30 bg-gold/10 p-5">
            <div className="flex items-center gap-2 font-ui text-sm font-semibold text-gold">
              <Calculator size={18} aria-hidden="true" />
              Estimativa
            </div>
            <p className="mt-3 font-display text-4xl text-pearl">{displayPrice}</p>
            <p className="mt-2 font-body text-sm text-pearl/62">
              {selectedService.name} para cabelo {getHairLengthLabel(selectedLength).toLowerCase()}.
            </p>
          </div>

          <a
            href={buildWhatsAppUrl({
              service: selectedService.name,
              hairLength: getHairLengthLabel(selectedLength),
            })}
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 font-ui text-sm font-semibold text-black transition hover:bg-champagne"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Agendar pelo WhatsApp
          </a>
        </div>

        <MannequinEngine selectedLength={selectedLength} onChange={setSelectedLength} />
      </div>
    </section>
  );
}
