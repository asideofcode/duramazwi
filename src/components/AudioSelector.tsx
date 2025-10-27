'use client';

import { useState, useEffect } from 'react';
import { AudioRecord } from '@/services/audioAPIClient';

interface AudioSelectorProps {
  recordings: AudioRecord[];
  onDelete?: (audioId: string) => void;
  showControls?: boolean;
  className?: string;
}

export default function AudioSelector({ 
  recordings, 
  onDelete,
  showControls = false,
  className = ''
}: AudioSelectorProps) {
  const [selectedRecording, setSelectedRecording] = useState<AudioRecord | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);

  // Set first recording as default
  useEffect(() => {
    if (recordings.length > 0 && !selectedRecording) {
      setSelectedRecording(recordings[0]);
    }
  }, [recordings, selectedRecording]);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    };
  }, [currentAudio]);

  const playAudio = async (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (!selectedRecording) return;


    try {
      // Stop current audio if playing
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      // Create new audio
      const audio = new Audio(selectedRecording.url);
      setCurrentAudio(audio);

      // Set up event listeners
      audio.onended = () => {
        setIsPlaying(false);
        setCurrentAudio(null);
      };

      audio.onerror = () => {
        setIsPlaying(false);
        setCurrentAudio(null);
        console.error('Failed to play audio');
      };

      // Wait for metadata to load before playing
      const playWhenReady = () => {
        return new Promise<void>((resolve, reject) => {
          const onLoadedMetadata = () => {
            audio.removeEventListener('loadedmetadata', onLoadedMetadata);
            audio.removeEventListener('error', onError);
            setIsPlaying(true);
            audio.play().then(resolve).catch(reject);
          };

          const onError = () => {
            audio.removeEventListener('loadedmetadata', onLoadedMetadata);
            audio.removeEventListener('error', onError);
            reject(new Error('Failed to load audio metadata'));
          };

          // Check if metadata is already loaded
          if (audio.readyState >= 1) { // HAVE_METADATA
            setIsPlaying(true);
            audio.play().then(resolve).catch(reject);
          } else {
            audio.addEventListener('loadedmetadata', onLoadedMetadata);
            audio.addEventListener('error', onError);
            // Trigger loading by setting preload
            audio.preload = 'metadata';
            audio.load();
          }
        });
      };

      await playWhenReady();
    } catch (err) {
      setIsPlaying(false);
      setCurrentAudio(null);
      console.error('Audio play error:', err);
    }
  };

  const stopAudio = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setIsPlaying(false);
      setCurrentAudio(null);
    }
  };

  const handleDelete = () => {
    if (selectedRecording && onDelete && confirm('Are you sure you want to delete this audio recording?')) {
      onDelete(selectedRecording.id);
      // Select next available recording
      const remainingRecordings = recordings.filter(r => r.id !== selectedRecording.id);
      setSelectedRecording(remainingRecordings.length > 0 ? remainingRecordings[0] : null);
    }
  };

  if (recordings.length === 0) {
    return null;
  }

  const formatRecordingLabel = (recording: AudioRecord, index: number) => {
    // Use consistent date format to prevent hydration mismatch
    const date = new Date(recording.createdAt).toLocaleDateString('en-GB'); // DD/MM/YYYY format
    const speaker = recording.metadata.speaker;
    
    if (speaker) {
      return `${speaker} (${date})`;
    }
    
    if (recordings.length === 1) {
      return `Recording (${date})`;
    }
    
    return `Recording ${index + 1} (${date})`;
  };

  return (
    <div className={`inline-flex items-center space-x-2 ${className}`}>
      {/* Play/Stop Button */}
      <button
        type="button"
        onClick={(e) => isPlaying ? stopAudio(e) : playAudio(e)}
        disabled={!selectedRecording}
        className="w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-full transition-colors"
        title={isPlaying ? 'Stop audio' : 'Play audio'}
      >
        {isPlaying ? (
          <div className="flex space-x-0.5">
            <div className="w-1 h-4 bg-current"></div>
            <div className="w-1 h-4 bg-current"></div>
          </div>
        ) : (
          <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {/* Recording Selector Dropdown */}
      {recordings.length > 1 && (
        <select
          value={selectedRecording?.id || ''}
          onChange={(e) => {
            const recording = recordings.find(r => r.id === e.target.value);
            setSelectedRecording(recording || null);
            if (isPlaying) {
              stopAudio();
            }
          }}
          className="text-xs px-2 py-1 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-1 focus:ring-blue-500"
        >
          {recordings.map((recording, index) => (
            <option key={recording.id} value={recording.id}>
              {formatRecordingLabel(recording, index)}
            </option>
          ))}
        </select>
      )}

      {/* Single Recording Label */}
      {recordings.length === 1 && (
        <span className="text-xs text-gray-600 dark:text-gray-400">
          {formatRecordingLabel(recordings[0], 0)}
        </span>
      )}

      {/* Delete Button (Admin only) */}
      {showControls && onDelete && selectedRecording && (
        <button
          type="button"
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 text-xs p-1"
          title="Delete recording"
        >
          ×
        </button>
      )}
    </div>
  );
}
