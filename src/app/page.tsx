import SearchBar from "@/component/search-bar.component";
import { Suspense } from "react";
import ResultsPage from "./ResultsPage";
import Loading from "@/component/atom/loader.component";

export const dynamic = "force-static";
export const revalidate = false; // Forces static rendering

export default async function HomePage({ searchParams }: { searchParams: { q?: string } }) {
  const { q } = await searchParams; // Extract query parameter
  const searchQuery = q || ""; // Extract query parameter

  return (
    <div>
      <SearchBar />
      <Suspense fallback={<LoadingFallback />}>
        {/* Pass query to the client component */}
        <ResultsPage searchQuery={searchQuery} />
      </Suspense>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-24">
      <Loading className="h-8 w-8" />
    </div>
  );
}
