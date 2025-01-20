"use client";

import Loading from "@/component/atom/loader.component";
import SvgIcon from "@/component/icons/svg-icon";
import { useSearch } from "@/context/search-context";
import { useRouter, useSearchParams, usePathname} from "next/navigation";
import React from "react";

/**
 * Search bar
 *
 */
export default function SearchBar({}:
{
  className?: string;
}) {
  const { status, query } = useSearch();
  const [keyword, setKeyword] = React.useState<string>(query);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();


  const search = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    globalThis.gtag?.("event", "search_requested", {
      search_term: keyword,
    });

    // Shallow routing to avoid RSC
    if (pathname === "/") {
      const params = new URLSearchParams(searchParams.toString())
      params.set('q', keyword)
      window.history.pushState(null, '', `?${params.toString()}`)
    } else {
    // Complete routing
      router.push(`/?q=${keyword}`); 
    }
  };

  React.useEffect(() => {
    setKeyword(query);
  }, [query]);

  return (
    <form onSubmit={search} className="mb-6">
      <div className="theme-input flex ">
        <input
          className="peer w-full bg-surface outline-none placeholder:text-sm theme-text-sub1"
          placeholder="Search Shona meanings or get translations."
          required={true}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          value={keyword}
        />
        {status === "loading" ? (
          <Loading className="h-6 w-6" />
        ) : (
          <button className="h-6 w-6 theme-text-sub1" onClick={search}>
            <SvgIcon
              className="h-6 w-6 cursor-pointer hover:text-blue-500 hover:scale-110 transition-transform duration-200"
              icon={"Search"}
            />
          </button>
        )}
      </div>
    </form>
  );
}
