import { MessageCircle, Send } from "lucide-react";
import { useMemo, useState } from "react";

import { apiPost } from "../../lib/http";
import { buildWhatsAppQuoteUrl } from "../../lib/whatsapp";

type AnswerId = "dry" | "breakage" | "dull" | "none" | "color" | "straightening" | "shine" | "blonde" | "align";

const questions: Array<{
  id: "state" | "history" | "goal";
  label: string;
  options: Array<{ id: AnswerId; label: string }>;
}> = [
  {
    id: "state",
    label: "Como seu cabelo está hoje?",
    options: [
      { id: "dry", label: "Ressecado" },
      { id: "breakage", label: "Quebradiço" },
      { id: "dull", label: "Sem brilho" },
    ],
  },
  {
    id: "history",
    label: "Qual foi o último histórico químico?",
    options: [
      { id: "none", label: "Sem química recente" },
      { id: "color", label: "Coloração ou mechas" },
      { id: "straightening", label: "Alisamento" },
    ],
  },
  {
    id: "goal",
    label: "O que você quer sentir no resultado?",
    options: [
      { id: "shine", label: "Brilho e maciez" },
      { id: "blonde", label: "Clareamento seguro" },
      { id: "align", label: "Alinhamento e controle" },
    ],
  },
];

type Answers = Record<(typeof questions)[number]["id"], AnswerId>;

const initialAnswers: Answers = {
  state: "dry",
  history: "color",
  goal: "shine",
};

function getDiagnosis(answers: Answers): string {
  if (answers.state === "breakage" || answers.history === "straightening") {
    return "Cronograma de reconstrução e avaliação de resistência do fio";
  }

  if (answers.goal === "blonde") {
    return "Diagnóstico de clareamento com teste de mecha e plano de tratamento";
  }

  if (answers.state === "dull") {
    return "Ritual de brilho, nutrição e finalização luminosa";
  }

  return "Cronograma de hidratação e nutrição para recuperar toque e movimento";
}

export function HairScheduleQuiz() {
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [website, setWebsite] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const diagnosis = useMemo(() => getDiagnosis(answers), [answers]);
  const missingFields = [
    !name.trim() ? "Informe seu nome." : "",
    !whatsapp.trim() ? "Informe um WhatsApp válido com DDD." : "",
    !consent ? "Aceite a política de privacidade para enviar." : "",
  ].filter(Boolean);

  async function submitLead() {
    setStatus("sending");

    try {
      await apiPost<{ id: number; status: string; message: string }, Record<string, unknown>>("/leads/", {
        name,
        whatsapp,
        desired_service_id: null,
        hair_length: "",
        chemical_history: questions
          .map((question) => {
            const selected = question.options.find((option) => option.id === answers[question.id]);
            return `${question.label}: ${selected?.label ?? ""}`;
          })
          .join("\n"),
        message: `Diagnóstico inicial: ${diagnosis}`,
        consent_privacy_policy: consent,
        website,
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-pearl px-6 py-32 text-obsidian lg:px-16 lg:py-44">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <p className="font-ui text-xs font-semibold uppercase text-roseGold">
            Cronograma capilar
          </p>
          <h2 className="mt-4 font-display text-5xl leading-tight">
            Descubra o primeiro protocolo para o seu fio.
          </h2>
          <p className="mt-6 max-w-xl font-body text-sm leading-7 text-black/62">
            Três respostas ajudam a criar um diagnóstico inicial e deixam a conversa
            com a Carlu mais objetiva desde o primeiro contato.
          </p>
        </div>

        <div className="grid gap-7 lg:col-span-7">
          {questions.map((question, index) => (
            <fieldset key={question.id} className="border-t border-black/10 pt-6">
              <legend className="font-ui text-xs font-semibold uppercase text-black/52">
                0{index + 1} {question.label}
              </legend>
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {question.options.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={answers[question.id] === option.id}
                    onClick={() => setAnswers((current) => ({ ...current, [question.id]: option.id }))}
                    className={[
                      "rounded-md border px-4 py-3 text-left font-ui text-sm font-semibold transition duration-500",
                      answers[question.id] === option.id
                        ? "border-black bg-black text-pearl"
                        : "border-black/12 text-black/62 hover:border-roseGold hover:text-roseGold",
                    ].join(" ")}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </fieldset>
          ))}

          <div className="rounded-md border border-black/10 bg-white p-6">
            <p className="font-ui text-xs font-semibold uppercase text-roseGold">
              Diagnóstico inicial
            </p>
            <p className="mt-3 font-display text-3xl leading-tight">{diagnosis}</p>

            <div className="mt-6 hidden">
              <label>
                Site
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                />
              </label>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <label className="grid gap-2 font-ui text-xs font-semibold uppercase text-black/52">
                Nome
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Seu nome"
                  className="min-h-12 rounded-md border border-black/12 px-4 font-body text-sm normal-case tracking-normal outline-none transition duration-500 focus:border-roseGold"
                />
              </label>
              <label className="grid gap-2 font-ui text-xs font-semibold uppercase text-black/52">
                WhatsApp
                <input
                  value={whatsapp}
                  onChange={(event) => setWhatsapp(event.target.value)}
                  placeholder="DDD + número"
                  className="min-h-12 rounded-md border border-black/12 px-4 font-body text-sm normal-case tracking-normal outline-none transition duration-500 focus:border-roseGold"
                />
              </label>
            </div>

            <label className="mt-4 flex gap-3 font-body text-xs leading-5 text-black/60">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="mt-1 h-4 w-4 accent-black"
              />
              Autorizo o contato pelo WhatsApp e aceito o uso dos dados enviados para
              atendimento, conforme a política de privacidade.
            </label>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={submitLead}
                disabled={missingFields.length > 0 || status === "sending"}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-black px-6 font-ui text-sm font-semibold text-pearl transition duration-500 hover:bg-graphite disabled:cursor-not-allowed disabled:opacity-45"
              >
                <Send size={18} aria-hidden="true" />
                {status === "sending" ? "Enviando..." : "Enviar diagnóstico"}
              </button>
              <a
                href={buildWhatsAppQuoteUrl({ diagnosis })}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-black/12 px-6 font-ui text-sm font-semibold text-black transition duration-500 hover:border-roseGold hover:text-roseGold"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Conversar no WhatsApp
              </a>
            </div>

            {missingFields.length ? (
              <ul className="mt-4 grid gap-1 font-body text-sm text-black/58">
                {missingFields.map((field) => (
                  <li key={field}>{field}</li>
                ))}
              </ul>
            ) : null}
            {status === "sent" ? (
              <p className="mt-4 font-body text-sm text-moss">Diagnóstico enviado com segurança.</p>
            ) : null}
            {status === "error" ? (
              <p className="mt-4 font-body text-sm text-danger">
                Não foi possível enviar agora. Use o WhatsApp para continuar.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
