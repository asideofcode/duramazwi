import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri = process.env.MONGODB_URI;

export async function POST(req: Request) {
  const client = new MongoClient(uri);
  try {
    const {
      word,
      definition,
      example,
      contributorEmail,
      type,
      originalDefinitionId,
    } = await req.json();

    if (!word || !contributorEmail || !definition || !example) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    const suggestion = {
      schemaVersion: 1,
      word,
      definition,
      example,
      contributorEmail,
      type: type || "addition",
      originalDefinitionId: originalDefinitionId || null,
      timestamp: new Date(),
    };

    await client.connect();
    const db = client.db("chishona");
    await db.collection("suggestions").insertOne(suggestion);

    return NextResponse.json(
      { message: "Suggestion submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
