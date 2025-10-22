'use client';

import { useState, useEffect } from 'react';
import { AudioRecord, createAudioStorage } from '@/services/audioStorage';
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
      const audioStorage = createAudioStorage();
      
      // If we have entryId, use it directly
      if (entryId) {
        const filters = {
          entryId,
          level,
          ...(levelId && { levelId })
        };
        const records = await audioStorage.list(filters);
        setRecordings(records);
      } else if (word) {
        // If we only have word, search for any recordings that might match
        // This is a fallback for public entries without _id
        const allRecords = await audioStorage.list({ level });
        // Filter by word name and levelId if provided
        const matchingRecords = allRecords.filter(record => {
          // Check if entryId matches the word (exact or contains)
          const entryMatches = record.metadata.entryId && 
            (record.metadata.entryId.toLowerCase() === word.toLowerCase() || 
             record.metadata.entryId.toLowerCase().includes(word.toLowerCase()));
          
          // If levelId is specified, it must match exactly
          const levelMatches = !levelId || record.metadata.levelId === levelId;
          
          return entryMatches && levelMatches;
        });
        setRecordings(matchingRecords);
      }
    } catch (err) {
      console.error('Failed to load recordings:', err);
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
