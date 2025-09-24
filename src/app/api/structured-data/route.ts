import { streamObject } from "ai";
import { google } from "@ai-sdk/google";
import { structuredDataSchema } from "./schema";

export async function POST(req: Request) {
  try {
    const { dish } = await req.json();
    const result = streamObject({
      model: google("gemini-2.5-flash"),
      schema: structuredDataSchema,
      prompt: `Generate a recipe for ${dish}`,
    });
    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Error in structured-data route:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
