"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import SvgIcon from "@/component/icons/svg-icon";

interface SimpleSearchBarProps {
  placeholder?: string;
  className?: string;
  initialQuery?: string;
}

export default function SimpleSearchBar({ 
  placeholder = "Search Shona meanings or get translations.",
  className = "",
  initialQuery = ""
}: SimpleSearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Update local state when initialQuery changes
  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    // If input is already focused, trigger search
    e.preventDefault();
    if (query.trim()) {
      router.push(`/?q=${encodeURIComponent(query.trim())}`);
    } else {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Handle Enter key and iOS "Done" button
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch(e as any);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`mb-6 ${className}`}>
      <div className="theme-input flex">
        <input
          ref={inputRef}
          type="search"
          className="peer w-full bg-surface outline-none placeholder:text-sm theme-text-sub1"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          enterKeyHint="search"
          required
        />
        <button 
          type="submit"
          onClick={handleButtonClick}
          className="h-6 w-6 theme-text-sub1" 
          title="Search word"
        >
          <SvgIcon icon="Search" />
        </button>
      </div>
    </form>
  );
}
