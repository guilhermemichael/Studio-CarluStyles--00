import { services } from "../services/catalog";
import { env } from "../../lib/env";
import { absoluteUrl } from "./metadata";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Studio Carlu Styles",
    description:
      "Espaço de beleza especializado em cuidados capilares, tratamentos, químicas, finalizações e transformações.",
    url: env.siteUrl,
    image: absoluteUrl("/assets/brand/studio-carlu-logo.png"),
    sameAs: [env.instagramUrl],
    hasMap: env.googleMapsUrl,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Agendamento",
      url: env.whatsappUrl,
      availableLanguage: "Portuguese",
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
  };
}

export function serviceCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Serviços capilares Studio Carlu Styles",
    itemListElement: services.slice(0, 12).map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.shortDescription,
      },
    })),
  };
}
