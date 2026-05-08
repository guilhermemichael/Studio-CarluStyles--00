import { Route, Routes } from "react-router-dom";

import { SiteShell } from "../components/layout/SiteShell";
import { AboutPage } from "../pages/AboutPage";
import { GalleryPage } from "../pages/GalleryPage";
import { HairLengthPage } from "../pages/HairLengthPage";
import { HomePage } from "../pages/HomePage";
import { LocationPage } from "../pages/LocationPage";
import { PricingPage } from "../pages/PricingPage";
import { PrivacyPolicyPage } from "../pages/PrivacyPolicyPage";
import { ServicesPage } from "../pages/ServicesPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route index element={<HomePage />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/precos" element={<PricingPage />} />
        <Route path="/tabela-de-tamanhos" element={<HairLengthPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/localizacao" element={<LocationPage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
      </Route>
    </Routes>
  );
}
