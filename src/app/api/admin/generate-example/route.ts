import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { z } from 'zod';
import { zodTextFormat } from 'openai/helpers/zod';

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Define Zod schema for structured output
const ExampleSchema = z.object({
  shona: z.string().describe("The Shona example sentence using the word"),
  english: z.string().describe("The English translation of the example sentence")
});

const ExampleGenerationSchema = z.object({
  examples: z.array(ExampleSchema).max(3).describe("Array of 1-3 usage examples")
});

// POST /api/admin/generate-example - Generate AI examples for a word/definition
export async function POST(request: NextRequest) {
  try {
    const { word, definition, partOfSpeech } = await request.json();

    if (!word || !definition) {
      return NextResponse.json(
        { error: 'Word and definition are required' },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    // Create a detailed prompt for example generation
    const prompt = `Generate 1-3 natural, contextual examples for the Shona word "${word}" with the following definition: "${definition}"${partOfSpeech ? ` (${partOfSpeech})` : ''}.

Requirements:
- Examples should be natural, everyday Shona sentences
- Each example should clearly demonstrate the meaning of the word
- Provide accurate English translations
- Use proper Shona grammar and spelling
- Make examples culturally appropriate and relevant
- Vary the sentence structures and contexts

The word "${word}" should be used naturally within each example sentence.`;

    const response = await openai.responses.parse({
      model: "gpt-4o-2024-08-06",
      input: [
        {
          role: "system",
          content: "You are an expert in the Shona language and culture. Generate high-quality, natural examples that demonstrate proper usage of Shona words in context. Ensure all Shona text uses proper spelling and grammar."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      text: {
        format: zodTextFormat(ExampleGenerationSchema, "example_generation"),
      },
    });

    const result = response.output_parsed;
    
    if (!result) {
      console.error("Raw response:", response);
      throw new Error('No parsed data received from OpenAI');
    }

    if (!result.examples) {
      console.error("Parsed data:", result);
      throw new Error('No examples field in response data');
    }

    return NextResponse.json({
      success: true,
      examples: result.examples,
      usage: response.usage
    });

  } catch (error) {
    console.error('❌ Error generating examples:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid response format from AI', details: error.errors },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to generate examples', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
