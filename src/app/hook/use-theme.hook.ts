"use client";

import { useEffect, useState } from "react";

export type ThemePreference = "device" | "light" | "dark";

const THEME_STORAGE_KEY = "theme";
const themeOrder: ThemePreference[] = ["device", "light", "dark"];

function isThemePreference(value: string | null): value is ThemePreference {
  return value === "device" || value === "light" || value === "dark";
}

function getDeviceTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyThemePreference(theme: ThemePreference) {
  document.documentElement.dataset.theme = theme === "device" ? getDeviceTheme() : theme;
}

export function useTheme() {
  const [themePreference, setThemePreferenceState] = useState<ThemePreference>("device");
  const [prefersDark, setPrefersDark] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const initialTheme = isThemePreference(savedTheme) ? savedTheme : "device";
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const updateDarkMode = (e: MediaQueryList | MediaQueryListEvent) => {
      setPrefersDark(e.matches);
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (!isThemePreference(savedTheme) || savedTheme === "device") {
        document.documentElement.dataset.theme = e.matches ? "dark" : "light";
      }
    };

    setThemePreferenceState(initialTheme);
    applyThemePreference(initialTheme);
    updateDarkMode(media);
    setIsHydrated(true);

    media.addEventListener("change", updateDarkMode);
    return () => media.removeEventListener("change", updateDarkMode);
  }, []);

  const setThemePreference = (theme: ThemePreference) => {
    setThemePreferenceState(theme);
    applyThemePreference(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    globalThis.gtag?.("event", "theme_toggle", {
      theme,
    });
  };

  const cycleTheme = () => {
    const currentIndex = themeOrder.indexOf(themePreference);
    const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
    setThemePreference(nextTheme);
  };

  const resolvedTheme = themePreference === "device"
    ? prefersDark ? "dark" : "light"
    : themePreference;

  return {
    cycleTheme,
    darkMode: resolvedTheme === "dark",
    isHydrated,
    resolvedTheme,
    setThemePreference,
    themePreference,
    toggleTheme: cycleTheme,
  };
}
