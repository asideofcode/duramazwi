'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Challenge, DailyChallenge } from '@/types/challenge';
import ChallengeSelector from '@/components/admin/ChallengeSelector';
import DailyChallengeSummary from '@/components/admin/DailyChallengeSummary';
import ChallengeListItem from '@/components/admin/ChallengeListItem';
import ChallengePreviewModal from '@/components/admin/ChallengePreviewModal';

function DailyChallengeEditor() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialDate = searchParams.get('date') || new Date().toISOString().split('T')[0];
  
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [dailyChallenge, setDailyChallenge] = useState<DailyChallenge | null>(null);
  const [allChallenges, setAllChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    fetchDailyChallenge();
    fetchAllChallenges();
  }, [selectedDate]);

  const fetchDailyChallenge = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/admin/daily-challenges?date=${selectedDate}`);
      const result = await response.json();
      
      console.log('Daily challenge fetch result:', result);
      
      if (result.success && result.data) {
        const data = result.data;
        
        // If data is an array of daily challenges, find the one for the selected date
        if (Array.isArray(data)) {
          const dailyChallengeForDate = data.find(dc => dc.date === selectedDate);
          
          if (dailyChallengeForDate) {
            // Normalize the challenges - ensure they have id field
            const normalizedChallenges = dailyChallengeForDate.challenges.map((challenge: any) => ({
              ...challenge,
              id: challenge.id || challenge._id || `temp-${Math.random()}`
            }));
            
            setDailyChallenge({
              ...dailyChallengeForDate,
              challenges: normalizedChallenges
            });
          } else {
            // No daily challenge exists for this date yet
            setDailyChallenge({
              date: selectedDate,
              challenges: [],
              totalPoints: 0,
              estimatedTime: 0
            });
          }
        } else {
          // If data is a single object, use it directly
          const normalizedChallenges = (data.challenges || []).map((challenge: any) => ({
            ...challenge,
            id: challenge.id || challenge._id || `temp-${Math.random()}`
          }));
          
          setDailyChallenge({
            ...data,
            challenges: normalizedChallenges
          });
        }
      } else {
        // No daily challenge exists for this date yet
        setDailyChallenge({
          date: selectedDate,
          challenges: [],
          totalPoints: 0,
          estimatedTime: 0
        });
      }
    } catch (error) {
      console.error('Error fetching daily challenge:', error);
      setError('Failed to load daily challenge');
      // Still set empty state so UI works
      setDailyChallenge({
        date: selectedDate,
        challenges: [],
        totalPoints: 0,
        estimatedTime: 0
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchAllChallenges = async () => {
    try {
      const response = await fetch('/api/admin/challenges');
      const result = await response.json();
      
      if (result.success) {
        setAllChallenges(result.data);
      }
    } catch (error) {
      console.error('Error fetching challenges:', error);
    }
  };

  const handleDateChange = (newDate: string) => {
    setSelectedDate(newDate);
    router.push(`/admin/challenges/daily/edit?date=${newDate}`);
  };

  const handleAddChallenge = async (challengeId: string) => {
    if (!dailyChallenge) return;

    const challengeToAdd = allChallenges.find(c => c.id === challengeId);
    if (!challengeToAdd) return;

    const updatedChallenges = [...dailyChallenge.challenges, challengeToAdd];
    const updatedDailyChallenge = {
      ...dailyChallenge,
      challenges: updatedChallenges,
      totalPoints: updatedChallenges.reduce((sum, c) => sum + c.points, 0),
      estimatedTime: updatedChallenges.length * 2 // 2 minutes per challenge estimate
    };

    await saveDailyChallenge(updatedDailyChallenge);
    setShowAddModal(false);
  };

  const handleRemoveChallenge = async (challengeId: string) => {
    if (!dailyChallenge) return;

    const updatedChallenges = dailyChallenge.challenges.filter(c => c.id !== challengeId);
    const updatedDailyChallenge = {
      ...dailyChallenge,
      challenges: updatedChallenges,
      totalPoints: updatedChallenges.reduce((sum, c) => sum + c.points, 0),
      estimatedTime: updatedChallenges.length * 2
    };

    await saveDailyChallenge(updatedDailyChallenge);
  };

  const handleReorderChallenge = async (fromIndex: number, toIndex: number) => {
    if (!dailyChallenge) return;

    const updatedChallenges = [...dailyChallenge.challenges];
    const [movedChallenge] = updatedChallenges.splice(fromIndex, 1);
    updatedChallenges.splice(toIndex, 0, movedChallenge);

    const updatedDailyChallenge = {
      ...dailyChallenge,
      challenges: updatedChallenges
    };

    await saveDailyChallenge(updatedDailyChallenge);
  };

  const saveDailyChallenge = async (updatedDailyChallenge: DailyChallenge) => {
    try {
      setSaving(true);
      setError(null);
      
      // API expects { date, challengeIds } not full challenge objects
      const payload = {
        date: updatedDailyChallenge.date,
        challengeIds: updatedDailyChallenge.challenges.map(c => c.id || c._id)
      };
      
      console.log('Saving daily challenge:', payload);
      
      const response = await fetch('/api/admin/daily-challenges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setDailyChallenge(updatedDailyChallenge);
        setSuccess('Daily challenge updated successfully!');
        setTimeout(() => setSuccess(null), 3000);
      } else {
        setError('Failed to save daily challenge: ' + (result.error || result.message));
      }
    } catch (error) {
      console.error('Error saving daily challenge:', error);
      setError('Failed to save daily challenge');
    } finally {
      setSaving(false);
    }
  };

  const getAvailableChallenges = () => {
    if (!dailyChallenge) return allChallenges;
    const usedIds = new Set(dailyChallenge.challenges.map(c => c.id));
    return allChallenges.filter(c => !usedIds.has(c.id));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        {/* Header Skeleton */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
          <div className="h-9 w-72 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
          <div className="h-5 w-80 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>

        {/* Date Selector Skeleton */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
          <div className="flex items-center space-x-4">
            <div className="h-10 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-7 w-72 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Summary Skeleton */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
          <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
              <div className="h-8 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
            <div>
              <div className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
              <div className="h-8 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
            <div>
              <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
              <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Challenges List Skeleton */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="h-7 w-52 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            <div className="h-10 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="h-5 w-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                      <div className="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                      <div className="h-6 w-28 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                      <div className="h-5 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                    <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-1"></div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <div className="flex flex-col space-y-1">
                      <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                      <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                    <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-8 w-14 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <Link
            href="/admin/challenges/daily"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ← Back to Daily Challenges
          </Link>
          <a
            href={`/challenge/daily?date=${selectedDate}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>View Live</span>
          </a>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Daily Challenge Editor
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Manage challenges for a specific day
        </p>
      </div>

      {/* Status Messages */}
      {error && (
        <div className="mb-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-red-800 dark:text-red-200">{error}</p>
        </div>
      )}

      {success && (
        <div className="mb-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
          <p className="text-green-800 dark:text-green-200">{success}</p>
        </div>
      )}

      {/* Date Selector */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Select Date
        </label>
        <div className="flex items-center space-x-4">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => handleDateChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <div className="text-lg font-medium text-gray-900 dark:text-white">
            {formatDate(selectedDate)}
          </div>
        </div>
      </div>

      {/* Challenge Summary */}
      <DailyChallengeSummary dailyChallenge={dailyChallenge} />

      {/* Challenges List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Challenges for this Day
          </h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            + Add Challenge
          </button>
        </div>

        {!dailyChallenge || !dailyChallenge.challenges || dailyChallenge.challenges.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            No challenges added for this day yet. Click "Add Challenge" to get started.
          </div>
        ) : (
          <div className="space-y-4">
            {dailyChallenge.challenges.map((challenge, index) => (
              <ChallengeListItem
                key={challenge.id}
                challenge={challenge}
                index={index}
                totalChallenges={dailyChallenge.challenges.length}
                onMoveUp={() => handleReorderChallenge(index, index - 1)}
                onMoveDown={() => handleReorderChallenge(index, index + 1)}
                onPreview={() => setPreviewIndex(index)}
                onRemove={() => handleRemoveChallenge(challenge.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Add Challenge Modal with Search & Pagination */}
      {showAddModal && (
        <ChallengeSelector
          availableChallenges={getAvailableChallenges()}
          onSelect={handleAddChallenge}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {/* Preview Modal */}
      {previewIndex !== null && dailyChallenge && dailyChallenge.challenges[previewIndex] && (
        <ChallengePreviewModal
          challenge={dailyChallenge.challenges[previewIndex]}
          challengeNumber={previewIndex + 1}
          onClose={() => setPreviewIndex(null)}
        />
      )}

      {/* Save indicator */}
      {saving && (
        <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
          <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
          <span>Saving...</span>
        </div>
      )}
    </div>
  );
}

export default function DailyChallengeEditorPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto p-6">
        <div className="text-center py-12">
          <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading editor...</p>
        </div>
      </div>
    }>
      <DailyChallengeEditor />
    </Suspense>
  );
}
