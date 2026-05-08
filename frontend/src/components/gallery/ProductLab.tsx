import { FlaskConical } from "lucide-react";

import { productImages, treatmentLines } from "../../features/services/catalog";

export function ProductLab() {
  return (
    <section className="bg-pearl px-4 py-20 text-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="font-ui text-sm font-semibold text-roseGold">Laboratório capilar</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Produtos reais, protocolos técnicos e resultado com assinatura.
            </h2>
          </div>
          <p className="font-body text-sm leading-7 text-black/64">
            As linhas profissionais ajudam a transformar a seção de tratamentos em prova
            visual de qualidade, com estética de bancada premium e cuidado técnico.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {treatmentLines.map((line) => (
            <article key={line.name} className="rounded-lg border border-black/10 bg-white p-5">
              <FlaskConical className="text-roseGold" size={22} aria-hidden="true" />
              <h3 className="mt-4 font-display text-2xl">{line.name}</h3>
              <p className="mt-1 font-ui text-xs font-semibold text-roseGold">{line.category}</p>
              <p className="mt-3 font-body text-sm leading-6 text-black/62">{line.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {productImages.map((image) => (
            <figure key={image.src} className="aspect-square overflow-hidden rounded-lg border border-black/10 bg-black">
              <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
