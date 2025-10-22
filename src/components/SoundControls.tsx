'use client';

import { useState } from 'react';
import { useSoundSettings } from '@/contexts/SoundSettingsContext';
import { useSoundEffects } from '@/hooks/useSoundEffects';

interface SoundControlsProps {
  className?: string;
  showLabel?: boolean;
  compact?: boolean;
}

export default function SoundControls({ 
  className = '', 
  showLabel = true, 
  compact = false 
}: SoundControlsProps) {
  const { settings, toggleMute, setVolume } = useSoundSettings();
  const { playSound } = useSoundEffects();
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const testSound = () => {
    playSound('correct');
  };

  const getVolumeIcon = () => {
    if (!settings.enabled) return '🔇';
    if (settings.volume === 0) return '🔇';
    if (settings.volume < 0.3) return '🔈';
    if (settings.volume < 0.7) return '🔉';
    return '🔊';
  };

  const getVolumePercentage = () => {
    return Math.round(settings.volume * 100);
  };

  if (compact) {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={toggleMute}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          title={settings.enabled ? 'Mute sounds' : 'Unmute sounds'}
        >
          <span className="text-lg">{getVolumeIcon()}</span>
        </button>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {showLabel && (
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Sound:
        </span>
      )}
      
      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        title={settings.enabled ? 'Mute sounds' : 'Unmute sounds'}
      >
        <span className="text-lg">{getVolumeIcon()}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {settings.enabled ? `${getVolumePercentage()}%` : 'Muted'}
        </span>
      </button>

      {/* Volume Slider */}
      {settings.enabled && (
        <div className="relative">
          <button
            onClick={() => setShowVolumeSlider(!showVolumeSlider)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="Adjust volume"
          >
            <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
            </svg>
          </button>

          {showVolumeSlider && (
            <div className="absolute top-full left-0 mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 z-10 min-w-[200px]">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Volume
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {getVolumePercentage()}%
                  </span>
                </div>
                
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={settings.volume}
                  onChange={handleVolumeChange}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                />
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={testSound}
                    className="px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    Test Sound
                  </button>
                  
                  <button
                    onClick={() => setShowVolumeSlider(false)}
                    className="px-3 py-1 text-xs bg-gray-500 hover:bg-gray-600 text-white rounded transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}
