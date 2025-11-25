/**
 * Audio Converter Utility
 * 
 * Converts audio files to MP3 format using ffmpeg for universal compatibility
 * Handles both local and serverless environments
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execAsync = promisify(exec);

export interface ConversionResult {
  mp3Path: string;
  mp3Url: string;
  duration?: number;
}

/**
 * Convert audio file to MP3 format
 * 
 * @param inputPath - Path to input audio file (WebM, MP4, M4A, etc.)
 * @param outputDir - Directory to save the MP3 file
 * @param baseUrl - Base URL for the MP3 file (e.g., '/uploads/audio' or '')
 * @returns Conversion result with MP3 path, URL, and duration
 */
export async function convertToMp3(
  inputPath: string,
  outputDir: string,
  baseUrl: string
): Promise<ConversionResult> {
  try {
    // Check if ffmpeg is available
    try {
      await execAsync('ffmpeg -version');
    } catch (error) {
      throw new Error('FFmpeg is not installed or not available in PATH');
    }

    // Generate output filename
    const inputFilename = path.basename(inputPath);
    const filenameWithoutExt = inputFilename.replace(/\.[^/.]+$/, '');
    const mp3Filename = `${filenameWithoutExt}.mp3`;
    const mp3Path = path.join(outputDir, mp3Filename);

    console.log(`🔄 Converting ${inputFilename} to MP3...`);

    // Convert to MP3 with high quality settings
    // -codec:a libmp3lame: Use LAME MP3 encoder
    // -qscale:a 2: VBR quality 2 (~170-210 kbps, high quality)
    // -ar 48000: Sample rate 48kHz (good for speech and music)
    const ffmpegCommand = `ffmpeg -i "${inputPath}" -codec:a libmp3lame -qscale:a 2 -ar 48000 "${mp3Path}"`;
    
    await execAsync(ffmpegCommand);

    console.log(`✅ Converted to MP3: ${mp3Filename}`);

    // Extract duration using ffprobe
    let duration: number | undefined;
    try {
      const { stdout } = await execAsync(
        `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${mp3Path}"`
      );
      duration = parseFloat(stdout.trim());
      console.log(`⏱️  Duration: ${duration.toFixed(2)}s`);
    } catch (error) {
      console.warn('⚠️  Could not extract duration:', error);
    }

    // Construct URL
    const mp3Url = baseUrl ? `${baseUrl}/${mp3Filename}` : mp3Filename;

    return {
      mp3Path,
      mp3Url,
      duration
    };

  } catch (error) {
    console.error('❌ MP3 conversion failed:', error);
    throw new Error(`Failed to convert audio to MP3: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Check if ffmpeg is available in the system
 * Useful for graceful degradation
 */
export async function isFfmpegAvailable(): Promise<boolean> {
  try {
    await execAsync('ffmpeg -version');
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Get audio file duration using ffprobe
 */
export async function getAudioDuration(filePath: string): Promise<number | undefined> {
  try {
    const { stdout } = await execAsync(
      `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${filePath}"`
    );
    return parseFloat(stdout.trim());
  } catch (error) {
    console.warn('⚠️  Could not get audio duration:', error);
    return undefined;
  }
}
