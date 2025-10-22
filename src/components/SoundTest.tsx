'use client';

import { useSoundEffects } from '@/hooks/useSoundEffects';
import SoundControls from './SoundControls';

export default function SoundTest() {
  const { playSound } = useSoundEffects();

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
        🔊 Sound Effects Test
      </h3>
      
      {/* Sound Controls */}
      <div className="mb-4">
        <SoundControls />
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => playSound('correct')}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
        >
          ✅ Correct
        </button>
        <button
          onClick={() => playSound('incorrect')}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
        >
          ❌ Incorrect
        </button>
        <button
          onClick={() => playSound('challenge-complete')}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          🎉 Complete
        </button>
        <button
          onClick={() => playSound('challenge-failed')}
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg"
        >
          😔 Failed
        </button>
      </div>
    </div>
  );
}
