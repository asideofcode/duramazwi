import { NextRequest, NextResponse } from 'next/server';
import { unlink, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { AudioRecord } from '@/services/audioStorage';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const audioId = params.id;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'audio');
    
    // Read metadata to get filename
    const metadataPath = path.join(uploadDir, `${audioId}.json`);
    
    if (!existsSync(metadataPath)) {
      return NextResponse.json({ error: 'Audio record not found' }, { status: 404 });
    }

    const metadataContent = await readFile(metadataPath, 'utf-8');
    const audioRecord: AudioRecord = JSON.parse(metadataContent);
    
    // Delete audio file
    const audioPath = path.join(uploadDir, audioRecord.filename);
    if (existsSync(audioPath)) {
      await unlink(audioPath);
    }
    
    // Delete metadata file
    await unlink(metadataPath);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Audio delete error:', error);
    return NextResponse.json(
      { error: 'Failed to delete audio file' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const audioId = params.id;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'audio');
    
    // Read metadata
    const metadataPath = path.join(uploadDir, `${audioId}.json`);
    
    if (!existsSync(metadataPath)) {
      return NextResponse.json({ error: 'Audio record not found' }, { status: 404 });
    }

    const metadataContent = await readFile(metadataPath, 'utf-8');
    const audioRecord: AudioRecord = JSON.parse(metadataContent);

    return NextResponse.json(audioRecord);

  } catch (error) {
    console.error('Audio get error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch audio record' },
      { status: 500 }
    );
  }
}
