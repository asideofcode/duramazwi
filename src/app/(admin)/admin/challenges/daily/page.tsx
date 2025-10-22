'use client';

import { useState, useEffect } from 'react';
import { Challenge, DailyChallenge } from '@/types/challenge';

export default function DailyChallengeAssignmentPage() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [dailyChallenges, setDailyChallenges] = useState<DailyChallenge[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch challenges
      const challengesResponse = await fetch('/api/admin/challenges');
      const challengesResult = await challengesResponse.json();
      
      if (challengesResult.success) {
        setChallenges(challengesResult.data);
      }

      // Fetch daily challenges
      const dailyResponse = await fetch('/api/admin/daily-challenges');
      const dailyResult = await dailyResponse.json();
      
      if (dailyResult.success) {
        setDailyChallenges(dailyResult.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load existing challenges for selected date
    const existingDaily = dailyChallenges.find(dc => dc.date === selectedDate);
    if (existingDaily) {
      setSelectedChallenges(existingDaily.challenges.map(c => c.id));
    } else {
      setSelectedChallenges([]);
    }
  }, [selectedDate, dailyChallenges]);

  const handleChallengeToggle = (challengeId: string) => {
    setSelectedChallenges(prev => 
      prev.includes(challengeId)
        ? prev.filter(id => id !== challengeId)
        : [...prev, challengeId]
    );
  };

  const handleSave = async () => {
    try {
      const response = await fetch('/api/admin/daily-challenges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: selectedDate,
          challengeIds: selectedChallenges,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Update the daily challenges array
        setDailyChallenges(prev => {
          const filtered = prev.filter(dc => dc.date !== selectedDate);
          return [...filtered, result.data].sort((a, b) => a.date.localeCompare(b.date));
        });

        alert(`Daily challenge for ${selectedDate} saved successfully!`);
      } else {
        alert('Failed to save daily challenge: ' + result.error);
      }
    } catch (error) {
      console.error('Error saving daily challenge:', error);
      alert('Failed to save daily challenge');
    }
  };

  const getChallengeTypeColor = (type: string) => {
    switch (type) {
      case 'multiple_choice': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'audio_recognition': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'translation_builder': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
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

  const selectedChallengeObjects = challenges.filter(c => selectedChallenges.includes(c.id));
  const totalPoints = selectedChallengeObjects.reduce((sum, c) => sum + c.points, 0);
  const estimatedTime = selectedChallengeObjects.length * 2;

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Daily Challenge Assignment
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Assign challenges to specific dates for the daily challenge system
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Date Selection & Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Select Date
            </h2>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Challenge Summary */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Challenge Summary
            </h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Selected Challenges:</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {selectedChallenges.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Total Points:</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {totalPoints}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Est. Time:</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {estimatedTime} min
                </span>
              </div>
            </div>

            <button
              onClick={handleSave}
              disabled={selectedChallenges.length === 0}
              className={`w-full mt-6 px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedChallenges.length > 0
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              }`}
            >
              Save Daily Challenge
            </button>
          </div>
        </div>

        {/* Challenge Selection */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Available Challenges
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Select challenges to include in the daily challenge for {selectedDate}
              </p>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {challenges.map((challenge) => (
                  <div
                    key={challenge.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedChallenges.includes(challenge.id)
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                    }`}
                    onClick={() => handleChallengeToggle(challenge.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <input
                            type="checkbox"
                            checked={selectedChallenges.includes(challenge.id)}
                            onChange={() => handleChallengeToggle(challenge.id)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            {challenge.question}
                          </h3>
                        </div>
                        
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getChallengeTypeColor(challenge.type)}`}>
                            {challenge.type.replace('_', ' ')}
                          </span>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                            {challenge.difficulty}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {challenge.points} points
                          </span>
                        </div>

                        {challenge.explanation && (
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {challenge.explanation}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Existing Daily Challenges */}
      <div className="mt-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Scheduled Daily Challenges
            </h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dailyChallenges.slice(0, 6).map((dailyChallenge) => (
                <div
                  key={dailyChallenge.date}
                  className="border border-gray-200 dark:border-gray-600 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {new Date(dailyChallenge.date).toLocaleDateString()}
                    </h3>
                    <button
                      onClick={() => setSelectedDate(dailyChallenge.date)}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 text-sm"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <div>{dailyChallenge.challenges.length} challenges</div>
                    <div>{dailyChallenge.totalPoints} points</div>
                    <div>{dailyChallenge.estimatedTime} min</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
