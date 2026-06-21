import { MessageCircle } from "lucide-react";
import { useState } from "react";

import { buildWhatsAppQuoteUrl } from "../../lib/whatsapp";

export function FinalExperienceCta() {
  const [requestedDate, setRequestedDate] = useState("");
  const [requestedTime, setRequestedTime] = useState("");

  return (
    <section className="border-t border-pearl/10 bg-obsidian px-6 py-32 text-pearl lg:px-16 lg:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="font-ui text-xs font-semibold uppercase text-gold">
            Agendamento
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-5xl leading-tight sm:text-6xl">
            Seu próximo visual começa aqui.
          </h2>
        </div>

        <div className="lg:col-span-5">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="grid gap-2 font-ui text-xs font-semibold uppercase text-pearl/52">
              Dia
              <input
                type="date"
                value={requestedDate}
                onChange={(event) => setRequestedDate(event.target.value)}
                className="min-h-12 rounded-md border border-pearl/12 bg-carbon px-4 font-body text-sm normal-case tracking-normal text-pearl outline-none transition duration-500 focus:border-gold"
              />
            </label>
            <label className="grid gap-2 font-ui text-xs font-semibold uppercase text-pearl/52">
              Horário
              <input
                type="time"
                value={requestedTime}
                onChange={(event) => setRequestedTime(event.target.value)}
                className="min-h-12 rounded-md border border-pearl/12 bg-carbon px-4 font-body text-sm normal-case tracking-normal text-pearl outline-none transition duration-500 focus:border-gold"
              />
            </label>
          </div>

          <a
            href={buildWhatsAppQuoteUrl({
              requestedDate,
              requestedTime,
            })}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-gold px-6 font-ui text-sm font-semibold text-black transition duration-500 hover:bg-champagne"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Perguntar disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
}
