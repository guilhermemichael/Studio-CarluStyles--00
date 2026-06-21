import { CalendarCheck, ClipboardCheck, ImageUp, MessageCircle, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Chame no WhatsApp",
    description: "Envie sua dúvida, objetivo ou intenção de mudança pelo canal oficial do studio.",
    icon: MessageCircle,
  },
  {
    title: "Mostre o cabelo",
    description: "Quando fizer sentido, envie uma foto atual para facilitar a primeira avaliação.",
    icon: ImageUp,
  },
  {
    title: "Receba uma análise",
    description: "A Carlu avalia histórico químico, comprimento, densidade e necessidade do fio.",
    icon: ClipboardCheck,
  },
  {
    title: "Combine o horário",
    description: "Você recebe orientação, faixa de serviço e disponibilidade de atendimento.",
    icon: CalendarCheck,
  },
  {
    title: "Confirme o cuidado",
    description: "O atendimento é confirmado com foco no resultado e na segurança do cabelo.",
    icon: Sparkles,
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-pearl px-4 py-32 text-black sm:px-6 lg:px-8 lg:py-44">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-ui text-sm font-semibold uppercase text-roseGold">
            Atendimento
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Como funciona o agendamento com a Carlu.
          </h2>
          <p className="mt-5 font-body text-sm leading-7 text-black/64">
            Antes de qualquer transformação, o studio organiza objetivo, histórico e
            disponibilidade para orientar com responsabilidade e evitar decisões no escuro.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <li key={step.title} className="rounded-lg border border-black/10 bg-white p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-roseGold/10 text-roseGold">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="font-ui text-xs font-semibold text-black/36">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl leading-tight">{step.title}</h3>
                <p className="mt-3 font-body text-sm leading-6 text-black/58">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
