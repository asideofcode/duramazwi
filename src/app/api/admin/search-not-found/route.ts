import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const skip = (page - 1) * limit;
    
    const db = await getDatabase();
    const collection = db.collection('search');
    
    // Get searches with aggregation to count frequency
    const [searches, total, topNotFoundSearches, topFoundSearches] = await Promise.all([
      collection
        .find({})
        .sort({ timestamp: -1 })
        .skip(skip)
        .limit(limit)
        .toArray(),
      collection.countDocuments({}),
      // Top searches that were NOT found
      collection.aggregate([
        { $match: { status: 'not_found' } },
        {
          $group: {
            _id: '$query',
            count: { $sum: 1 },
            lastSearched: { $max: '$timestamp' },
            locations: {
              $addToSet: {
                $cond: [
                  { $ne: ['$country', null] },
                  { city: '$city', country: '$country' },
                  null
                ]
              }
            }
          }
        },
        { $sort: { count: -1 } },
        { $limit: 10 }
      ]).toArray(),
      // Top searches that WERE found
      collection.aggregate([
        { $match: { status: 'found' } },
        {
          $group: {
            _id: '$query',
            count: { $sum: 1 },
            lastSearched: { $max: '$timestamp' },
            avgResults: { $avg: '$resultCount' }
          }
        },
        { $sort: { count: -1 } },
        { $limit: 10 }
      ]).toArray()
    ]);
    
    return NextResponse.json({
      success: true,
      data: {
        searches,
        topNotFoundSearches,
        topFoundSearches,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    console.error('Error fetching not found searches:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch searches' },
      { status: 500 }
    );
  }
}
