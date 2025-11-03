import { NextRequest, NextResponse } from 'next/server';
import { ChallengeService } from '@/services/challengeService';

// GET /api/admin/challenges/[id]/usage - Get all daily challenges that use this challenge
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const dates = await ChallengeService.getDailyChallengesUsingChallenge(id);

    return NextResponse.json({
      success: true,
      data: {
        challengeId: id,
        usedInDates: dates,
        count: dates.length
      }
    });
  } catch (error) {
    console.error('Error fetching challenge usage:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch challenge usage' },
      { status: 500 }
    );
  }
}
