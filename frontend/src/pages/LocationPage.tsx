import { LocationCta } from "../components/location/LocationCta";
import { pageMetadata } from "../features/seo/metadata";
import { Seo } from "../features/seo/Seo";
import { localBusinessSchema } from "../features/seo/structuredData";

export function LocationPage() {
  return (
    <>
      <Seo {...pageMetadata.location} structuredData={localBusinessSchema()} />
      <LocationCta />
    </>
  );
}
