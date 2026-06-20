'use client';

import { useSoundEffects } from '@/hooks/useSoundEffects';
import SoundControls from './SoundControls';
import InlineIcon from '@/components/InlineIcon';
import { IoVolumeHighOutline } from 'react-icons/io5';

export default function SoundTest() {
  const { playSound } = useSoundEffects();

  return (
    <div className="theme-card p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)]">
        <span className="inline-flex items-center gap-2">
          <IoVolumeHighOutline className="h-5 w-5" aria-hidden="true" />
          Sound Effects Test
        </span>
      </h3>
      
      {/* Sound Controls */}
      <div className="mb-4">
        <SoundControls />
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => playSound('correct')}
          className="px-4 py-2 theme-button-primary hover:brightness-95 rounded-lg"
        >
          <span className="inline-flex items-center gap-2"><InlineIcon className="h-4 w-4" name="check" /> Correct</span>
        </button>
        <button
          onClick={() => playSound('incorrect')}
          className="px-4 py-2 theme-button-danger hover:brightness-95 rounded-lg"
        >
          <span className="inline-flex items-center gap-2"><InlineIcon className="h-4 w-4" name="close" /> Incorrect</span>
        </button>
        <button
          onClick={() => playSound('challenge-complete')}
          className="px-4 py-2 theme-button-accent hover:brightness-95 rounded-lg"
        >
          <span className="inline-flex items-center gap-2"><InlineIcon className="h-4 w-4" name="sparkle" /> Complete</span>
        </button>
        <button
          onClick={() => playSound('challenge-failed')}
          className="px-4 py-2 theme-button-danger hover:brightness-95 rounded-lg"
        >
          <span className="inline-flex items-center gap-2"><InlineIcon className="h-4 w-4" name="alert" /> Failed</span>
        </button>
      </div>
    </div>
  );
}
