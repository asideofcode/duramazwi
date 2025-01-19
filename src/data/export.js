require("dotenv").config(); // Load environment variables from .env.local
const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");

// MongoDB connection URI and database/collection names
const uri = process.env.MONGODB_URI; // Ensure this is set in .env.local
const dbName = "chishona";
const collectionName = "words";

// Output file path
const outputPath = path.join(__dirname, "./data.json");

(async function () {
  const client = new MongoClient(uri);

  try {
    // Connect to MongoDB
    console.log("Connecting to MongoDB...");
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Fetch all documents from the collection
    console.log("Fetching data from the collection...");
    const data = await collection.find({}).toArray();

    // Write data to a JSON file
    console.log("Writing data to file...");
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), "utf8");

    console.log(`Data successfully written to ${outputPath}`);
  } finally {
    // Close the MongoDB connection
    await client.close();
    console.log("MongoDB connection closed.");
  }
})();
