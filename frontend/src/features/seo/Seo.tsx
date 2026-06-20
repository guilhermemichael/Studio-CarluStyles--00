import { Helmet } from "react-helmet-async";

import { env } from "../../lib/env";
import { absoluteUrl, type SeoMetadata } from "./metadata";

type SeoProps = SeoMetadata & {
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function Seo({ title, description, path, image, structuredData }: SeoProps) {
  const canonical = absoluteUrl(path);
  const imageUrl = image ? absoluteUrl(image) : absoluteUrl("/assets/brand/studio-carlu-logo.png");
  const data = Array.isArray(structuredData) ? structuredData : structuredData ? [structuredData] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {data.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
      <meta name="instagram" content={env.instagramUrl} />
    </Helmet>
  );
}
