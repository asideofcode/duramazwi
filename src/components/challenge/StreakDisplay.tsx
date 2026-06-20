'use client';

import { useEffect, useState } from 'react';
import { getStreakInfo, StreakInfo } from '@/utils/challengeStorage';
import InlineIcon from '@/components/InlineIcon';

interface StreakDisplayProps {
  className?: string;
  showDetails?: boolean;
}

export default function StreakDisplay({ className = '', showDetails = false }: StreakDisplayProps) {
  const [streakInfo, setStreakInfo] = useState<StreakInfo>({
    currentStreak: 0,
    longestStreak: 0,
    totalCompletions: 0,
    isOnStreak: false
  });

  useEffect(() => {
    setStreakInfo(getStreakInfo());
  }, []);

  if (!showDetails && streakInfo.currentStreak === 0) {
    return null;
  }

  return (
    <div className={`text-center ${className}`}>
      {/* Current Streak */}
      <div className="flex items-center justify-center space-x-2 mb-2">
        <InlineIcon className="h-6 w-6 text-[var(--color-accent)]" name="flame" />
        <div>
          <div className="text-2xl font-bold text-[var(--color-primary)]">
            {streakInfo.currentStreak}
          </div>
          <div className="text-sm text-[var(--color-muted)]">
            day{streakInfo.currentStreak !== 1 ? 's' : ''} streak
          </div>
        </div>
      </div>

      {/* Additional Details */}
      {showDetails && (
        <div className="grid grid-cols-2 gap-4 mt-4 p-4 theme-panel rounded-lg">
          <div className="text-center">
            <div className="text-lg font-semibold text-[var(--color-primary)]">
              {streakInfo.longestStreak}
            </div>
            <div className="text-xs text-[var(--color-muted)]">
              Longest Streak
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-[var(--color-primary)]">
              {streakInfo.totalCompletions}
            </div>
            <div className="text-xs text-[var(--color-muted)]">
              Total Completed
            </div>
          </div>
        </div>
      )}

      {/* Streak Status */}
      {streakInfo.isOnStreak && streakInfo.currentStreak > 0 && (
        <div className="mt-2 text-sm text-[var(--color-primary)] font-medium">
          {streakInfo.currentStreak === 1
            ? "Great start! Keep it up tomorrow!"
            : streakInfo.currentStreak < 7
            ? "You're on fire!"
            : streakInfo.currentStreak < 30
            ? "Amazing dedication!"
            : "Legendary streak!"
          }
        </div>
      )}
    </div>
  );
}
