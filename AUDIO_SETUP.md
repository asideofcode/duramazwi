# 🎵 Simple Audio System Setup

## **🎯 Two Modes, One System**

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

# Production serves from static file (super fast!)
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

## **✨ Benefits**

- **Simple:** One environment variable switches everything
- **Offline:** Local mode needs no internet or database
- **Fast:** Production uses static JSON files
- **Flexible:** Switch modes instantly
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
