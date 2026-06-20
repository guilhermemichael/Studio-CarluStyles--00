import { Instagram } from "lucide-react";
import { useState } from "react";

import { carluAssets } from "../../features/carlu/assets";
import { env } from "../../lib/env";

const principles = [
  "Diagnóstico antes de qualquer decisão estética.",
  "Produtos profissionais escolhidos pelo estado real do fio.",
  "Acabamento pensado para movimento, brilho e permanência.",
];

export function AboutCarlu() {
  const [portraitSrc, setPortraitSrc] = useState(carluAssets.portraitDryer);

  return (
    <section className="bg-obsidian px-6 py-28 text-pearl lg:px-16 lg:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12 lg:items-center">
        <figure className="overflow-hidden rounded-md border border-pearl/10 bg-white/[0.035] lg:col-span-6">
          <img
            src={portraitSrc}
            alt="Carlu, profissional responsável pelo Studio Carlu Styles"
            className="aspect-[4/5] w-full object-cover grayscale"
            loading="lazy"
            onError={() => setPortraitSrc(carluAssets.logoFallback)}
          />
        </figure>

        <div className="lg:col-span-6">
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Sobre a Carlu
          </p>
          <h2 className="mt-4 font-display text-5xl leading-tight">
            Técnica com presença, cuidado e visão de beleza.
          </h2>
          <p className="mt-7 max-w-2xl font-body text-base leading-8 text-pearl/66">
            O Studio Carlu Styles nasceu para atender cabelos com método e sensibilidade.
            A experiência combina escuta, análise técnica, protocolos profissionais e uma
            entrega visual que valoriza identidade, textura e intenção.
          </p>

          <div className="mt-9 divide-y divide-pearl/10 border-y border-pearl/10">
            {principles.map((principle, index) => (
              <p key={principle} className="flex gap-5 py-5 font-body text-sm leading-7 text-pearl/68">
                <span className="font-ui text-xs uppercase tracking-[0.18em] text-gold">
                  0{index + 1}
                </span>
                {principle}
              </p>
            ))}
          </div>

          <a
            href={env.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-md border border-pearl/15 px-5 font-ui text-sm font-semibold text-pearl transition duration-500 hover:border-gold hover:text-gold"
          >
            <Instagram size={18} aria-hidden="true" />
            @studio_carlustyles
          </a>
        </div>
      </div>
    </section>
  );
}
