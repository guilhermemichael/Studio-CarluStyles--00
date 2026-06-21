import { useMemo, useState } from "react";

import { productImages } from "../../features/services/catalog";
import { ResponsiveImage } from "../ui/ResponsiveImage";

const filters = ["Todos", "Loiras", "Morena iluminada", "Corte", "Tratamento", "Finalização"] as const;

const galleryItems = productImages.map((image, index) => ({
  ...image,
  tag: filters[(index % (filters.length - 1)) + 1],
}));

export function GalleryPreview() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Todos");
  const visibleItems = useMemo(
    () =>
      activeFilter === "Todos"
        ? galleryItems
        : galleryItems.filter((item) => item.tag === activeFilter),
    [activeFilter],
  );

  return (
    <section className="bg-obsidian px-6 py-32 text-pearl lg:px-16 lg:py-44">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-4xl">
          <p className="font-ui text-xs font-semibold uppercase text-gold">
            Galeria
          </p>
          <h2 className="mt-4 font-display text-5xl leading-tight">
            Referências organizadas por intenção visual.
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={[
                "rounded-md border px-4 py-2 font-ui text-xs uppercase transition duration-500",
                activeFilter === filter
                  ? "border-gold bg-gold text-black"
                  : "border-pearl/12 text-pearl/58 hover:border-gold hover:text-gold",
              ].join(" ")}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleItems.map((image) => (
            <figure key={`${image.src}-${image.tag}`} className="relative">
              <ResponsiveImage
                src={image.src}
                alt={`${image.alt} - ${image.tag}`}
                className="aspect-[4/5] rounded-md border border-pearl/10"
                imageClassName="transition duration-700 hover:scale-[1.02]"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              <figcaption className="absolute bottom-3 left-3 rounded-sm bg-obsidian/72 px-3 py-2 font-ui text-xs uppercase text-pearl/72">
                #{image.tag.replace(" ", "")}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
