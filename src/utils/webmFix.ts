/**
 * WebM Duration Fix Utilities
 * 
 * Provides client-side WebM duration fixing using @fix-webm-duration/fix library
 */

import { fixWebmDuration } from '@fix-webm-duration/fix';

/**
 * Fix WebM blob duration metadata
 * @param blob - Original WebM blob
 * @param recordingDuration - Duration in seconds (from recording timer)
 * @returns Fixed WebM blob with proper duration header
 */
export async function fixWebmBlob(blob: Blob, recordingDuration: number): Promise<Blob> {
  try {
    console.log(`🔧 Fixing WebM duration: ${recordingDuration}s`);
    
    // Convert duration to milliseconds
    const durationMs = recordingDuration * 1000;
    
    // Fix the WebM duration
    const fixedBlob = await fixWebmDuration(blob, durationMs);
    
    console.log(`✅ WebM duration fixed: ${recordingDuration}s`);
    return fixedBlob;
    
  } catch (error) {
    console.warn('⚠️ Failed to fix WebM duration, using original blob:', error);
    return blob; // Return original blob if fix fails
  }
}

/**
 * Check if a blob is WebM format
 */
export function isWebmBlob(blob: Blob): boolean {
  return blob.type.includes('webm');
}

/**
 * Get file extension based on MIME type
 */
export function getAudioExtension(mimeType: string): string {
  if (mimeType.includes('mp4')) return 'mp4';
  if (mimeType.includes('webm')) return 'webm';
  if (mimeType.includes('ogg')) return 'ogg';
  return 'webm'; // default fallback
}
