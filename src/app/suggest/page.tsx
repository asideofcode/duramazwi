import SearchBar from "@/component/search-bar.component";
import SuggestPage from "./SuggestPage";

export const dynamic = "force-static";
export const revalidate = false; // Forces static rendering

export const metadata = {
  title: "Make a Suggestion - Shona Dictionary",
  description: "Help us grow and improve our Shona dictionary by sharing your suggestions for new words, corrections, or additional details.",
};

export default function SuggestPageWrapper() {
  return (
    <div className="theme-text">
      <SearchBar />
      <SuggestPage />
    </div>
  );
}
