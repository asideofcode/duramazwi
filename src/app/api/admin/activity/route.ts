import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

export async function GET() {
  try {
    const db = await getDatabase();
    const collection = db.collection('challenge_completions');
    
    // Get recent completions (last 10) and total count
    const [recentCompletions, totalCompletions] = await Promise.all([
      collection
        .find({})
        .sort({ timestamp: -1 })
        .limit(10)
        .toArray(),
      collection.countDocuments({})
    ]);
    
    return NextResponse.json({
      success: true,
      data: {
        recentCompletions,
        totalCompletions
      }
    });
  } catch (error) {
    console.error('Error fetching activity:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch activity' },
      { status: 500 }
    );
  }
}
