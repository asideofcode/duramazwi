import OpenAI from 'openai';
import { z } from 'zod';
import { zodTextFormat } from 'openai/helpers/zod';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Check if OpenAI is configured
export function isOpenAIConfigured(): boolean {
  return !!process.env.OPENAI_API_KEY;
}

// Generic function to call OpenAI with structured output
export async function generateStructuredResponse<T>(
  schema: z.ZodSchema<T>,
  systemPrompt: string,
  userPrompt: string,
  schemaName: string = 'response'
): Promise<T> {
  if (!isOpenAIConfigured()) {
    throw new Error('OpenAI API key not configured');
  }

  const response = await openai.responses.parse({
    model: "gpt-4o-2024-08-06",
    input: [
      {
        role: "system",
        content: systemPrompt
      },
      {
        role: "user",
        content: userPrompt
      }
    ],
    text: {
      format: zodTextFormat(schema, schemaName),
    },
  });

  const result = response.output_parsed;
  
  if (!result) {
    console.error("Raw response:", response);
    throw new Error('No parsed data received from OpenAI');
  }

  return result;
}

// Simple text generation without structured output
export async function generateText(
  systemPrompt: string,
  userPrompt: string,
  maxTokens: number = 1000
): Promise<string> {
  if (!isOpenAIConfigured()) {
    throw new Error('OpenAI API key not configured');
  }

  const response = await openai.chat.completions.create({
    model: "gpt-4o-2024-08-06",
    messages: [
      {
        role: "system",
        content: systemPrompt
      },
      {
        role: "user",
        content: userPrompt
      }
    ],
    max_tokens: maxTokens,
    temperature: 0.7,
  });

  const content = response.choices[0]?.message?.content;
  
  if (!content) {
    throw new Error('No content received from OpenAI');
  }

  return content.trim();
}

// Export the OpenAI client for advanced usage
export { openai };
