// Helper functions for managing complex edit form data
import { AdminDictionaryEntry } from '@/services/adminDataService';

export interface FormMeaning {
  partOfSpeech: string;
  definitions: FormDefinition[];
}

export interface FormDefinition {
  definition: string;
  examples: FormExample[];
}

export interface FormExample {
  shona: string;
  english: string;
}

export interface EditFormData {
  word: string;
  meanings: FormMeaning[];
  status: 'published' | 'draft' | 'archived';
}

// Convert entry data to form data
export const entryToFormData = (entry: AdminDictionaryEntry): EditFormData => {
  return {
    word: entry.word,
    meanings: entry.meanings && entry.meanings.length > 0 
      ? entry.meanings.map(meaning => ({
          partOfSpeech: meaning.partOfSpeech || '',
          definitions: meaning.definitions && meaning.definitions.length > 0
            ? meaning.definitions.map(def => ({
                definition: def.definition || '',
                examples: def.examples && def.examples.length > 0
                  ? def.examples
                  : [{ shona: '', english: '' }]
              }))
            : [{ definition: '', examples: [{ shona: '', english: '' }] }]
        }))
      : [
          {
            partOfSpeech: '',
            definitions: [
              {
                definition: '',
                examples: [{ shona: '', english: '' }]
              }
            ]
          }
        ],
    status: entry.status || 'published'
  };
};

// Convert form data to entry data for API
export const formDataToEntry = (formData: EditFormData) => {
  return {
    word: formData.word.trim(),
    meanings: formData.meanings.map(meaning => ({
      partOfSpeech: meaning.partOfSpeech.trim() || '',
      definitions: meaning.definitions.map(def => ({
        definition: def.definition.trim(),
        examples: def.examples.filter(ex => ex.shona.trim() || ex.english.trim())
      })).filter(def => def.definition.trim()) // Remove empty definitions
    })).filter(meaning => 
      meaning.definitions.length > 0 || meaning.partOfSpeech.trim()
    ), // Remove empty meanings
    status: formData.status
  };
};

// Add a new meaning
export const addMeaning = (formData: EditFormData): EditFormData => {
  return {
    ...formData,
    meanings: [
      ...formData.meanings,
      {
        partOfSpeech: '',
        definitions: [
          {
            definition: '',
            examples: [{ shona: '', english: '' }]
          }
        ]
      }
    ]
  };
};

// Remove a meaning
export const removeMeaning = (formData: EditFormData, meaningIndex: number): EditFormData => {
  return {
    ...formData,
    meanings: formData.meanings.filter((_, index) => index !== meaningIndex)
  };
};

// Add a new definition to a meaning
export const addDefinition = (formData: EditFormData, meaningIndex: number): EditFormData => {
  const newMeanings = [...formData.meanings];
  newMeanings[meaningIndex] = {
    ...newMeanings[meaningIndex],
    definitions: [
      ...newMeanings[meaningIndex].definitions,
      {
        definition: '',
        examples: [{ shona: '', english: '' }]
      }
    ]
  };
  
  return {
    ...formData,
    meanings: newMeanings
  };
};

// Remove a definition from a meaning
export const removeDefinition = (formData: EditFormData, meaningIndex: number, definitionIndex: number): EditFormData => {
  const newMeanings = [...formData.meanings];
  newMeanings[meaningIndex] = {
    ...newMeanings[meaningIndex],
    definitions: newMeanings[meaningIndex].definitions.filter((_, index) => index !== definitionIndex)
  };
  
  return {
    ...formData,
    meanings: newMeanings
  };
};

// Add a new example to a definition
export const addExample = (formData: EditFormData, meaningIndex: number, definitionIndex: number): EditFormData => {
  const newMeanings = [...formData.meanings];
  newMeanings[meaningIndex].definitions[definitionIndex] = {
    ...newMeanings[meaningIndex].definitions[definitionIndex],
    examples: [
      ...newMeanings[meaningIndex].definitions[definitionIndex].examples,
      { shona: '', english: '' }
    ]
  };
  
  return {
    ...formData,
    meanings: newMeanings
  };
};

// Remove an example from a definition
export const removeExample = (formData: EditFormData, meaningIndex: number, definitionIndex: number, exampleIndex: number): EditFormData => {
  const newMeanings = [...formData.meanings];
  newMeanings[meaningIndex].definitions[definitionIndex] = {
    ...newMeanings[meaningIndex].definitions[definitionIndex],
    examples: newMeanings[meaningIndex].definitions[definitionIndex].examples.filter((_, index) => index !== exampleIndex)
  };
  
  return {
    ...formData,
    meanings: newMeanings
  };
};

// Update a field in the form data
export const updateFormField = (
  formData: EditFormData, 
  path: string, 
  value: string
): EditFormData => {
  const pathParts = path.split('.');
  const newFormData = { ...formData };
  
  if (pathParts[0] === 'word') {
    newFormData.word = value;
  } else if (pathParts[0] === 'status') {
    newFormData.status = value as 'published' | 'draft' | 'archived';
  } else if (pathParts[0] === 'meanings') {
    const meaningIndex = parseInt(pathParts[1]);
    const newMeanings = [...newFormData.meanings];
    
    if (pathParts[2] === 'partOfSpeech') {
      newMeanings[meaningIndex] = {
        ...newMeanings[meaningIndex],
        partOfSpeech: value
      };
    } else if (pathParts[2] === 'definitions') {
      const definitionIndex = parseInt(pathParts[3]);
      
      if (pathParts[4] === 'definition') {
        newMeanings[meaningIndex].definitions[definitionIndex] = {
          ...newMeanings[meaningIndex].definitions[definitionIndex],
          definition: value
        };
      } else if (pathParts[4] === 'examples') {
        const exampleIndex = parseInt(pathParts[5]);
        const field = pathParts[6] as 'shona' | 'english';
        
        newMeanings[meaningIndex].definitions[definitionIndex].examples[exampleIndex] = {
          ...newMeanings[meaningIndex].definitions[definitionIndex].examples[exampleIndex],
          [field]: value
        };
      }
    }
    
    newFormData.meanings = newMeanings;
  }
  
  return newFormData;
};

// Validate form data
export const validateFormData = (formData: EditFormData): string[] => {
  const errors: string[] = [];
  
  if (!formData.word.trim()) {
    errors.push('Word is required');
  }
  
  if (formData.meanings.length === 0) {
    errors.push('At least one meaning is required');
  }
  
  let hasValidDefinition = false;
  formData.meanings.forEach((meaning, meaningIndex) => {
    meaning.definitions.forEach((definition, definitionIndex) => {
      if (definition.definition.trim()) {
        hasValidDefinition = true;
      }
    });
  });
  
  if (!hasValidDefinition) {
    errors.push('At least one definition is required');
  }
  
  return errors;
};
