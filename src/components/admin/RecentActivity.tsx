'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { ChallengeCompletionEvent } from '@/types/completion';
import SvgIcon from '@/component/icons/svg-icon';

interface ActivityData {
  recentCompletions: ChallengeCompletionEvent[];
  totalCompletions: number;
}

export default function RecentActivity() {
  const [data, setData] = useState<ActivityData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActivity();
  }, []);

  const fetchActivity = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/activity');
      const result = await response.json();
      
      if (result.success) {
        setData(result.data);
      }
    } catch (error) {
      console.error('Error fetching activity:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Recent Activity
        </h3>
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          Loading activity...
        </div>
      </div>
    );
  }

  if (!data || data.recentCompletions.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Recent Activity
        </h3>
        <div className="text-center pb-16">
          <SvgIcon
            className="h-12 w-12 text-gray-400 mx-auto mb-4"
            variant="default"
            icon="Trophy"
          />
          <p className="text-gray-500 dark:text-gray-400">
            No recent challenge completions
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Recent Activity
        </h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {data.totalCompletions} total completions
        </span>
      </div>

      <div className="space-y-3">
        {data.recentCompletions.map((completion, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <div className="flex items-center space-x-3 flex-1">
              <div className="flex-shrink-0">
                <SvgIcon
                  className="h-5 w-5 text-purple-600 dark:text-purple-400"
                  variant="default"
                  icon="Trophy"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <Link
                    href={`/admin/challenges/daily/edit?date=${completion.date}`}
                    className="text-sm font-medium text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {completion.date}
                  </Link>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    •
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {completion.totalScore} pts
                  </span>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                    completion.accuracy >= 80 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : completion.accuracy >= 60
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {completion.accuracy}%
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <span>
                    {completion.city && completion.country 
                      ? `${completion.city}, ${completion.country}`
                      : completion.country || 'Unknown location'}
                  </span>
                  <span>•</span>
                  <span>
                    {new Date(completion.timestamp).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 ml-2">
              <Link
                href={`/admin/challenges/daily/edit?date=${completion.date}`}
                className="text-xs text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
              >
                View →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
