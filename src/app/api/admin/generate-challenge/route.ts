import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { generateStructuredResponse, generateText } from '@/lib/openai';

// Schema for full challenge generation from text blob
const ChallengeGenerationSchema = z.object({
  type: z.enum(['multiple_choice', 'audio_recognition', 'translation_builder']).describe("The most appropriate challenge type for this content"),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).describe("Difficulty level based on language complexity"),
  points: z.number().min(1).max(100).describe("Points to award (1-100, typically 10-50)"),
  question: z.string().describe("Clear, engaging question text"),
  correctAnswer: z.union([
    z.string(),
    z.array(z.string())
  ]).describe("Correct answer - string for multiple choice/audio, array for translation builder"),
  options: z.array(z.string()).optional().describe("Answer options for multiple choice and audio recognition"),
  explanation: z.string().describe("Brief explanation of the answer and concept"),
  labels: z.array(z.string()).optional().describe("Labels/tags for grouping this challenge")
});

// Schema for batch challenge generation
const BatchChallengeGenerationSchema = z.object({
  challenges: z.array(ChallengeGenerationSchema).min(1).max(50).describe("Array of generated challenges")
});

// Schema for generating answer options
const OptionsGenerationSchema = z.object({
  options: z.array(z.string()).min(2).max(6).describe("Array of plausible answer options including distractors")
});

// POST /api/admin/generate-challenge - Generate challenge content
export async function POST(request: NextRequest) {
  try {
    const { action, ...data } = await request.json();

    switch (action) {
      case 'parse_text_blob':
        return await parseTextBlob(data);
      case 'batch_parse_text_blob':
        return await batchParseTextBlob(data);
      case 'generate_explanation':
        return await generateExplanation(data);
      case 'generate_question':
        return await generateQuestion(data);
      case 'generate_options':
        return await generateOptions(data);
      default:
        return NextResponse.json(
          { error: 'Invalid action. Must be one of: parse_text_blob, batch_parse_text_blob, generate_explanation, generate_question, generate_options' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('❌ Error in challenge generation:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid response format from AI', details: error.errors },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to generate challenge content', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// Parse a text blob into a complete challenge
async function parseTextBlob({ textBlob }: { textBlob: string }) {
  if (!textBlob || textBlob.trim().length < 10) {
    return NextResponse.json(
      { error: 'Text blob must be at least 10 characters long' },
      { status: 400 }
    );
  }

  const systemPrompt = `You are an expert Shona language instructor creating educational challenges. 

Your task is to analyze the provided text and create an appropriate language learning challenge. Consider:
- The complexity and content of the text to determine difficulty
- Whether it's better suited for multiple choice, audio recognition, or translation building
- Create engaging questions that test comprehension or language skills
- Generate plausible distractors for multiple choice questions
- Provide helpful explanations that aid learning

For translation_builder challenges:
- correctAnswer should be an array of words in the correct order
- options should include all words needed plus some distractors
- Focus on sentence construction and word order

For multiple_choice and audio_recognition:
- correctAnswer should be a single string
- options should be an array of 3-5 choices including the correct answer
- Include plausible but incorrect alternatives`;

  const userPrompt = `Create a Shona language learning challenge based on this content:

"${textBlob}"

Generate a complete challenge with appropriate type, difficulty, question, answer(s), options (if needed), and explanation.`;

  const result = await generateStructuredResponse(
    ChallengeGenerationSchema,
    systemPrompt,
    userPrompt,
    'challenge_generation'
  );

  return NextResponse.json({
    success: true,
    challenge: result
  });
}

// Parse a text blob into multiple challenges for batch creation
async function batchParseTextBlob({ textBlob, sharedLabels = [], targetQuantity = 20 }: { 
  textBlob: string; 
  sharedLabels?: string[];
  targetQuantity?: number;
}) {
  if (!textBlob || textBlob.trim().length < 10) {
    return NextResponse.json(
      { error: 'Text blob must be at least 10 characters long' },
      { status: 400 }
    );
  }

  const systemPrompt = `You are an expert Shona language instructor creating multiple educational challenges from a single text description. 

Your task is to analyze the provided text and create approximately ${targetQuantity} different language learning challenges that comprehensively cover the content. Consider:
- Create diverse challenge types (multiple choice, audio recognition, translation builder)
- Vary difficulty levels appropriately
- Focus on different aspects of the content (vocabulary, grammar, comprehension, etc.)
- Each challenge should be unique and test different skills
- Generate engaging questions that build upon each other
- Provide helpful explanations that aid learning

For translation_builder challenges:
- correctAnswer should be an array of words in the correct order
- options should include all words needed plus some distractors
- Focus on sentence construction and word order

For multiple_choice and audio_recognition:
- correctAnswer should be a single string
- options should be an array of 3-5 choices including the correct answer
- Include plausible but incorrect alternatives

Include appropriate labels for grouping related challenges.`;

  const labelsText = sharedLabels.length > 0 ? `\n\nShared labels to include: ${sharedLabels.join(', ')}` : '';
  const userPrompt = `Create multiple Shona language learning challenges based on this content:

"${textBlob}"${labelsText}

Generate approximately ${targetQuantity} comprehensive challenges that thoroughly cover all aspects of this content. Create challenges for:
- Each vocabulary word mentioned
- Grammar patterns and structures
- Cultural concepts and context
- Different skill levels (beginner to advanced)
- Various challenge types for variety
- Progressive difficulty building

Make sure each challenge is unique and tests different language skills. Be thorough and comprehensive.`;

  const result = await generateStructuredResponse(
    BatchChallengeGenerationSchema,
    systemPrompt,
    userPrompt,
    'batch_challenge_generation'
  );

  // Add shared labels to each challenge
  const challengesWithLabels = result.challenges.map(challenge => ({
    ...challenge,
    labels: [...(challenge.labels || []), ...sharedLabels].filter((label, index, arr) => arr.indexOf(label) === index)
  }));

  return NextResponse.json({
    success: true,
    challenges: challengesWithLabels
  });
}

// Generate explanation for existing challenge data
async function generateExplanation({ question, correctAnswer, type }: { 
  question: string; 
  correctAnswer: string | string[]; 
  type: string;
}) {
  if (!question || !correctAnswer) {
    return NextResponse.json(
      { error: 'Question and correct answer are required' },
      { status: 400 }
    );
  }

  const systemPrompt = `You are a helpful Shona language instructor. Generate clear, concise explanations that help students understand why an answer is correct and learn from the challenge.

Keep explanations:
- Brief but informative (1-3 sentences)
- Educational and encouraging
- Focused on the language concept being tested
- Culturally appropriate`;

  const answerText = Array.isArray(correctAnswer) ? correctAnswer.join(' ') : correctAnswer;
  const userPrompt = `Generate an explanation for this Shona language challenge:

Question: "${question}"
Correct Answer: "${answerText}"
Challenge Type: ${type}

Explain why this is the correct answer and what language concept it demonstrates.`;

  const explanation = await generateText(systemPrompt, userPrompt, 200);

  return NextResponse.json({
    success: true,
    explanation
  });
}

// Generate question text based on answer and context
async function generateQuestion({ correctAnswer, type, context }: { 
  correctAnswer: string | string[]; 
  type: string;
  context?: string;
}) {
  if (!correctAnswer) {
    return NextResponse.json(
      { error: 'Correct answer is required' },
      { status: 400 }
    );
  }

  const systemPrompt = `You are a Shona language instructor creating engaging questions. Generate clear, appropriate questions that effectively test the target answer.

Make questions:
- Clear and unambiguous
- Appropriate for the challenge type
- Engaging and contextual
- Suitable for language learners`;

  const answerText = Array.isArray(correctAnswer) ? correctAnswer.join(' ') : correctAnswer;
  const contextText = context ? `\n\nContext: ${context}` : '';
  
  const userPrompt = `Generate a question for this Shona language challenge:

Challenge Type: ${type}
Target Answer: "${answerText}"${contextText}

Create an appropriate question that would lead to this answer.`;

  const question = await generateText(systemPrompt, userPrompt, 150);

  return NextResponse.json({
    success: true,
    question
  });
}

// Generate answer options for multiple choice or additional options
async function generateOptions({ question, correctAnswer, existingOptions = [], count = 4 }: { 
  question: string; 
  correctAnswer: string | string[];
  existingOptions?: string[];
  count?: number;
}) {
  if (!question || !correctAnswer) {
    return NextResponse.json(
      { error: 'Question and correct answer are required' },
      { status: 400 }
    );
  }

  const systemPrompt = `You are a Shona language instructor creating plausible but incorrect answer options (distractors) for multiple choice questions.

Create options that are:
- Plausible but clearly incorrect
- Similar in format/length to the correct answer
- Educational (common mistakes or related concepts)
- Appropriate for Shona language learners`;

  const answerText = Array.isArray(correctAnswer) ? correctAnswer.join(' ') : correctAnswer;
  const existingText = existingOptions.length > 0 ? `\n\nExisting options to avoid duplicating: ${existingOptions.join(', ')}` : '';
  
  const userPrompt = `Generate ${count} answer options for this Shona language question:

Question: "${question}"
Correct Answer: "${answerText}"${existingText}

Create plausible but incorrect alternatives that would challenge learners appropriately.`;

  const result = await generateStructuredResponse(
    OptionsGenerationSchema,
    systemPrompt,
    userPrompt,
    'options_generation'
  );

  return NextResponse.json({
    success: true,
    options: result.options
  });
}
