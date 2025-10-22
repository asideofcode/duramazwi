import { NextRequest, NextResponse } from 'next/server';
import { AudioMetadata } from '@/services/audioStorage';
import { audioService } from '@/services/audioService';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get('audio') as File;
    const metadataString = formData.get('metadata') as string;

    if (!audioFile) {
      return NextResponse.json({ error: 'No audio file provided' }, { status: 400 });
    }

    if (!metadataString) {
      return NextResponse.json({ error: 'No metadata provided' }, { status: 400 });
    }

    let metadata: AudioMetadata;
    try {
      metadata = JSON.parse(metadataString);
    } catch (error) {
      return NextResponse.json({ error: 'Invalid metadata format' }, { status: 400 });
    }

    // Validate required metadata
    if (!metadata.entryId || !metadata.level) {
      return NextResponse.json({ error: 'Missing required metadata fields' }, { status: 400 });
    }

    // Use the unified audio service
    const audioRecord = await audioService.upload(audioFile, metadata);

    return NextResponse.json(audioRecord);

  } catch (error) {
    console.error('Audio upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload audio file' },
      { status: 500 }
    );
  }
}
