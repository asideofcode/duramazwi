'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Challenge } from '@/types/challenge';

export default function ChallengesAdminPage() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'multiple_choice' | 'audio_recognition' | 'translation_builder'>('all');

  useEffect(() => {
    fetchChallenges();
  }, [filter]);

  const fetchChallenges = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (filter !== 'all') {
        params.append('type', filter);
      }
      
      const response = await fetch(`/api/admin/challenges?${params}`);
      const result = await response.json();
      
      if (result.success) {
        setChallenges(result.data);
      } else {
        console.error('Failed to fetch challenges:', result.error);
      }
    } catch (error) {
      console.error('Error fetching challenges:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (challengeId: string) => {
    if (!confirm('Are you sure you want to delete this challenge?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/challenges/${challengeId}`, {
        method: 'DELETE',
      });
      
      const result = await response.json();
      
      if (result.success) {
        setChallenges(prev => prev.filter(c => c.id !== challengeId));
      } else {
        alert('Failed to delete challenge: ' + result.error);
      }
    } catch (error) {
      console.error('Error deleting challenge:', error);
      alert('Failed to delete challenge');
    }
  };

  const filteredChallenges = challenges.filter(challenge => 
    filter === 'all' || challenge.type === filter
  );

  const getChallengeTypeLabel = (type: string) => {
    switch (type) {
      case 'multiple_choice': return 'Multiple Choice';
      case 'audio_recognition': return 'Audio Recognition';
      case 'translation_builder': return 'Translation Builder';
      default: return type;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Challenge Management
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Create and manage daily challenges for the Shona Dictionary
            </p>
          </div>
          <div className="flex space-x-3">
            <Link
              href="/admin/challenges/daily"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              title="Assign daily challenges"
              aria-label="Assign daily challenges"
            >
              Assign Daily Challenges
            </Link>
            <Link
              href="/admin/challenges/new"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              title="Create new challenge"
              aria-label="Create new challenge"
            >
              Create Challenge
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {challenges.length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Total Challenges
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {challenges.filter(c => c.type === 'multiple_choice').length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Multiple Choice
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {challenges.filter(c => c.type === 'audio_recognition').length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Audio Recognition
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
            {challenges.filter(c => c.type === 'translation_builder').length}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Translation Builder
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6">
        <div className="flex space-x-2">
          {[
            { key: 'all', label: 'All Challenges' },
            { key: 'multiple_choice', label: 'Multiple Choice' },
            { key: 'audio_recognition', label: 'Audio Recognition' },
            { key: 'translation_builder', label: 'Translation Builder' }
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Challenges List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Question
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Difficulty
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Points
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredChallenges.map((challenge) => (
                <tr key={challenge.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {challenge.question}
                    </div>
                    {challenge.explanation && (
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {challenge.explanation}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {getChallengeTypeLabel(challenge.type)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {challenge.points}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Link
                        href={`/admin/challenges/${challenge.id}/preview`}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Preview
                      </Link>
                      <a
                        href={`/admin/challenges/${challenge.id}/edit`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        Edit
                      </a>
                      <button
                        onClick={() => handleDelete(challenge.id)}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredChallenges.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 dark:text-gray-400">
            No challenges found for the selected filter.
          </div>
        </div>
      )}
    </div>
  );
}
