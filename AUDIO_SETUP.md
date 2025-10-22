# 🎵 Hybrid Audio System Setup

## **🎯 Two Modes, Build-Time Resolution**

### **🏠 Local Mode (Offline Tinkering)**
```bash
# .env
AUDIO_MODE=local
```
- ✅ **Files:** `public/uploads/audio/*.webm`
- ✅ **Index:** `public/uploads/audio/uploads.json`
- ✅ **No internet needed**
- ✅ **No MongoDB required**
- ✅ **Perfect for experimenting**

### **🚀 Production Mode (Managing Production)**
```bash
# .env
AUDIO_MODE=production
MONGODB_URI=your_mongodb_connection
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token
```
- ✅ **Files:** Vercel Blob Storage
- ✅ **Runtime:** MongoDB (for recording/editing)
- ✅ **Build:** Static JSON export
- ✅ **Production:** Serves from static file

## **🔄 Workflows**

### **Offline Tinkering**
```bash
# Set local mode
echo "AUDIO_MODE=local" >> .env

# Start developing
npm run dev

# Record audio → saves locally
# No internet needed!
```

### **Managing Production Audio**
```bash
# Set production mode
echo "AUDIO_MODE=production" >> .env
echo "MONGODB_URI=mongodb+srv://..." >> .env
echo "BLOB_READ_WRITE_TOKEN=vercel_blob_..." >> .env

# Start admin interface
npm run dev

# Record audio → saves to production MongoDB + Vercel Blob
# Immediately available in production!
```

### **Building for Production**
```bash
# Build automatically exports MongoDB → static JSON
npm run build
# Output: 🎵 Loaded 13 audio records at build time

# Production serves from static file (super fast!)
# No runtime API calls for public pages!
```

## **🎮 Commands**

```bash
# Switch to local mode
AUDIO_MODE=local npm run dev

# Switch to production mode  
AUDIO_MODE=production npm run dev

# Build (works in any mode)
npm run build

# Migrate existing files to MongoDB (one-time)
npm run migrate-to-mongodb
```

## **🏗️ Architecture**

### **Public Pages (Static)**
```typescript
// Build time: Audio data resolved once
const audioRecords = audioDataService.getRecordsForEntry(entryId);

// Runtime: No API calls, just static data
<StaticAudioPlayer recordings={audioRecords} />

// No more: 📻 Loaded 13 audio records from static file (every visit)
// Now: 🎵 Loaded 13 audio records at build time (once)
```

### **Admin Pages (Dynamic)**
```typescript
// Runtime: Full CRUD operations via API
const audioStorage = createAudioStorage(); // Uses AUDIO_MODE
await audioStorage.upload(file, metadata);
```

### **Production Deployment**
```bash
# Vercel environment variables:
AUDIO_MODE=local  # Use static files (no MongoDB needed)
# That's it! Static files are served directly
```

## **✨ Benefits**

- **Build-Time Resolution:** Audio data resolved once at build time (like dataService)
- **No Runtime Fetching:** Public pages use pre-resolved static data
- **Admin/Public Separation:** Admin uses APIs, public uses static files
- **Offline Capable:** Local mode needs no internet or database
- **Production Optimized:** Static JSON files for maximum performance
- **Flexible:** Switch modes instantly with one environment variable
- **Safe:** Local tinkering never affects production

## **🔧 Migration (One-time)**

If you have existing audio files:
```bash
# 1. Migrate to MongoDB
npm run migrate-to-mongodb

# 2. Test production mode
AUDIO_MODE=production npm run dev

# 3. Build and deploy
npm run build
```

That's it! 🎉
