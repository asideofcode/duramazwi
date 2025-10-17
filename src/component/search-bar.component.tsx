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
  const inputRef = React.useRef<HTMLInputElement>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();


  const search = function (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) {
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

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // If input is not focused, focus it instead of submitting
    if (inputRef.current && document.activeElement !== inputRef.current) {
      e.preventDefault();
      inputRef.current.focus();
    } else {
      // If input is already focused, proceed with search
      search(e);
    }
  };

  React.useEffect(() => {
    setKeyword(query);
  }, [query]);

  return (
    <>
    <form onSubmit={search} className="mb-6">
      <div className="theme-input flex ">
        <input
          ref={inputRef}
          className="peer w-full bg-surface outline-none placeholder:text-sm theme-text-sub1"
          placeholder="Search Shona meanings or get translations."
          required={true}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          value={keyword}
        />
        {
          status === "loading" 
            ?
          <Loading className="h-6 w-6"/>
            : 
          (
            <button className="h-6 w-6 theme-text-sub1" title="Search word" onClick={handleButtonClick}>
              <SvgIcon icon={"Search"}/>
            </button>
          )
        }
      </div>
    </form>
    <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </>
  );
}
