'use client';

import { useState, useEffect } from 'react';
import SvgIcon from '@/component/icons/svg-icon';
import AudioRecorder from './AudioRecorder';
import AudioPlayer from './AudioPlayer';
import { AudioRecord, AudioFilters, createAudioStorage } from '@/services/audioStorage';

interface AudioManagerProps {
  entryId: string;
  level: 'word' | 'meaning' | 'example';
  levelId?: string;
  title?: string;
  className?: string;
}

export default function AudioManager({ 
  entryId, 
  level, 
  levelId,
  title,
  className = ''
}: AudioManagerProps) {
  const [recordings, setRecordings] = useState<AudioRecord[]>([]);
  const [showRecorder, setShowRecorder] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load existing recordings
  useEffect(() => {
    loadRecordings();
  }, [entryId, level, levelId]);

  const loadRecordings = async () => {
    setLoading(true);
    setError(null);

    try {
      const audioStorage = createAudioStorage();
      const filters: AudioFilters = {
        entryId,
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

  const getLevelDisplayName = () => {
    switch (level) {
      case 'word': return 'Word';
      case 'meaning': return 'Definition';
      case 'example': return 'Example';
      default: return level;
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {title || `${getLevelDisplayName()} Audio`}
        </h3>
        <button
          type="button"
          onClick={() => setShowRecorder(!showRecorder)}
          className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
        >
          <SvgIcon className="h-4 w-4" variant="light" icon="Plus" />
          <span>Add Recording</span>
        </button>
      </div>

      {error && (
        <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400 text-sm">
          {error}
        </div>
      )}

      {showRecorder && (
        <AudioRecorder
          entryId={entryId}
          level={level}
          levelId={levelId}
          onRecordingComplete={handleRecordingComplete}
        />
      )}

      <div className="space-y-3">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin h-6 w-6 border-2 border-blue-600 border-t-transparent rounded-full"></div>
            <span className="ml-2 text-gray-600 dark:text-gray-400">Loading recordings...</span>
          </div>
        ) : recordings.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <div className="h-12 w-12 mx-auto mb-2 border-2 border-gray-300 dark:border-gray-600 rounded-full"></div>
            <p>No recordings yet</p>
            <p className="text-sm">Click "Add Recording" to create your first audio recording</p>
          </div>
        ) : (
          recordings.map((recording) => (
            <AudioPlayer
              key={recording.id}
              audioRecord={recording}
              onDelete={handleDelete}
              showControls={true}
            />
          ))
        )}
      </div>

      {recordings.length > 0 && (
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
          {recordings.length} recording{recordings.length !== 1 ? 's' : ''} available
        </div>
      )}
    </div>
  );
}
