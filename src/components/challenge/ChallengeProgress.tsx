'use client';

interface ChallengeResult {
  challengeId: string;
  isCorrect: boolean;
  pointsEarned: number;
}

interface ChallengeProgressProps {
  current: number; // Current question number (doesn't change until continue)
  completed: number; // Number of completed challenges (changes when answered)
  total: number;
  score: number;
  results?: ChallengeResult[]; // Array of completed challenge results
  currentAnswerCorrect?: boolean | null; // Whether current answer is correct (before continue)
}

export default function ChallengeProgress({ current, completed, total, score, results = [], currentAnswerCorrect = null }: ChallengeProgressProps) {
  const progressPercentage = (completed / total) * 100;

  return (
    <div className="theme-card rounded-lg p-6">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-[var(--color-muted)]">
          Question {current} of {total}
        </span>
        <span className="text-sm font-medium text-[var(--color-primary)]">
          {score} points
        </span>
      </div>
      
      <div className="theme-progress-track w-full rounded-full h-3 mb-4">
        <div 
          className="theme-progress-fill h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center space-x-2">
        {Array.from({ length: total }, (_, index) => {
          const result = results[index];
          const hasResult = result !== undefined;
          const isCurrentQuestion = index === current - 1;
          
          // If this is the current question and we have an answer (but haven't clicked continue yet)
          const showCurrentAnswer = isCurrentQuestion && currentAnswerCorrect !== null;
          
          return (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                hasResult
                  ? result.isCorrect 
                    ? 'bg-[var(--color-primary)]' // Correct answer (after continue)
                    : 'bg-[var(--color-danger)]' // Wrong answer (after continue)
                  : showCurrentAnswer
                  ? currentAnswerCorrect
                    ? 'bg-[var(--color-primary)]' // Correct answer (before continue)
                    : 'bg-[var(--color-danger)]' // Wrong answer (before continue)
                  : isCurrentQuestion
                  ? 'bg-[var(--color-accent)]' // Current/In progress (not answered yet)
                  : 'bg-[var(--color-border)]' // Upcoming
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
