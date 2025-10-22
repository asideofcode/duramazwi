import { NextRequest, NextResponse } from 'next/server';
import { ChallengeService } from '@/services/challengeService';

// GET /api/admin/challenges - List all challenges
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || undefined;
    const difficulty = searchParams.get('difficulty') || undefined;

    const challenges = await ChallengeService.getAllChallenges({ type, difficulty });

    return NextResponse.json({
      success: true,
      data: challenges,
      total: challenges.length
    });
  } catch (error) {
    console.error('Error fetching challenges:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch challenges' },
      { status: 500 }
    );
  }
}

// POST /api/admin/challenges - Create new challenge
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.type || !body.question || !body.correctAnswer || !body.difficulty || !body.points) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const challengeData = {
      type: body.type,
      question: body.question,
      correctAnswer: body.correctAnswer,
      options: body.options,
      audioUrl: body.audioUrl,
      explanation: body.explanation,
      difficulty: body.difficulty,
      points: body.points
    };

    const newChallenge = await ChallengeService.createChallenge(challengeData);

    return NextResponse.json({
      success: true,
      data: newChallenge,
      message: 'Challenge created successfully'
    });
  } catch (error) {
    console.error('Error creating challenge:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create challenge' },
      { status: 500 }
    );
  }
}
