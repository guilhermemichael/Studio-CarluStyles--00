import { env } from "./env";

type WhatsAppPayload = {
  message?: string;
  name?: string;
  service?: string;
  hairLength?: string;
  estimate?: string;
  volume?: string;
  goal?: string;
  requestedDate?: string;
  requestedTime?: string;
  diagnosis?: string;
};

const OFFICIAL_WHATSAPP_NUMBER = "5583981580195";

export function buildWhatsAppMessage(payload: WhatsAppPayload): string {
  if (payload.message) {
    return encodeURIComponent(payload.message);
  }

  const lines = [
    "Olá, vim pelo site da Studio Carlu Styles e gostaria de verificar disponibilidade para um atendimento.",
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

  if (payload.volume) {
    lines.push(`Volume/densidade: ${payload.volume}.`);
  }

  if (payload.goal) {
    lines.push(`Objetivo: ${payload.goal}.`);
  }

  if (payload.estimate) {
    lines.push(`A estimativa exibida foi: ${payload.estimate}.`);
  }

  if (payload.diagnosis) {
    lines.push(`Diagnóstico inicial do quiz: ${payload.diagnosis}.`);
  }

  if (payload.requestedDate || payload.requestedTime) {
    const date = payload.requestedDate || "dia a combinar";
    const time = payload.requestedTime || "horário a combinar";
    lines.push(`Tenho interesse no dia ${date}, às ${time}. Está disponível?`);
  }

  return encodeURIComponent(lines.join("\n"));
}

export function buildWhatsAppUrl(payload: WhatsAppPayload): string {
  if (Object.keys(payload).length === 0 && env.whatsappUrl) {
    return env.whatsappUrl;
  }

  return buildWhatsAppQuoteUrl(payload);
}

export function buildWhatsAppQuoteUrl(payload: WhatsAppPayload): string {
  const message = buildWhatsAppMessage(payload);
  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${message}`;
}
