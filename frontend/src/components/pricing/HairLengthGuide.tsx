import { hairLengths } from "../../features/services/catalog";

export function HairLengthGuide() {
  return (
    <section className="bg-black px-4 py-20 text-pearl sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="font-ui text-sm font-semibold text-gold">Tabela de comprimento</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Entenda o tamanho do seu cabelo.
          </h2>
          <p className="mt-5 max-w-2xl font-body text-sm leading-7 text-pearl/65">
            A classificação ajuda a estimar valores de serviços que variam conforme
            comprimento, volume, densidade e histórico capilar.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {hairLengths.map((item) => (
              <article key={item.id} className="rounded-lg border border-pearl/10 bg-white/[0.035] p-5">
                <h3 className="font-display text-3xl text-gold">{item.label}</h3>
                <p className="mt-2 font-body text-sm leading-6 text-pearl/68">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <figure className="overflow-hidden rounded-lg border border-pearl/10 bg-white/[0.035]">
          <img
            src="/assets/guide/hair-length-guide.png"
            alt="Tabela visual de tamanhos de cabelo da Studio Carlu Styles"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
