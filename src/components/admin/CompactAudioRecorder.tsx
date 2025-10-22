'use client';

import { useState, useRef, useEffect } from 'react';
import SvgIcon from '@/component/icons/svg-icon';
import { AudioMetadata, AudioRecord, createAudioStorage } from '@/services/audioAPIClient';

interface CompactAudioRecorderProps {
  entryId: string;
  level: 'word' | 'meaning' | 'example';
  levelId?: string;
  onRecordingComplete?: (audioRecord: AudioRecord) => void;
  onCancel?: () => void;
}

export default function CompactAudioRecorder({ 
  entryId, 
  level, 
  levelId, 
  onRecordingComplete,
  onCancel
}: CompactAudioRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const chunksRef = useRef<Blob[]>([]);

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

      mediaRecorder.start(100);
      setIsRecording(true);
      setRecordingTime(0);

      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);

    } catch (err) {
      setError('Microphone access denied');
      console.error('Recording error:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    }
  };

  const saveRecording = async () => {
    if (!audioBlob) return;

    setIsUploading(true);
    setError(null);

    try {
      const audioStorage = createAudioStorage();
      
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `${entryId}-${level}-${timestamp}.webm`;
      const file = new File([audioBlob], filename, { type: 'audio/webm' });

      const metadata: AudioMetadata = {
        entryId,
        level,
        levelId,
        quality: 'medium'
      };

      const audioRecord = await audioStorage.upload(file, metadata);
      
      setAudioBlob(null);
      setRecordingTime(0);
      
      onRecordingComplete?.(audioRecord);

    } catch (err) {
      setError('Failed to save recording');
      console.error('Save error:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const discardRecording = () => {
    setAudioBlob(null);
    setRecordingTime(0);
    setError(null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 min-w-[280px]">
      {error && (
        <div className="mb-2 p-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded text-red-700 dark:text-red-400 text-xs">
          {error}
        </div>
      )}

      {!isRecording && !audioBlob && (
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={startRecording}
            className="flex items-center space-x-2 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm"
          >
            <div className="w-2 h-2 bg-current rounded-full"></div>
            <span>Record</span>
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-3 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 text-sm"
          >
            Cancel
          </button>
        </div>
      )}

      {isRecording && (
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 text-red-600">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">{formatTime(recordingTime)}</span>
          </div>
          <button
            type="button"
            onClick={stopRecording}
            className="px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded text-sm"
          >
            Stop
          </button>
        </div>
      )}

      {audioBlob && (
        <div className="space-y-2">
          <audio controls className="w-full h-8">
            <source src={URL.createObjectURL(audioBlob)} type="audio/webm" />
          </audio>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={saveRecording}
              disabled={isUploading}
              className="flex items-center space-x-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded text-sm"
            >
              {isUploading ? (
                <>
                  <div className="animate-spin w-3 h-3 border border-white border-t-transparent rounded-full"></div>
                  <span>Saving...</span>
                </>
              ) : (
                <span>Save</span>
              )}
            </button>
            <button
              type="button"
              onClick={discardRecording}
              className="px-3 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 text-sm"
            >
              Discard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
