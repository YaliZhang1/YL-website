import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 主要颜色映射到Nordic系统
        primary: "var(--nordic-primary)",
        secondary: "var(--nordic-secondary)",
        border: "hsl(var(--border))",
        text: "var( --color-text)",
        textHover: "var(--color-text-hover)",
        card: "var(--color-card)",
        cardHover: "var(--color-card-hover)",
        bg: "var(--color-bg)",
        textSecondary: "var(--color-text-secondary)",
        foreground: "hsl(var(--foreground))",
        nordic: {
          primary: "var(--nordic-primary)",
          secondary: "var(--nordic-secondary)",
          dark: "var(--nordic-dark)",
          darker: "var(--nordic-darker)",
          light: "var(--nordic-light)",
          bg: "var(--nordic-bg)",
          text: "var(--nordic-text)",
          cardBg: "var(--nordic-card-bg)",
          muted: "var(--nordic-muted)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
