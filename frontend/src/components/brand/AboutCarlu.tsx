import { Award, HeartHandshake, Microscope } from "lucide-react";

const points = [
  {
    icon: Microscope,
    title: "Diagnóstico antes da estética",
    body: "Cada decisão considera estrutura do fio, histórico químico e objetivo visual.",
  },
  {
    icon: HeartHandshake,
    title: "Cuidado com presença humana",
    body: "A experiência precisa ser elegante, mas também acolhedora e compreensível.",
  },
  {
    icon: Award,
    title: "Assinatura profissional",
    body: "A técnica aparece no acabamento, na escolha dos produtos e no refinamento final.",
  },
];

export function AboutCarlu() {
  return (
    <section className="bg-carbon px-4 py-20 text-pearl sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="font-ui text-sm font-semibold text-gold">Sobre a Studio</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Um atelier capilar com técnica, higiene visual e sofisticação suave.
          </h2>
          <p className="mt-6 font-body text-sm leading-7 text-pearl/68">
            No Studio Carlu Styles, cada atendimento é conduzido com técnica, cuidado
            e sofisticação. Unimos diagnóstico capilar, produtos profissionais e
            acabamento estético refinado para entregar resultados personalizados em
            coloração, luzes, mechas, tratamentos, finalizações e transformações.
          </p>
        </div>

        <div className="grid gap-4">
          {points.map((point) => {
            const Icon = point.icon;

            return (
              <article key={point.title} className="rounded-lg border border-pearl/10 bg-white/[0.035] p-5">
                <Icon className="text-gold" size={22} aria-hidden="true" />
                <h3 className="mt-4 font-display text-2xl text-pearl">{point.title}</h3>
                <p className="mt-2 font-body text-sm leading-6 text-pearl/64">{point.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
