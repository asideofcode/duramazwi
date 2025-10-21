const fs = require('fs');
const path = require('path');

/**
 * Escape LaTeX special characters
 */
function escapeLatex(text) {
  if (!text) return '';
  return text
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/\$/g, '\\$')
    .replace(/&/g, '\\&')
    .replace(/%/g, '\\%')
    .replace(/#/g, '\\#')
    .replace(/\^/g, '\\textasciicircum{}')
    .replace(/_/g, '\\_')
    .replace(/~/g, '\\textasciitilde{}');
}

/**
 * Clean and format part of speech
 */
function formatPartOfSpeech(pos) {
  if (!pos) return 'noun';
  
  const cleanPos = pos.toLowerCase().trim();
  
  // Map various formats to standard forms
  const posMap = {
    'tsumo (proverb)': 'proverb',
    'tsumo': 'proverb',
    'proverb': 'proverb',
    'n': 'noun',
    'v': 'verb',
    'adj': 'adjective',
    'adv': 'adverb',
    'interj': 'interjection',
    'conj': 'conjunction',
    'prep': 'preposition'
  };
  
  return posMap[cleanPos] || cleanPos || 'noun';
}

/**
 * Generate headword LaTeX command based on part of speech
 */
function generateHeadwordCommand(word, partOfSpeech) {
  // Ensure word is a string
  const safeWord = word || '';
  
  if (partOfSpeech === 'verb' && !safeWord.startsWith('ku-')) {
    // Use colored verb headword with separate ku- prefix
    return `\\verbheadword{ku-}{${escapeLatex(safeWord)}}`;
  } else if (partOfSpeech === 'verb' && safeWord.startsWith('ku-')) {
    // Handle cases where ku- is already present
    const baseWord = safeWord.substring(3);
    return `\\verbheadword{ku-}{${escapeLatex(baseWord)}}`;
  } else {
    // Regular headword
    return `\\headword{${escapeLatex(safeWord)}}`;
  }
}

/**
 * Generate colored part of speech command
 */
function generatePartOfSpeechCommand(partOfSpeech) {
  switch (partOfSpeech) {
    case 'verb':
      return '\\verbpos';
    case 'noun':
      return '\\nounpos';
    case 'adverb':
      return '\\adverbpos';
    case 'adjective':
      return '\\adjectivepos';
    default:
      return `\\partofpeech{${partOfSpeech}}`;
  }
}

/**
 * Generate LaTeX dictionary entry
 */
function generateDictEntry(word, data) {
  let entry = '';
  
  // Handle data.json format with meanings array
  if (data.meanings && Array.isArray(data.meanings)) {
    data.meanings.forEach((meaning, meaningIndex) => {
      if (meaningIndex > 0) entry += '\n\n';
      
      const partOfSpeech = formatPartOfSpeech(meaning.partOfSpeech);
      const headwordCommand = generateHeadwordCommand(word, partOfSpeech);
      const partOfSpeechCommand = generatePartOfSpeechCommand(partOfSpeech);
      
      // Start unbreakable entry block (prevents column breaks too)
      entry += `\\begin{minipage}{\\linewidth}\n`;
      // Headword and part of speech on first line
      entry += `\\par\\noindent${headwordCommand}\\space${partOfSpeechCommand}\n\n`;
      
      if (meaning.definitions && Array.isArray(meaning.definitions)) {
        if (meaning.definitions.length === 1) {
          const def = meaning.definitions[0];
          // Definition on new line
          entry += `${escapeLatex(def.definition)}`;
          
          // Handle examples with subtle styling
          if (def.examples && Array.isArray(def.examples) && def.examples.length > 0) {
            const example = def.examples[0];
            if (example.shona && example.shona.trim()) {
              const englishTranslation = example.english || 'Translation needed.';
              entry += `\n\n{\\color{examplecolor}\\small\\textit{${escapeLatex(example.shona)}}}\n\n{\\color{englishexamplecolor}\\small\\textit{${escapeLatex(englishTranslation)}}}`;
            }
          }
        } else {
          // Multiple definitions
          entry += '\\begin{deflist}\n';
          meaning.definitions.forEach(def => {
            entry += `\\item ${escapeLatex(def.definition)}.`;
            if (def.examples && Array.isArray(def.examples) && def.examples.length > 0) {
              const example = def.examples[0];
              if (example.shona && example.shona.trim()) {
                const englishTranslation = example.english || 'Translation needed.';
                entry += `\n\n{\\color{examplecolor}\\small\\textit{${escapeLatex(example.shona)}}}\n\n{\\color{englishexamplecolor}\\small\\textit{${escapeLatex(englishTranslation)}}}`;
              }
            }
            entry += '\n';
          });
          entry += '\\end{deflist}';
        }
      }
      
      // End unbreakable entry block
      entry += '\n\\end{minipage}\n\\par\\vspace{4pt}\n\n';
    });
  } else {
    // Fallback for any other format
    const headwordCommand = generateHeadwordCommand(word, 'noun');
    const partOfSpeechCommand = generatePartOfSpeechCommand('noun');
    entry += `\\begin{minipage}{\\linewidth}\n`;
    entry += `\\par\\noindent${headwordCommand}\\space${partOfSpeechCommand}\n\n`;
    entry += 'Definition needed.';
    entry += '\n\\end{minipage}\n\\par\\vspace{4pt}\n\n';
  }
  
  return entry;
}

/**
 * Group words by first letter
 */
function groupWordsByLetter(documents) {
  const groups = {};
  
  documents.forEach(doc => {
    const word = doc.data.word || '';
    const firstLetter = word.charAt(0).toUpperCase();
    
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    
    groups[firstLetter].push({
      word: word,
      data: doc.data
    });
  });
  
  // Sort words within each group
  Object.keys(groups).forEach(letter => {
    groups[letter].sort((a, b) => a.word.localeCompare(b.word));
  });
  
  return groups;
}

/**
 * Generate sample entries for template
 */
function generateSampleEntries(documents, maxPerLetter = 3) {
  const sampleGroups = {};
  const letters = ['A', 'B', 'C'];
  
  letters.forEach(letter => {
    const wordsForLetter = documents.filter(doc => {
      const word = doc.data.word || '';
      return word.charAt(0).toUpperCase() === letter;
    }).slice(0, maxPerLetter);
    
    if (wordsForLetter.length > 0) {
      sampleGroups[letter] = wordsForLetter.map(doc => ({
        word: doc.data.word,
        data: doc.data
      }));
    }
  });
  
  return sampleGroups;
}

/**
 * Generate LaTeX chapters for each letter
 */
function generateChapters(wordGroups) {
  let chaptersLatex = '';
  
  const sortedLetters = Object.keys(wordGroups).sort();
  
  sortedLetters.forEach((letter, index) => {
    const words = wordGroups[letter];
    
    // Use different header for first letter (no page break)
    if (index === 0) {
      chaptersLatex += `\\firstletterheader{${letter}}\n\n`;
    } else {
      chaptersLatex += `\\letterheader{${letter}}\n\n`;
    }
    
    chaptersLatex += `\\begin{multicols}{2}\n`;
    chaptersLatex += `\\RaggedRight\n`;
    chaptersLatex += `\\hyphenpenalty=10000\n`;
    chaptersLatex += `\\tolerance=1000\n`;
    chaptersLatex += `\\emergencystretch=3em\n`;
    chaptersLatex += `\\setlength{\\RaggedRightParindent}{0pt}\n\n`;
    
    words.forEach(doc => {
      const word = doc.word;
      const data = doc.data;
      chaptersLatex += generateDictEntry(word, data);
    });
    
    chaptersLatex += `\\end{multicols}\n\n`;
  });
  
  return chaptersLatex;
}

/**
 * Main function to process dictionary data and generate LaTeX
 */
function generateLatexDictionary(inputFile, outputFile) {
  try {
    console.log(`📖 Reading dictionary data from: ${inputFile}`);
    
    const rawData = fs.readFileSync(inputFile, 'utf8');
    const dictionaryData = JSON.parse(rawData);
    
    let documents;
    
    // Handle data.json format (direct array)
    if (Array.isArray(dictionaryData)) {
      documents = dictionaryData.map(entry => ({
        id: entry._id || entry.word || 'unknown',
        data: entry
      }));
    } else {
      throw new Error('Invalid data format - expected array from data.json');
    }
    
    console.log(`📊 Processing ${documents.length} dictionary entries...`);
    
    // Group words by first letter
    const wordGroups = groupWordsByLetter(documents);
    
    console.log(`📚 Found words starting with: ${Object.keys(wordGroups).sort().join(', ')}`);
    
    // Generate sample chapters for template
    const sampleGroups = generateSampleEntries(documents, 3);
    let sampleChaptersLatex = '';
    
    const sortedSampleLetters = Object.keys(sampleGroups).sort();
    
    sortedSampleLetters.forEach((letter, index) => {
      const words = sampleGroups[letter];
      
      // Use different header for first letter (no page break)
      if (index === 0) {
        sampleChaptersLatex += `\\firstletterheader{${letter}}\n\n`;
      } else {
        sampleChaptersLatex += `\\letterheader{${letter}}\n\n`;
      }
      
      sampleChaptersLatex += `\\begin{multicols}{2}\n`;
      sampleChaptersLatex += `\\RaggedRight\n`;
      sampleChaptersLatex += `\\hyphenpenalty=10000\n`;
      sampleChaptersLatex += `\\tolerance=1000\n`;
      sampleChaptersLatex += `\\emergencystretch=3em\n`;
      sampleChaptersLatex += `\\setlength{\\RaggedRightParindent}{0pt}\n\n`;
      
      words.forEach(doc => {
        const word = doc.word;
        const data = doc.data;
        sampleChaptersLatex += generateDictEntry(word, data);
      });
      
      sampleChaptersLatex += `\\end{multicols}\n\n`;
    });
    
    // Generate all chapters for full dictionary
    const chaptersLatex = generateChapters(wordGroups);
    
    // Read the clean template
    const templateFile = path.join(__dirname, 'shona-dictionary-template-clean.tex');
    let template = fs.readFileSync(templateFile, 'utf8');
    
    // Replace placeholder with sample chapters for template, or full chapters for generated
    const isGeneratingTemplate = outputFile.includes('template') || outputFile.includes('sample');
    const contentToInsert = isGeneratingTemplate ? sampleChaptersLatex : chaptersLatex;
    
    const finalLatex = template.replace('%SAMPLE_CHAPTERS_PLACEHOLDER%', contentToInsert);
    
    // Write the output
    fs.writeFileSync(outputFile, finalLatex);
    
    console.log(`✅ Generated LaTeX dictionary: ${outputFile}`);
    console.log(`📊 Statistics:`);
    console.log(`   Total entries: ${documents.length}`);
    console.log(`   Letters covered: ${Object.keys(wordGroups).length}`);
    console.log(`   Average entries per letter: ${Math.round(documents.length / Object.keys(wordGroups).length)}`);
    
    // Generate compilation instructions
    console.log(`\n📝 To compile the PDF:`);
    console.log(`   cd ${path.dirname(outputFile)}`);
    console.log(`   xelatex ${path.basename(outputFile)}`);
    console.log(`   xelatex ${path.basename(outputFile)}  # Run twice for proper cross-references`);
    
  } catch (error) {
    console.error(`❌ Error generating LaTeX dictionary: ${error.message}`);
    process.exit(1);
  }
}

// Main execution
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length < 1) {
    console.log('Usage: node generate-latex-entries.js <dictionary-json-file> [output-tex-file]');
    console.log('');
    console.log('Examples:');
    console.log('  node generate-latex-entries.js ../src/data/data.json');
    console.log('  node generate-latex-entries.js ../src/data/data.json shona-dict-full.tex');
    process.exit(1);
  }
  
  const inputFile = path.resolve(args[0]);
  const outputFile = args[1] ? path.resolve(args[1]) : path.join(__dirname, 'shona-dictionary-generated.tex');
  
  generateLatexDictionary(inputFile, outputFile);
}

module.exports = {
  generateLatexDictionary,
  generateDictEntry,
  escapeLatex
};
