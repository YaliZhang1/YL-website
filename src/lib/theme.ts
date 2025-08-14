export const themeColors = {
  light: {
    text: "#1E293B",
    hover: "#0F172A",
    secondary: "#64748B",
    bg: "#F8FAFC",
    primary: "#2563EB",
    primaryHover: "#1D4ED8",
  },
  dark: {
    text: "#F1F5F9",
    hover: "#E2E8F0",
    secondary: "#94A3B8",
    bg: "#0F172A",
    primary: "#3B82F6",
    primaryHover: "#60A5FA",
  },
};

export type ThemeMode = keyof typeof themeColors; // "light" | "dark"
