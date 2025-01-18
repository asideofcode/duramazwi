# Dictionary Extraction and Structuring Process

This README outlines the general process for extracting, structuring, and enriching dictionary data from various sources into a standardized schema for use in our application. While this process is exemplified using the _Shona-English and English-Shona Dictionary and Phrasebook_, it is adaptable to any dictionary or linguistic resource.

## Objective

To extract raw lexical data from diverse sources, transform it into a structured and machine-readable JSON schema, and enrich it with missing information to make it more comprehensive and user-friendly.

This process is designed to handle diverse linguistic datasets while maintaining flexibility and accuracy. Let us know if you have additional suggestions or want to contribute!

## General Workflow

### 1. Identify and Secure a Source
   - Locate a reliable source of linguistic data (e.g., dictionaries, glossaries, academic texts).
   - This can include physical books, online archives, PDFs, or other media. For example, we used _Shona-English and English-Shona Dictionary and Phrasebook_ by Aquilina Mawadza, available on the [Internet Archive](https://archive.org).
   - Confirm that the resource complies with copyright regulations or is open for public use.

### 2. Extract Raw Information
   - **Digital Sources:** If working with a digital resource (e.g., PDFs), extract text using OCR tools or built-in text layers.
   - **Printed Sources:** For printed material, take clear images or scans of every page and organize them systematically (e.g., saved in a folder with page numbers).
   - **Example Workflow:** For _Shona-English and English-Shona Dictionary and Phrasebook_, 80+ images were taken and saved for processing.

### 3. Define the Schema
   - Create a schema that accommodates the structure of the data and allows for flexibility and enrichment. Here’s the JSON schema we used:
     ```json
     [
       {
         "word": "shona_word",
         "meanings": [
           {
             "partOfSpeech": "noun/verb/adjective/adverb/etc.",
             "definitions": [
               {
                 "definition": "Primary English definition of the word."
               },
               {
                 "definition": "Additional definition if applicable."
               }
             ],
             "example": "A contextual example sentence in the source language."
           }
         ]
       }
     ]
     ```
   - Ensure the schema is designed to handle all necessary information: word, part of speech, definitions, and examples.

### 4. Process the Data
   - Use tools like **ChatGPT** or other extraction systems to:
     1. Extract text from the source.
     2. Parse and map the data into the schema.
     3. Enrich missing data (e.g., infer part of speech, generate examples).
   - For consistency, document the exact prompt used. Below is an example:

   ```
   I have an image from a dictionary. Each entry includes a word, its part of speech (sometimes explicitly stated), and its English description.

   Your task is to process the image and provide a structured JSON array with the following specifications:
   1. Extract the information from the image using your native OCR capabilities. Do not attempt to run Python OCR; rely on your built-in ability to recognize text from the image.
   2. Convert the data into the schema:
      [
        {
          "word": "example_word",
          "meanings": [
            {
              "partOfSpeech": "noun",
              "definitions": [
                { "definition": "Primary definition." },
                { "definition": "Additional definition, if applicable." }
              ],
              "example": "An example sentence in the source language."
            }
          ]
        }
      ]
   3. Add missing part-of-speech information if not provided.
   4. Enrich with example sentences and additional context.
   ```

### 5. Validate the Data
   - After processing, review the JSON data to ensure:
     - All entries follow the schema.
     - Definitions are accurate and meaningful.
     - Examples are contextually appropriate.
   - Optionally, involve linguists or domain experts to verify accuracy.

### 6. Store and Organize
   - Save the structured data in a standardized format (e.g., `dictionary.json`).
   - Use version control (e.g., Git) to manage changes and additions.

## Example Application of the Workflow

### Source: _Shona-English and English-Shona Dictionary and Phrasebook_
- **Step 1:** Located the resource on the Internet Archive.
- **Step 2:** Took high-resolution images of each page, approximately 80 in total.
- **Step 3:** Defined the schema to store word, part of speech, definitions, and examples.
- **Step 4:** Used ChatGPT to process each image, applying the prompt described above.
- **Step 5:** Reviewed and enriched the data by adding missing part-of-speech tags and generating contextual example sentences in Shona.
- **Step 6:** Saved the resulting JSON dataset for further integration into the application.


## Key Considerations

- **Flexibility:** The schema and workflow should adapt to various languages and dictionary structures.
- **Automation:** Use AI tools like ChatGPT for efficiency, but validate outputs for accuracy.
- **Enrichment:** Add value by filling gaps in the source data, such as providing consistent part-of-speech tags and contextual examples.

---

## Future Improvements

1. Automation:
   - Develop scripts to automate the OCR and data structuring process further.
   - Use AI pipelines to validate outputs against linguistic rules.
2. Collaboration:
   - Work with native speakers or linguists for better examples and cultural accuracy.
3. Dataset Expansion:
   - Integrate additional sources for a more comprehensive dataset, including dialectal variations and regional terms.

