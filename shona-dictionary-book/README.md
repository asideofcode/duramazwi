# Shona Dictionary Book Project 📚

A professional LaTeX-based Shona-English dictionary for publication, inspired by traditional dictionary formats and powered by modern data from shonadictionary.com.

## 🎯 Project Overview

This project transforms your Firebase dictionary data into a beautifully typeset book suitable for:
- Print publication
- Digital distribution (PDF)
- Academic reference
- Language preservation

## 📁 Project Structure

```
shona-dictionary-book/
├── src/                                    # Source files
│   ├── generate-latex-entries.js          # Firebase → LaTeX converter
│   ├── shona-dictionary-template-clean.tex # Main LaTeX template
│   └── shona-dictionary-original.tex      # Original template (reference)
├── build/                                  # Generated files (gitignored)
│   ├── shona-dictionary-generated.tex     # Full dictionary
│   ├── shona-dictionary-template-with-samples.tex # Template with samples
│   └── *.pdf                             # Compiled PDFs
├── Makefile                               # Build automation
├── README.md                              # This file
└── .gitignore                            # Git ignore rules
```

## 🚀 Quick Start

### Prerequisites

1. **LaTeX Distribution** (for PDF compilation):
   ```bash
   # macOS
   brew install --cask mactex
   
   # Ubuntu/Debian
   sudo apt-get install texlive-full
   
   # Windows
   # Download MiKTeX or TeX Live
   ```

2. **Node.js** (for data processing):
   ```bash
   # Check if installed
   node --version
   ```

3. **Firebase Data** (your dictionary backup):
   - Ensure you have `firebase-dictionary-complete-*.json`

### Build the Dictionary

```bash
# Check system requirements
make check

# Generate complete dictionary from Firebase data
make all

# Or step by step:
make generate  # Create LaTeX from Firebase data
make preview   # Quick PDF compilation
```

## 📖 Features

### Professional Typography
- **Two-column layout** for efficient space usage
- **Custom fonts** with proper Unicode support
- **Running headers** with current letter/section
- **Consistent formatting** for all entry types

### Dictionary Elements
- **Headwords** in bold with color coding
- **Parts of speech** in italics
- **Definitions** with clear explanations
- **Example sentences** in Shona with English translations
- **Cross-references** between related terms
- **Pronunciation guides** (ready for future enhancement)

### Content Organization
- **Alphabetical chapters** (A, B, C, etc.)
- **Automatic sorting** of entries
- **Multiple definitions** handled gracefully
- **Special entries** (proverbs, phrases) properly formatted

## 🔧 Customization

### Modify Layout
Edit `shona-dictionary.tex`:
```latex
% Change page size
\geometry{
    paperwidth=6in,    % Adjust width
    paperheight=9in,   % Adjust height
    margin=0.75in      % Adjust margins
}

% Change fonts
\setmainfont{Times New Roman}  % Main text
\setsansfont{Arial}           % Headers
```

### Add Content Sections
```latex
% Add new chapters
\chapter{Appendix: Grammar Guide}
\chapter{Cultural Notes}
\chapter{Pronunciation Guide}
```

### Styling Options
```latex
% Customize colors
\definecolor{headwordcolor}{RGB}{0,50,100}    % Headword color
\definecolor{partofpeechcolor}{RGB}{100,100,100}  % Grammar labels
\definecolor{examplecolor}{RGB}{60,60,60}     % Example text
```

## 📊 Data Processing

### Firebase Data Format
The script expects this structure:
```json
{
  "metadata": { ... },
  "documents": [
    {
      "id": "doc_id",
      "data": {
        "word": "headword",
        "word_lowercase": "headword",
        "partOfSpeech": "noun",
        "definitions": [
          {
            "definition": "English definition",
            "example": "Shona example sentence"
          }
        ],
        "pronunciation": "",
        "aiContext": ""
      }
    }
  ]
}
```

### Processing Features
- **Automatic escaping** of LaTeX special characters
- **Part of speech normalization** (verb, noun, etc.)
- **Alphabetical grouping** and sorting
- **Multi-definition handling**
- **Example sentence formatting**

## 🎨 Sample Output

The generated dictionary includes:

### Title Page
```
SHONA-ENGLISH
DICTIONARY

Duramazwi reChiShona neChirungu

Compiled from Traditional Sources
and Modern Usage

Based on shonadictionary.com
Community Contributions
```

### Dictionary Entries
```
adhiresi noun Address; location where someone lives or works.
Ndakanyora adhiresi rangu pabepa. I wrote my address on the paper.

aini noun Iron, as in the appliance or tool for ironing clothes.
Ndakatora aini kuzoaisa mbatya. I took the iron to iron the clothes.
```

## 📚 Publication Options

### Print Publishing
- **Page size**: 6" × 9" (standard dictionary format)
- **Print-ready PDF** with proper margins
- **Professional typography** suitable for offset printing
- **ISBN-ready** layout with copyright page

### Digital Distribution
- **Searchable PDF** with bookmarks
- **Hyperlinked** table of contents
- **Optimized file size** for web distribution
- **Mobile-friendly** formatting

## 🛠 Advanced Usage

### Custom Data Sources
```bash
# Use different Firebase backup
node generate-latex-entries.js path/to/other-backup.json custom-output.tex

# Process specific word ranges
# (modify the script to filter by word patterns)
```

### Multiple Editions
```bash
# Create different versions
make generate FIREBASE_DATA=basic-words.json
mv shona-dictionary-generated.tex shona-dictionary-basic.tex

make generate FIREBASE_DATA=complete-words.json  
mv shona-dictionary-generated.tex shona-dictionary-complete.tex
```

### Batch Processing
```bash
# Process multiple language pairs
for lang in shona ndebele; do
    make generate FIREBASE_DATA=${lang}-dictionary.json
    mv shona-dictionary-generated.tex ${lang}-dictionary.tex
done
```

## 🎯 Next Steps

### Content Enhancement
- [ ] Add pronunciation guides using IPA
- [ ] Include etymology information
- [ ] Add cultural context notes
- [ ] Expand example sentences
- [ ] Add audio references (QR codes)

### Technical Improvements
- [ ] Automated hyphenation rules
- [ ] Index generation
- [ ] Cross-reference automation
- [ ] Multi-language support
- [ ] Web-based preview

### Publishing Preparation
- [ ] Professional editing review
- [ ] ISBN registration
- [ ] Copyright clearance
- [ ] Print test runs
- [ ] Distribution planning

## 📄 License

This dictionary template is open source. The Shona language content should be attributed to traditional sources and community contributors.

## 🤝 Contributing

Contributions welcome for:
- LaTeX template improvements
- Data processing enhancements
- Additional language support
- Typography refinements

---

**Happy Publishing!** 🎉📖

*Transforming digital dictionaries into timeless books.*
