/**
 * New Simplified Shona Dictionary Schema
 * 
 * This schema is designed for better UX and cleaner data structure.
 * It eliminates nested complexity while preserving all linguistic information.
 */

const NEW_SCHEMA_EXAMPLE = {
  // Core identification
  _id: "ObjectId or string",
  word: "string", // The Shona word
  
  // Array of meanings - each represents a distinct sense/usage
  meanings: [
    {
      // Grammatical category
      partOfSpeech: "verb|noun|adjective|adverb|conjunction|preposition|interjection",
      
      // Array of definitions within this meaning
      definitions: [
        {
          // Clear, concise definition
          definition: "string",
          
          // Array of usage examples
          examples: [
            {
              shona: "string",   // Shona example sentence
              english: "string"  // English translation
            }
            // ... more examples
          ]
        }
        // ... more definitions for this meaning
      ]
    }
    // ... more meanings (different parts of speech or distinct senses)
  ]
};

/**
 * MIGRATION RULES:
 * 
 * 1. PRESERVE CONTENT: Don't lose any definitions or examples
 * 2. GROUP BY PART OF SPEECH: Same grammatical function = same meaning
 * 3. SPLIT DISTINCT SENSES: Different concepts = separate meanings
 * 4. CLEAN EXAMPLES: Ensure proper Shona-English pairing
 * 5. SIMPLIFY STRUCTURE: Remove unnecessary nesting
 */

const MIGRATION_EXAMPLES = {
  // BEFORE: Complex nested structure
  before: {
    _id: "678c38ea293b5bcc3a6d5144",
    word: "adhiresi",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition: "Address.",
            example: "Ndakanyora adhiresi rangu pabepa."
          }
        ],
        example: "Ndakanyora adhiresi rangu pabepa."
      }
    ]
  },
  
  // AFTER: Clean simplified structure
  after: {
    _id: "678c38ea293b5bcc3a6d5144",
    word: "adhiresi",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition: "Address; location or place where someone lives or works.",
            examples: [
              {
                shona: "Ndakanyora adhiresi rangu pabepa.",
                english: "I wrote my address on the paper."
              }
            ]
          }
        ]
      }
    ]
  }
};

/**
 * PART OF SPEECH STANDARDIZATION:
 * - verb: kubata, kufamba, kuona
 * - noun: munhu, imba, muti
 * - adjective: mukuru, mudiki, mutema
 * - adverb: zvishoma, nekukasika, mangwanani
 * - conjunction: uye, asi, kana
 * - preposition: pa-, mu-, ku-
 * - interjection: haiwa, aiwa, ehe
 */

module.exports = {
  NEW_SCHEMA_EXAMPLE,
  MIGRATION_EXAMPLES
};
