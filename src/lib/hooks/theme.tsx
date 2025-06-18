"use client";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

function useFetchTheme() {
  const [theme, setTheme] = useState<Theme>("light");
  const [status, setStatus] = useState<"loading" | "idle">("loading");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") as Theme);
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

export function useTheme() {
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
  }, [prefersDark, theme]);

  function toggleTheme() {
    if (status == "loading") return;
    const nTheme = theme === "dark" ? "system" : theme === "system" ? "light" : "dark";
    setTheme(nTheme);
    localStorage.setItem("theme", nTheme);
  }

  return { theme, toggleTheme };
}
