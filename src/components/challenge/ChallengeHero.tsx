'use client';

import SpeechBubble from './SpeechBubble';
import Character1 from '@/assets/characters/group-5.svg';
import Character2 from '@/assets/characters/group-4.svg';
import Character3 from '@/assets/characters/group-7.svg';
import Character4 from '@/assets/characters/group-6.svg';
import Character5 from '@/assets/characters/group-8.svg';
import Character6 from '@/assets/characters/group-9.svg';
import Character7 from '@/assets/characters/group-10.svg';
import Character8 from '@/assets/characters/group-11.svg';

/** Character variation options (1-8) */
export type CharacterVariation = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * Randomly select a character variation (1-8)
 * Use this in useState to ensure stable character across re-renders
 */
export function randomiseCharacter(): CharacterVariation {
  return (Math.floor(Math.random() * 8) + 1) as CharacterVariation;
}

interface ChallengeHeroProps {
  /** The question/prompt to display in the speech bubble */
  question: string;
  /** Character variation to display (1-8) */
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
  // Map character variations to SVG components
  const characterComponents = {
    1: Character1,
    2: Character2,
    3: Character3,
    4: Character4,
    5: Character5,
    6: Character6,
    7: Character7,
    8: Character8,
  };

  // Get the selected character component
  const CharacterComponent = characterComponents[characterVariation];

  // Map gap number to Tailwind class
  const gapClass = `gap-${gap}`;

  return (
    <div className="mb-8">
      {/* Character and speech bubble - horizontal layout */}
      <div className={`flex items-start ${gapClass} mb-4`}>
        {/* Character SVG - Much larger */}
        <div className="w-40 h-40 flex-shrink-0">
          <CharacterComponent 
            width="100%"
            height="100%"
            className="w-full h-full"
            aria-label="Character"
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
