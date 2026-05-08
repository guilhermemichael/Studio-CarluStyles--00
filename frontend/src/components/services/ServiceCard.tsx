import { MessageCircle } from "lucide-react";

import {
  hairLengths,
  type Service,
} from "../../features/services/catalog";
import {
  getServiceDisplayPrice,
} from "../../features/pricing/pricing";
import { formatCurrencyBRL } from "../../lib/formatCurrency";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-pearl/10 bg-white/[0.035] p-5 transition hover:border-gold/55 hover:bg-white/[0.055]">
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-3xl leading-tight text-pearl">{service.name}</h3>
          <span className="shrink-0 text-right font-ui text-sm font-semibold text-gold">
            {getServiceDisplayPrice(service)}
          </span>
        </div>

        <p className="mt-3 font-body text-sm leading-6 text-pearl/62">
          {service.shortDescription}
        </p>

        {service.priceMode === "by_length" && (
          <div className="mt-5 grid gap-2">
            {hairLengths.map((length) => {
              const price = service.prices?.find((item) => item.length === length.id);

              return (
                <div
                  key={length.id}
                  className="flex items-center justify-between border-t border-pearl/10 pt-2 font-ui text-sm"
                >
                  <span className="text-pearl/60">{length.label}</span>
                  <span className="font-semibold text-pearl">
                    {price ? formatCurrencyBRL(price.value) : "Consulte"}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {service.requiresEvaluation && (
          <p className="mt-5 rounded-lg bg-roseGold/10 px-4 py-3 font-body text-xs leading-5 text-pearl/72">
            Valor sujeito à avaliação conforme técnica, comprimento, volume e histórico químico.
          </p>
        )}
      </div>

      <a
        href={buildWhatsAppUrl({ service: service.name })}
        className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-pearl/15 px-4 font-ui text-sm font-semibold text-pearl transition hover:border-gold hover:text-gold"
      >
        <MessageCircle size={17} aria-hidden="true" />
        Agendar horário
      </a>
    </article>
  );
}
