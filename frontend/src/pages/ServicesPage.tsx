import { serviceCategories, services, type ServiceCategoryId } from "../features/services/catalog";
import { ServiceCard } from "../components/services/ServiceCard";
import { pageMetadata } from "../features/seo/metadata";
import { Seo } from "../features/seo/Seo";
import { serviceCatalogSchema } from "../features/seo/structuredData";

const categoryOrder: ServiceCategoryId[] = [
  "quick",
  "finishing",
  "treatment",
  "chemical",
  "transformation",
];

export function ServicesPage() {
  return (
    <>
      <Seo {...pageMetadata.services} structuredData={serviceCatalogSchema()} />
      <section className="bg-black px-4 py-16 text-pearl sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-ui text-sm font-semibold text-gold">Catálogo</p>
          <h1 className="mt-3 font-display text-5xl leading-tight sm:text-6xl">Serviços Studio Carlu Styles</h1>
          <p className="mt-5 max-w-2xl font-body text-sm leading-7 text-pearl/65">
            Serviços rápidos, finalizações, tratamentos, químicas e transformações com
            preço claro e avaliação quando a técnica exige mais contexto.
          </p>

          <div className="mt-12 grid gap-12">
            {categoryOrder.map((category) => {
              const items = services.filter((service) => service.category === category);

              if (!items.length) {
                return null;
              }

              return (
                <section key={category}>
                  <h2 className="font-display text-4xl text-gold">{serviceCategories[category]}</h2>
                  <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((service) => (
                      <ServiceCard key={service.slug} service={service} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
