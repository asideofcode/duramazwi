'use client';

import ShareChallenge from '@/components/ShareChallenge';
import SoundControls from '@/components/SoundControls';

interface DailyChallengeHeaderProps {
  date: string;
}

export default function DailyChallengeHeader({ date }: DailyChallengeHeaderProps) {
  // Calculate yesterday's date
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayString = yesterday.toISOString().split('T')[0];
  
  // Check if we're viewing today's challenge
  const isToday = date === new Date().toISOString().split('T')[0];
  const isPast = new Date(date) < new Date(new Date().toISOString().split('T')[0]);
  
  return (
    <div className="mb-8">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Daily Shona Challenge
          </h1>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <p className="text-gray-600 dark:text-gray-400">
              {new Date(date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            {isPast && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-md">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Past Challenge</span>
              </span>
            )}
            {isToday && (
              <a
                href={`/challenge/daily?date=${yesterdayString}`}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors"
                title="View yesterday's challenge"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                </svg>
                <span>Yesterday</span>
              </a>
            )}
            {!isToday && (
              <a
                href="/challenge/daily"
                className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-md transition-colors"
                title="View today's challenge"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span>Today</span>
              </a>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ShareChallenge date={date} />
          <SoundControls compact={true} showLabel={false} />
        </div>
      </div>
    </div>
  );
}
