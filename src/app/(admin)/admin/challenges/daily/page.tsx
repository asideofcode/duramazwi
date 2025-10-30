'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { DailyChallenge } from '@/types/challenge';

export default function DailyChallengesOverviewPage() {
  const [dailyChallenges, setDailyChallenges] = useState<DailyChallenge[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'upcoming' | 'past' | 'all'>('upcoming');

  useEffect(() => {
    fetchDailyChallenges();
  }, []);

  const fetchDailyChallenges = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/daily-challenges');
      const result = await response.json();
      
      if (result.success) {
        setDailyChallenges(result.data);
      }
    } catch (error) {
      console.error('Error fetching daily challenges:', error);
    } finally {
      setLoading(false);
    }
  };

  const getFilteredChallenges = () => {
    const today = new Date().toISOString().split('T')[0];
    
    switch (viewMode) {
      case 'upcoming':
        return dailyChallenges.filter(dc => dc.date >= today).sort((a, b) => a.date.localeCompare(b.date));
      case 'past':
        return dailyChallenges.filter(dc => dc.date < today).sort((a, b) => b.date.localeCompare(a.date));
      case 'all':
        return dailyChallenges.sort((a, b) => b.date.localeCompare(a.date));
      default:
        return dailyChallenges;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getDateStatus = (dateString: string) => {
    const today = new Date().toISOString().split('T')[0];
    if (dateString === today) return 'today';
    if (dateString > today) return 'upcoming';
    return 'past';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'today':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'past':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const handleDelete = async (date: string) => {
    if (!confirm(`Are you sure you want to delete the daily challenge for ${formatDate(date)}?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/daily-challenges?date=${date}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (result.success) {
        setDailyChallenges(prev => prev.filter(dc => dc.date !== date));
      } else {
        alert('Failed to delete daily challenge: ' + result.error);
      }
    } catch (error) {
      console.error('Error deleting daily challenge:', error);
      alert('Failed to delete daily challenge');
    }
  };

  const filteredChallenges = getFilteredChallenges();

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="text-center py-12">
          <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading daily challenges...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Scheduled Daily Challenges
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              View and manage scheduled daily challenges
            </p>
          </div>
          <Link
            href="/admin/challenges/daily/edit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Schedule New Day</span>
          </Link>
        </div>
      </div>

      {/* View Mode Tabs */}
      <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setViewMode('upcoming')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              viewMode === 'upcoming'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Upcoming ({dailyChallenges.filter(dc => dc.date >= new Date().toISOString().split('T')[0]).length})
          </button>
          <button
            onClick={() => setViewMode('past')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              viewMode === 'past'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Past ({dailyChallenges.filter(dc => dc.date < new Date().toISOString().split('T')[0]).length})
          </button>
          <button
            onClick={() => setViewMode('all')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              viewMode === 'all'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            All ({dailyChallenges.length})
          </button>
        </nav>
      </div>

      {/* Challenges List */}
      {filteredChallenges.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No challenges scheduled</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Get started by scheduling a daily challenge.
          </p>
          <div className="mt-6">
            <Link
              href="/admin/challenges/daily/edit"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Schedule Daily Challenge
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredChallenges.map((dailyChallenge) => {
            const status = getDateStatus(dailyChallenge.date);
            return (
              <div
                key={dailyChallenge.date}
                className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {formatDate(dailyChallenge.date)}
                        </h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
                          {status === 'today' ? '📅 Today' : status === 'upcoming' ? '🔜 Upcoming' : '✅ Past'}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span>{dailyChallenge.challenges.length} challenges</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span>{dailyChallenge.totalPoints} points</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span>~{dailyChallenge.estimatedTime} min</span>
                        </div>
                      </div>

                      {/* Challenge Types Summary */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {dailyChallenge.challenges.map((challenge, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                          >
                            {challenge.type === 'multiple_choice' && '🎯'}
                            {challenge.type === 'audio_recognition' && '🎧'}
                            {challenge.type === 'translation_builder' && '🔤'}
                            {' '}
                            {challenge.difficulty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2 ml-4">
                      <Link
                        href={`/admin/challenges/daily/edit?date=${dailyChallenge.date}`}
                        className="px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                      >
                        Edit
                      </Link>
                      <Link
                        href={`/challenge/daily?date=${dailyChallenge.date}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 text-sm bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
                      >
                        View Live
                      </Link>
                      <button
                        onClick={() => handleDelete(dailyChallenge.date)}
                        className="px-3 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
