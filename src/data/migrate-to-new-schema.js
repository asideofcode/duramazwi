require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");
const OpenAI = require("openai");
const { z } = require("zod");
const { zodTextFormat } = require("openai/helpers/zod");

// Configuration
const uri = process.env.MONGODB_URI;
const dbName = "chishona";
const collectionName = "words";
const newCollectionName = "words_new_schema"; // Create new collection for safety
const BATCH_SIZE = 10; // Process entries in batches
const MAX_RETRIES = 3;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Define Zod schemas for structured output
const ExampleSchema = z.object({
  shona: z.string().describe("The Shona example sentence"),
  english: z.string().describe("The English translation of the example")
});

const DefinitionSchema = z.object({
  definition: z.string().describe("Clear, concise definition of the word sense"),
  examples: z.array(ExampleSchema).describe("Array of usage examples with Shona and English")
});

const MeaningSchema = z.object({
  partOfSpeech: z.enum(["noun", "verb", "adjective", "adverb", "conjunction", "preposition", "interjection", "pronoun"])
    .describe("Grammatical category of this meaning"),
  definitions: z.array(DefinitionSchema).min(1)
    .describe("Array of definitions for this meaning/part of speech")
});

const DictionaryEntrySchema = z.object({
  word: z.string().describe("The Shona word"),
  meanings: z.array(MeaningSchema).min(1)
    .describe("Array of meanings, grouped by part of speech or distinct senses")
});

const TransformedEntriesSchema = z.object({
  entries: z.array(DictionaryEntrySchema)
    .describe("Array of transformed dictionary entries")
});

const SYSTEM_PROMPT = `You are a Shona language expert helping to migrate dictionary entries to a cleaner schema.

TRANSFORMATION RULES:
1. Preserve all original content - don't lose any definitions or examples
2. Group related definitions under the same meaning/partOfSpeech
3. Split into separate meanings only when partOfSpeech differs significantly
4. Clean up any duplicate or redundant content
5. Ensure examples are properly paired (Shona + English)
6. Keep definitions concise but complete
7. If an example lacks English translation, provide a reasonable translation
8. Standardize parts of speech to: noun, verb, adjective, adverb, conjunction, preposition, interjection, pronoun

EXAMPLE TRANSFORMATION:
Input: { word: "adhiresi", meanings: [{ partOfSpeech: "noun", definitions: [{ definition: "Address.", example: "Ndakanyora adhiresi rangu pabepa." }] }] }
Output: { word: "adhiresi", meanings: [{ partOfSpeech: "noun", definitions: [{ definition: "Address; location where someone lives or works.", examples: [{ shona: "Ndakanyora adhiresi rangu pabepa.", english: "I wrote my address on the paper." }] }] }] }`;

async function transformWithOpenAI(entries, retryCount = 0) {
  try {
    console.log(`Transforming batch of ${entries.length} entries with OpenAI...`);
    console.log(`Sample entry:`, JSON.stringify(entries[0], null, 2));
    
    const response = await openai.responses.parse({
      model: "gpt-4o-2024-08-06",
      input: [
        {
          role: "system",
          content: SYSTEM_PROMPT
        },
        {
          role: "user",
          content: `Transform these Shona dictionary entries to the target schema:

${JSON.stringify(entries, null, 2)}`
        }
      ],
      text: {
        format: zodTextFormat(TransformedEntriesSchema, "transformed_entries"),
      },
    });

    const transformedData = response.output_parsed;
    
    if (!transformedData) {
      console.error("Raw response:", response);
      throw new Error("No parsed data received from OpenAI");
    }

    if (!transformedData.entries) {
      console.error("Parsed data:", transformedData);
      throw new Error("No entries field in transformed data");
    }

    const transformedEntries = transformedData.entries;

    // Validate we got the expected number of entries
    if (transformedEntries.length !== entries.length) {
      console.warn(`⚠️  Expected ${entries.length} entries, got ${transformedEntries.length}`);
    }

    console.log(`✅ Successfully transformed ${transformedEntries.length} entries`);
    return transformedEntries;

  } catch (error) {
    console.error(`❌ OpenAI transformation failed (attempt ${retryCount + 1}):`, error.message);
    
    if (retryCount < MAX_RETRIES) {
      console.log(`Retrying in 5 seconds...`);
      await new Promise(resolve => setTimeout(resolve, 5000));
      return transformWithOpenAI(entries, retryCount + 1);
    } else {
      throw new Error(`Failed to transform batch after ${MAX_RETRIES} attempts: ${error.message}`);
    }
  }
}

async function migrateDatabase() {
  const client = new MongoClient(uri);
  
  try {
    console.log("🔌 Connecting to MongoDB...");
    await client.connect();
    
    const db = client.db(dbName);
    const sourceCollection = db.collection(collectionName);
    const targetCollection = db.collection(newCollectionName);
    
    // Check if target collection exists and ask for confirmation
    const collections = await db.listCollections({ name: newCollectionName }).toArray();
    if (collections.length > 0) {
      console.log(`⚠️  Collection '${newCollectionName}' already exists.`);
      console.log("This script will drop it and create a new one.");
      
      // Drop existing collection
      await targetCollection.drop();
      console.log("🗑️  Dropped existing collection");
    }
    
    // Get total count
    const totalCount = await sourceCollection.countDocuments();
    console.log(`📊 Found ${totalCount} entries to migrate`);
    
    if (totalCount === 0) {
      console.log("No entries to migrate. Exiting.");
      return;
    }
    
    let processedCount = 0;
    let successCount = 0;
    let errorCount = 0;
    const errors = [];
    
    // Process in batches
    const cursor = sourceCollection.find({});
    let batch = [];
    
    while (await cursor.hasNext()) {
      const entry = await cursor.next();
      batch.push(entry);
      
      if (batch.length === BATCH_SIZE) {
        try {
          const transformedBatch = await transformWithOpenAI(batch);
          
          // Insert transformed entries
          if (transformedBatch.length > 0) {
            await targetCollection.insertMany(transformedBatch);
            successCount += transformedBatch.length;
          }
          
          processedCount += batch.length;
          console.log(`📈 Progress: ${processedCount}/${totalCount} (${Math.round(processedCount/totalCount*100)}%)`);
          
        } catch (error) {
          console.error(`❌ Failed to process batch:`, error.message);
          errors.push({
            batch: batch.map(e => e.word || e._id),
            error: error.message
          });
          errorCount += batch.length;
        }
        
        batch = [];
        
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    // Process remaining entries in the last batch
    if (batch.length > 0) {
      try {
        const transformedBatch = await transformWithOpenAI(batch);
        
        if (transformedBatch.length > 0) {
          await targetCollection.insertMany(transformedBatch);
          successCount += transformedBatch.length;
        }
        
        processedCount += batch.length;
        
      } catch (error) {
        console.error(`❌ Failed to process final batch:`, error.message);
        errors.push({
          batch: batch.map(e => e.word || e._id),
          error: error.message
        });
        errorCount += batch.length;
      }
    }
    
    // Final report
    console.log("\n🎉 Migration completed!");
    console.log(`✅ Successfully migrated: ${successCount} entries`);
    console.log(`❌ Failed: ${errorCount} entries`);
    console.log(`📊 Total processed: ${processedCount} entries`);
    
    if (errors.length > 0) {
      console.log("\n❌ Errors encountered:");
      errors.forEach((error, index) => {
        console.log(`${index + 1}. Batch [${error.batch.join(', ')}]: ${error.error}`);
      });
      
      // Save errors to file
      const errorLogPath = path.join(__dirname, 'migration-errors.json');
      fs.writeFileSync(errorLogPath, JSON.stringify(errors, null, 2));
      console.log(`📄 Error details saved to: ${errorLogPath}`);
    }
    
    // Verify final count
    const finalCount = await targetCollection.countDocuments();
    console.log(`🔍 Final count in new collection: ${finalCount}`);
    
  } catch (error) {
    console.error("💥 Migration failed:", error);
    process.exit(1);
  } finally {
    await client.close();
    console.log("🔌 MongoDB connection closed");
  }
}

// Command line interface
async function main() {
  console.log("🚀 Starting Shona Dictionary Schema Migration");
  console.log("=".repeat(50));
  
  // Check required environment variables
  if (!uri) {
    console.error("❌ MONGODB_URI not found in environment variables");
    process.exit(1);
  }
  
  if (!process.env.OPENAI_API_KEY) {
    console.error("❌ OPENAI_API_KEY not found in environment variables");
    process.exit(1);
  }
  
  // Check for dry-run flag
  const isDryRun = process.argv.includes('--dry-run');
  
  if (isDryRun) {
    console.log("🧪 DRY RUN MODE - Testing with first 5 entries only");
    
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      
      const testEntries = await collection.find({}).limit(5).toArray();
      console.log("📋 Test entries:", testEntries.map(e => e.word || e._id));
      
      const transformed = await transformWithOpenAI(testEntries);
      console.log("✅ Transformation successful!");
      console.log("📄 Sample result:", JSON.stringify(transformed, null, 2));
      
    } catch (error) {
      console.error("❌ Dry run failed:", error);
    } finally {
      await client.close();
    }
    
    return;
  }
  
  // Confirmation prompt
  console.log("⚠️  This will create a new collection with migrated data.");
  console.log(`Source: ${collectionName}`);
  console.log(`Target: ${newCollectionName}`);
  console.log("\nPress Ctrl+C to cancel, or Enter to continue...");
  
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.on('data', async () => {
    process.stdin.setRawMode(false);
    process.stdin.pause();
    await migrateDatabase();
  });
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Migration cancelled by user');
  process.exit(0);
});

main().catch(console.error);
