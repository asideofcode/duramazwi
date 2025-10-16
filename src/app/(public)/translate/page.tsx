import { Metadata } from "next/types";
import SearchBar from "@/component/search-bar.component";
import TranslateClient from "./translate-client";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Translate - Duramazwi",
  description: "Translate text between Shona and English",
};

export default function TranslatePage() {
  return (
    <div>
      <div id="search-bar">
        <SearchBar />
      </div>
      <div className="py-8">
        <TranslateClient />
      </div>
    </div>
  );
}
