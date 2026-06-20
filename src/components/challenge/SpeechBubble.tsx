'use client';

interface SpeechBubbleProps {
  /** The text content to display in the bubble */
  text: string;
}

/**
 * Speech bubble component with tail pointing left
 * Used in challenge hero sections
 */
export default function SpeechBubble({ text }: SpeechBubbleProps) {
  return (
    <div className="relative max-w-xs">
      {/* Speech bubble */}
      <div className="relative bg-[var(--color-surface-raised)] rounded-2xl px-4 py-3 shadow-[var(--shadow-card)] border-2 border-[var(--color-border)]">
        {/* Text */}
        <div className="text-base font-medium text-[var(--color-text)] leading-snug">
          {text}
        </div>
      </div>

      {/* SVG Tail - positioned absolutely on top, overlapping to hide bubble border */}
      <svg 
        className="absolute -left-[16px] top-4 z-10" 
        width="18" 
        height="20" 
        viewBox="0 0 18 20"
      >
        {/* Background fill */}
        <path 
          d="M2.00358 19.0909H18V0.909058L0.624575 15.9561C-0.682507 17.088 0.198558 19.0909 2.00358 19.0909Z"
          fill="currentColor"
          className="text-[var(--color-surface-raised)]"
        />
        {/* Border outline */}
        <path 
          clipRule="evenodd" 
          d="M18 2.48935V0L0.83037 15.6255C-0.943477 17.2398 0.312833 20 2.82143 20H18V18.2916H16.1228H2.82143C1.98523 18.2916 1.56646 17.3716 2.15774 16.8335L16.1228 4.12436L18 2.48935Z" 
          fillRule="evenodd"
          fill="currentColor"
          className="text-[var(--color-border)]"
        />
      </svg>
    </div>
  );
}
