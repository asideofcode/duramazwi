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

// Flatten and process the data
const allMyData = allMyDataRaw.flat();
allMyData.forEach((item) => {
  item.meanings.forEach((meaning) => {
    if (meaning.definitions[0]) {
      meaning.definitions[0].example = meaning.example || null;
    }
  });
});

// MongoDB connection URI from environment variable
const uri = process.env.MONGODB_URI; // Make sure this is set in .env.local

if (!uri) {
  console.error("MONGODB_URI is not set in .env.local.");
  process.exit(1);
}

// MongoDB database and collection name
const dbName = "chishona";
const collectionName = "words";

(async function () {
  const client = new MongoClient(uri);

  try {
    // Connect to MongoDB
    console.log("Connecting to MongoDB...");
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert data into the collection
    console.log("Inserting data into the collection...");
    const result = await collection.insertMany(allMyData);

    console.log(`Inserted ${result.insertedCount} documents into the collection.`);
  } catch (err) {
    console.error("Error occurred while inserting data:", err);
  } finally {
    // Close the MongoDB connection
    await client.close();
    console.log("MongoDB connection closed.");
  }
})();
