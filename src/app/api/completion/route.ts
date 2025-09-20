import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export const POST = async (req: Request) => {
  const { prompt } = await req.json();
  const { text } = await generateText({
    model: google("gemini-2.5-flash"),
    prompt,
  });
  console.log("Generated text:", text);
  return new Response(JSON.stringify({ text }), { status: 200 });
};
