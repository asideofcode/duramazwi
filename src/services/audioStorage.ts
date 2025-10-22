// Generic audio storage interface - easily swappable backends
export interface AudioStorageProvider {
  upload(file: File, metadata: AudioMetadata): Promise<AudioRecord>;
  delete(audioId: string): Promise<void>;
  getUrl(audioId: string): Promise<string>;
  list(filters?: AudioFilters): Promise<AudioRecord[]>;
}

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

// Local disk storage implementation (for now)
export class LocalAudioStorage implements AudioStorageProvider {
  private baseUrl: string;
  private uploadPath: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    this.uploadPath = '/uploads/audio';
  }

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

  async getUrl(audioId: string): Promise<string> {
    return `${this.baseUrl}/api/admin/audio/${audioId}/stream`;
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

// Vercel Blob storage implementation
export class VercelBlobStorage implements AudioStorageProvider {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  }

  async upload(file: File, metadata: AudioMetadata): Promise<AudioRecord> {
    const formData = new FormData();
    formData.append('audio', file);
    formData.append('metadata', JSON.stringify(metadata));

    const response = await fetch('/api/admin/audio/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload audio to Vercel Blob');
    }

    return response.json();
  }

  async delete(audioId: string): Promise<void> {
    const response = await fetch(`/api/admin/audio/${audioId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete audio from Vercel Blob');
    }
  }

  async getUrl(audioId: string): Promise<string> {
    // For Vercel Blob, we'll store the direct blob URL in the record
    const response = await fetch(`/api/admin/audio/${audioId}`);
    if (!response.ok) {
      throw new Error('Failed to get audio record');
    }
    
    const record = await response.json();
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

export class AWSS3Storage implements AudioStorageProvider {
  // TODO: Implement when migrating to AWS S3
  async upload(file: File, metadata: AudioMetadata): Promise<AudioRecord> {
    throw new Error('AWS S3 storage not implemented yet');
  }

  async delete(audioId: string): Promise<void> {
    throw new Error('AWS S3 storage not implemented yet');
  }

  async getUrl(audioId: string): Promise<string> {
    throw new Error('AWS S3 storage not implemented yet');
  }

  async list(filters?: AudioFilters): Promise<AudioRecord[]> {
    throw new Error('AWS S3 storage not implemented yet');
  }
}

// Storage factory - easily switch between providers
export function createAudioStorage(): AudioStorageProvider {
  // Priority: Explicit env var > Production default > Development default
  const provider = process.env.AUDIO_STORAGE_PROVIDER || 
                  (process.env.NODE_ENV === 'production' ? 'vercel' : 'local');
  
  console.log(`🎵 Audio storage: ${provider} (NODE_ENV: ${process.env.NODE_ENV})`);
  
  switch (provider) {
    case 'vercel':
      return new VercelBlobStorage();
    case 'aws':
      return new AWSS3Storage();
    case 'local':
    default:
      return new LocalAudioStorage();
  }
}
