import { NextRequest, NextResponse } from 'next/server';
import dataService from '@/services/dataService';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const letter = searchParams.get('letter');
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '20', 10);

    // Get all words
    const allWords = dataService.getAllWords();
    
    // Filter by letter if specified
    const filteredWords = letter
      ? allWords.filter((word: string) => word.toLowerCase().startsWith(letter.toLowerCase()))
      : allWords;

    // Calculate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedWords = filteredWords.slice(startIndex, endIndex);

    // Fetch full details for paginated words
    const wordsWithDetails = paginatedWords.map((word: string) => {
      const details = dataService.getWordDetails(word) as any[];
      return details && details.length > 0 ? details[0] : { word, meanings: [] };
    });

    return NextResponse.json({
      words: wordsWithDetails,
      total: filteredWords.length,
      page,
      totalPages: Math.ceil(filteredWords.length / limit),
    });
  } catch (error) {
    console.error('Mobile browse error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch words' },
      { status: 500 }
    );
  }
}
