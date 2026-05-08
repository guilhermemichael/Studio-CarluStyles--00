import { Instagram, MapPin, MessageCircle, Navigation } from "lucide-react";

import { env } from "../../lib/env";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

export function LocationCta() {
  return (
    <section className="bg-pearl px-4 py-20 text-black sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-ui text-sm font-semibold text-roseGold">Localização</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Atendimento local com cuidado profissional.
          </h2>
          <p className="mt-5 max-w-2xl font-body text-sm leading-7 text-black/64">
            Confirme o melhor horário pelo WhatsApp e receba orientação de chegada
            com ponto de referência quando o endereço oficial estiver publicado.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={env.googleMapsUrl || "#"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-black px-6 font-ui text-sm font-semibold text-pearl transition hover:bg-graphite"
            >
              <Navigation size={18} aria-hidden="true" />
              Como chegar
            </a>
            <a
              href={env.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/15 px-6 font-ui text-sm font-semibold text-black transition hover:border-roseGold hover:text-roseGold"
            >
              <Instagram size={18} aria-hidden="true" />
              @studio_carlustyles
            </a>
            <a
              href={buildWhatsAppUrl({})}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/15 px-6 font-ui text-sm font-semibold text-black transition hover:border-roseGold hover:text-roseGold"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-black/10 bg-white p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-roseGold/10 text-roseGold">
              <MapPin size={22} aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-3xl">Studio Carlu Styles</h3>
              <p className="font-body text-sm text-black/58">Endereço e ponto de referência em confirmação.</p>
            </div>
          </div>
          <dl className="mt-6 grid gap-4 border-t border-black/10 pt-6 font-body text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-black/54">Horário</dt>
              <dd className="font-semibold">Sob agendamento</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-black/54">Canal principal</dt>
              <dd className="font-semibold">WhatsApp</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-black/54">Instagram</dt>
              <dd className="font-semibold">@studio_carlustyles</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
