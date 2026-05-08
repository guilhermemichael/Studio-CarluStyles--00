export const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? "/api",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER ?? "",
  instagramUrl:
    import.meta.env.VITE_INSTAGRAM_URL ??
    "https://www.instagram.com/studio_carlustyles",
  googleMapsUrl: import.meta.env.VITE_GOOGLE_MAPS_URL ?? "",
};
