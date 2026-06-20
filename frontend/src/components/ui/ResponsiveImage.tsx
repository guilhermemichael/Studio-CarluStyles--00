import { useState } from "react";

import { cn } from "../../lib/cn";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  avifSrcSet?: string;
  webpSrcSet?: string;
  srcSet?: string;
  sizes?: string;
};

export function ResponsiveImage({
  src,
  alt,
  className,
  imageClassName,
  avifSrcSet,
  webpSrcSet,
  srcSet,
  sizes,
}: ResponsiveImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-white/[0.035]", className)}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-[linear-gradient(110deg,rgba(245,241,234,0.05),rgba(245,241,234,0.12),rgba(245,241,234,0.05))]" />
      )}
      <picture>
        {avifSrcSet ? <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} /> : null}
        {webpSrcSet ? <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} /> : null}
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={cn(
            "h-full w-full object-cover opacity-0 transition duration-700",
            loaded ? "opacity-100" : "",
            imageClassName,
          )}
        />
      </picture>
    </div>
  );
}
