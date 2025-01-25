import SearchBar from "@/component/search-bar.component";
import SuggestPage from "./SuggestPage";

export const dynamic = "force-static";
export const revalidate = false; // Forces static rendering

export const metadata = {
  title: "Make a suggestion | Shona Dictionary",
  description: "Help us grow and improve our Shona dictionary by sharing your suggestions for new words, corrections, or additional details.",
  keywords:
    "Shona dictionary, Shona words, Shona language, Shona definitions, meanings, learn Shona, Shona-English dictionary, Shona translation, Shona pronunciation",
  url: "https://dictionary.chishona.org/suggest",
  google: "notranslate",
};

export default function SuggestPageWrapper() {
  return (
    <div className="theme-text">
      <SearchBar />
      <SuggestPage />
    </div>
  );
}
