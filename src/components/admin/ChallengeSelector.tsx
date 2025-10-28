'use client';

import { useState, useEffect } from 'react';
import { Challenge } from '@/types/challenge';

interface ChallengeSelectorProps {
  availableChallenges: Challenge[];
  onSelect: (challengeId: string) => void;
  onClose: () => void;
}

export default function ChallengeSelector({ availableChallenges, onSelect, onClose }: ChallengeSelectorProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [filterLabel, setFilterLabel] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Get all unique labels
  const allLabels = Array.from(
    new Set(availableChallenges.flatMap(c => c.labels || []))
  ).sort();

  // Filter challenges
  const filteredChallenges = availableChallenges.filter(challenge => {
    const matchesSearch = 
      challenge.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (challenge.explanation?.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = filterType === 'all' || challenge.type === filterType;
    const matchesDifficulty = filterDifficulty === 'all' || challenge.difficulty === filterDifficulty;
    const matchesLabel = filterLabel === 'all' || (challenge.labels?.includes(filterLabel));

    return matchesSearch && matchesType && matchesDifficulty && matchesLabel;
  });

  // Pagination
  const totalPages = Math.ceil(filteredChallenges.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedChallenges = filteredChallenges.slice(startIndex, startIndex + itemsPerPage);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filterType, filterDifficulty, filterLabel]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] overflow-y-auto" onClick={(e) => {
      if (e.target === e.currentTarget) onClose();
    }}>
      <div className="flex items-center justify-center min-h-full p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-5xl w-full my-8">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Select Challenge to Add
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Filters */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 space-y-4">
            {/* Search */}
            <div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search challenges by question or explanation..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Filter Row */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Type
                </label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="all">All Types</option>
                  <option value="multiple_choice">Multiple Choice</option>
                  <option value="audio_recognition">Audio Recognition</option>
                  <option value="translation_builder">Translation Builder</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Difficulty
                </label>
                <select
                  value={filterDifficulty}
                  onChange={(e) => setFilterDifficulty(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="all">All Difficulties</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Label
                </label>
                <select
                  value={filterLabel}
                  onChange={(e) => setFilterLabel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="all">All Labels</option>
                  {allLabels.map(label => (
                    <option key={label} value={label}>{label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results count */}
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Showing {paginatedChallenges.length} of {filteredChallenges.length} challenges
            </div>
          </div>

          {/* Challenge List */}
          <div className="p-6 max-h-[50vh] overflow-y-auto">
            {paginatedChallenges.length === 0 ? (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                No challenges match your filters.
              </div>
            ) : (
              <div className="space-y-3">
                {paginatedChallenges.map((challenge) => (
                  <div
                    key={challenge.id}
                    className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                            {challenge.type.replace('_', ' ').toUpperCase()}
                          </span>
                          <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                            {challenge.difficulty}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {challenge.points} pts
                          </span>
                        </div>
                        <div className="text-gray-900 dark:text-white font-medium mb-1">
                          {challenge.question}
                        </div>
                        {challenge.explanation && (
                          <div className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                            {challenge.explanation}
                          </div>
                        )}
                        {challenge.labels && challenge.labels.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {challenge.labels.map((label) => (
                              <span
                                key={label}
                                className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
                              >
                                {label}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => onSelect(challenge.id)}
                        className="ml-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 whitespace-nowrap"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
