import { NextRequest, NextResponse } from 'next/server';
import { ChallengeService } from '@/services/challengeService';

// GET /api/admin/daily-challenges - Get all daily challenge assignments
export async function GET(request: NextRequest) {
  try {
    const dailyChallenges = await ChallengeService.getAllDailyChallenges();

    return NextResponse.json({
      success: true,
      data: dailyChallenges
    });
  } catch (error) {
    console.error('Error fetching daily challenges:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch daily challenges' },
      { status: 500 }
    );
  }
}

// POST /api/admin/daily-challenges - Assign challenges to a date
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { date, challengeIds } = body;

    if (!date || !challengeIds || !Array.isArray(challengeIds)) {
      return NextResponse.json(
        { success: false, error: 'Date and challengeIds array are required' },
        { status: 400 }
      );
    }

    const dailyChallenge = await ChallengeService.assignDailyChallenge(date, challengeIds);

    return NextResponse.json({
      success: true,
      data: dailyChallenge,
      message: 'Daily challenge assigned successfully'
    });
  } catch (error) {
    console.error('Error assigning daily challenge:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Failed to assign daily challenge' },
      { status: 500 }
    );
  }
}
