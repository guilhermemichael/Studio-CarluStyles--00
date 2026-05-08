import { PriceCalculator } from "../components/pricing/PriceCalculator";
import { ServiceCard } from "../components/services/ServiceCard";
import { services } from "../features/services/catalog";

export function PricingPage() {
  return (
    <>
      <PriceCalculator />
      <section className="bg-black px-4 py-16 text-pearl sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-ui text-sm font-semibold text-gold">Tabela dinâmica</p>
          <h1 className="mt-3 font-display text-5xl leading-tight sm:text-6xl">Serviços e valores</h1>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
