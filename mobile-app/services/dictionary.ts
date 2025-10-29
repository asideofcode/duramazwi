import apiClient from './api';

export interface WordPreview {
  id: string;
  word: string;
  briefDefinition: string;
}

export interface WordDetail {
  word: string;
  meanings: Array<{
    partOfSpeech: string;
    definitions: Array<{
      definition: string;
      example?: string;
      translation?: string;
    }>;
  }>;
  audioUrl?: string;
}

export const dictionaryService = {
  /**
   * Search for words
   */
  searchWords: async (query: string): Promise<WordPreview[]> => {
    return await apiClient.get('/search', {
      params: { q: query },
    });
  },

  /**
   * Get word details by ID
   */
  getWordById: async (id: string): Promise<WordDetail> => {
    return await apiClient.get(`/word/${id}`);
  },

  /**
   * Get words by letter
   */
  getWordsByLetter: async (letter: string): Promise<WordPreview[]> => {
    return await apiClient.get('/browse', {
      params: { letter },
    });
  },
};
