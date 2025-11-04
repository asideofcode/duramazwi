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
      <div className="flex flex-col min-h-screen">
        <Appbar />
        {children}
      </div>
    </SearchProvider>
  );
}
