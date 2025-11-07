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
    const { date, challengeIds, status } = body;

    if (!date || !challengeIds || !Array.isArray(challengeIds)) {
      return NextResponse.json(
        { success: false, error: 'Date and challengeIds array are required' },
        { status: 400 }
      );
    }

    // Validate status if provided
    const validStatus: 'draft' | 'published' = status === 'published' ? 'published' : 'draft';

    const dailyChallenge = await ChallengeService.assignDailyChallenge(date, challengeIds, validStatus);

    return NextResponse.json({
      success: true,
      data: dailyChallenge,
      message: `Daily challenge ${validStatus === 'published' ? 'published' : 'saved as draft'} successfully`
    });
  } catch (error) {
    console.error('Error assigning daily challenge:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Failed to assign daily challenge' },
      { status: 500 }
    );
  }
}

// PATCH /api/admin/daily-challenges - Update status of a daily challenge
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { date, status } = body;

    if (!date || !status) {
      return NextResponse.json(
        { success: false, error: 'Date and status are required' },
        { status: 400 }
      );
    }

    if (status !== 'draft' && status !== 'published') {
      return NextResponse.json(
        { success: false, error: 'Status must be either "draft" or "published"' },
        { status: 400 }
      );
    }

    const updated = await ChallengeService.updateDailyChallengeStatus(date, status);

    if (!updated) {
      return NextResponse.json(
        { success: false, error: 'Daily challenge not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Daily challenge status updated to ${status}`
    });
  } catch (error) {
    console.error('Error updating daily challenge status:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update daily challenge status' },
      { status: 500 }
    );
  }
}
