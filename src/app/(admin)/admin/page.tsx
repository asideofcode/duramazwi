import { Metadata } from "next/types";
import Link from "next/link";
import SvgIcon from "@/component/icons/svg-icon";

export const metadata: Metadata = {
  title: "Admin Dashboard - Duramazwi",
  description: "Manage dictionary entries and content",
};

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage dictionary entries, content, and system settings
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <div className="flex items-center">
            <SvgIcon
              className="h-8 w-8 text-blue-600 dark:text-blue-500"
              variant="blue"
              icon="Book"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Total Entries
              </h3>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                Coming Soon
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <div className="flex items-center">
            <SvgIcon
              className="h-8 w-8 text-green-600 dark:text-green-500"
              variant="default"
              icon="Plus"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Recent Additions
              </h3>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                Coming Soon
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <div className="flex items-center">
            <SvgIcon
              className="h-8 w-8 text-purple-600 dark:text-purple-500"
              variant="default"
              icon="Search"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Search Queries
              </h3>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Dictionary Management
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Add, edit, and manage dictionary entries
          </p>
          <Link
            href="/admin/entries"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            <SvgIcon className="h-4 w-4" variant="light" icon="Book" />
            <span>Manage Entries</span>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Content Analytics
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            View usage statistics and popular searches
          </p>
          <button
            disabled
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-400 text-white rounded-md cursor-not-allowed"
          >
            <SvgIcon className="h-4 w-4" variant="light" icon="Search" />
            <span>Coming Soon</span>
          </button>
        </div>
      </div>

      {/* Recent Activity Placeholder */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Recent Activity
        </h3>
        <div className="text-center py-8">
          <SvgIcon
            className="h-12 w-12 text-gray-400 mx-auto mb-4"
            variant="default"
            icon="Book"
          />
          <p className="text-gray-500 dark:text-gray-400">
            Activity tracking will be implemented soon
          </p>
        </div>
      </div>
    </div>
  );
}
