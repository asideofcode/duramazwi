import { NextRequest, NextResponse } from 'next/server';
import dataService from '@/services/dataService';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');

    if (!query || query.trim().length === 0) {
      return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
    }

    // Search for words
    const results = dataService.search(query);

    // Limit to 30 results for mobile
    const limitedResults = results.slice(0, 30);

    // Format for mobile - simplified response
    const mobileResults = limitedResults.map((entry: any) => ({
      id: entry.word,
      word: entry.word,
      briefDefinition: entry.meanings[0]?.definitions[0]?.definition || 'No definition available',
    }));

    return NextResponse.json(mobileResults);
  } catch (error) {
    console.error('Mobile search error:', error);
    return NextResponse.json(
      { error: 'Failed to search words' },
      { status: 500 }
    );
  }
}
