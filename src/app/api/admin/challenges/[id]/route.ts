import { NextRequest, NextResponse } from 'next/server';
import { ChallengeService } from '@/services/challengeService';

// GET /api/admin/challenges/[id] - Get single challenge
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const challenge = await ChallengeService.getChallengeById(params.id);
    
    if (!challenge) {
      return NextResponse.json(
        { success: false, error: 'Challenge not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: challenge
    });
  } catch (error) {
    console.error('Error fetching challenge:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch challenge' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/challenges/[id] - Update challenge
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const updatedChallenge = await ChallengeService.updateChallenge(params.id, body);
    
    if (!updatedChallenge) {
      return NextResponse.json(
        { success: false, error: 'Challenge not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updatedChallenge,
      message: 'Challenge updated successfully'
    });
  } catch (error) {
    console.error('Error updating challenge:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update challenge' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/challenges/[id] - Delete challenge
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const deleted = await ChallengeService.deleteChallenge(params.id);
    
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: 'Challenge not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Challenge deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting challenge:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete challenge' },
      { status: 500 }
    );
  }
}
