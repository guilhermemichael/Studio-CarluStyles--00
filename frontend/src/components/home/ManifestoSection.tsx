import { useState } from "react";

import { carluAssets } from "../../features/carlu/assets";

export function ManifestoSection() {
  const [imageSrc, setImageSrc] = useState(carluAssets.profileLabcoat);

  return (
    <section id="manifesto" className="bg-obsidian px-6 py-28 text-pearl lg:px-16 lg:py-36">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Luxo técnico
          </p>
          <h2 className="mt-5 max-w-4xl font-display text-5xl leading-tight sm:text-6xl">
            Técnica não é apenas execução.
            <span className="block text-pearl/58">É sensibilidade, visão e precisão.</span>
          </h2>
          <p className="mt-8 max-w-2xl font-body text-base leading-8 text-pearl/64">
            O Studio Carlu Styles une diagnóstico, protocolo profissional e acabamento
            refinado para que cada transformação pareça intencional, tátil e humana.
          </p>
        </div>

        <figure className="overflow-hidden rounded-md border border-pearl/10 bg-white/[0.035] lg:col-span-5">
          <img
            src={imageSrc}
            alt="Carlu em retrato editorial para o Studio Carlu Styles"
            loading="lazy"
            onError={() => setImageSrc(carluAssets.logoFallback)}
            className="aspect-[4/5] w-full object-cover grayscale"
          />
        </figure>
      </div>
    </section>
  );
}
