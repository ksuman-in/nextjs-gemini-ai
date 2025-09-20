import { streamText } from "ai";
import { google } from "@ai-sdk/google";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const stream = await streamText({
      model: google("gemini-2.5-flash"),
      prompt,
    });
    return stream.toUIMessageStreamResponse();
  } catch (error) {
    console.log("Error:", error);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      { status: 500 }
    );
  }
}
