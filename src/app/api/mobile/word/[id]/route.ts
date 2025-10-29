import { NextRequest, NextResponse } from 'next/server';
import dataService from '@/services/dataService';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const wordId = decodeURIComponent(params.id);

    // Get word details
    const wordDetails = dataService.getWordDetails(wordId);

    if (!wordDetails) {
      return NextResponse.json(
        { error: 'Word not found' },
        { status: 404 }
      );
    }

    // Return full word details for mobile
    return NextResponse.json(wordDetails);
  } catch (error) {
    console.error('Mobile word detail error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch word details' },
      { status: 500 }
    );
  }
}
