import { NextRequest, NextResponse } from 'next/server';
import dataService from '@/services/dataService';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const wordId = decodeURIComponent(id);

    // Get word details (returns array of matches)
    const wordMatches = dataService.getWordDetails(wordId) as any[];

    if (!wordMatches || wordMatches.length === 0) {
      return NextResponse.json(
        { error: 'Word not found' },
        { status: 404 }
      );
    }

    // Return the first match (should only be one exact match)
    return NextResponse.json(wordMatches[0]);
  } catch (error) {
    console.error('Mobile word detail error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch word details' },
      { status: 500 }
    );
  }
}
