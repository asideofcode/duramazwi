'use client';

import { useState, useRef, useEffect } from 'react';
import SvgIcon from '@/component/icons/svg-icon';
import { AudioRecord } from '@/services/audioStorage';

interface AudioPlayerProps {
  audioRecord: AudioRecord;
  onDelete?: (audioId: string) => void;
  showControls?: boolean;
  className?: string;
}

export default function AudioPlayer({ 
  audioRecord, 
  onDelete,
  showControls = true,
  className = ''
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleError = () => {
      setError('Failed to load audio');
      setIsLoading(false);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
      setError(null);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('loadstart', handleLoadStart);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('loadstart', handleLoadStart);
    };
  }, [audioRecord.url]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleDelete = () => {
    if (onDelete && confirm('Are you sure you want to delete this recording?')) {
      onDelete(audioRecord.id);
    }
  };

  return (
    <div className={`bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3 ${className}`}>
      <audio
        ref={audioRef}
        src={audioRecord.url}
        preload="metadata"
      />

      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="h-4 w-4 border border-current rounded-full"></div>
          <span className="font-medium">{audioRecord.metadata.level}</span>
          {audioRecord.metadata.speaker && (
            <span>• {audioRecord.metadata.speaker}</span>
          )}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-500">
          {new Date(audioRecord.createdAt).toLocaleDateString()}
        </div>
      </div>

      {error && (
        <div className="mb-2 p-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded text-red-700 dark:text-red-400 text-xs">
          {error}
        </div>
      )}

      <div className="flex items-center space-x-3">
        <button
          onClick={togglePlayPause}
          disabled={isLoading || !!error}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-full transition-colors"
        >
          {isLoading ? (
            <div className="animate-spin h-3 w-3 border border-white border-t-transparent rounded-full"></div>
          ) : isPlaying ? (
            <div className="h-3 w-3 flex items-center justify-center">
              <div className="w-1 h-3 bg-current"></div>
              <div className="w-1 h-3 bg-current ml-0.5"></div>
            </div>
          ) : (
            <SvgIcon className="h-3 w-3" variant="light" icon="Play" />
          )}
        </button>

        <div className="flex-1 flex items-center space-x-2">
          <span className="text-xs text-gray-500 dark:text-gray-400 w-10">
            {formatTime(currentTime)}
          </span>
          
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            disabled={isLoading || !!error}
            className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
          
          <span className="text-xs text-gray-500 dark:text-gray-400 w-10">
            {formatTime(duration)}
          </span>
        </div>

        {showControls && onDelete && (
          <button
            onClick={handleDelete}
            className="flex-shrink-0 p-1 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
            title="Delete recording"
          >
            <div className="h-4 w-4 border border-current rounded"></div>
          </button>
        )}
      </div>

      {audioRecord.metadata.notes && (
        <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 italic">
          {audioRecord.metadata.notes}
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}
