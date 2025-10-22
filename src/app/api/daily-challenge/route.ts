import { NextRequest, NextResponse } from 'next/server';
import { ChallengeService } from '@/services/challengeService';

// GET /api/daily-challenge - Get today's daily challenge
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date') || new Date().toISOString().split('T')[0];

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
