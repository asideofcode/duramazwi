"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();

  // Sync query with URL parameters
  useEffect(() => {
    const urlQuery = searchParams.get("q") || "";
    setQuery(urlQuery);
  }, [searchParams]);

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
