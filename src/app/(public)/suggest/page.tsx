import SearchBar from "@/component/search-bar.component";
import SuggestPage from "./SuggestPage";
import { createMetadata } from "@/utils/metadata";

export const dynamic = "force-static";
export const revalidate = false; // Forces static rendering

export const metadata = createMetadata({
  title: "Make a suggestion | Shona Dictionary",
  description: "Help us grow and improve our Shona dictionary by sharing your suggestions for new words, corrections, or additional details.",
});

export default function SuggestPageWrapper() {
  return (
    <div className="theme-text">
      <div id="search-bar">
        <SearchBar />
      </div>
      <SuggestPage />
    </div>
  );
}
