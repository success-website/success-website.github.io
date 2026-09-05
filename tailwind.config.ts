import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#D2251F",
          "primary-dark": "#500404",
          "primary-hover": "#B31C17",
          secondary: "#FF604B",
          "secondary-dark": "#E0372C",
          tertiary: "rgba(255, 96, 75, 0.18)",
          dark: "#0F172A",
          surface: "#F8F9FA",
          "surface-alt": "#F1F5F9",
          muted: "#64748B",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        urbanist: ["var(--font-urbanist)", "Urbanist", "sans-serif"],
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
