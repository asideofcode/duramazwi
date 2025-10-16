"use client";

import React, { useEffect, useState } from "react";

export function useTheme() {
  const [darkMode, setDarkMode] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Just track system preference for UI state - Tailwind handles the actual theming
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    
    const updateDarkMode = (e: MediaQueryList | MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };

    // Set initial state
    updateDarkMode(media);
    setIsHydrated(true);

    // Listen for changes
    media.addEventListener('change', updateDarkMode);
    return () => media.removeEventListener('change', updateDarkMode);
  }, []);

  // No-op toggle for now - could be used for session-only overrides if needed
  const toggleTheme = () => {
    globalThis.gtag?.("event", "theme_toggle", {
      theme: darkMode ? "light" : "dark",
    });
  };

  return { toggleTheme, darkMode, isHydrated };
}
