require("dotenv").config();
const path = require("path");
const fs = require("fs");
const { audioDatabase } = require("./audioDatabase");

// Export audio index for production build (MongoDB → static JSON)
async function exportAudio() {
  console.log("📤 Exporting audio for production build...");
  
  try {
    // Always export to main uploads.json for production
    const exportPath = path.join(process.cwd(), 'public', 'uploads', 'audio', 'uploads.json');
    
    // Check if we're in production mode and have MongoDB
    if (process.env.AUDIO_MODE === 'production' && process.env.MONGODB_URI) {
      console.log("🎵 Production mode: Exporting from MongoDB");
      
      // Export from MongoDB
      await audioDatabase.exportToFile(exportPath);
      
      // Get stats
      const stats = await audioDatabase.getStats();
      console.log(`📊 Exported ${stats.totalRecords} audio records from MongoDB`);
      console.log(`📊 ${stats.entriesWithAudio} entries have audio`);
      console.log(`📊 Records by level:`, stats.recordsByLevel);
      
    } else {
      console.log("🎵 Local mode: Using existing file-based index");
      
      // In local mode, just ensure the file exists
      if (fs.existsSync(exportPath)) {
        const content = fs.readFileSync(exportPath, 'utf-8');
        const index = JSON.parse(content);
        console.log(`📊 Using existing local index with ${Object.keys(index.records).length} records`);
      } else {
        // Create empty index
        const emptyIndex = {
          version: '1.0.0',
          lastUpdated: new Date().toISOString(),
          records: {},
          entryIndex: {},
          levelIndex: {}
        };
        
        // Ensure directory exists
        const dir = path.dirname(exportPath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        
        fs.writeFileSync(exportPath, JSON.stringify(emptyIndex, null, 2));
        console.log("📊 Created empty audio index for build");
      }
    }
    
    console.log(`✅ Audio export completed: ${exportPath}`);
    
  } catch (error) {
    console.error("❌ Failed to export audio:", error);
    
    // Create empty index as fallback
    const exportPath = path.join(process.cwd(), 'public', 'uploads', 'audio', 'uploads.json');
    const emptyIndex = {
      version: '1.0.0',
      lastUpdated: new Date().toISOString(),
      records: {},
      entryIndex: {},
      levelIndex: {}
    };
    
    // Ensure directory exists
    const dir = path.dirname(exportPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(exportPath, JSON.stringify(emptyIndex, null, 2));
    console.log("✅ Created empty audio index as fallback");
  } finally {
    if (process.env.AUDIO_MODE === 'production') {
      await audioDatabase.close();
    }
  }
}

// Run if called directly
if (require.main === module) {
  exportAudio().catch(console.error);
}

module.exports = { exportAudio };
