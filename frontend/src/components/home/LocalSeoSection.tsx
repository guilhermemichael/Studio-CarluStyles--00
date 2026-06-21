import { Instagram, MapPin, MessageCircle } from "lucide-react";

import { env } from "../../lib/env";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

export function LocalSeoSection() {
  return (
    <section className="bg-obsidian px-6 py-32 text-pearl lg:px-16 lg:py-44">
      <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
        <div>
          <p className="font-ui text-xs font-semibold uppercase text-gold">
            Atendimento local
          </p>
          <h2 className="mt-4 font-display text-5xl leading-tight">
            Cabeleireira em São Francisco, Paraíba.
          </h2>
          <p className="mt-6 max-w-2xl font-body text-sm leading-7 text-pearl/66">
            O Studio Carlu Styles atende na Rua Joaquim Gabriel e recebe mulheres que
            buscam loiros, tratamentos, químicas e finalizações com avaliação do histórico
            capilar antes de qualquer procedimento.
          </p>
          <p className="mt-4 max-w-2xl font-body text-sm leading-7 text-pearl/56">
            O agendamento acontece pelo WhatsApp, com orientação clara sobre objetivo,
            necessidade do fio, disponibilidade e chegada ao studio.
          </p>
        </div>

        <div className="grid content-center gap-3">
          <a
            href={buildWhatsAppUrl({})}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gold px-6 font-ui text-sm font-semibold text-black transition duration-500 ease-luxury hover:bg-champagne"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Agendar pelo WhatsApp
          </a>
          <a
            href={env.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-pearl/15 px-6 font-ui text-sm font-semibold text-pearl transition duration-500 ease-luxury hover:border-gold hover:text-gold"
          >
            <MapPin size={18} aria-hidden="true" />
            Rua Joaquim Gabriel
          </a>
          <a
            href={env.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-pearl/15 px-6 font-ui text-sm font-semibold text-pearl transition duration-500 ease-luxury hover:border-gold hover:text-gold"
          >
            <Instagram size={18} aria-hidden="true" />
            @studio_carlustyles
          </a>
        </div>
      </div>
    </section>
  );
}
