'use client';

import Link from 'next/link';
import SvgIcon from '@/component/icons/svg-icon';
import SearchNotFoundList from '@/components/admin/SearchNotFoundList';

export default function SearchNotFoundPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Search Analytics
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Track all user searches to understand usage patterns and identify missing words
            </p>
          </div>
          <Link
            href="/admin"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <SvgIcon className="h-4 w-4" variant="default" icon="Book" />
            <span>Back to Dashboard</span>
          </Link>
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <SvgIcon
            className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
            variant="default"
            icon="Search"
          />
          <div className="flex-1">
            <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-1">
              About Search Tracking
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              This feature tracks all user searches (both successful and unsuccessful) with geolocation data. It only works in production to avoid tracking development searches. Use this data to identify missing words, understand usage patterns, and improve the dictionary.
            </p>
          </div>
        </div>
      </div>

      {/* Search List */}
      <SearchNotFoundList />
    </div>
  );
}
