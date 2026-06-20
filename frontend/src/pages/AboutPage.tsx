import { AboutCarlu } from "../components/brand/AboutCarlu";
import { ProductLab } from "../components/gallery/ProductLab";
import { pageMetadata } from "../features/seo/metadata";
import { Seo } from "../features/seo/Seo";
import { localBusinessSchema } from "../features/seo/structuredData";

export function AboutPage() {
  return (
    <>
      <Seo {...pageMetadata.about} structuredData={localBusinessSchema()} />
      <AboutCarlu />
      <ProductLab />
    </>
  );
}
