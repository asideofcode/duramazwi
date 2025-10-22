import { NextRequest, NextResponse } from 'next/server';
import { readdir, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { AudioRecord, AudioFilters } from '@/services/audioStorage';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const filters: AudioFilters = {
      entryId: searchParams.get('entryId') || undefined,
      level: searchParams.get('level') as 'word' | 'meaning' | 'example' || undefined,
      levelId: searchParams.get('levelId') || undefined,
      speaker: searchParams.get('speaker') || undefined,
      dialect: searchParams.get('dialect') || undefined,
    };

    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'audio');
    
    if (!existsSync(uploadDir)) {
      return NextResponse.json({ data: [], total: 0 });
    }

    // Read all JSON metadata files
    const files = await readdir(uploadDir);
    const metadataFiles = files.filter(file => file.endsWith('.json'));
    
    const audioRecords: AudioRecord[] = [];

    for (const metadataFile of metadataFiles) {
      try {
        const metadataPath = path.join(uploadDir, metadataFile);
        const metadataContent = await readFile(metadataPath, 'utf-8');
        const audioRecord: AudioRecord = JSON.parse(metadataContent);
        
        // Apply filters
        let matches = true;
        
        if (filters.entryId && audioRecord.metadata.entryId !== filters.entryId) {
          matches = false;
        }
        
        if (filters.level && audioRecord.metadata.level !== filters.level) {
          matches = false;
        }
        
        if (filters.levelId && audioRecord.metadata.levelId !== filters.levelId) {
          matches = false;
        }
        
        if (filters.speaker && audioRecord.metadata.speaker !== filters.speaker) {
          matches = false;
        }
        
        if (filters.dialect && audioRecord.metadata.dialect !== filters.dialect) {
          matches = false;
        }
        
        if (matches) {
          audioRecords.push(audioRecord);
        }
        
      } catch (err) {
        console.error(`Error reading metadata file ${metadataFile}:`, err);
      }
    }

    // Sort by creation date (newest first)
    audioRecords.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json({
      data: audioRecords,
      total: audioRecords.length
    });

  } catch (error) {
    console.error('Audio list error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch audio records' },
      { status: 500 }
    );
  }
}
