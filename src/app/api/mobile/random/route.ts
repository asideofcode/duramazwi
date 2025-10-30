import { NextResponse } from 'next/server';
import dataService from '@/services/dataService';

export async function GET() {
  try {
    // Get a random word
    const randomWord = dataService.getRandomWord();

    if (!randomWord) {
      return NextResponse.json(
        { error: 'No words available' },
        { status: 404 }
      );
    }

    return NextResponse.json(randomWord);
  } catch (error) {
    console.error('Mobile random word error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch random word' },
      { status: 500 }
    );
  }
}
