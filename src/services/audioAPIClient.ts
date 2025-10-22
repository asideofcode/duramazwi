// Simple API client for audio operations
// Server handles all storage decisions based on AUDIO_MODE

export interface AudioMetadata {
  entryId: string;
  level: 'word' | 'meaning' | 'example';
  levelId?: string; // meaningId or exampleId for specific targeting
  speaker?: string;
  dialect?: string;
  quality?: 'low' | 'medium' | 'high';
  notes?: string;
}

export interface AudioRecord {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  duration?: number;
  metadata: AudioMetadata;
  url: string;
  blobUrl?: string; // Vercel Blob URL when using blob storage
  createdAt: Date;
  updatedAt: Date;
}

export interface AudioFilters {
  entryId?: string;
  level?: 'word' | 'meaning' | 'example';
  levelId?: string;
  speaker?: string;
  dialect?: string;
}

// Simple API client - just makes HTTP requests to admin audio endpoints
export class AudioAPIClient {
  async upload(file: File, metadata: AudioMetadata): Promise<AudioRecord> {
    const formData = new FormData();
    formData.append('audio', file);
    formData.append('metadata', JSON.stringify(metadata));

    const response = await fetch('/api/admin/audio/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload audio');
    }

    return response.json();
  }

  async delete(audioId: string): Promise<void> {
    const response = await fetch(`/api/admin/audio/${audioId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete audio');
    }
  }

  async getRecord(audioId: string): Promise<AudioRecord> {
    const response = await fetch(`/api/admin/audio/${audioId}`);
    
    if (!response.ok) {
      throw new Error('Failed to get audio record');
    }
    
    return response.json();
  }

  async getUrl(audioId: string): Promise<string> {
    const record = await this.getRecord(audioId);
    return record.url;
  }

  async list(filters?: AudioFilters): Promise<AudioRecord[]> {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });
    }

    const response = await fetch(`/api/admin/audio?${params}`);
    if (!response.ok) {
      throw new Error('Failed to fetch audio records');
    }

    const result = await response.json();
    return result.data || [];
  }
}

// Simple factory - just returns the API client
// Server handles all storage complexity via AUDIO_MODE
export function createAudioStorage(): AudioAPIClient {
  return new AudioAPIClient();
}
