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
    title: "Studio Carlu Styles | Cabeleireira em São Francisco PB",
    description:
      "Studio de beleza em São Francisco, PB, com Carlu: mais de 15 anos de experiência, especialização em loiros, tratamentos, químicas e finalizações.",
    path: "/",
    image: defaultImage,
  },
  services: {
    title: "Serviços capilares em São Francisco PB | Studio Carlu Styles",
    description:
      "Conheça luzes, mechas, morena iluminada, tratamentos, progressiva, selagem e finalizações com avaliação técnica da Carlu.",
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
    title: "Sobre a Carlu | 15+ anos como cabeleireira",
    description:
      "Conheça Carlu, cabeleireira em São Francisco, PB, com mais de 15 anos de experiência e atualização profissional constante.",
    path: "/sobre",
    image: defaultImage,
  },
  location: {
    title: "Localização em São Francisco PB | Studio Carlu Styles",
    description:
      "Atendimento em São Francisco, Paraíba. Agende pelo WhatsApp, veja como chegar e acompanhe o Instagram oficial da Studio Carlu Styles.",
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
