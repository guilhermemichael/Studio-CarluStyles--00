import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0C",
        pearl: "#F5F1EA",
        gold: "#C5A059",
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
        goldGlow: "0 28px 90px rgba(197, 160, 89, 0.12)",
        roseGlow: "0 24px 70px rgba(183, 126, 114, 0.14)"
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.2, 0.8, 0.2, 1)"
      }
    }
  },
  plugins: []
} satisfies Config;
