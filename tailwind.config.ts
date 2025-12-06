import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{mdx,md}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        foreground: "var(--fg)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        card: "var(--card)",
        border: "var(--border)",
        ring: "var(--ring)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui"]
      },
      boxShadow: {
        glow: "0 20px 80px -32px rgba(124, 164, 255, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
