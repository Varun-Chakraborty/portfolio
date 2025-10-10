"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

function useFetchTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [status, setStatus] = useState<"loading" | "idle">("loading");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") as Theme || "dark");
    setStatus("idle");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark" ||
        (theme === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, [theme]);

  return { theme, status, setTheme };
}

export interface ThemeCtx {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeCtx = createContext<ThemeCtx | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, status, setTheme } = useFetchTheme();
  const [prefersDark, setPrefersDark] = useState<boolean>(false);
  
  useEffect(() => {
    setPrefersDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);
  
  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark" || (theme === "system" && prefersDark)
    );
    localStorage.setItem("theme", theme);
  }, [prefersDark, theme]);
  
  function toggleTheme() {
    if (status == "loading") return;
    const nTheme = theme === "dark" ? "system" : theme === "system" ? "light" : "dark";
    setTheme(nTheme);
  }

  return (
    <ThemeCtx.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeCtx);
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
