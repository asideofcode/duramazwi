"use client";

import React, { createContext, useContext, useState } from "react";

type Status = "idle" | "loading" | "success" | "failed";
type SetStatus = React.Dispatch<React.SetStateAction<Status>>;
type SetQuery = React.Dispatch<React.SetStateAction<string>>;
type SearchContextValue = {
  status: Status;
  setStatus: SetStatus;
  query: string;
  setQuery: SetQuery;
};

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<Status>("idle");
  const [query, setQuery] = useState<string>("");

  return (
    <SearchContext.Provider value={{ status, setStatus, query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch(): SearchContextValue {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
