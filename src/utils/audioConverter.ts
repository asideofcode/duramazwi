import { exec } from 'child_process';
import { promisify } from 'util';
import { writeFile, unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const execAsync = promisify(exec);

/**
 * Audio conversion using ffmpeg
 * 
 * Currently runs ffmpeg synchronously during upload which:
 * - Requires ffmpeg to be installed (brew install ffmpeg)
 * - Blocks the request during conversion (~1-2 seconds)
 * - Works in local dev and production with ffmpeg available
 * 
 * TODO: MOVE THIS TO A CLOUD SERVICE FOR BETTER SCALABILITY
 * 
 * Future improvements:
 * 1. CloudConvert API (https://cloudconvert.com/) - Paid service
 * 2. AWS Lambda with ffmpeg layer - More complex setup
 * 3. Dedicated conversion microservice - Requires infrastructure
 * 4. Background job queue (Bull/BullMQ) - Async processing
 * 
 * For now, synchronous conversion is acceptable since:
 * - Audio files are small (usually < 1MB)
 * - Conversion is fast (1-2 seconds)
 * - Happens during admin upload (not user-facing)
 * - Provides immediate MP3 availability
 */

interface ConversionResult {
  mp3Path: string;
  mp3Url: string;
  duration: number;
}

/**
 * Convert audio file to MP3 format using ffmpeg
 * @param inputPath - Path to input audio file (WebM, MP4, etc.)
 * @param outputDir - Directory to save the MP3 file
 * @param baseUrl - Base URL for the MP3 file (e.g., '/uploads/audio')
 * @returns Promise with MP3 path and URL
 */
export async function convertToMp3(
  inputPath: string,
  outputDir: string,
  baseUrl: string
): Promise<ConversionResult> {
  // Check if ffmpeg is available
  try {
    await execAsync('ffmpeg -version');
  } catch (error) {
    console.warn('⚠️ ffmpeg not found - skipping MP3 conversion');
    throw new Error('ffmpeg not installed');
  }

  // Generate output filename
  const inputFilename = path.basename(inputPath);
  const mp3Filename = inputFilename.replace(/\.[^.]+$/, '.mp3');
  const mp3Path = path.join(outputDir, mp3Filename);

  try {
    console.log(`🔄 Converting ${inputFilename} to MP3...`);
    
    // Convert to MP3 with high quality settings
    // -qscale:a 2 = VBR quality (0-9, lower is better, 2 is high quality ~170-210 kbps)
    // -ar 48000 = 48kHz sample rate
    await execAsync(
      `ffmpeg -i "${inputPath}" -codec:a libmp3lame -qscale:a 2 -ar 48000 "${mp3Path}"`
    );

    // Get duration from the MP3 file
    const { stdout } = await execAsync(
      `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${mp3Path}"`
    );
    const duration = parseFloat(stdout.trim());

    console.log(`✅ Converted to MP3: ${mp3Filename} (${duration.toFixed(2)}s)`);

    return {
      mp3Path,
      mp3Url: `${baseUrl}/${mp3Filename}`,
      duration
    };
  } catch (error) {
    console.error('❌ MP3 conversion failed:', error);
    // Clean up partial file if it exists
    if (existsSync(mp3Path)) {
      await unlink(mp3Path);
    }
    throw new Error(`Failed to convert to MP3: ${error}`);
  }
}

/**
 * Convert audio blob to MP3 format
 * @param blob - Audio blob (WebM, MP4, etc.)
 * @param tempDir - Temporary directory for conversion
 * @param outputDir - Directory to save the MP3 file
 * @param baseUrl - Base URL for the MP3 file
 * @returns Promise with MP3 path and URL
 */
export async function convertBlobToMp3(
  blob: Blob,
  tempDir: string,
  outputDir: string,
  baseUrl: string
): Promise<ConversionResult> {
  const { v4: uuidv4 } = await import('uuid');
  
  // Save blob to temp file
  const tempId = uuidv4();
  const tempExtension = blob.type.includes('webm') ? 'webm' : 'mp4';
  const tempPath = path.join(tempDir, `${tempId}.${tempExtension}`);
  
  try {
    // Write blob to temp file
    const arrayBuffer = await blob.arrayBuffer();
    await writeFile(tempPath, Buffer.from(arrayBuffer));
    
    // Convert to MP3
    const result = await convertToMp3(tempPath, outputDir, baseUrl);
    
    return result;
  } finally {
    // Clean up temp file
    if (existsSync(tempPath)) {
      await unlink(tempPath);
    }
  }
}
