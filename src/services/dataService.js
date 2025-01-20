import Fuse from "fuse.js";
import allMyDataRaw from "@/data/data.json";

// Process and flatten data
const allMyData = allMyDataRaw.flat();
allMyData.forEach((item) => {
  item.meanings.forEach((meaning) => {
    meaning.definitions[0].example = meaning.example;
  });
});

// Fuzzy search setup
const fuse = new Fuse(allMyData, {
  keys: ["word", "meanings.definitions.definition"], // Fields to search
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
    const matches = allMyData.filter((item) => item.word.toLowerCase() === slug.toLowerCase());
    return matches.length > 0 ? matches : null;
  },  

  /**
   * Get all words (for index display).
   * @returns {Array} - List of all words sorted alphabetically.
   */
  getAllWords() {
    return [...new Set(allMyData.map((item) => item.word.toLowerCase()))]
      .sort((a, b) => a.localeCompare(b));
  },
};

export default dataService;
