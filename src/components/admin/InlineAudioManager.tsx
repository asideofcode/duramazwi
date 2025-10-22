'use client';

import { useState, useEffect, useRef } from 'react';
import SvgIcon from '@/component/icons/svg-icon';
import CompactAudioRecorder from './CompactAudioRecorder';
import AudioPlayer from './AudioPlayer';
import AudioSelector from '../AudioSelector';
import { AudioRecord, AudioFilters, createAudioStorage } from '@/services/audioStorage';

// Compact audio player for inline use
function CompactAudioPlayer({ 
  audioRecord, 
  onDelete 
}: { 
  audioRecord: AudioRecord; 
  onDelete: (id: string) => void; 
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      console.log('Audio loaded, duration:', audio.duration);
      setDuration(audio.duration);
      setIsLoading(false);
      setHasError(false);
    };
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    const handleError = (e: Event) => {
      console.error('Audio error:', e);
      setHasError(true);
      setIsLoading(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = () => {
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

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || !isFinite(seconds) || seconds <= 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Debug: log the audio URL
  console.log('Audio URL:', audioRecord.url);

  return (
    <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded px-2 py-1">
      <audio ref={audioRef} src={audioRecord.url} preload="metadata" />
      
      <button
        type="button"
        onClick={togglePlay}
        className="w-6 h-6 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs"
      >
        {isPlaying ? (
          <div className="flex space-x-0.5">
            <div className="w-0.5 h-3 bg-current"></div>
            <div className="w-0.5 h-3 bg-current"></div>
          </div>
        ) : (
          <SvgIcon className="h-3 w-3" variant="light" icon="Play" />
        )}
      </button>
      
      <span className="text-xs text-gray-600 dark:text-gray-400 min-w-[32px]">
        {isLoading ? '...' : hasError ? 'Error' : formatTime(duration)}
      </span>
      
      <button
        type="button"
        onClick={() => {
          if (confirm('Are you sure you want to delete this audio recording?')) {
            onDelete(audioRecord.id);
          }
        }}
        className="text-red-500 hover:text-red-700 text-xs"
        title="Delete"
      >
        ×
      </button>
    </div>
  );
}

interface InlineAudioManagerProps {
  entryId?: string;
  word?: string; // Use word as identifier instead of entryId
  level: 'word' | 'meaning' | 'example';
  levelId?: string;
  label?: string;
  compact?: boolean;
  className?: string;
}

export default function InlineAudioManager({ 
  entryId,
  word,
  level, 
  levelId,
  label,
  compact = true,
  className = ''
}: InlineAudioManagerProps) {
  const [recordings, setRecordings] = useState<AudioRecord[]>([]);
  const [showRecorder, setShowRecorder] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Use word as identifier, fallback to entryId for backward compatibility
  const identifier = word || entryId;

  // Load existing recordings
  useEffect(() => {
    loadRecordings();
  }, [identifier, level, levelId]);

  const loadRecordings = async () => {
    if (!identifier) return;
    
    setLoading(true);
    setError(null);

    try {
      const audioStorage = createAudioStorage();
      const filters: AudioFilters = {
        entryId: identifier, // Use identifier (word or entryId)
        level,
        ...(levelId && { levelId })
      };

      const records = await audioStorage.list(filters);
      setRecordings(records);
    } catch (err) {
      setError('Failed to load recordings');
      console.error('Load recordings error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRecordingComplete = (audioRecord: AudioRecord) => {
    setRecordings(prev => [audioRecord, ...prev]);
    setShowRecorder(false);
  };

  const handleDelete = async (audioId: string) => {
    try {
      const audioStorage = createAudioStorage();
      await audioStorage.delete(audioId);
      setRecordings(prev => prev.filter(r => r.id !== audioId));
    } catch (err) {
      setError('Failed to delete recording');
      console.error('Delete recording error:', err);
    }
  };

  if (compact) {
    return (
      <div className={`relative inline-flex items-center space-x-2 ${className}`}>
        {label && (
          <span className="text-sm text-gray-600 dark:text-gray-400">{label}:</span>
        )}
        
        {/* Audio Selector */}
        {recordings.length > 0 && (
          <AudioSelector
            recordings={recordings}
            onDelete={handleDelete}
            showControls={true}
          />
        )}

        {/* Add recording button */}
        <button
          type="button"
          onClick={() => setShowRecorder(!showRecorder)}
          className="inline-flex items-center px-2 py-1 text-xs bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 rounded transition-colors"
          title="Add audio recording"
        >
          <SvgIcon className="h-3 w-3" variant="default" icon="Plus" />
          <span className="ml-1">Audio</span>
        </button>

        {/* Inline recorder */}
        {showRecorder && (
          <div className="absolute z-20 bottom-full right-0 mb-1">
            <CompactAudioRecorder
              entryId={identifier || ''}
              level={level}
              levelId={levelId}
              onRecordingComplete={handleRecordingComplete}
              onCancel={() => setShowRecorder(false)}
            />
          </div>
        )}

        {loading && (
          <div className="animate-spin h-3 w-3 border border-blue-600 border-t-transparent rounded-full"></div>
        )}

        {error && (
          <span className="text-xs text-red-600 dark:text-red-400" title={error}>
            ⚠️
          </span>
        )}
      </div>
    );
  }

  // Non-compact version (fallback to original AudioManager)
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label || 'Audio'}
        </span>
        <button
          type="button"
          onClick={() => setShowRecorder(!showRecorder)}
          className="text-xs px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
        >
          Add Recording
        </button>
      </div>

      {showRecorder && (
        <CompactAudioRecorder
          entryId={identifier || ''}
          level={level}
          levelId={levelId}
          onRecordingComplete={handleRecordingComplete}
          onCancel={() => setShowRecorder(false)}
        />
      )}

      <div className="space-y-2">
        {recordings.map((recording) => (
          <AudioPlayer
            key={recording.id}
            audioRecord={recording}
            onDelete={handleDelete}
            showControls={true}
          />
        ))}
      </div>

      {recordings.length === 0 && !loading && (
        <div className="text-xs text-gray-500 dark:text-gray-400 italic">
          No recordings yet
        </div>
      )}
    </div>
  );
}
