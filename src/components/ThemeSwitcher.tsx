import React, { useEffect, useState } from 'react';

 const ThemeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // 初始化时先看 localStorage
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    // 没保存，使用系统首选项
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 根据 isDark 添加或移除 class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // 监听系统主题变化，只有当用户没保存手动选择时才更新主题
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handler = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem('theme');
      if (!saved) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-blue-500 text-white dark:bg-gray-800 dark:text-yellow-300"
    >
      {isDark ? '切换到亮色模式' : '切换到暗黑模式'}
    </button>
  );
};

export default ThemeSwitcher;
