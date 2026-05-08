import { AboutCarlu } from "../components/brand/AboutCarlu";
import { GalleryPreview } from "../components/gallery/GalleryPreview";
import { ProductLab } from "../components/gallery/ProductLab";
import { AuthorityStrip } from "../components/home/AuthorityStrip";
import { HeroSection } from "../components/home/HeroSection";
import { LocationCta } from "../components/location/LocationCta";
import { HairLengthGuide } from "../components/pricing/HairLengthGuide";
import { PriceCalculator } from "../components/pricing/PriceCalculator";
import { ServicesPreview } from "../components/services/ServicesPreview";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AuthorityStrip />
      <ServicesPreview />
      <HairLengthGuide />
      <PriceCalculator />
      <ProductLab />
      <AboutCarlu />
      <GalleryPreview />
      <LocationCta />
    </>
  );
}
