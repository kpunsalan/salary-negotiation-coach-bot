import { NextRequest, NextResponse } from "next/server";
import { Message, Feedback } from "@/app/types";

// Mock implementation - replace with actual OpenAI API call
async function getCoachingResponse(
  userMessage: string,
  script: any
): Promise<{ response: string; feedback: Feedback }> {
  // This will be replaced with actual OpenAI API integration

  // Simple feedback generation based on keywords
  const strengths: string[] = [];
  const areasForImprovement: string[] = [];
  const suggestions: string[] = [];

  // Analyze user message
  if (
    userMessage.toLowerCase().includes("thank you") ||
    userMessage.toLowerCase().includes("appreciate")
  ) {
    strengths.push("Great! You started with gratitude - this sets a positive tone.");
  }

  if (
    userMessage.toLowerCase().includes("research") ||
    userMessage.toLowerCase().includes("market")
  ) {
    strengths.push("Excellent! You referenced market research, which shows preparation.");
  }

  if (userMessage.length < 50) {
    areasForImprovement.push("Your message was brief. Consider elaborating more on your points.");
  }

  if (!userMessage.includes("?")) {
    areasForImprovement.push("Consider ending with a question to keep the conversation open.");
  }

  if (!userMessage.toLowerCase().includes("i") && !userMessage.toLowerCase().includes("my")) {
    areasForImprovement.push('Remember to use personal language like "I" and "my" to own your message.');
    suggestions.push("Try rephrasing to be more personal and confident in your expression.");
  }

  return {
    response: `That's a solid point! I like how you framed that. Let me counter with this: Can you tell me more about how your experience specifically adds value to their team? This is a great opportunity to highlight what makes you unique.`,
    feedback: {
      strengths:
        strengths.length > 0
          ? strengths
          : ["You are engaging well with the negotiation process!"],
      areasForImprovement:
        areasForImprovement.length > 0 ? areasForImprovement : [],
      suggestions: suggestions.length > 0 ? suggestions : ["Keep building on this momentum - you are doing great!"],
    },
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, script } = body;

    // Validate input
    if (!message || !script) {
      return NextResponse.json(
        { error: "Missing required fields: message, script" },
        { status: 400 }
      );
    }

    const { response, feedback } = await getCoachingResponse(message, script);

    return NextResponse.json(
      {
        id: Date.now().toString(),
        role: "coach",
        content: response,
        feedback,
        timestamp: new Date(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error generating coaching response:", error);
    return NextResponse.json(
      { error: "Failed to generate coaching response" },
      { status: 500 }
    );
  }
}
