const OFFICIAL_WHATSAPP_URL =
  "https://wa.me/5583981580195?text=Ol%25C3%25A1%252C+gostaria+de+agendar+um+hor%25C3%25A1rio%2521+";
const OFFICIAL_INSTAGRAM_URL =
  "https://www.instagram.com/studio_carlustyles?igsh=bjZyOWFqdW80cm9j";
const OFFICIAL_GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/TzdoJmZgWnTHzkNh9?g_st=ic";

export const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? "/api",
  whatsappUrl: import.meta.env.VITE_WHATSAPP_URL ?? OFFICIAL_WHATSAPP_URL,
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL ?? OFFICIAL_INSTAGRAM_URL,
  googleMapsUrl: import.meta.env.VITE_GOOGLE_MAPS_URL ?? OFFICIAL_GOOGLE_MAPS_URL,
};
