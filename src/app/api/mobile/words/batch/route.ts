import { NextRequest, NextResponse } from 'next/server';
import dataService from '@/services/dataService';

export async function POST(request: NextRequest) {
  try {
    const { words } = await request.json();

    if (!words || !Array.isArray(words)) {
      return NextResponse.json(
        { error: 'Invalid request: words array required' },
        { status: 400 }
      );
    }

    // Fetch all word details in one go
    const wordDetails = words.map((word: string) => {
      const details = dataService.getWordDetails(word) as any[];
      return details && details.length > 0 ? details[0] : null;
    });

    return NextResponse.json({ words: wordDetails });
  } catch (error) {
    console.error('Mobile batch words error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch word details' },
      { status: 500 }
    );
  }
}
