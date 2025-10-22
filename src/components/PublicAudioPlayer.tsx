'use client';

import { useState, useEffect } from 'react';
import { AudioRecord } from '@/services/audioStorage';
import { publicAudio } from '@/services/publicAudio';
import AudioSelector from './AudioSelector';

interface PublicAudioPlayerProps {
  entryId?: string;
  word?: string; // Alternative to entryId for public entries
  level: 'word' | 'meaning' | 'example';
  levelId?: string;
  className?: string;
}

export default function PublicAudioPlayer({ 
  entryId,
  word,
  level, 
  levelId,
  className = ''
}: PublicAudioPlayerProps) {
  const [recordings, setRecordings] = useState<AudioRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRecordings();
  }, [entryId, word, level, levelId]);

  const loadRecordings = async () => {
    if (!entryId && !word) return;
    
    setLoading(true);
    try {
      // If we have entryId, use it directly
      if (entryId) {
        const filters = {
          entryId,
          level,
          ...(levelId && { levelId })
        };
        const records = await publicAudio.list(filters);
        setRecordings(records);
      } else if (word) {
        // If we only have word, search for any recordings that might match
        // This is a fallback for public entries without _id
        const allRecords = await publicAudio.list({ level });
        // Filter by word name and levelId if provided
        const matchingRecords = allRecords.filter((record: AudioRecord) => {
          // Check if entryId matches the word (exact or contains)
          return record.metadata.entryId === word || 
                 record.metadata.entryId.includes(word) ||
                 word.includes(record.metadata.entryId);
        });
        
        // Further filter by levelId if provided
        const finalRecords = levelId 
          ? matchingRecords.filter((record: AudioRecord) => record.metadata.levelId === levelId)
          : matchingRecords;
          
        setRecordings(finalRecords);
      }
    } catch (error) {
      console.error('Failed to load audio recordings:', error);
      setRecordings([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading || recordings.length === 0) {
    return null;
  }

  return (
    <div className={`inline-flex items-center space-x-1 ${className}`}>
      <AudioSelector
        recordings={recordings}
        showControls={false}
      />
    </div>
  );
}
