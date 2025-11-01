/**
 * Challenge Audio Conversion Script
 * 
 * Converts challenge audio files from Opus/MP4 to MP3 for Safari compatibility
 * 
 * Usage: 
 *   Dry run (no changes): node scripts/convert-challenge-audio.js --dry-run
 *   Actual conversion:    node scripts/convert-challenge-audio.js
 */

require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const { promisify } = require("util");
const { MongoClient, ObjectId } = require("mongodb");
const { put } = require("@vercel/blob");

const execAsync = promisify(exec);

// Check for dry-run flag
const DRY_RUN = process.argv.includes('--dry-run');

async function downloadFile(url, outputPath) {
  console.log(`  Downloading: ${url}`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download: ${response.statusText}`);
  }
  const buffer = await response.arrayBuffer();
  fs.writeFileSync(outputPath, Buffer.from(buffer));
}

async function convertToMp3(inputPath, outputPath) {
  console.log(`  Converting to MP3...`);
  try {
    // High quality MP3 conversion
    await execAsync(`ffmpeg -i "${inputPath}" -codec:a libmp3lame -qscale:a 2 -ar 48000 "${outputPath}"`);
  } catch (error) {
    throw new Error(`FFmpeg conversion failed: ${error.message}`);
  }
}

async function uploadToVercel(filePath, originalUrl) {
  console.log(`  Uploading MP3 to Vercel Blob...`);
  
  // Parse original URL to maintain folder structure
  const urlPath = new URL(originalUrl).pathname;
  const newPath = urlPath.replace(/\.(mp4|webm|m4a)$/, '.mp3');
  
  const fileBuffer = fs.readFileSync(filePath);
  const blob = await put(newPath, fileBuffer, {
    access: 'public',
    contentType: 'audio/mpeg',
    addRandomSuffix: false, // Keep same filename structure
  });
  
  return blob.url;
}

async function convertChallengeAudio() {
  if (DRY_RUN) {
    console.log('🔍 DRY RUN MODE - No changes will be made\n');
    console.log('🎵 Starting challenge audio conversion analysis...\n');
  } else {
    console.log('🎵 Starting challenge audio conversion to MP3...\n');
    console.log('⚠️  WARNING: This will modify your database and upload new files!\n');
  }
  
  // Validate environment variables
  if (!DRY_RUN && !process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('❌ BLOB_READ_WRITE_TOKEN environment variable is not set');
    process.exit(1);
  }
  
  if (!process.env.MONGODB_URI) {
    console.error('❌ MONGODB_URI environment variable is not set');
    process.exit(1);
  }
  
  console.log('✓ Environment variables loaded\n');
  
  // Check if ffmpeg is installed
  try {
    await execAsync('ffmpeg -version');
    console.log('✓ FFmpeg is installed\n');
  } catch (error) {
    console.error('❌ FFmpeg is not installed. Please install it first:');
    console.error('   macOS: brew install ffmpeg');
    process.exit(1);
  }
  
  // Connect to MongoDB
  console.log('📡 Connecting to MongoDB...');
  const client = new MongoClient(process.env.MONGODB_URI);
  
  try {
    await client.connect();
    console.log('✓ Connected to MongoDB\n');
    
    const db = client.db('chishona');
    const challengesCollection = db.collection('challenges');
    
    // Fetch all challenges with audio
    console.log('📥 Fetching challenges with audio...');
    const challenges = await challengesCollection.find({
      audioUrl: { $exists: true, $ne: null, $ne: '' }
    }).toArray();
    
    console.log(`Found ${challenges.length} challenges with audio\n`);
    
    // Create temp directory
    const tempDir = path.join(process.cwd(), 'temp-challenge-audio');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
    
    let successCount = 0;
    let errorCount = 0;
    let skippedCount = 0;
    const errors = [];
    
    for (let i = 0; i < challenges.length; i++) {
      const challenge = challenges[i];
      
      console.log(`\n[${i + 1}/${challenges.length}] Processing challenge: ${challenge._id}`);
      console.log(`  Type: ${challenge.type}`);
      console.log(`  Question: ${challenge.question.substring(0, 50)}...`);
      console.log(`  Audio URL: ${challenge.audioUrl}`);
      
      try {
        // Skip if no audio URL
        if (!challenge.audioUrl) {
          console.log('  ⏭️  No audio URL, skipping');
          skippedCount++;
          continue;
        }
        
        // Skip if already MP3
        if (challenge.audioUrl.endsWith('.mp3')) {
          console.log('  ✓ Already MP3, skipping');
          skippedCount++;
          continue;
        }
        
        // Check if it's a format we can convert
        const isConvertible = challenge.audioUrl.match(/\.(mp4|webm|m4a|opus)$/i);
        if (!isConvertible) {
          console.log('  ⚠ Unknown format, skipping');
          skippedCount++;
          continue;
        }
        
        if (DRY_RUN) {
          // Dry run - just show what would happen
          const extension = path.extname(challenge.audioUrl);
          console.log(`  📋 Would convert from ${extension} to .mp3`);
          console.log(`  📋 Would upload to Vercel Blob`);
          console.log(`  📋 Would update database with new URL`);
          console.log(`  📋 Would keep original URL as backup: ${challenge.audioUrl}`);
          successCount++;
        } else {
          // Actual conversion
          const inputPath = path.join(tempDir, `${challenge._id}-input${path.extname(challenge.audioUrl)}`);
          const mp3Path = path.join(tempDir, `${challenge._id}.mp3`);
          
          // Download original audio
          await downloadFile(challenge.audioUrl, inputPath);
          
          // Convert to MP3
          await convertToMp3(inputPath, mp3Path);
          
          // Upload MP3
          const mp3Url = await uploadToVercel(mp3Path, challenge.audioUrl);
          
          console.log(`  ✓ Converted: ${mp3Url}`);
          
          // Update challenge in MongoDB
          await challengesCollection.updateOne(
            { _id: challenge._id },
            { 
              $set: { 
                audioUrl: mp3Url,
                originalAudioUrl: challenge.audioUrl // Keep original for reference
              } 
            }
          );
          
          console.log('  ✓ Updated in database');
          
          // Clean up temp files
          fs.unlinkSync(inputPath);
          fs.unlinkSync(mp3Path);
          
          successCount++;
        }
        
      } catch (error) {
        console.error(`  ❌ Error: ${error.message}`);
        errors.push({
          challengeId: challenge._id,
          audioUrl: challenge.audioUrl,
          error: error.message
        });
        errorCount++;
      }
    }
    
    // Clean up temp directory
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
    
    // Summary
    console.log('\n' + '='.repeat(60));
    if (DRY_RUN) {
      console.log('📊 Dry Run Summary (NO CHANGES MADE):');
    } else {
      console.log('📊 Conversion Summary:');
    }
    console.log('='.repeat(60));
    console.log(`✅ ${DRY_RUN ? 'Would convert' : 'Successfully converted'}: ${successCount}`);
    console.log(`⏭️  Skipped (already MP3): ${skippedCount}`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log('='.repeat(60));
    
    if (errors.length > 0) {
      console.log('\n❌ Errors encountered:');
      errors.forEach(err => {
        console.log(`  - Challenge ${err.challengeId}: ${err.error}`);
        console.log(`    URL: ${err.audioUrl}`);
      });
    }
    
    if (DRY_RUN) {
      console.log('\n✨ Dry run complete! Run without --dry-run to perform actual conversion.');
    } else {
      console.log('\n✨ Conversion complete!');
    }
    
  } catch (error) {
    console.error('\n❌ Fatal error:', error);
    process.exit(1);
  } finally {
    await client.close();
    console.log('\n👋 Disconnected from MongoDB');
  }
}

// Run the conversion
convertChallengeAudio().catch(console.error);
