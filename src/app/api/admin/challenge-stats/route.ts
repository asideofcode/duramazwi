import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

export async function GET() {
  try {
    const db = await getDatabase();
    const completionsCollection = db.collection('challenge_completions');
    
    // Get all completions
    const completions = await completionsCollection
      .find({})
      .sort({ timestamp: 1 })
      .toArray();
    
    // Group completions by date
    const completionsByDate = new Map<string, { completions: number; userIds: Set<string> }>();
    
    completions.forEach((completion: any) => {
      const date = completion.date; // Already in YYYY-MM-DD format
      
      if (!completionsByDate.has(date)) {
        completionsByDate.set(date, {
          completions: 0,
          userIds: new Set()
        });
      }
      
      const dayData = completionsByDate.get(date)!;
      dayData.completions++;
      
      // Track unique users (use sessionId as fallback)
      const userId = completion.userId || completion.sessionId || 'anonymous';
      dayData.userIds.add(userId);
    });
    
    // Convert to array and sort by date
    const timeSeriesData = Array.from(completionsByDate.entries())
      .map(([date, data]) => ({
        date,
        completions: data.completions,
        uniqueUsers: data.userIds.size
      }))
      .sort((a, b) => a.date.localeCompare(b.date));
    
    // Calculate summary stats
    const totalCompletions = completions.length;
    const avgCompletionsPerDay = timeSeriesData.length > 0 
      ? Math.round(totalCompletions / timeSeriesData.length) 
      : 0;
    const peakDay = timeSeriesData.reduce((max, day) => 
      day.completions > max.completions ? day : max, 
      { date: '', completions: 0, uniqueUsers: 0 }
    );
    
    return NextResponse.json({
      timeSeriesData,
      summary: {
        totalCompletions,
        avgCompletionsPerDay,
        peakDay: {
          date: peakDay.date,
          completions: peakDay.completions
        },
        totalDays: timeSeriesData.length
      }
    });
  } catch (error) {
    console.error('Error fetching challenge stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch challenge statistics' },
      { status: 500 }
    );
  }
}
