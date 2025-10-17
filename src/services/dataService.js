import Fuse from "fuse.js";
import allMyDataRaw from "@/data/data.json";

// Process and flatten data
const allMyData = allMyDataRaw.flat();
allMyData.forEach((item) => {
  item.meanings.forEach((meaning) => {
    meaning.definitions[0].example = meaning.example;
  });
});

// Create enhanced search index with verb prefixes
const enhancedSearchData = allMyData.map((item) => {
  // Check if the word has any verb meanings
  const hasVerbMeaning = item.meanings.some(meaning => 
    meaning.partOfSpeech && meaning.partOfSpeech.toLowerCase() === 'verb'
  );
  
  // Create search terms array - always include the original word
  const searchTerms = [item.word];
  
  // If it's a verb, also add the "ku-" prefixed version
  if (hasVerbMeaning) {
    searchTerms.push(`ku${item.word}`);
  }
  
  // Return enhanced item with searchTerms for Fuse.js
  return {
    ...item,
    searchTerms: searchTerms
  };
});

// Fuzzy search setup with enhanced search fields
const fuse = new Fuse(enhancedSearchData, {
  keys: [
    "word", 
    "searchTerms", // Include our enhanced search terms
    "meanings.definitions.definition"
  ], 
  includeScore: true,
  threshold: 0.1, // Adjust threshold for fuzziness
});

/**
 * Data Service
 */
const dataService = {
  /**
   * Search for words matching a query.
   * @param {string} query - The search query.
   * @returns {Array} - List of matching words.
   */
  search(query) {
    if (!query) return [];
    const results = fuse.search(query);
    return results.map((result) => result.item);
  },

  /**
   * Get detailed data for a specific word (slug).
   * @param {string} slug - The word or unique identifier.
   * @returns {Object|null} - The detailed data for the word or null if not found.
   */
  getWordDetails(slug) {
    const matches = enhancedSearchData.filter((item) => item.word.toLowerCase() === slug.toLowerCase());
    return matches.length > 0 ? matches : null;
  },  

  /**
   * Get all words (for index display).
   * @returns {Array} - List of all words sorted alphabetically.
   */
  getAllWords() {
    return [...new Set(enhancedSearchData.map((item) => item.word.toLowerCase()))]
      .sort((a, b) => a.localeCompare(b));
  },

  /**
   * Get a random word from the dictionary.
   * @returns {Object|null} - A random dictionary entry or null if no data.
   */
  getRandomWord() {
    if (enhancedSearchData.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * enhancedSearchData.length);
    return enhancedSearchData[randomIndex];
  },
};

export default dataService;
