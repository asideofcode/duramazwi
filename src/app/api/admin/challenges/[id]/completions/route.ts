import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;
    
    // Sorting parameters
    const sortBy = searchParams.get('sortBy') || 'timestamp';
    const sortOrder = searchParams.get('sortOrder') === 'asc' ? 1 : -1;
    
    // Build sort object
    const sortObj: Record<string, 1 | -1> = {};
    if (sortBy === 'userId' || sortBy === 'country' || sortBy === 'timestamp') {
      sortObj[sortBy] = sortOrder;
    } else {
      sortObj.timestamp = -1; // Default sort
    }
    
    // The id is the challenge date (YYYY-MM-DD)
    const { id: date } = await params;
    
    const db = await getDatabase();
    const collection = db.collection('challenge_completions');
    
    // Get completions for this date with pagination and sorting
    const [completions, total] = await Promise.all([
      collection
        .find({ date })
        .sort(sortObj)
        .skip(skip)
        .limit(limit)
        .toArray(),
      collection.countDocuments({ date })
    ]);
    
    return NextResponse.json({
      success: true,
      data: {
        completions,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    console.error('Error fetching challenge completions:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch completions' },
      { status: 500 }
    );
  }
}
