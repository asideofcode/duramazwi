import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { audioService } from '@/services/audioService';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Await params (Next.js 15 requirement)
    const { id: audioId } = await params;
    
    // Get audio record from service
    const audioRecord = await audioService.getRecord(audioId);
    
    if (!audioRecord) {
      return NextResponse.json({ error: 'Audio record not found' }, { status: 404 });
    }

    // If it's a blob URL, redirect to it
    if (audioRecord.blobUrl) {
      return NextResponse.redirect(audioRecord.blobUrl);
    }

    // Otherwise, serve local file
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'audio');
    const audioPath = path.join(uploadDir, audioRecord.filename);
    
    if (!existsSync(audioPath)) {
      return NextResponse.json({ error: 'Audio file not found' }, { status: 404 });
    }

    const audioBuffer = await readFile(audioPath);

    // Return audio with proper headers
    return new NextResponse(new Uint8Array(audioBuffer), {
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
