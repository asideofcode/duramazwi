import { NextRequest, NextResponse } from 'next/server';
import { ChallengeService } from '@/services/challengeService';
import { getTodayInTimezone } from '@/utils/timezone';

// GET /api/daily-challenge - Get today's daily challenge
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Get date from query params or calculate based on client timezone
    let date = searchParams.get('date');
    
    if (!date) {
      // Try to get timezone from multiple sources
      const timezone = searchParams.get('timezone') || 
                      request.headers.get('x-timezone') ||
                      request.cookies.get('timezone')?.value ||
                      'UTC';
      
      // Calculate today's date in the client's timezone
      date = getTodayInTimezone(timezone);
    }

    const dailyChallenge = await ChallengeService.getDailyChallenge(date);
    
    if (!dailyChallenge) {
      return NextResponse.json({
        success: false,
        error: 'No daily challenge assigned for this date'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: dailyChallenge
    });
  } catch (error) {
    console.error('Error fetching daily challenge:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch daily challenge' },
      { status: 500 }
    );
  }
}
