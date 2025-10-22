import { NextRequest, NextResponse } from 'next/server';
import { AudioFilters } from '@/services/audioStorage';
import { audioService } from '@/services/audioService';

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

    // Use the efficient index-based lookup
    const audioRecords = await audioService.list(filters);

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
