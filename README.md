# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

---

## 安装依赖
npm install react-router-dom
npm install --save-dev @types/react-router-dom

## 额外说明

- 我把最小可运行的功能放在模板里：React Query、Sonner（toast）、简单 Tooltip Provider。
- 如果你使用 shadcn/ui 或 Radix，你可以用它们的 Tooltip/Toaster 替换我提供的占位实现。
- 记得在 `tsconfig.json` 中设置好 `jsx` 为 "react-jsx"（Vite + React 18 默认）并把路径别名（比如 `@`）配置好，如果你使用 `@`。

---

## 1

- 刚开始我的项目同时有 tailwind.config.js，tailwind.config.ts,但是我正确的 tailwind 设置是放在 tailwind.config.ts 文件夹里面的。导致我不管如何修改代码 tailwindcss 的效果都无法实现。浪费了我整一天的时间。直到我删掉了 tailwind.config.js 文件夹。所有的样式都正确了。因为系统会先读取 tailwind.config.js 里面的设置。

## 2
postcss.config.cjs和postcss.config.js文件的功能也是一样的，我后面删除了postcss.config.cjs文件。
