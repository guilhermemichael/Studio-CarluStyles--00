import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes";

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}
