import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { AudioRecord, AudioMetadata } from '@/services/audioStorage';

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

    const metadata: AudioMetadata = JSON.parse(metadataString);

    // Validate required metadata
    if (!metadata.entryId || !metadata.level) {
      return NextResponse.json({ error: 'Missing required metadata' }, { status: 400 });
    }

    // Create upload directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'audio');
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Generate unique filename
    const audioId = uuidv4();
    const fileExtension = audioFile.name.split('.').pop() || 'webm';
    const filename = `${audioId}.${fileExtension}`;
    const filePath = path.join(uploadDir, filename);

    // Write file to disk
    const bytes = await audioFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    // Create audio record
    const audioRecord: AudioRecord = {
      id: audioId,
      filename,
      originalName: audioFile.name,
      mimeType: audioFile.type,
      size: audioFile.size,
      metadata,
      url: `/api/admin/audio/${audioId}/stream`,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // TODO: Save to database instead of just returning
    // For now, we'll store metadata in a JSON file alongside the audio
    const metadataPath = path.join(uploadDir, `${audioId}.json`);
    await writeFile(metadataPath, JSON.stringify(audioRecord, null, 2));

    return NextResponse.json(audioRecord);

  } catch (error) {
    console.error('Audio upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload audio file' },
      { status: 500 }
    );
  }
}
