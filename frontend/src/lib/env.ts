const OFFICIAL_WHATSAPP_URL =
  "https://wa.me/5583981580195?text=Ol%25C3%25A1%252C+gostaria+de+agendar+um+hor%25C3%25A1rio%2521+";
const OFFICIAL_INSTAGRAM_URL =
  "https://www.instagram.com/studio_carlustyles?igsh=bjZyOWFqdW80cm9j";
const OFFICIAL_GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/TzdoJmZgWnTHzkNh9?g_st=ic";
const DEFAULT_SITE_URL = "https://studio-carlu-styles.vercel.app";
const DEFAULT_ADMIN_URL = "/admin/";

export const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? "/api",
  siteUrl: import.meta.env.VITE_SITE_URL ?? DEFAULT_SITE_URL,
  whatsappUrl: import.meta.env.VITE_WHATSAPP_URL ?? OFFICIAL_WHATSAPP_URL,
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL ?? OFFICIAL_INSTAGRAM_URL,
  googleMapsUrl: import.meta.env.VITE_GOOGLE_MAPS_URL ?? OFFICIAL_GOOGLE_MAPS_URL,
  adminUrl: import.meta.env.VITE_ADMIN_URL ?? DEFAULT_ADMIN_URL,
};
