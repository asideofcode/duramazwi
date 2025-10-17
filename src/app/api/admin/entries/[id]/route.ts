import { NextRequest, NextResponse } from 'next/server';
import adminDataService from '@/services/adminDataService';

// GET /api/admin/entries/[id] - Get single entry
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const result = await adminDataService.getEntryById(id);
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.message, details: result.error },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data,
      message: result.message
    });
  } catch (error) {
    console.error('❌ Error in GET /api/admin/entries/[id]:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/entries/[id] - Update entry
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const updateData = await request.json();
    
    const result = await adminDataService.updateEntry(id, updateData);
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.message, details: result.error },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data,
      message: result.message
    });
  } catch (error) {
    console.error('❌ Error in PUT /api/admin/entries/[id]:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/entries/[id] - Delete entry
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const result = await adminDataService.deleteEntry(id);
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.message, details: result.error },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data,
      message: result.message
    });
  } catch (error) {
    console.error('❌ Error in DELETE /api/admin/entries/[id]:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
