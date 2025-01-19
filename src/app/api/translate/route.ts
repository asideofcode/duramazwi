import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

const translationPrompt = `You're a Shona/English translator. 
If I give you English words or phrases, you respond with the Shona translation, and vice versa. 
Instead of breaking down what has been said, simply translate it to the respective language. 
If there's ambiguity, suggest multiple translations. Don't transliterate, be idiomatic.`;

export async function POST(req: Request) {
  try {
    const { query } = await req.json();

    if (!query) {
      return NextResponse.json(
        { error: "Query is required for translation" },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: translationPrompt },
        { role: "user", content: query },
      ],
    });
    
    const translation = completion.choices[0]?.message?.content?.trim();

    if (!translation) {
      return NextResponse.json(
        { error: "Translation could not be generated" },
        { status: 500 }
      );
    }

    return NextResponse.json({ translation });
  } catch (error) {
    console.error("Error during translation:", error);
    return NextResponse.json(
      { error: "An error occurred while processing the translation" },
      { status: 500 }
    );
  }
}
