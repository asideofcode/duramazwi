import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { AudioRecord } from '@/services/audioStorage';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const audioId = params.id;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'audio');
    
    // Read metadata to get filename and mime type
    const metadataPath = path.join(uploadDir, `${audioId}.json`);
    
    if (!existsSync(metadataPath)) {
      return NextResponse.json({ error: 'Audio record not found' }, { status: 404 });
    }

    const metadataContent = await readFile(metadataPath, 'utf-8');
    const audioRecord: AudioRecord = JSON.parse(metadataContent);
    
    // Read audio file
    const audioPath = path.join(uploadDir, audioRecord.filename);
    
    if (!existsSync(audioPath)) {
      return NextResponse.json({ error: 'Audio file not found' }, { status: 404 });
    }

    const audioBuffer = await readFile(audioPath);

    // Return audio with proper headers
    return new NextResponse(audioBuffer, {
      headers: {
        'Content-Type': audioRecord.mimeType || 'audio/webm',
        'Content-Length': audioBuffer.length.toString(),
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=31536000', // Cache for 1 year
      },
    });

  } catch (error) {
    console.error('Audio stream error:', error);
    return NextResponse.json(
      { error: 'Failed to stream audio file' },
      { status: 500 }
    );
  }
}
