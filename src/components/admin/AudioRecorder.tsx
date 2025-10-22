'use client';

import { useState, useRef, useEffect } from 'react';
import SvgIcon from '@/component/icons/svg-icon';
import { AudioMetadata, AudioRecord, createAudioStorage } from '@/services/audioStorage';

interface AudioRecorderProps {
  entryId: string;
  level: 'word' | 'meaning' | 'example';
  levelId?: string;
  onRecordingComplete?: (audioRecord: AudioRecord) => void;
  className?: string;
}

export default function AudioRecorder({ 
  entryId, 
  level, 
  levelId, 
  onRecordingComplete,
  className = ''
}: AudioRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopRecording();
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const startRecording = async () => {
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        }
      });
      
      streamRef.current = stream;
      
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus'
      });
      
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setAudioBlob(blob);
      };

      mediaRecorder.start(100); // Collect data every 100ms
      setIsRecording(true);
      setRecordingTime(0);

      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

    } catch (err) {
      setError('Failed to access microphone. Please check permissions.');
      console.error('Recording error:', err);
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const resumeRecording = () => {
    if (mediaRecorderRef.current && isPaused) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
      
      // Resume timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    }
  };

  const discardRecording = () => {
    setAudioBlob(null);
    setRecordingTime(0);
    setError(null);
  };

  const saveRecording = async () => {
    if (!audioBlob) return;

    setIsUploading(true);
    setError(null);

    try {
      const audioStorage = createAudioStorage();
      
      // Create file from blob
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `${entryId}-${level}-${timestamp}.webm`;
      const file = new File([audioBlob], filename, { type: 'audio/webm' });

      const metadata: AudioMetadata = {
        entryId,
        level,
        levelId,
        quality: 'medium',
        notes: `Recorded at ${new Date().toLocaleString()}`
      };

      const audioRecord = await audioStorage.upload(file, metadata);
      
      // Reset state
      setAudioBlob(null);
      setRecordingTime(0);
      
      // Notify parent component
      onRecordingComplete?.(audioRecord);

    } catch (err) {
      setError('Failed to save recording. Please try again.');
      console.error('Save error:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white">
          Audio Recording - {level.charAt(0).toUpperCase() + level.slice(1)} Level
        </h4>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {formatTime(recordingTime)}
        </div>
      </div>

      {error && (
        <div className="mb-3 p-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded text-red-700 dark:text-red-400 text-sm">
          {error}
        </div>
      )}

      <div className="flex items-center space-x-2">
        {!isRecording && !audioBlob && (
          <button
            type="button"
            onClick={startRecording}
            className="flex items-center space-x-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
          >
            <div className="h-4 w-4 rounded-full bg-current"></div>
            <span>Start Recording</span>
          </button>
        )}

        {isRecording && !isPaused && (
          <>
            <button
              type="button"
              onClick={pauseRecording}
              className="flex items-center space-x-2 px-3 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md transition-colors"
            >
              <div className="h-4 w-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-current"></div>
                <div className="w-2 h-2 bg-current ml-1"></div>
              </div>
              <span>Pause</span>
            </button>
            <button
              type="button"
              onClick={stopRecording}
              className="flex items-center space-x-2 px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors"
            >
              <div className="h-4 w-4 bg-current"></div>
              <span>Stop</span>
            </button>
          </>
        )}

        {isRecording && isPaused && (
          <>
            <button
              type="button"
              onClick={resumeRecording}
              className="flex items-center space-x-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
            >
              <SvgIcon className="h-4 w-4" variant="light" icon="Play" />
              <span>Resume</span>
            </button>
            <button
              type="button"
              onClick={stopRecording}
              className="flex items-center space-x-2 px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors"
            >
              <div className="h-4 w-4 bg-current"></div>
              <span>Stop</span>
            </button>
          </>
        )}

        {audioBlob && (
          <>
            <audio controls className="flex-1">
              <source src={URL.createObjectURL(audioBlob)} type="audio/webm" />
              Your browser does not support audio playback.
            </audio>
            <button
              type="button"
              onClick={saveRecording}
              disabled={isUploading}
              className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-md transition-colors"
            >
              {isUploading ? (
                <>
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <div className="h-4 w-4 border-2 border-current rounded"></div>
                  <span>Save</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={discardRecording}
              className="flex items-center space-x-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
            >
              <div className="h-4 w-4 border border-current rounded"></div>
              <span>Discard</span>
            </button>
          </>
        )}
      </div>

      {isRecording && (
        <div className="mt-3 flex items-center space-x-2 text-sm text-red-600 dark:text-red-400">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
          <span>{isPaused ? 'Recording paused' : 'Recording in progress...'}</span>
        </div>
      )}
    </div>
  );
}
