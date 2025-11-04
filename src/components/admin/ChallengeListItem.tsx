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
  onDragStart?: (index: number) => void;
  onDragOver?: (e: React.DragEvent, index: number) => void;
  onDrop?: (index: number) => void;
  onDragEnd?: () => void;
  isDragging?: boolean;
  isDragOver?: boolean;
  isReadonly?: boolean;
}

export default function ChallengeListItem({
  challenge,
  index,
  totalChallenges,
  onMoveUp,
  onMoveDown,
  onPreview,
  onRemove,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
  isDragging = false,
  isDragOver = false,
  isReadonly = false
}: ChallengeListItemProps) {
  return (
    <div 
      draggable={!isReadonly && !!onDragStart}
      onDragStart={() => !isReadonly && onDragStart?.(index)}
      onDragOver={(e) => !isReadonly && onDragOver?.(e, index)}
      onDrop={() => !isReadonly && onDrop?.(index)}
      onDragEnd={onDragEnd}
      className={`border border-gray-200 dark:border-gray-600 rounded-lg p-4 transition-all ${
        isDragging ? 'opacity-50 scale-95' : ''
      } ${
        isDragOver ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'hover:border-blue-500 dark:hover:border-blue-400'
      } ${
        !isReadonly && onDragStart ? 'cursor-move' : ''
      }`}>
      <div className="flex items-start space-x-4">
        {/* Drag handle and reorder buttons on the left - vertically stacked */}
        <div className="flex flex-col items-center text-gray-400 dark:text-gray-500 pt-1">
          <button
            type="button"
            onClick={onMoveUp}
            disabled={isReadonly || index === 0}
            className={`transition-colors ${
              isReadonly || index === 0 
                ? 'opacity-30 cursor-not-allowed' 
                : 'hover:text-gray-600 dark:hover:text-gray-300'
            }`}
            title={isReadonly ? 'Read-only' : 'Move up'}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
            </svg>
          </button>
          <svg className="w-5 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
          <button
            type="button"
            onClick={onMoveDown}
            disabled={isReadonly || index === totalChallenges - 1}
            className={`transition-colors ${
              isReadonly || index === totalChallenges - 1 
                ? 'opacity-30 cursor-not-allowed' 
                : 'hover:text-gray-600 dark:hover:text-gray-300'
            }`}
            title={isReadonly ? 'Read-only' : 'Move down'}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Challenge content */}
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

        {/* Action buttons on the right */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onPreview}
            className="px-3 py-1 text-sm bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Preview
          </button>
          {!isReadonly && (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
