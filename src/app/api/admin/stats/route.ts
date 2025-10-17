import { NextRequest, NextResponse } from 'next/server';
import adminDataService from '@/services/adminDataService';

// GET /api/admin/stats - Get admin statistics
export async function GET(request: NextRequest) {
  try {
    const result = await adminDataService.getStats();
    
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
    });
  } catch (error) {
    console.error('❌ Error in GET /api/admin/stats:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
