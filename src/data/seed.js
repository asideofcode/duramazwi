require("dotenv").config(); // Load environment variables from .env.local
const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");

// Ensure a file argument is provided
if (process.argv.length < 3) {
  console.error("Usage: node seed.js <path-to-import-file>");
  process.exit(1);
}

// Get the file path from the first argument
const importFilePath = process.argv[2];

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

    // Upsert data into the collection based on _id
    console.log("🔄 Upserting data into the collection...");
    
    let insertedCount = 0;
    let updatedCount = 0;
    let errorCount = 0;
    
    // Process in batches for better performance
    const BATCH_SIZE = 100;
    
    for (let i = 0; i < allMyData.length; i += BATCH_SIZE) {
      const batch = allMyData.slice(i, i + BATCH_SIZE);
      
      try {
        // Use bulkWrite for efficient upserts
        const bulkOps = batch.map(doc => ({
          replaceOne: {
            filter: { _id: doc._id },
            replacement: doc,
            upsert: true
          }
        }));
        
        const result = await collection.bulkWrite(bulkOps);
        
        insertedCount += result.upsertedCount;
        updatedCount += result.modifiedCount;
        
        console.log(`📈 Progress: ${Math.min(i + BATCH_SIZE, allMyData.length)}/${allMyData.length} (${Math.round(Math.min(i + BATCH_SIZE, allMyData.length)/allMyData.length*100)}%)`);
        
      } catch (error) {
        console.error(`❌ Error processing batch ${i}-${i + BATCH_SIZE}:`, error.message);
        errorCount += batch.length;
      }
    }

    console.log("\n🎉 Seeding completed!");
    console.log(`✅ Inserted: ${insertedCount} new documents`);
    console.log(`🔄 Updated: ${updatedCount} existing documents`);
    if (errorCount > 0) {
      console.log(`❌ Errors: ${errorCount} documents failed`);
    }
    console.log(`📊 Total processed: ${allMyData.length} documents`);
  } catch (err) {
    console.error("Error occurred while inserting data:", err);
  } finally {
    // Close the MongoDB connection
    await client.close();
    console.log("MongoDB connection closed.");
  }
})();
