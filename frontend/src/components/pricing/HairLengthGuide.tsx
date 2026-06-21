import { hairLengths } from "../../features/services/catalog";
import { ResponsiveImage } from "../ui/ResponsiveImage";

export function HairLengthGuide() {
  return (
    <section className="bg-obsidian px-6 py-32 text-pearl lg:px-16 lg:py-44">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="font-ui text-xs font-semibold uppercase text-gold">
              Comprimento
            </p>
            <h2 className="mt-4 font-display text-5xl leading-tight">
              Entenda o tamanho antes da estimativa.
            </h2>
          </div>
          <p className="max-w-2xl font-body text-sm leading-7 text-pearl/62 lg:col-span-7">
            A classificação reduz ruído no atendimento e ajuda a alinhar valores de
            serviços que dependem de comprimento, volume e histórico capilar.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="grid gap-3 sm:grid-cols-4">
            {hairLengths.map((item, index) => (
              <article key={item.id} className="border-t border-pearl/10 pt-5">
                <p className="font-ui text-xs uppercase text-gold">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-3xl text-pearl">{item.label}</h3>
                <p className="mt-2 font-body text-sm leading-6 text-pearl/58">{item.description}</p>
              </article>
            ))}
          </div>

          <ResponsiveImage
            src="/assets/guide/hair-length-guide.png"
            alt="Tabela visual de tamanhos de cabelo da Studio Carlu Styles"
            className="rounded-md border border-pearl/10"
            imageClassName="object-contain"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
