import { Metadata } from "next/types";
import SearchBar from "@/component/search-bar.component";
import BrowseClient from "./browse-client";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Browse All Entries - Duramazwi",
  description: "Browse all dictionary entries alphabetically",
};

export default function BrowsePage() {
  return (
    <div>
      <div id="search-bar">
        <SearchBar />
      </div>
      <div className="py-8">
        <BrowseClient />
      </div>
    </div>
  );
}
