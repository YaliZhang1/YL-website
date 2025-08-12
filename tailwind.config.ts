// import type { Config } from "tailwindcss";

// const config: Config = {
//   darkMode: "class", // 通过 class 切换暗黑模式
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}", // 扫描这些文件里的类名
//      "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}", // 如果用到 shadcn UI
//     "./node_modules/@radix-ui/react-*/*.js", // 保险起见扫描 Radix UI 依赖
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // 您的自定义颜色
//         'background-light': '#ffffff',
//         'background-dark': '#1a1a1a',
//         'text-light': '#333333',
//         'text-dark': '#ffffff',
//         'light-primary': '#3b82f6',
//         'dark-primary': '#60a5fa',
//         'light-secondaryText': '#666666',
//         'dark-secondaryText': '#cccccc',
//       },
//       // 你也可以扩展字体、间距等
//     },
//   },
//   plugins: [
//     // 这里可以添加你需要的 Tailwind 插件
//   ],
// };

// export default config;

import type { Config } from "tailwindcss"

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
        'background-light': '#ffffff',
        'background-dark': '#1a1a1a',
        'text-light': '#333333',
        'text-dark': '#ffffff',
        'light-primary': '#3b82f6',
        'dark-primary': '#60a5fa',
        'light-secondaryText': '#666666',
        'dark-secondaryText': '#cccccc',
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
}

export default config
