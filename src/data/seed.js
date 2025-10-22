require("dotenv").config(); // Load environment variables from .env.local
const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");
const jsondiffpatch = require('jsondiffpatch');

// Parse command line arguments
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const importFilePath = args.find(arg => !arg.startsWith('--'));

// Ensure a file argument is provided
if (!importFilePath) {
  console.error("Usage: node seed.js <path-to-import-file> [--dry-run]");
  console.error("  --dry-run: Show what would be changed without actually modifying the database");
  process.exit(1);
}

// Check if the file exists
if (!fs.existsSync(importFilePath)) {
  console.error(`File not found: ${importFilePath}`);
  process.exit(1);
}

// Load the data from the specified file
let rawData;
try {
  rawData = fs.readFileSync(importFilePath, "utf-8");
} catch (err) {
  console.error(`Failed to read file: ${importFilePath}`, err);
  process.exit(1);
}

let allMyDataRaw;
try {
  allMyDataRaw = JSON.parse(rawData);
} catch (err) {
  console.error(`Failed to parse JSON from file: ${importFilePath}`, err);
  process.exit(1);
}

// Process the data (should already be in new schema format)
const allMyData = Array.isArray(allMyDataRaw) ? allMyDataRaw : [allMyDataRaw];

console.log(`📊 Loaded ${allMyData.length} entries from ${importFilePath}`);

// Check for duplicates in the input data based on "word"
console.log("🔍 Checking for duplicates in input data...");
const wordCounts = new Map();
const duplicates = [];

for (const entry of allMyData) {
  const word = entry.word;
  if (wordCounts.has(word)) {
    wordCounts.set(word, wordCounts.get(word) + 1);
    if (wordCounts.get(word) === 2) {
      duplicates.push(word);
    }
  } else {
    wordCounts.set(word, 1);
  }
}

if (duplicates.length > 0) {
  console.log(`⚠️  Found ${duplicates.length} duplicate words in input data:`);
  duplicates.slice(0, 10).forEach(word => {
    console.log(`  - "${word}" (appears ${wordCounts.get(word)} times)`);
  });
  if (duplicates.length > 10) {
    console.log(`  ... and ${duplicates.length - 10} more duplicates`);
  }
  console.log("❌ Please resolve duplicates before proceeding");
  process.exit(1);
} else {
  console.log("✅ No duplicates found in input data");
}

if (dryRun) {
  console.log("🔍 DRY RUN MODE - No changes will be made to the database");
}

// Validate data format
const sampleEntry = allMyData[0];
if (sampleEntry && !sampleEntry.meanings) {
  console.error("❌ Data appears to be in old format. Please use migrated data with new schema.");
  process.exit(1);
}

// MongoDB connection URI from environment variable
const uri = process.env.MONGODB_URI; // Make sure this is set in .env.local

if (!uri) {
  console.error("MONGODB_URI is not set in .env.local.");
  process.exit(1);
}

// MongoDB database and collection name
const dbName = "chishona";
const collectionName = "words_new_schema"; // Updated to use new schema collection

(async function () {
  const client = new MongoClient(uri);

  try {
    // Connect to MongoDB
    console.log("Connecting to MongoDB...");
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    if (dryRun) {
      // Dry run: fetch all existing documents and compare efficiently
      console.log("🔍 Fetching existing documents for comparison...");
      
      const existingDocs = await collection.find({}).toArray();
      const existingMap = new Map(existingDocs.map(doc => [doc.word, doc]));
      
      console.log(`📊 Found ${existingDocs.length} existing documents in database`);
      console.log("🔍 Analyzing differences...");
      
      let wouldInsert = 0;
      let wouldUpdate = 0;
      let wouldRemainUnchanged = 0;
      let sampleChanges = [];
      let detailedChanges = [];
      
      // Create jsondiffpatch instance
      const differ = jsondiffpatch.create({
        objectHash: function(obj) {
          return obj._id || obj.id || JSON.stringify(obj);
        },
        arrays: {
          detectMove: true
        }
      });
      
      // Normalize document for comparison (remove MongoDB internal fields)
      const normalizeDoc = (doc) => {
        const { _id, ...normalized } = doc;
        return normalized;
      };
      
      // Format diff output for human reading
      const formatDiff = (delta, word, id) => {
        if (!delta) return null;
        
        const changes = [];
        
        // Helper to format individual changes
        const formatChange = (path, change) => {
          if (Array.isArray(change)) {
            if (change.length === 1) {
              changes.push(`    ${path}: added "${change[0]}"`);
            } else if (change.length === 2) {
              changes.push(`    ${path}: "${change[0]}" → "${change[1]}"`);
            } else if (change.length === 3 && change[2] === 0) {
              changes.push(`    ${path}: removed "${change[0]}"`);
            }
          } else if (typeof change === 'object') {
            changes.push(`    ${path}: [complex change]`);
          }
        };
        
        // Process the delta object
        const processDelta = (delta, prefix = '') => {
          for (const [key, value] of Object.entries(delta)) {
            const path = prefix ? `${prefix}.${key}` : key;
            
            if (key.startsWith('_')) continue; // Skip array move operations
            
            if (Array.isArray(value)) {
              formatChange(path, value);
            } else if (typeof value === 'object' && value !== null) {
              processDelta(value, path);
            }
          }
        };
        
        processDelta(delta);
        
        if (changes.length > 0) {
          return `  🔄 ${word} (${id}):\n${changes.join('\n')}`;
        }
        
        return `  🔄 ${word} (${id}): [structural changes]`;
      };
      
      for (const newDoc of allMyData) {
        const existing = existingMap.get(newDoc.word);
        
        if (!existing) {
          wouldInsert++;
          if (sampleChanges.length < 10) {
            sampleChanges.push(`➕ NEW: ${newDoc.word}`);
          }
        } else {
          const existingNormalized = normalizeDoc(existing);
          const newNormalized = normalizeDoc(newDoc);
          
          const delta = differ.diff(existingNormalized, newNormalized);
          
          if (delta) {
            wouldUpdate++;
            if (sampleChanges.length < 10) {
              sampleChanges.push(`🔄 UPDATE: ${newDoc.word}`);
              
              // Show detailed diff for first few changes
              if (detailedChanges.length < 5) {
                const formattedDiff = formatDiff(delta, newDoc.word, existing._id);
                if (formattedDiff) {
                  detailedChanges.push(formattedDiff);
                }
              }
            }
          } else {
            wouldRemainUnchanged++;
          }
        }
      }
      
      console.log("\n🔍 DRY RUN RESULTS:");
      console.log(`➕ Would insert: ${wouldInsert} new documents`);
      console.log(`🔄 Would update: ${wouldUpdate} existing documents`);
      console.log(`⚪ Would remain unchanged: ${wouldRemainUnchanged} documents`);
      console.log(`📊 Total analyzed: ${allMyData.length} documents`);
      
      if (sampleChanges.length > 0) {
        console.log("\n📋 Sample changes:");
        sampleChanges.forEach(change => console.log(`  ${change}`));
        if (wouldInsert + wouldUpdate > sampleChanges.length) {
          console.log(`  ... and ${wouldInsert + wouldUpdate - sampleChanges.length} more changes`);
        }
      }
      
      if (detailedChanges.length > 0) {
        console.log("\n🔍 Detailed changes (first 3):");
        detailedChanges.forEach(change => console.log(change));
      }
      
      console.log("\n💡 To apply these changes, run without --dry-run flag");
      
    } else {
      // Actual upsert: let MongoDB detect actual changes
      console.log("🔄 Upserting data with change detection...");
      
      let insertedCount = 0;
      let updatedCount = 0;
      let matchedCount = 0;
      let errorCount = 0;
      
      // Process in batches for better performance
      const BATCH_SIZE = 100;
      
      for (let i = 0; i < allMyData.length; i += BATCH_SIZE) {
        const batch = allMyData.slice(i, i + BATCH_SIZE);
        
        try {
          // Use updateOne with upsert based on "word" field - MongoDB will only modify if content actually changed
          const bulkOps = batch.map(doc => ({
            updateOne: {
              filter: { word: doc.word },
              update: { $set: doc },
              upsert: true
            }
          }));
          
          const result = await collection.bulkWrite(bulkOps);
          
          insertedCount += result.upsertedCount || 0;
          updatedCount += result.modifiedCount || 0;
          matchedCount += result.matchedCount || 0;
          
          console.log(`📈 Progress: ${Math.min(i + BATCH_SIZE, allMyData.length)}/${allMyData.length} (${Math.round(Math.min(i + BATCH_SIZE, allMyData.length)/allMyData.length*100)}%)`);
          
        } catch (error) {
          console.error(`❌ Error processing batch ${i}-${i + BATCH_SIZE}:`, error.message);
          errorCount += batch.length;
        }
      }

      const unchangedCount = matchedCount - updatedCount;
      
      console.log("\n🎉 Seeding completed!");
      console.log(`✅ Inserted: ${insertedCount} new documents`);
      console.log(`🔄 Updated: ${updatedCount} existing documents`);
      console.log(`⚪ Unchanged: ${unchangedCount} documents (no changes detected)`);
      if (errorCount > 0) {
        console.log(`❌ Errors: ${errorCount} documents failed`);
      }
      console.log(`📊 Total processed: ${allMyData.length} documents`);
    }
  } catch (err) {
    console.error("Error occurred while inserting data:", err);
  } finally {
    // Close the MongoDB connection
    await client.close();
    console.log("MongoDB connection closed.");
  }
})();
