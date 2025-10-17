import { NextRequest, NextResponse } from 'next/server';
import adminDataService from '@/services/adminDataService';

// GET /api/admin/entries - Get all entries with pagination and search
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';

    const result = await adminDataService.getAllEntries(page, limit, search, category);
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.message, details: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data,
      message: result.message,
      total: result.total,
      page: result.page,
      limit: result.limit
    });
  } catch (error) {
    console.error('❌ Error in GET /api/admin/entries:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/admin/entries - Create new entry
export async function POST(request: NextRequest) {
  try {
    const entryData = await request.json();
    
    // Basic validation
    if (!entryData.word || !entryData.meanings) {
      return NextResponse.json(
        { error: 'Word and meanings are required' },
        { status: 400 }
      );
    }

    const result = await adminDataService.createEntry(entryData);
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.message, details: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data,
      message: result.message
    }, { status: 201 });
  } catch (error) {
    console.error('❌ Error in POST /api/admin/entries:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
