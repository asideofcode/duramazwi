import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const collection = db.collection('challenge_notifications');

    // Check if email already exists
    const existing = await collection.findOne({ email: email.toLowerCase() });
    
    if (existing) {
      return NextResponse.json({
        success: true,
        message: 'You\'re already subscribed!',
        alreadySubscribed: true
      });
    }

    // Add new subscription
    await collection.insertOne({
      email: email.toLowerCase(),
      subscribedAt: new Date(),
      active: true,
      timezone: 'UTC', // Can be enhanced later
      source: 'challenge_completion'
    });

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to daily challenge reminders!'
    });
  } catch (error) {
    console.error('Error subscribing to challenge notifications:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
