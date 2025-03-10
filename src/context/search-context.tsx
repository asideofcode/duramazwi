"use client";

import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext('');

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [query, setQuery] = useState<string>("");

  return (
    <SearchContext.Provider value={{ status, setStatus, query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
