import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // 通过 class 切换暗黑模式
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 扫描这些文件里的类名
  ],
  theme: {
    extend: {
      colors: {
        // 您的自定义颜色
        'background-light': '#ffffff',
        'background-dark': '#1a1a1a',
        'text-light': '#333333',
        'text-dark': '#ffffff',
        'light-primary': '#3b82f6',
        'dark-primary': '#60a5fa',
        'light-secondaryText': '#666666',
        'dark-secondaryText': '#cccccc',
      },
      // 你也可以扩展字体、间距等
    },
  },
  plugins: [
    // 这里可以添加你需要的 Tailwind 插件
  ],
};

export default config;
