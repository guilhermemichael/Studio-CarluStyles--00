import { Instagram, MapPin, MessageCircle } from "lucide-react";

import { env } from "../../lib/env";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

export function LocalSeoSection() {
  return (
    <section className="bg-black px-4 py-16 text-pearl sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-lg border border-pearl/10 bg-white/[0.035] p-6 md:grid-cols-[1fr_0.8fr] md:p-8">
        <div>
          <p className="font-ui text-sm font-semibold text-gold">Atendimento local</p>
          <h2 className="mt-3 font-display text-4xl leading-tight">
            Studio de beleza para cuidados capilares profissionais.
          </h2>
          <p className="mt-4 font-body text-sm leading-7 text-pearl/66">
            A Studio Carlu Styles reúne tratamentos, químicas, finalizações e cuidados
            personalizados para quem busca beleza técnica com sofisticação, atenção ao
            histórico capilar e orientação clara antes do atendimento.
          </p>
        </div>

        <div className="grid content-center gap-3">
          <a
            href={buildWhatsAppUrl({})}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 font-ui text-sm font-semibold text-black transition hover:bg-champagne"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Agendar pelo WhatsApp
          </a>
          <a
            href={env.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-pearl/15 px-6 font-ui text-sm font-semibold text-pearl transition hover:border-gold hover:text-gold"
          >
            <MapPin size={18} aria-hidden="true" />
            Como chegar
          </a>
          <a
            href={env.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-pearl/15 px-6 font-ui text-sm font-semibold text-pearl transition hover:border-gold hover:text-gold"
          >
            <Instagram size={18} aria-hidden="true" />
            @studio_carlustyles
          </a>
        </div>
      </div>
    </section>
  );
}
