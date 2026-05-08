import { Gem, Scissors, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  {
    icon: Scissors,
    title: "Studio capilar",
    body: "Serviços conduzidos com leitura capilar, acabamento e técnica.",
  },
  {
    icon: Sparkles,
    title: "Tratamentos profissionais",
    body: "Linhas profissionais e cuidados personalizados conforme cada fio.",
  },
  {
    icon: ShieldCheck,
    title: "Cuidado seguro",
    body: "Histórico químico, densidade e comprimento entram na avaliação.",
  },
  {
    icon: Gem,
    title: "Sofisticação natural",
    body: "Experiência elegante, acolhedora e profissional.",
  },
];

export function AuthorityStrip() {
  return (
    <section className="bg-pearl px-4 py-16 text-black sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article key={item.title} className="rounded-lg border border-black/10 bg-white p-5">
              <Icon className="text-roseGold" size={24} aria-hidden="true" />
              <h2 className="mt-4 font-display text-2xl">{item.title}</h2>
              <p className="mt-2 font-body text-sm leading-6 text-black/64">{item.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
