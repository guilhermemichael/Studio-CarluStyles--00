import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0E0E0E",
        pearl: "#F5F1EA",
        gold: "#A88A5A",
        roseGold: "#B77E72",
        champagne: "#D8C7A3",
        carbon: "#151515",
        graphite: "#202020",
        mist: "#E8E0D6",
        taupe: "#8A7E72",
        sage: "#6F7D5D",
        moss: "#243323",
        danger: "#B42318"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        accent: ["Instrument Serif", "serif"],
        body: ["Inter", "sans-serif"],
        ui: ["Inter", "sans-serif"]
      },
      boxShadow: {
        goldGlow: "0 28px 90px rgba(168, 138, 90, 0.12)",
        roseGlow: "0 24px 70px rgba(183, 126, 114, 0.14)"
      }
    }
  },
  plugins: []
} satisfies Config;
