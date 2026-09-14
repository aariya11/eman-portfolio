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
        background: "var(--background)",
        foreground: "var(--foreground)",
        obsidian: {
          DEFAULT: "#070708",
          950: "#050506",
          900: "#0A0A0C",
          850: "#101014",
        },
        charcoal: {
          DEFAULT: "#16161B",
          light: "#212127",
          border: "#2A2A33",
        },
        ivory: {
          DEFAULT: "#F5F2EB",
          muted: "#9C9A92",
          dim: "#6B6963",
        },
        champagne: {
          DEFAULT: "#C9A96E",
          light: "#DFCA9D",
          dark: "#9E824A",
          muted: "rgba(201, 169, 110, 0.15)",
        },
        emerald: {
          institutional: "#2EC4B6",
        },
        crimson: {
          institutional: "#E71D36",
        }
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest: ".25em",
        extrawide: ".35em",
      },
      animation: {
        "fade-in": "fadeIn 1s ease forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
