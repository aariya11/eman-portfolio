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
        black: "#000000",
        white: "#ffffff",
        stevenMuted: "rgba(255, 255, 255, 0.45)",
        stevenDim: "rgba(255, 255, 255, 0.70)",
      },
      fontFamily: {
        editorial: ["var(--font-editorial)", "Newsreader", "Georgia", "serif"],
        syne: ["var(--font-syne)", "Syne", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
