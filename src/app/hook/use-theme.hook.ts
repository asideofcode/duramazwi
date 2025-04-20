"use client";

import React, { useCallback, useEffect } from "react";
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

    // Toggle theme and persist to storage
    const updateTheme = useCallback((newTheme: string) => {
      storage.setValue(newTheme);
      applyTheme(newTheme);
  
      globalThis.gtag?.("event", "theme_toggle", {
        theme: newTheme,
      });
    }, [storage]);

    const toggleTheme = () => {
      const newTheme = storage.value === "light" ? "dark" : "light";
      updateTheme(newTheme);
    };
  
  
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
  
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? "dark" : "light");
      }
    };
  
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, [updateTheme]);
  

  // Initialize theme on mount
  useEffect(() => {
    applyTheme(storage.value);
  }, [storage.value]);

  return { toggleTheme, darkMode };
}
