# Audio Architecture & Conversion Strategy

## Overview

This document outlines the audio recording, storage, and conversion strategy for the Shona Dictionary application. The system handles audio for both dictionary entries and challenge exercises.

## Current Implementation

### Recording Format

**Browser Recording (MediaRecorder API):**
- Format: **WebM with Opus codec**
- Why: Best browser support for recording, excellent compression
- Sample Rate: 44.1kHz
- Settings: Echo cancellation and noise suppression enabled

```typescript
// Both AudioRecorder and CompactAudioRecorder use:
const mimeType = 'audio/webm;codecs=opus';
const mediaRecorder = new MediaRecorder(stream, { mimeType });
```

### Storage & Conversion

**Two modes based on `AUDIO_MODE` environment variable:**

#### 1. Local Development (`AUDIO_MODE=local`)
- Original WebM saved to `/public/uploads/audio/`
- **Automatic MP3 conversion** using local ffmpeg
- MP3 used as primary playback format
- Index stored in `/src/data/audio-index.json`

#### 2. Production (`AUDIO_MODE=production`)
- Original WebM uploaded to Vercel Blob
- **Automatic MP3 conversion** using ffmpeg (if available)
- MP3 uploaded to Vercel Blob as primary format
- Metadata stored in MongoDB (`audio_index` collection)
- Original WebM kept as backup

### Conversion Process

**Location:** `/src/utils/audioConverter.ts`

```typescript
// Converts WebM/MP4 to MP3 using ffmpeg
convertToMp3(inputPath, outputDir, baseUrl)
```

**Settings:**
- Codec: libmp3lame
- Quality: VBR quality 2 (~170-210 kbps)
- Sample Rate: 48kHz
- Also extracts accurate duration metadata

**Integration:**
- Runs synchronously during upload (1-2 seconds)
- Falls back to original format if ffmpeg unavailable
- Uses `/tmp` directory in serverless environments

## The Problem: Format Compatibility

### WebM Issues

**✅ Pros:**
- Excellent browser recording support
- Great compression (small file sizes)
- Good quality with Opus codec

**❌ Cons:**
1. **Duration metadata issues** - WebM files from MediaRecorder often have incorrect/missing duration
2. **Mobile app incompatibility** - React Native (expo-audio) has poor WebM support
3. **Safari playback quirks** - While Safari can play WebM, support is inconsistent

### MP4 Issues

**✅ Pros:**
- Universal playback support
- Mobile app compatible
- Good quality

**❌ Cons:**
1. **Safari codec incompatibility** - Safari cannot decode Opus codec in MP4 containers
2. **Wrong duration reporting** - Safari reports buffered duration instead of total duration
3. **Truncated playback** - Audio stops playing before completion in Safari
4. **MediaRecorder limitations** - Not all browsers support MP4 recording

**Example Issue:**
```
Actual audio duration: 6.14 seconds
Safari reported duration: 4.19 seconds (only buffered portion)
Result: Audio cuts off at 4.19 seconds
```

### MP3 Solution

**✅ Pros:**
- **Universal compatibility** - Works everywhere (Chrome, Firefox, Safari, Edge, mobile)
- **Accurate duration** - Proper metadata in all browsers
- **Complete playback** - No truncation issues
- **Mobile app support** - Perfect compatibility with React Native

**❌ Cons:**
- Larger file sizes than Opus (but acceptable for short audio clips)
- Cannot be recorded directly via MediaRecorder API
- Requires server-side conversion

## Current Workflow

### Recording & Upload Flow

```
1. User records audio in browser
   ↓
2. MediaRecorder creates WebM (Opus codec)
   ↓
3. Upload to server
   ↓
4. Server saves original WebM (backup)
   ↓
5. Server converts to MP3 using ffmpeg
   ↓
6. Server uploads/saves MP3
   ↓
7. MP3 URL returned to client
   ↓
8. MP3 used for all playback
```

### Playback

**Web App:**
- Uses native HTML5 Audio API
- Plays MP3 files directly
- No special handling needed

**Mobile App:**
- Uses expo-audio
- Plays MP3 files directly
- Perfect compatibility

## Bulk Conversion Script

**Location:** `/scripts/convert-challenge-audio.js`

**Purpose:** Convert existing audio files in bulk (for historical data or when real-time conversion fails)

**Features:**
- Dry-run mode: `--dry-run` flag to preview changes
- Connects to MongoDB to find all challenges with audio
- Downloads audio files
- Converts to MP3 using ffmpeg
- Uploads MP3 to Vercel Blob
- Updates database with new URLs
- Keeps original URLs as backup in `originalAudioUrl` field

**Usage:**
```bash
# Preview what will be converted
node scripts/convert-challenge-audio.js --dry-run

# Actually convert files
node scripts/convert-challenge-audio.js
```

**Safety Features:**
- Skips already-converted MP3 files
- Handles null audio URLs gracefully
- Preserves original URLs
- Detailed logging and error reporting

## Requirements

### Local Development
```bash
brew install ffmpeg
```

### Production (Vercel)
**Current Status:** ffmpeg needs to be available in the deployment environment

**Options:**
1. Use Vercel with custom Docker image including ffmpeg
2. Use bulk conversion script periodically
3. Move to cloud conversion service (see Future Improvements)

## Known Issues & Solutions

### Issue 1: Safari Opus Incompatibility
**Problem:** Safari cannot decode Opus codec in MP4 containers  
**Solution:** Convert all audio to MP3 format  
**Status:** ✅ Implemented

### Issue 2: WebM Duration Metadata
**Problem:** MediaRecorder WebM files have incorrect duration  
**Solution:** Use ffprobe to extract accurate duration during MP3 conversion  
**Status:** ✅ Implemented

### Issue 3: Mobile App WebM Support
**Problem:** React Native has poor WebM support  
**Solution:** Use MP3 for all playback  
**Status:** ✅ Implemented

### Issue 4: Serverless ffmpeg Availability
**Problem:** ffmpeg may not be available in serverless environments  
**Solution:** Graceful fallback to original format + bulk conversion script  
**Status:** ✅ Implemented with fallback

## Future Improvements

### TODO: Move to Cloud Conversion Service

**Current Limitations:**
- Requires ffmpeg installed on server
- Blocks request during conversion (1-2 seconds)
- May not work in all serverless environments

**Better Solutions:**

#### 1. CloudConvert API
- **Pros:** Managed service, reliable, supports many formats
- **Cons:** Paid service, external dependency
- **URL:** https://cloudconvert.com/

#### 2. AWS Lambda with ffmpeg Layer
- **Pros:** Scalable, pay-per-use, full control
- **Cons:** More complex setup, requires AWS infrastructure
- **Implementation:** Use Lambda layer with pre-compiled ffmpeg

#### 3. Dedicated Conversion Microservice
- **Pros:** Full control, can optimize for our use case
- **Cons:** Requires infrastructure, maintenance overhead
- **Implementation:** Separate service with job queue

#### 4. Background Job Queue (Bull/BullMQ)
- **Pros:** Async processing, doesn't block uploads
- **Cons:** Requires Redis, more complex architecture
- **Implementation:** Queue conversion jobs, process in background

### Recommendation

**Short-term (Current):**
- Continue using synchronous ffmpeg conversion
- Use bulk conversion script for any failures
- Acceptable for current scale (admin uploads only)

**Medium-term (Next 6 months):**
- Implement CloudConvert API integration
- Async conversion with webhook callbacks
- Better for scaling to multiple admins

**Long-term (1+ years):**
- Dedicated conversion microservice
- Support for additional formats
- Batch processing optimizations

## File Locations

### Core Files
- `/src/utils/audioConverter.ts` - Conversion utility with ffmpeg
- `/src/services/audioService.ts` - Upload and storage logic
- `/src/components/admin/AudioRecorder.tsx` - Full audio recorder
- `/src/components/admin/CompactAudioRecorder.tsx` - Inline recorder
- `/src/hooks/useAudioPreload.ts` - Audio playback hook

### Scripts
- `/scripts/convert-challenge-audio.js` - Bulk conversion for challenges
- `/scripts/convert-audio-to-mp3.js` - Bulk conversion for dictionary audio

### Configuration
- `AUDIO_MODE` environment variable - Controls storage mode (local/production)
- `BLOB_READ_WRITE_TOKEN` - Vercel Blob access token
- `MONGODB_URI` - Database connection for production mode

## Testing Checklist

### Recording
- [ ] Can record audio in Chrome
- [ ] Can record audio in Firefox
- [ ] Can record audio in Safari
- [ ] Can record audio on mobile browsers

### Playback
- [ ] MP3 plays correctly in Chrome
- [ ] MP3 plays correctly in Firefox
- [ ] MP3 plays correctly in Safari (desktop)
- [ ] MP3 plays correctly in Safari (iOS)
- [ ] MP3 plays correctly in mobile app
- [ ] Duration displays correctly in all browsers
- [ ] Audio plays to completion in all browsers

### Conversion
- [ ] Local conversion works with ffmpeg installed
- [ ] Production conversion works (or falls back gracefully)
- [ ] Bulk conversion script works for challenges
- [ ] Original files preserved as backup

## Debugging

### Check if ffmpeg is available
```bash
ffmpeg -version
```

### Check conversion logs
Look for these log messages:
- `💾 Saved original: [filename]`
- `✅ MP3 conversion successful: [filename]`
- `⚠️ MP3 conversion failed, using original file`

### Test audio playback
```javascript
// In browser console
const audio = new Audio('path-to-mp3');
audio.play();
console.log('Duration:', audio.duration);
```

### Verify MP3 metadata
```bash
ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 file.mp3
```

## Summary

**Current State:**
- ✅ Recording in WebM (best browser support)
- ✅ Converting to MP3 (universal compatibility)
- ✅ Automatic conversion on upload
- ✅ Fallback to original if conversion fails
- ✅ Bulk conversion script for existing files

**Key Decisions:**
1. **Record in WebM** - Best MediaRecorder API support
2. **Store as MP3** - Universal playback compatibility
3. **Convert with ffmpeg** - Reliable, fast, accurate
4. **Keep originals** - Safety backup, future flexibility

**Trade-offs:**
- Slight delay during upload (1-2 seconds) - Acceptable for admin use
- Requires ffmpeg - Available locally, needs setup for production
- Larger file sizes - Acceptable for short audio clips
- Synchronous processing - Simple, works for current scale
