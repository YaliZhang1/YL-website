import React from "react";
import { Toaster as SonnerToaster } from "sonner";
import { useTheme } from "../contexts/ThemeContext";

const ThemedToaster: React.FC = () => {
  const { theme } = useTheme();

  return (
    <SonnerToaster
      position="top-right"
      theme={theme} // Automatically switch based on the current theme
      toastOptions={{
        style: {
          background: theme === "dark" ? "#374151" : "#ffffff",
          color: theme === "dark" ? "#f9fafb" : "#111827",
          border: theme === "dark" ? "1px solid #4b5563" : "1px solid #e5e7eb",
        },
        className: "sonner-toast",
        descriptionClassName: "sonner-toast-description",
      }}
      closeButton
      richColors
    />
  );
};
export default ThemedToaster;
