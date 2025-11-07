import { DailyChallenge } from '@/types/challenge';

interface DailyChallengeSummaryProps {
  dailyChallenge: DailyChallenge | null;
}

export default function DailyChallengeSummary({ dailyChallenge }: DailyChallengeSummaryProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Summary
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Challenges</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {dailyChallenge?.challenges?.length || 0}
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Points</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {dailyChallenge?.totalPoints || 0}
          </div>
        </div>
        <div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Est. Time</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {dailyChallenge?.estimatedTime || 0} min
          </div>
        </div>
      </div>
    </div>
  );
}
