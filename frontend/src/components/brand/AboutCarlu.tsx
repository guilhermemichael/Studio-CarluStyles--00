import { Instagram } from "lucide-react";
import { useState } from "react";

import { carluAssets } from "../../features/carlu/assets";
import { env } from "../../lib/env";

const credentials = [
  "Mais de 15 anos como cabeleireira.",
  "Atualização profissional constante, com novos cursos todos os anos.",
  "Especialização em loiros, sem abrir mão de tratamentos, químicas e finalizações personalizadas.",
];

export function AboutCarlu() {
  const [portraitSrc, setPortraitSrc] = useState(carluAssets.portraitDryer);

  return (
    <section className="bg-obsidian px-6 py-32 text-pearl lg:px-16 lg:py-44">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12 lg:items-center">
        <figure className="overflow-hidden rounded-md bg-white/[0.035] lg:col-span-6">
          <img
            src={portraitSrc}
            alt="Carlu, cabeleireira responsável pelo Studio Carlu Styles"
            className="aspect-[4/5] w-full object-cover contrast-110 saturate-90 grayscale"
            loading="lazy"
            onError={() => setPortraitSrc(carluAssets.logoFallback)}
          />
        </figure>

        <div className="lg:col-span-6">
          <p className="font-ui text-xs font-semibold uppercase text-gold">
            Sobre a Carlu
          </p>
          <h2 className="mt-4 font-display text-5xl leading-tight">
            Autoridade real, construída no atendimento e na prática.
          </h2>
          <p className="mt-7 max-w-2xl font-body text-base leading-8 text-pearl/66">
            Em São Francisco, Paraíba, Carlu conduz o Studio Carlu Styles com experiência,
            técnica e atualização constante. A especialidade em loiros é um dos pontos
            fortes, mas o olhar dela acompanha cada fio: tratamento, química, acabamento
            e rotina real da cliente.
          </p>

          <div className="mt-10 grid gap-6">
            {credentials.map((credential, index) => (
              <p key={credential} className="flex gap-5 font-body text-sm leading-7 text-pearl/68">
                <span className="font-ui text-xs uppercase text-gold">
                  0{index + 1}
                </span>
                {credential}
              </p>
            ))}
          </div>

          <a
            href={env.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex min-h-11 items-center gap-2 rounded-md border border-pearl/15 px-5 font-ui text-sm font-semibold text-pearl transition duration-500 ease-luxury hover:border-gold hover:text-gold"
          >
            <Instagram size={18} aria-hidden="true" />
            @studio_carlustyles
          </a>
        </div>
      </div>
    </section>
  );
}
