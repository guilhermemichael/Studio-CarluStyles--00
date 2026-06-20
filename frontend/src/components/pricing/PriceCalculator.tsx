import { Calculator, MessageCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { calculateServicePrice, getHairLengthLabel } from "../../features/pricing/pricing";
import { hairLengths, services, type HairLengthId, type Service } from "../../features/services/catalog";
import { formatCurrencyBRL } from "../../lib/formatCurrency";
import { apiPost } from "../../lib/http";
import { buildWhatsAppQuoteUrl } from "../../lib/whatsapp";
import { MannequinEngine } from "./MannequinEngine";

type VolumeId = "leve" | "medio" | "alto";
type GoalId = "brilho" | "clareamento" | "recuperacao" | "alinhamento";

const pricedServices = services.filter((service) => service.priceMode !== "evaluation");

const volumes: Array<{ id: VolumeId; label: string; multiplier: number; description: string }> = [
  { id: "leve", label: "Leve", multiplier: 1, description: "Pouca densidade ou manutenção simples." },
  { id: "medio", label: "Médio", multiplier: 1.08, description: "Volume comum, com tempo técnico padrão." },
  { id: "alto", label: "Alto", multiplier: 1.16, description: "Mais densidade, produto e tempo de execução." },
];

const goals: Array<{ id: GoalId; label: string; recommendation: string }> = [
  { id: "brilho", label: "Brilho", recommendation: "Tratamento de brilho e acabamento luminoso." },
  { id: "clareamento", label: "Clareamento", recommendation: "Avaliação de fundo, resistência e estratégia de tom." },
  { id: "recuperacao", label: "Recuperação", recommendation: "Cronograma com hidratação, nutrição e reconstrução." },
  { id: "alinhamento", label: "Alinhamento", recommendation: "Controle de frizz com leitura de estrutura do fio." },
];

function getServiceBaseValue(service: Service, length: HairLengthId): number | null {
  if (service.priceMode === "fixed") {
    return service.fixedPrice ?? null;
  }

  if (service.priceMode === "by_length") {
    return service.prices?.find((price) => price.length === length)?.value ?? null;
  }

  return null;
}

function getAdjustedDisplay(service: Service, length: HairLengthId, volume: VolumeId): string {
  const baseValue = getServiceBaseValue(service, length);
  const selectedVolume = volumes.find((item) => item.id === volume) ?? volumes[0];

  if (baseValue === null) {
    return calculateServicePrice(service, length);
  }

  return formatCurrencyBRL(Math.round(baseValue * selectedVolume.multiplier));
}

export function PriceCalculator() {
  const [selectedServiceSlug, setSelectedServiceSlug] = useState("luzes-mechas");
  const [selectedLength, setSelectedLength] = useState<HairLengthId>("medium");
  const [selectedVolume, setSelectedVolume] = useState<VolumeId>("medio");
  const [selectedGoal, setSelectedGoal] = useState<GoalId>("clareamento");

  const selectedService = useMemo(
    () => pricedServices.find((service) => service.slug === selectedServiceSlug) ?? pricedServices[0],
    [selectedServiceSlug],
  );
  const volume = volumes.find((item) => item.id === selectedVolume) ?? volumes[1];
  const goal = goals.find((item) => item.id === selectedGoal) ?? goals[1];
  const displayPrice = getAdjustedDisplay(selectedService, selectedLength, selectedVolume);
  const hairLengthLabel = getHairLengthLabel(selectedLength);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void apiPost<{ id: number; status: string }, Record<string, string>>("/pricing/simulations", {
        service_slug: selectedService.slug,
        service_name: selectedService.name,
        hair_length: hairLengthLabel,
        volume: volume.label,
        goal: goal.label,
        estimated_price: displayPrice,
        source: "price_experience",
      }).catch(() => undefined);
    }, 650);

    return () => window.clearTimeout(timer);
  }, [displayPrice, goal.label, hairLengthLabel, selectedService.name, selectedService.slug, volume.label]);

  return (
    <section className="bg-carbon px-6 py-28 text-pearl lg:px-16 lg:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Calculadora concierge
          </p>
          <h2 className="mt-4 font-display text-5xl leading-tight">
            Valor estimado com contexto técnico.
          </h2>
          <p className="mt-6 max-w-2xl font-body text-sm leading-7 text-pearl/64">
            A estimativa combina serviço, comprimento, volume e objetivo. Procedimentos
            químicos ainda dependem de avaliação profissional antes da confirmação.
          </p>

          <div className="mt-9 grid gap-7">
            <label className="grid gap-3 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-pearl/58">
              01 Serviço
              <select
                value={selectedServiceSlug}
                onChange={(event) => setSelectedServiceSlug(event.target.value)}
                className="min-h-12 rounded-md border border-pearl/12 bg-obsidian px-4 font-body text-sm normal-case tracking-normal text-pearl outline-none transition duration-500 focus:border-gold"
              >
                {pricedServices.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.name}
                  </option>
                ))}
              </select>
            </label>

            <div>
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-pearl/58">
                02 Comprimento
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {hairLengths.map((length) => (
                  <button
                    key={length.id}
                    type="button"
                    onClick={() => setSelectedLength(length.id)}
                    className={[
                      "rounded-md border px-4 py-3 text-left transition duration-500",
                      selectedLength === length.id
                        ? "border-gold bg-gold/12 text-pearl"
                        : "border-pearl/10 text-pearl/62 hover:border-gold hover:text-gold",
                    ].join(" ")}
                  >
                    <span className="block font-display text-2xl">{length.label}</span>
                    <span className="mt-1 block font-body text-xs leading-5">{length.description}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-pearl/58">
                03 Volume
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {volumes.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedVolume(item.id)}
                    className={[
                      "rounded-md border px-4 py-3 text-left transition duration-500",
                      selectedVolume === item.id
                        ? "border-gold bg-gold/12 text-pearl"
                        : "border-pearl/10 text-pearl/62 hover:border-gold hover:text-gold",
                    ].join(" ")}
                  >
                    <span className="font-ui text-sm font-semibold">{item.label}</span>
                    <span className="mt-1 block font-body text-xs leading-5">{item.description}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-pearl/58">
                04 Objetivo
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {goals.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedGoal(item.id)}
                    className={[
                      "rounded-md border px-4 py-3 text-left transition duration-500",
                      selectedGoal === item.id
                        ? "border-gold bg-gold/12 text-pearl"
                        : "border-pearl/10 text-pearl/62 hover:border-gold hover:text-gold",
                    ].join(" ")}
                  >
                    <span className="font-ui text-sm font-semibold">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-7 lg:col-span-7">
          <MannequinEngine selectedLength={selectedLength} onChange={setSelectedLength} />

          <div className="rounded-md border border-gold/25 bg-gold/10 p-6">
            <div className="flex items-center gap-2 font-ui text-sm font-semibold text-gold">
              <Calculator size={18} aria-hidden="true" />
              Resultado estimado
            </div>
            <p className="mt-4 font-display text-5xl leading-none text-pearl">{displayPrice}</p>
            <p className="mt-4 font-body text-sm leading-7 text-pearl/66">
              {selectedService.name} para cabelo {hairLengthLabel.toLowerCase()}, volume{" "}
              {volume.label.toLowerCase()}. {goal.recommendation}
            </p>
            <a
              href={buildWhatsAppQuoteUrl({
                service: selectedService.name,
                hairLength: hairLengthLabel,
                volume: volume.label,
                goal: goal.label,
                estimate: displayPrice,
              })}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gold px-6 font-ui text-sm font-semibold text-black transition duration-500 hover:bg-champagne"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Enviar estimativa no WhatsApp
            </a>
            <p className="mt-3 max-w-xl font-body text-xs leading-6 text-pearl/52">
              A mensagem leva serviço, comprimento, volume, objetivo e estimativa para
              agilizar a avaliação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
