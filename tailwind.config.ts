import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05050f",
        surface: "#0c0c1d",
        surface2: "#12122a",
        border: "rgba(124,92,255,0.18)",
        primary: {
          DEFAULT: "#7c5cff",
          light: "#a78bfa",
          dark: "#5b3df0",
        },
        accent: {
          DEFAULT: "#22d3ee",
          pink: "#f472b6",
          gold: "#fbbf24",
        },
        muted: "#9292b8",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #7c5cff 0%, #22d3ee 100%)",
        "grad-warm": "linear-gradient(135deg, #f472b6 0%, #fbbf24 100%)",
        "grad-mix": "linear-gradient(135deg, #7c5cff 0%, #f472b6 100%)",
        "grad-radial-hero":
          "radial-gradient(circle at 30% 20%, rgba(124,92,255,0.25), transparent 50%), radial-gradient(circle at 80% 80%, rgba(34,211,238,0.18), transparent 50%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 30s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.08)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;