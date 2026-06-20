import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";

import { productImages } from "../../features/services/catalog";
import { ButtonLink } from "../ui/Button";
import { ResponsiveImage } from "../ui/ResponsiveImage";

const filters = ["Todos", "Loiras", "Morena iluminada", "Tratamento", "Finalização"] as const;

const galleryItems = productImages.slice(0, 10).map((image, index) => {
  const tag = filters[(index % (filters.length - 1)) + 1];
  const spans = [
    "sm:col-span-2 sm:row-span-2",
    "sm:col-span-1 sm:row-span-1",
    "sm:col-span-1 sm:row-span-2",
    "sm:col-span-2 sm:row-span-1",
  ];

  return {
    ...image,
    tag,
    className: spans[index % spans.length],
  };
});

export function EditorialGallery() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Todos");
  const visibleItems = useMemo(
    () =>
      activeFilter === "Todos"
        ? galleryItems
        : galleryItems.filter((item) => item.tag === activeFilter),
    [activeFilter],
  );

  return (
    <section className="bg-obsidian px-6 py-28 text-pearl lg:px-16 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Galeria
            </p>
            <h2 className="mt-4 font-display text-5xl leading-tight">
              Um mosaico de textura, técnica e intenção.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <ButtonLink href="/galeria" tone="ghost" icon={<ArrowRight size={18} aria-hidden="true" />}>
              Ver galeria
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={[
                "rounded-md border px-4 py-2 font-ui text-xs uppercase tracking-[0.14em] transition duration-500",
                activeFilter === filter
                  ? "border-gold bg-gold text-black"
                  : "border-pearl/12 text-pearl/58 hover:border-gold hover:text-gold",
              ].join(" ")}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-8 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-4 lg:auto-rows-[260px]">
          {visibleItems.map((item) => (
            <figure key={`${item.src}-${item.tag}`} className={`relative ${item.className}`}>
              <ResponsiveImage
                src={item.src}
                alt={`${item.alt} - ${item.tag}`}
                className="h-full rounded-md border border-pearl/10"
                imageClassName="transition duration-700 hover:scale-[1.02]"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              <figcaption className="absolute bottom-3 left-3 rounded-sm bg-obsidian/72 px-3 py-2 font-ui text-xs uppercase tracking-[0.16em] text-pearl/72">
                #{item.tag.replace(" ", "")}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
