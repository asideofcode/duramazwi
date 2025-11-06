'use client';

import { useState, useEffect } from 'react';
import SvgIcon from '@/component/icons/svg-icon';

interface SearchEvent {
  query: string;
  timestamp: number;
  city?: string;
  country?: string;
  region?: string;
}

interface TopSearch {
  _id: string;
  count: number;
  lastSearched: number;
  locations: Array<{ city?: string; country?: string } | null>;
}

interface SearchData {
  searches: SearchEvent[];
  topSearches: TopSearch[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export default function SearchNotFoundList() {
  const [data, setData] = useState<SearchData | null>(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [showTopSearches, setShowTopSearches] = useState(true);

  useEffect(() => {
    fetchSearches();
  }, [page]);

  const fetchSearches = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/admin/search-not-found?page=${page}&limit=20`);
      const result = await response.json();
      
      if (result.success) {
        setData(result.data);
      }
    } catch (error) {
      console.error('Error fetching searches:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading && !data) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Not Found Searches
        </h3>
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          Loading searches...
        </div>
      </div>
    );
  }

  if (!data || (data.searches.length === 0 && data.topSearches.length === 0)) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Not Found Searches
        </h3>
        <div className="text-center pb-16">
          <SvgIcon
            className="h-12 w-12 text-gray-400 mx-auto mb-4"
            variant="default"
            icon="Search"
          />
          <p className="text-gray-500 dark:text-gray-400">
            No "not found" searches yet
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
            Only tracked in production
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Searches */}
      {data.topSearches.length > 0 && (
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Most Searched (Not Found)
            </h3>
            <button
              onClick={() => setShowTopSearches(!showTopSearches)}
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              {showTopSearches ? 'Hide' : 'Show'}
            </button>
          </div>

          {showTopSearches && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.topSearches.map((search, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                          "{search._id}"
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                          {search.count}x
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Last: {new Date(search.lastSearched).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Recent Searches */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Recent Not Found Searches
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {data.pagination.total} total
          </span>
        </div>

        <div className="space-y-2">
          {data.searches.map((search, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <div className="flex-shrink-0">
                  <SvgIcon
                    className="h-4 w-4 text-red-600 dark:text-red-400"
                    variant="default"
                    icon="Search"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      "{search.query}"
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400">
                    <span>
                      {search.city && search.country 
                        ? `${search.city}, ${search.country}`
                        : search.country || 'Unknown location'}
                    </span>
                    <span>•</span>
                    <span>
                      {new Date(search.timestamp).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {data.pagination.totalPages > 1 && (
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Page {data.pagination.page} of {data.pagination.totalPages}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => setPage(p => Math.min(data.pagination.totalPages, p + 1))}
                disabled={page === data.pagination.totalPages}
                className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
