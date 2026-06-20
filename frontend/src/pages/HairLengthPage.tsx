import { HairLengthGuide } from "../components/pricing/HairLengthGuide";
import { PriceCalculator } from "../components/pricing/PriceCalculator";
import { pageMetadata } from "../features/seo/metadata";
import { Seo } from "../features/seo/Seo";

export function HairLengthPage() {
  return (
    <>
      <Seo {...pageMetadata.lengths} />
      <HairLengthGuide />
      <PriceCalculator />
    </>
  );
}
