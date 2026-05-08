import { formatCurrencyBRL } from "../../lib/formatCurrency";
import { hairLengths, type HairLengthId, type Service } from "../services/catalog";

export function getHairLengthLabel(length: HairLengthId): string {
  return hairLengths.find((item) => item.id === length)?.label ?? length;
}

export function getServiceDisplayPrice(service: Service): string {
  if (service.priceMode === "evaluation") {
    return "Sob avaliação";
  }

  if (service.priceMode === "range" && service.minPrice && service.maxPrice) {
    return `${formatCurrencyBRL(service.minPrice)} a ${formatCurrencyBRL(
      service.maxPrice,
    )}`;
  }

  if (service.priceMode === "fixed" && service.fixedPrice) {
    const price = formatCurrencyBRL(service.fixedPrice);
    return service.prefix ? `${service.prefix} ${price}` : price;
  }

  return "Por comprimento";
}

export function calculateServicePrice(
  service: Service,
  length: HairLengthId,
): string {
  if (service.priceMode === "evaluation") {
    return "Sob avaliação";
  }

  if (service.priceMode === "range" && service.minPrice && service.maxPrice) {
    return `${formatCurrencyBRL(service.minPrice)} a ${formatCurrencyBRL(
      service.maxPrice,
    )}`;
  }

  if (service.priceMode === "fixed" && service.fixedPrice) {
    const price = formatCurrencyBRL(service.fixedPrice);
    return service.prefix ? `${service.prefix} ${price}` : price;
  }

  const item = service.prices?.find((price) => price.length === length);
  return item ? formatCurrencyBRL(item.value) : "Consulte o valor";
}
