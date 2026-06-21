import { env } from "../../lib/env";
import { services } from "../services/catalog";
import { absoluteUrl } from "./metadata";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Studio Carlu Styles",
    description:
      "Studio de beleza em São Francisco, Paraíba, comandado por Carlu, cabeleireira com mais de 15 anos de experiência, atualização profissional constante e especialização em loiros, tratamentos, químicas e finalizações.",
    url: env.siteUrl,
    image: absoluteUrl("/assets/brand/studio-carlu-logo.png"),
    sameAs: [env.instagramUrl],
    hasMap: env.googleMapsUrl,
    priceRange: "$$",
    openingHours: "Mo-Sa 08:00-18:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Joaquim Gabriel",
      addressLocality: "São Francisco",
      addressRegion: "PB",
      postalCode: "58818-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.62,
      longitude: -38.09,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Agendamento",
      url: env.whatsappUrl,
      availableLanguage: "Portuguese",
    },
    areaServed: {
      "@type": "City",
      name: "São Francisco, Paraíba",
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
