import Loading from "@/component/atom/loader.component";
import SvgIcon from "@/component/icons/svg-icon";
import { useSearch } from "@/context/search-context";
import { useRouter } from "next/navigation"; // Import hooks
import React from "react";
/**
 * Search bar
 *
 */

export default function SearchBar({}: // keyword,
// status,
// search,
// setKeyword = () => {},
{
  className?: string;
  // status: "idle" | "loading" | "failed" | "success";
  // keyword: string;
  // setKeyword: React.Dispatch<React.SetStateAction<string>>;
  // search: (q: string) => void;
}) {
  const { status, query } = useSearch();
  const [keyword, setKeyword] = React.useState<string>(query);

  const router = useRouter();

  const search = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    globalThis.gtag?.("event", "search_requested", {
      search_term: keyword,
    });
    router.push(`/?q=${keyword}`); // Navigate to the route with the search query
  };

  React.useEffect(() => {
    setKeyword(query);
  }, [query]);

  return (
    <form onSubmit={search}>
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
