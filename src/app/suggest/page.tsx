import SearchBar from "@/component/search-bar.component";
import SuggestPage from "./SuggestPage";

export const dynamic = "force-static";
export const revalidate = false; // Forces static rendering

export default function SuggestPageWrapper() {
  return (
    <div className="theme-text">
      <SearchBar />
      <SuggestPage />
    </div>
  );
}
