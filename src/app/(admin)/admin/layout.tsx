import Link from "next/link";
import SvgIcon from "@/component/icons/svg-icon";

// Admin layout - different styling and navigation
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Admin Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/admin" className="flex items-center space-x-2">
                <SvgIcon
                  className="h-8 w-8 text-blue-600 dark:text-blue-500"
                  variant="blue"
                  icon="Book"
                />
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Duramazwi Admin
                </span>
              </Link>
            </div>
            
            <nav className="flex items-center space-x-4">
              <Link
                href="/admin"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </Link>
              <Link
                href="/admin/entries"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Manage Entries
              </Link>
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                View Public Site
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
