import { ArrowRight } from "lucide-react";

import { productImages } from "../../features/services/catalog";
import { ButtonLink } from "../ui/Button";

export function GalleryPreview() {
  const preview = productImages.slice(0, 6);

  return (
    <section className="bg-black px-4 py-20 text-pearl sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-ui text-sm font-semibold text-gold">Galeria</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Biblioteca visual para uma marca autoral.
            </h2>
          </div>
          <ButtonLink href="/galeria" tone="ghost" icon={<ArrowRight size={18} aria-hidden="true" />}>
            Ver galeria
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((image) => (
            <figure key={image.src} className="aspect-[4/3] overflow-hidden rounded-lg border border-pearl/10 bg-white/[0.035]">
              <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
