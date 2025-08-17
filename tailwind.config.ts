// import type { Config } from "tailwindcss";

// const config: Config = {
//   darkMode: "class",
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "./ui/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         brand: {
//           text: "var(--color-text)",
//           textHover: "var(--color-text-hover)",
//           secondary: "var(--color-secondary)",
//           bg: "var(--color-bg)",
//           bgSecondary: "var(--color-bg-secondary)",
//           card: "var(--color-card)",
//           cardHover: "var(--color-card-hover)",
//         },
//       },
//       fontFamily: {
//         sans: ["Inter", "sans-serif"],
//         heading: ["Poppins", "sans-serif"],
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;
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
        brand: {
          // 原有的品牌色
          text: "var(--color-text)",
          textHover: "var(--color-text-hover)",
          secondary: "var(--color-secondary)",
          bg: "var(--color-bg)",
          bgSecondary: "var(--color-bg-secondary)",
          card: "var(--color-card)",
          cardHover: "var(--color-card-hover)", 
          // 新增的配色方案
          light: "var(--color-brand-light)",
          blue1: "var(--color-brand-blue1)",
          blue2: "var(--color-brand-blue2)",
          blue3: "var(--color-brand-blue3)",
          dark: "var(--color-brand-dark)",
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