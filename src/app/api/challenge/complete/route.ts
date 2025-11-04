import { NextRequest, NextResponse } from 'next/server';
import { geolocation } from '@vercel/functions';
import { getDatabase } from '@/lib/mongodb';
import type { ChallengeCompletionEvent, ChallengeCompletionResponse } from '@/types/completion';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Get geolocation data from Vercel
    const geo = geolocation(request);
    
    // Get user agent (no IP for privacy)
    const userAgent = request.headers.get('user-agent') || undefined;
    
    // Build completion event
    const completionEvent: ChallengeCompletionEvent = {
      // Challenge data from request
      date: body.date,
      totalScore: body.totalScore,
      correctAnswers: body.correctAnswers,
      totalChallenges: body.totalChallenges,
      accuracy: body.accuracy,
      timeSpent: body.timeSpent,
      
      // Geolocation data
      city: geo.city,
      country: geo.country,
      region: geo.region,
      latitude: geo.latitude,
      longitude: geo.longitude,
      
      // Request metadata
      userAgent,
      timestamp: Date.now(),
      
      // Optional user ID (for future auth)
      userId: body.userId,
    };
    
    // Store in MongoDB
    const db = await getDatabase();
    const collection = db.collection('challenge_completions');
    
    const result = await collection.insertOne(completionEvent);
    
    // Return success response
    const response: ChallengeCompletionResponse = {
      success: true,
      id: result.insertedId.toString(),
    };
    
    return NextResponse.json(response, { status: 201 });
    
  } catch (error) {
    console.error('Error tracking challenge completion:', error);
    
    const errorResponse: ChallengeCompletionResponse = {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
    
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
