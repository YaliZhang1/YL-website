import ThemeSwitcher from "../components/ThemeSwitcher";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen transition-colors duration-200">
      <ThemeSwitcher />
      {children}
    </div>
  );
};
export default Layout;
