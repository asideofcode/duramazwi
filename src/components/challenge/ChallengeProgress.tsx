'use client';

interface ChallengeProgressProps {
  current: number; // Current question number (doesn't change until continue)
  completed: number; // Number of completed challenges (changes when answered)
  total: number;
  score: number;
}

export default function ChallengeProgress({ current, completed, total, score }: ChallengeProgressProps) {
  const progressPercentage = (completed / total) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          Question {current} of {total}
        </span>
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
          {score} points
        </span>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
        <div 
          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center space-x-2">
        {Array.from({ length: total }, (_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index < completed
                ? 'bg-green-500' // Completed
                : index === completed
                ? 'bg-blue-500' // Current/In progress
                : 'bg-gray-300 dark:bg-gray-600' // Upcoming
            }`}
          />
        ))}
      </div>
    </div>
  );
}
