import Appbar from "@/component/appbar.component";
import { SearchProvider } from "@/context/search-context";

// Public layout - clean layout with just navbar
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SearchProvider>
      <Appbar />
      <main className="max-w-4xl mx-auto px-4 pb-16 min-h-screen">
        {children}
      </main>
    </SearchProvider>
  );
}
