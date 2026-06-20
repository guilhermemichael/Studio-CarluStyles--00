import { env } from "../../lib/env";

export type SeoMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

const defaultImage = "/assets/brand/studio-carlu-logo.png";

export const pageMetadata = {
  home: {
    title: "Studio Carlu Styles | Beleza técnica e cuidado premium",
    description:
      "Studio de beleza especializado em cuidados capilares, tratamentos, químicas, finalizações e transformações com atendimento personalizado.",
    path: "/",
    image: defaultImage,
  },
  services: {
    title: "Serviços capilares profissionais | Studio Carlu Styles",
    description:
      "Conheça serviços de finalização, tratamentos, químicas, luzes, mechas, progressiva, selagem e cuidados personalizados.",
    path: "/servicos",
    image: defaultImage,
  },
  pricing: {
    title: "Tabela de preços e calculadora | Studio Carlu Styles",
    description:
      "Consulte valores por serviço, comprimento do cabelo e estimativas para tratamentos, químicas e finalizações profissionais.",
    path: "/precos",
    image: "/assets/guide/hair-length-guide.png",
  },
  lengths: {
    title: "Tabela de tamanhos de cabelo | Studio Carlu Styles",
    description:
      "Entenda cabelo curto, médio, longo e extra longo para consultar serviços com preço por comprimento.",
    path: "/tabela-de-tamanhos",
    image: "/assets/guide/hair-length-guide.png",
  },
  gallery: {
    title: "Galeria de produtos e cuidados | Studio Carlu Styles",
    description:
      "Veja a biblioteca visual de produtos profissionais usados nos cuidados capilares da Studio Carlu Styles.",
    path: "/galeria",
    image: "/assets/products/product-01.jpg",
  },
  about: {
    title: "Sobre a profissional | Studio Carlu Styles",
    description:
      "Conheça a proposta da Studio Carlu Styles: técnica, sofisticação e cuidado personalizado em cada atendimento capilar.",
    path: "/sobre",
    image: defaultImage,
  },
  location: {
    title: "Localização e agendamento | Studio Carlu Styles",
    description:
      "Agende pelo WhatsApp, veja como chegar e acompanhe o Instagram oficial da Studio Carlu Styles.",
    path: "/localizacao",
    image: defaultImage,
  },
  privacy: {
    title: "Política de privacidade | Studio Carlu Styles",
    description:
      "Entenda como a Studio Carlu Styles trata dados enviados em formulários de contato e agendamento.",
    path: "/politica-de-privacidade",
    image: defaultImage,
  },
} satisfies Record<string, SeoMetadata>;

export function absoluteUrl(path: string): string {
  return new URL(path, env.siteUrl).toString();
}
