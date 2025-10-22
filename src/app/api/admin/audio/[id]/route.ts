import { NextRequest, NextResponse } from 'next/server';
import { audioService } from '@/services/audioService';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Await params (Next.js 15 requirement)
    const { id: audioId } = await params;
    
    // Use the unified audio service
    await audioService.delete(audioId);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Audio delete error:', error);
    return NextResponse.json(
      { error: 'Failed to delete audio file' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Await params (Next.js 15 requirement)
    const { id: audioId } = await params;
    
    // Use the unified audio service
    const audioRecord = await audioService.getRecord(audioId);
    
    if (!audioRecord) {
      return NextResponse.json({ error: 'Audio record not found' }, { status: 404 });
    }

    return NextResponse.json(audioRecord);

  } catch (error) {
    console.error('Audio get error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch audio record' },
      { status: 500 }
    );
  }
}
