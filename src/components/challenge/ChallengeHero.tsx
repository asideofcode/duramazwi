'use client';

import SpeechBubble from './SpeechBubble';

/** Character variation options (1-4) */
export type CharacterVariation = 1 | 2 | 3 | 4;

interface ChallengeHeroProps {
  /** The question/prompt to display in the speech bubble */
  question: string;
  /** Character variation to display (1-4) */
  characterVariation?: CharacterVariation;
  /** Optional subtitle or context (e.g., difficulty, points) */
  subtitle?: string;
  /** Gap between character and speech bubble (Tailwind spacing: 1-12) */
  gap?: number;
  /** Horizontal offset for speech bubble in pixels (negative = left, positive = right) */
  offsetX?: number;
  /** Vertical offset for speech bubble in pixels (negative = up, positive = down) */
  offsetY?: number;
}

/**
 * Standardized hero section for all challenge types
 * Shows character + speech bubble with the question
 */
export default function ChallengeHero({ 
  question, 
  characterVariation = 1, 
  subtitle, 
  gap = 0,
  offsetX = -18,
  offsetY = 18
}: ChallengeHeroProps) {
  // Map character variations to SVG files
  const characterSvgs = {
    1: '/characters/group-5.svg',
    2: '/characters/group-4.svg',
    3: '/characters/group-7.svg',
    4: '/characters/group-6.svg',
  };

  // Map gap number to Tailwind class
  const gapClass = `gap-${gap}`;

  return (
    <div className="mb-8">
      {/* Character and speech bubble - horizontal layout */}
      <div className={`flex items-start ${gapClass} mb-4`}>
        {/* Character SVG - Much larger */}
        <div className="w-40 h-40 flex-shrink-0">
          <img
            src={characterSvgs[characterVariation]}
            alt="Character"
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Speech bubble with offset */}
        <div 
          style={{ 
            transform: `translate(${offsetX}px, ${offsetY}px)` 
          }}
        >
          <SpeechBubble text={question} />
        </div>
      </div>

      {/* Subtitle if provided */}
      {subtitle && (
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
          {subtitle}
        </p>
      )}
    </div>
  );
}
