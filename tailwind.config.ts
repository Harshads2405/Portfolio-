import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"]
      },
      colors: {
        ink: "#05070d",
        panel: "#0a0f1c",
        line: "#1c2940",
        electric: "#5ea8ff",
        violet: "#9b7cff",
        cyan: "#4de3ff"
      },
      boxShadow: {
        glow: "0 0 50px rgba(94,168,255,.12)"
      }
    }
  },
  plugins: []
};

export default config;