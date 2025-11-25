'use client';

import { AdminDictionaryEntry } from '@/services/adminDataService';

interface EntryMetadataProps {
  entry: AdminDictionaryEntry | null;
  needsReview: boolean;
  onNeedsReviewChange: (value: boolean) => void;
  onMarkAsReviewed: () => void;
}

export default function EntryMetadata({ 
  entry, 
  needsReview, 
  onNeedsReviewChange,
  onMarkAsReviewed 
}: EntryMetadataProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Never';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Entry Metadata
        </h3>
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Created At */}
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-lg">📅</span>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Created
            </label>
          </div>
          <p className="text-sm text-gray-900 dark:text-white">
            {formatDate(entry?.createdAt)}
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-lg">🕐</span>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Last Edited
            </label>
          </div>
          <p className="text-sm text-gray-900 dark:text-white">
            {formatDate(entry?.updatedAt)}
          </p>
        </div>

        {/* Last Reviewed */}
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-lg">✅</span>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Last Reviewed
            </label>
          </div>
          <p className="text-sm text-gray-900 dark:text-white">
            {formatDate(entry?.lastReviewed)}
          </p>
        </div>

        {/* Review Status */}
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-lg">⚠️</span>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Review Status
            </label>
          </div>
          <div className="flex items-center space-x-2">
            {needsReview ? (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                Needs Review
              </span>
            ) : (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Reviewed
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Review Actions */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 gap-4">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="needsReview"
              checked={needsReview}
              onChange={(e) => onNeedsReviewChange(e.target.checked)}
              className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <div>
              <label 
                htmlFor="needsReview" 
                className="text-sm font-medium text-gray-900 dark:text-white cursor-pointer"
              >
                Mark as needing review
              </label>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Flag this entry for future review and quality checking
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onMarkAsReviewed}
            disabled={!needsReview}
            className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg transition-colors text-sm font-medium disabled:cursor-not-allowed w-full sm:w-auto"
            title="Mark this entry as reviewed"
          >
            <span>✅</span>
            <span>Mark as Reviewed</span>
          </button>
        </div>
      </div>
    </div>
  );
}
