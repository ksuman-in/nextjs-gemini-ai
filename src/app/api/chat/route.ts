import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamText, UIMessage } from "ai";

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const stream = streamText({
      model: google("gemini-2.5-flash"),
      messages: convertToModelMessages(messages),
    });
    return stream.toUIMessageStreamResponse();
  } catch (error) {
    console.log("Error:", error);
    return new Response(
      JSON.stringify({
        error: "Something went wrong. Please try again for this chat",
      }),
      { status: 500 }
    );
  }
}
