import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#000000",
        pearl: "#F8F4EF",
        gold: "#D4AF37",
        roseGold: "#B76E79",
        champagne: "#F3E5AB",
        carbon: "#080808",
        graphite: "#121212",
        mist: "#EDE7DF",
        sage: "#6F7D5D",
        moss: "#243323",
        danger: "#B42318"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Montserrat", "sans-serif"],
        ui: ["Inter", "sans-serif"]
      },
      boxShadow: {
        goldGlow: "0 28px 90px rgba(212, 175, 55, 0.16)",
        roseGlow: "0 24px 70px rgba(183, 110, 121, 0.18)"
      }
    }
  },
  plugins: []
} satisfies Config;
