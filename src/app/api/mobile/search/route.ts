import { NextRequest, NextResponse } from 'next/server';
import dataService from '@/services/dataService';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '20', 10);

    if (!query) {
      return NextResponse.json({ words: [], total: 0, page: 1, totalPages: 0 });
    }

    // Search for words
    const searchResults = dataService.search(query);

    // Calculate pagination
    const totalResults = searchResults.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedResults = searchResults.slice(startIndex, endIndex);

    // Fetch full details for paginated results
    const wordsWithDetails = paginatedResults.map((result: any) => {
      const details = dataService.getWordDetails(result.word) as any[];
      return details && details.length > 0 ? details[0] : { word: result.word, meanings: [] };
    });

    return NextResponse.json({
      words: wordsWithDetails,
      total: totalResults,
      page,
      totalPages: Math.ceil(totalResults / limit),
    });
  } catch (error) {
    console.error('Mobile search error:', error);
    return NextResponse.json(
      { error: 'Failed to search words' },
      { status: 500 }
    );
  }
}
