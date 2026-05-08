import { env } from "./env";

type WhatsAppPayload = {
  name?: string;
  service?: string;
  hairLength?: string;
};

export function buildWhatsAppMessage(payload: WhatsAppPayload): string {
  const lines = [
    "Olá, vim pelo site da Studio Carlu Styles e gostaria de agendar uma avaliação.",
  ];

  if (payload.name) {
    lines.push(`Meu nome é ${payload.name}.`);
  }

  if (payload.service) {
    lines.push(`Tenho interesse em: ${payload.service}.`);
  }

  if (payload.hairLength) {
    lines.push(`Meu cabelo é: ${payload.hairLength}.`);
  }

  return encodeURIComponent(lines.join("\n"));
}

export function buildWhatsAppUrl(payload: WhatsAppPayload): string {
  const message = buildWhatsAppMessage(payload);
  const number = env.whatsappNumber.replace(/\D/g, "");

  if (!number) {
    return `https://wa.me/?text=${message}`;
  }

  return `https://wa.me/${number}?text=${message}`;
}
