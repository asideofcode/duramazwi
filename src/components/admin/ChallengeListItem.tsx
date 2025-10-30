import Link from 'next/link';
import { Challenge } from '@/types/challenge';

interface ChallengeListItemProps {
  challenge: Challenge;
  index: number;
  totalChallenges: number;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onPreview: () => void;
  onRemove: () => void;
}

export default function ChallengeListItem({
  challenge,
  index,
  totalChallenges,
  onMoveUp,
  onMoveDown,
  onPreview,
  onRemove
}: ChallengeListItemProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              #{index + 1}
            </span>
            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              {challenge.type ? challenge.type.replace('_', ' ').toUpperCase() : 'UNKNOWN'}
            </span>
            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              {challenge.difficulty}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {challenge.points} pts
            </span>
          </div>
          <div className="text-gray-900 dark:text-white font-medium mb-1">
            {challenge.question}
          </div>
          {challenge.labels && challenge.labels.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {challenge.labels.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
                >
                  {label}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-2 ml-4">
          {/* Reorder buttons */}
          <div className="flex flex-col space-y-1">
            <button
              onClick={onMoveUp}
              disabled={index === 0}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed"
              title="Move up"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={onMoveDown}
              disabled={index === totalChallenges - 1}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed"
              title="Move down"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Action buttons */}
          <button
            onClick={onPreview}
            className="px-3 py-1 text-sm bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Preview
          </button>
          <Link
            href={`/admin/challenges/${challenge.id}/edit`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Edit
          </Link>
          <button
            onClick={onRemove}
            className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
