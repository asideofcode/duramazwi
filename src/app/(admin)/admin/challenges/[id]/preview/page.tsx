'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Challenge } from '@/types/challenge';
import MultipleChoiceChallenge from '@/components/challenge/MultipleChoiceChallenge';
import AudioChallenge from '@/components/challenge/AudioChallenge';
import TranslationChallenge from '@/components/challenge/TranslationChallenge';

export default function PreviewChallengePage() {
  const params = useParams();
  const challengeId = params.id as string;
  
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [loading, setLoading] = useState(true);
  const [previewKey, setPreviewKey] = useState(0);

  useEffect(() => {
    fetchChallenge();
  }, [challengeId]);

  const fetchChallenge = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/admin/challenges/${challengeId}`);
      const result = await response.json();
      
      if (result.success) {
        setChallenge(result.data);
      } else {
        alert('Failed to load challenge: ' + result.error);
      }
    } catch (error) {
      console.error('Error fetching challenge:', error);
      alert('Failed to load challenge');
    } finally {
      setLoading(false);
    }
  };

  const handleChallengeComplete = (userAnswer: string | string[], isCorrect: boolean) => {
    console.log('Challenge completed:', { userAnswer, isCorrect });
    // In preview mode, we just log the result
    alert(`Challenge completed! ${isCorrect ? 'Correct' : 'Incorrect'} answer: ${Array.isArray(userAnswer) ? userAnswer.join(', ') : userAnswer}`);
  };

  const resetPreview = () => {
    setPreviewKey(prev => prev + 1);
  };

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

  if (!challenge) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-12">
          <div className="text-gray-500 dark:text-gray-400 mb-4">
            Challenge not found
          </div>
          <Link
            href="/admin/challenges"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
          >
            Back to Challenges
          </Link>
        </div>
      </div>
    );
  }

  const renderChallenge = () => {
    switch (challenge.type) {
      case 'multiple_choice':
        return (
          <MultipleChoiceChallenge
            key={previewKey}
            challenge={challenge}
            onComplete={handleChallengeComplete}
          />
        );
      case 'audio_recognition':
        return (
          <AudioChallenge
            key={previewKey}
            challenge={challenge}
            onComplete={handleChallengeComplete}
          />
        );
      case 'translation_builder':
        return (
          <TranslationChallenge
            key={previewKey}
            challenge={challenge}
            onComplete={handleChallengeComplete}
          />
        );
      default:
        return (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            Unknown challenge type: {challenge.type}
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/admin/challenges"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ← Back to Challenges
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={resetPreview}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors"
            >
              Reset Preview
            </button>
            <a
              href={`/admin/challenges/${challengeId}/edit`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              Edit Challenge
            </a>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
          Challenge Preview
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Test how this challenge will appear to users
        </p>
      </div>

      {/* Challenge Metadata */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Challenge Details
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Type</div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {getChallengeTypeLabel(challenge.type)}
            </span>
          </div>
          
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Difficulty</div>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
              {challenge.difficulty}
            </span>
          </div>
          
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Points</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              {challenge.points}
            </div>
          </div>
        </div>

        {challenge.explanation && (
          <div className="mt-4">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Explanation</div>
            <div className="text-gray-900 dark:text-white">
              {challenge.explanation}
            </div>
          </div>
        )}

        {challenge.audioUrl && (
          <div className="mt-4">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Audio URL</div>
            <div className="text-gray-900 dark:text-white font-mono text-sm">
              {challenge.audioUrl}
            </div>
          </div>
        )}
      </div>

      {/* Challenge Preview */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Live Preview
          </h2>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            This is how users will see this challenge
          </div>
        </div>
        
        <div className="border-2 border-dashed border-gray-200 dark:border-gray-600 rounded-lg p-6">
          {renderChallenge()}
        </div>
      </div>

      {/* Debug Information */}
      <div className="mt-8 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Debug Information
        </h3>
        <pre className="text-sm text-gray-600 dark:text-gray-400 overflow-x-auto">
          {JSON.stringify(challenge, null, 2)}
        </pre>
      </div>
    </div>
  );
}
