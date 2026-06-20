import { AboutCarlu } from "../components/brand/AboutCarlu";
import { EditorialGallery } from "../components/home/EditorialGallery";
import { EditorialServices } from "../components/home/EditorialServices";
import { FinalExperienceCta } from "../components/home/FinalExperienceCta";
import { HairScheduleQuiz } from "../components/home/HairScheduleQuiz";
import { HeroSection } from "../components/home/HeroSection";
import { LocalSeoSection } from "../components/home/LocalSeoSection";
import { ManifestoSection } from "../components/home/ManifestoSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { HairLengthGuide } from "../components/pricing/HairLengthGuide";
import { PriceCalculator } from "../components/pricing/PriceCalculator";
import { pageMetadata } from "../features/seo/metadata";
import { Seo } from "../features/seo/Seo";
import { localBusinessSchema, serviceCatalogSchema } from "../features/seo/structuredData";

export function HomePage() {
  return (
    <>
      <Seo
        {...pageMetadata.home}
        structuredData={[localBusinessSchema(), serviceCatalogSchema()]}
      />
      <HeroSection />
      <ManifestoSection />
      <EditorialServices />
      <PriceCalculator />
      <HairScheduleQuiz />
      <HairLengthGuide />
      <EditorialGallery />
      <TestimonialsSection />
      <AboutCarlu />
      <LocalSeoSection />
      <FinalExperienceCta />
    </>
  );
}
