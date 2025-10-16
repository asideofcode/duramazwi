require("dotenv").config(); // Load environment variables from .env.local
const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { MongoClient } = require("mongodb");

// MongoDB connection URI and database/collection names
const uri = process.env.MONGODB_URI; // Ensure this is set in .env.local
const dbName = "chishona";
const collectionName = "words_new_schema"; // Updated to use new schema collection

// Output file path
const outputPath = path.join(__dirname, "./data.json");
const exampleDataPath = path.join(__dirname, "./example_data.json");

// Parse command-line arguments
const args = process.argv.slice(2);
let overwrite = null; // Default to null to detect if flag is explicitly set
let devMode = false;

args.forEach((arg) => {
  if (arg === "--overwrite=true" || arg === "--overwrite") {
    overwrite = true;
  } else if (arg === "--overwrite=false") {
    overwrite = false;
  } else if (arg === "--dev") {
    devMode = true;
  }
});

async function prompt(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => rl.question(question, (answer) => {
    rl.close();
    resolve(answer);
  }));
}

(async function () {
  console.log("Exporting data...");

  if (fs.existsSync(outputPath)) {
    if (overwrite === true) {
      console.log(`Overwrite flag is true. Will overwrite ${outputPath}.`);
    } else if (overwrite === false) {
      console.log("Overwrite flag is false. Skipping export.");
      return;
    } else {
      const answer = await prompt(
        `File ${outputPath} already exists. Overwrite? (yes/no): `
      );
      if (answer.toLowerCase() !== "yes") {
        console.log("Skipping export.");
        return;
      }
    }
  }

  if (devMode && !uri) {
    console.log("No MongoDB URI found. Running in development mode.");
    console.log(`Copying ${exampleDataPath} to ${outputPath}...`);
    try {
      fs.copyFileSync(exampleDataPath, outputPath);
      console.log("Data successfully copied.");
    } catch (error) {
      console.error("Error copying example data:", error);
    }
    return;
  }

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

    if (data.length === 0) {
      console.log("No data found in the collection. Skipping export.");
      return;
    }

    // Write data to a JSON file
    console.log("Writing data to file...");
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), "utf8");

    console.log(`Data successfully written to ${outputPath}`);
  } catch (error) {
    console.error("An error occurred:", error);
    process.exit(1)
  } finally {
    // Close the MongoDB connection
    await client.close();
    console.log("MongoDB connection closed.");
  }
})();
