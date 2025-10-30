import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { getTodayInTimezone } from '@/utils/timezone';
import { shuffleArray } from '@/utils/shuffle';
import { ObjectId } from 'mongodb';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const dateParam = searchParams.get('date');
    const timezone = searchParams.get('timezone') || 'UTC';

    const targetDate = dateParam || getTodayInTimezone(timezone);

    // Get the daily challenge from database
    const db = await getDatabase();
    const dailyChallenge = await db.collection('daily_challenges').findOne({ date: targetDate });

    if (!dailyChallenge) {
      return NextResponse.json(
        { error: 'No challenge available for this date' },
        { status: 404 }
      );
    }

    // Get the challenge IDs
    const challengeIds = dailyChallenge.challengeIds || [];

    if (challengeIds.length === 0) {
      return NextResponse.json(
        { error: 'No challenges found' },
        { status: 404 }
      );
    }

    // Fetch all challenges
    const challenges = await db
      .collection('challenges')
      .find({
        _id: { $in: challengeIds.map((id: string) => new ObjectId(id)) },
      })
      .toArray();

    // Shuffle options for multiple choice challenges server-side
    const processedChallenges = challenges.map((challenge: any) => {
      const processed: any = {
        id: challenge._id.toString(),
        type: challenge.type,
        question: challenge.question,
        correctAnswer: challenge.correctAnswer,
        difficulty: challenge.difficulty || 'beginner',
        points: challenge.points || 10,
        explanation: challenge.explanation,
        audioUrl: challenge.audioUrl,
      };

      // Shuffle options for multiple choice and audio recognition
      if ((challenge.type === 'multiple_choice' || challenge.type === 'audio_recognition') && challenge.options) {
        processed.options = shuffleArray([...challenge.options]);
      }

      // Add word bank for translation builder
      if (challenge.type === 'translation_builder') {
        // Combine correctAnswer and distractors to create the word bank
        const correctWords = Array.isArray(challenge.correctAnswer) 
          ? challenge.correctAnswer 
          : [challenge.correctAnswer];
        const distractors = challenge.distractors || [];
        processed.wordBank = shuffleArray([...correctWords, ...distractors]);
      }

      return processed;
    });

    return NextResponse.json({
      date: targetDate,
      challenges: processedChallenges,
    });
  } catch (error) {
    console.error('Mobile daily challenge error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch daily challenge' },
      { status: 500 }
    );
  }
}
