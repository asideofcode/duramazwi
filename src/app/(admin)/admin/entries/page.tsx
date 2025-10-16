import { Metadata } from "next/types";
import Link from "next/link";
import SvgIcon from "@/component/icons/svg-icon";

export const metadata: Metadata = {
  title: "Manage Entries - Admin - Duramazwi",
  description: "Add, edit, and manage dictionary entries",
};

export default function ManageEntriesPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Manage Dictionary Entries
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Add, edit, and organize dictionary content
          </p>
        </div>
        <button
          disabled
          className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <SvgIcon className="h-4 w-4" variant="light" icon="Plus" />
          <span>Add New Entry</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="search" className="sr-only">
              Search entries
            </label>
            <div className="relative">
              <SvgIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                variant="default"
                icon="Search"
              />
              <input
                type="text"
                id="search"
                placeholder="Search dictionary entries..."
                disabled
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
              />
            </div>
          </div>
          <select
            disabled
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
          >
            <option>All Categories</option>
            <option>Nouns</option>
            <option>Verbs</option>
            <option>Adjectives</option>
          </select>
        </div>
      </div>

      {/* Entries Table Placeholder */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Dictionary Entries
          </h3>
        </div>
        
        <div className="p-6">
          <div className="text-center py-12">
            <SvgIcon
              className="h-16 w-16 text-gray-400 mx-auto mb-4"
              variant="default"
              icon="Book"
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Entry Management Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The dictionary entry management interface will be implemented here.
              This will include features for:
            </p>
            <div className="text-left max-w-md mx-auto space-y-2 text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <SvgIcon className="h-4 w-4" variant="default" icon="Plus" />
                <span>Adding new dictionary entries</span>
              </div>
              <div className="flex items-center space-x-2">
                <SvgIcon className="h-4 w-4" variant="default" icon="Search" />
                <span>Searching and filtering entries</span>
              </div>
              <div className="flex items-center space-x-2">
                <SvgIcon className="h-4 w-4" variant="default" icon="Book" />
                <span>Editing existing definitions</span>
              </div>
              <div className="flex items-center space-x-2">
                <SvgIcon className="h-4 w-4" variant="default" icon="Toggle" />
                <span>Managing entry status and visibility</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Dashboard */}
      <div className="flex justify-start">
        <Link
          href="/admin"
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          <SvgIcon className="h-4 w-4" variant="default" icon="Book" />
          <span>Back to Dashboard</span>
        </Link>
      </div>
    </div>
  );
}
