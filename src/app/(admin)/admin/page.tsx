'use client';

import Link from "next/link";
import SvgIcon from "@/component/icons/svg-icon";
import { useAdminEntries } from "@/hooks/useAdminEntries";
import { StatsCardSkeleton } from "@/components/admin/LoadingPlaceholders";
import RecentActivity from "@/components/admin/RecentActivity";

export default function AdminDashboard() {
  const { stats, loading, error, fetchStats } = useAdminEntries({ autoFetch: true });

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

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          <>
            <StatsCardSkeleton />
            <StatsCardSkeleton />
            <StatsCardSkeleton />
            <StatsCardSkeleton />
          </>
        ) : (
          <>
            {/* Total Entries */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <SvgIcon
                    className="h-8 w-8 text-blue-600 dark:text-blue-500"
                    variant="default"
                    icon="Book"
                  />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      Total Entries
                    </dt>
                    <dd className="text-lg font-medium text-gray-900 dark:text-white">
                      <p className="text-2xl font-bold text-gray-600 dark:text-gray-400">
                        {stats?.totalEntries || 0}
                      </p>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            {/* Published Entries */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <SvgIcon
                    className="h-8 w-8 text-green-600 dark:text-green-500"
                    variant="default"
                    icon="Toggle"
                  />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      Published
                    </dt>
                    <dd className="text-lg font-medium text-gray-900 dark:text-white">
                      <p className="text-2xl font-bold text-gray-600 dark:text-gray-400">
                        {stats?.publishedEntries || 0}
                      </p>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            {/* Draft Entries */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <SvgIcon
                    className="h-8 w-8 text-yellow-600 dark:text-yellow-500"
                    variant="default"
                    icon="Plus"
                  />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      Drafts
                    </dt>
                    <dd className="text-lg font-medium text-gray-900 dark:text-white">
                      <p className="text-2xl font-bold text-gray-600 dark:text-gray-400">
                        {stats?.draftEntries || 0}
                      </p>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            {/* Archived Entries */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <SvgIcon
                    className="h-8 w-8 text-gray-600 dark:text-gray-500"
                    variant="default"
                    icon="Book"
                  />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      Archived
                    </dt>
                    <dd className="text-lg font-medium text-gray-900 dark:text-white">
                      <p className="text-2xl font-bold text-gray-600 dark:text-gray-400">
                        {stats?.archivedEntries || 0}
                      </p>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            title="Manage dictionary entries"
            aria-label="Manage dictionary entries"
          >
            <SvgIcon className="h-4 w-4" variant="light" icon="Book" />
            <span>Manage Entries</span>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Search Analytics
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            View searches that returned no results
          </p>
          <Link
            href="/admin/search-not-found"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
            title="View not found searches"
            aria-label="View not found searches"
          >
            <SvgIcon className="h-4 w-4" variant="light" icon="Search" />
            <span>View Searches</span>
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

      {/* Recent Activity */}
      <RecentActivity />
    </div>
  );
}
