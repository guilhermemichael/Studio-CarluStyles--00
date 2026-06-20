import { GalleryPreview } from "../components/gallery/GalleryPreview";
import { ProductLab } from "../components/gallery/ProductLab";
import { pageMetadata } from "../features/seo/metadata";
import { Seo } from "../features/seo/Seo";

export function GalleryPage() {
  return (
    <>
      <Seo {...pageMetadata.gallery} />
      <ProductLab />
      <GalleryPreview />
    </>
  );
}
