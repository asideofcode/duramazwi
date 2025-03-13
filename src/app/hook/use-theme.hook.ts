"use client";

import React, { useEffect } from "react";
import useLocalStorage from "./use-local-storage.hook";

export function useTheme() {
  const storage = useLocalStorage(
    "theme",
    globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const [darkMode, setDarkMode] = React.useState(true);

  const applyTheme = (theme: string) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  };

  // Initialize theme on mount
  useEffect(() => {
    applyTheme(storage.value);
  }, [storage.value]);

  // Toggle theme and persist to storage
  const toggleTheme = () => {
    const newTheme = storage.value === "light" ? "dark" : "light";
    storage.setValue(newTheme);
    applyTheme(newTheme);

    globalThis.gtag?.("event", "theme_toggle", {
      theme: newTheme,
    });
  };

  return { toggleTheme, darkMode };
}
