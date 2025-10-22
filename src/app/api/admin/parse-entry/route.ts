import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { z } from 'zod';
import { zodTextFormat } from 'openai/helpers/zod';

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Define Zod schema for structured output matching our dictionary schema
const ExampleSchema = z.object({
  shona: z.string().describe("The Shona example sentence"),
  english: z.string().describe("The English translation of the example sentence")
});

const DefinitionSchema = z.object({
  definition: z.string().describe("The definition/meaning in English"),
  examples: z.array(ExampleSchema).max(3).describe("Usage examples for this definition")
});

const MeaningSchema = z.object({
  partOfSpeech: z.string().describe("Part of speech (noun, verb, adjective, etc.)"),
  definitions: z.array(DefinitionSchema).length(1).describe("Single definition object - each distinct sense should be a separate meaning")
});

const DictionaryEntrySchema = z.object({
  word: z.string().describe("The main Shona word (without ku- prefix for verbs)"),
  meanings: z.array(MeaningSchema).min(1).describe("Array of meanings grouped by part of speech")
});

// POST /api/admin/parse-entry - Parse text blurb into dictionary entry
export async function POST(request: NextRequest) {
  try {
    const { textBlurb } = await request.json();

    if (!textBlurb || typeof textBlurb !== 'string' || textBlurb.trim().length === 0) {
      return NextResponse.json(
        { error: 'Text blurb is required' },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    // Create a detailed prompt for parsing the text blurb
    const prompt = `Parse the following text blurb into a structured dictionary entry for a Shona-English dictionary:

"${textBlurb}"

Requirements:
- Extract the main Shona word (store without ku- prefix for verbs)
- Create separate meanings for each distinct sense of the word
- Each meaning should have exactly one definition
- Generate 1-3 natural usage examples for each meaning
- Ensure proper Shona grammar and spelling
- Provide accurate English translations
- Make examples culturally appropriate and relevant

Important notes:
- For verbs, store the root form without "ku-" prefix
- CRITICAL: Each distinct sense/meaning should be a separate "meaning" object, NOT multiple definitions within one meaning
- For example: if "kopa" means both "copper" (noun) and "to copy" (verb), create two separate meanings
- If "mhaka" has multiple noun senses like "crime", "affair", "debt", create separate meaning objects for each
- Examples should clearly demonstrate the word's usage in context
- All Shona text should use proper spelling and diacritics where appropriate`;

    const response = await openai.responses.parse({
      model: "gpt-4o-2024-08-06",
      input: [
        {
          role: "system",
          content: "You are an expert linguist specializing in Shona language and culture. Parse text descriptions into structured dictionary entries following the exact schema provided. Ensure all Shona text uses proper spelling, grammar, and cultural context."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      text: {
        format: zodTextFormat(DictionaryEntrySchema, "dictionary_entry"),
      },
    });

    const result = response.output_parsed;
    
    if (!result) {
      console.error("Raw response:", response);
      throw new Error('No parsed data received from OpenAI');
    }

    if (!result.word || !result.meanings) {
      console.error("Parsed data:", result);
      throw new Error('Invalid dictionary entry structure in response');
    }

    return NextResponse.json({
      success: true,
      entry: result,
      usage: response.usage
    });

  } catch (error) {
    console.error('❌ Error parsing entry:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid response format from AI', details: error.errors },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to parse entry', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
