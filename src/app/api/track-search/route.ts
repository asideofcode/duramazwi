import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { headers } from 'next/headers';

export async function POST(request: NextRequest) {
  // Only track in production
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.json({ success: true, message: 'Tracking disabled in development' });
  }

  try {
    const body = await request.json();
    const { query, resultCount } = body;

    const db = await getDatabase();
    const collection = db.collection('search');

    // Get geolocation and request metadata from Vercel headers
    const headersList = await headers();
    const city = headersList.get('x-vercel-ip-city');
    const country = headersList.get('x-vercel-ip-country');
    const region = headersList.get('x-vercel-ip-country-region');
    const latitude = headersList.get('x-vercel-ip-latitude');
    const longitude = headersList.get('x-vercel-ip-longitude');
    const userAgent = headersList.get('user-agent');

    // Create search event with status field
    const searchEvent = {
      query: query.trim(),
      resultCount,
      status: resultCount > 0 ? 'found' : 'not_found',
      timestamp: Date.now(),
      city: city || undefined,
      country: country || undefined,
      region: region || undefined,
      latitude: latitude || undefined,
      longitude: longitude || undefined,
      userAgent: userAgent || undefined,
    };

    await collection.insertOne(searchEvent);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking search:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to track search' },
      { status: 500 }
    );
  }
}
