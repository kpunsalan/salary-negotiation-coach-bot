import { NextRequest, NextResponse } from "next/server";
import { Feedback, NegotiationScript } from "@/app/types";
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getCoachingResponse(
  userMessage: string,
  script: NegotiationScript // eslint-disable-line @typescript-eslint/no-unused-vars
): Promise<{ response: string; feedback: Feedback }> {
  const prompt = `
You are an expert salary negotiation coach helping a woman practice her negotiation skills. The user just said: "${userMessage}"

You are role-playing as the hiring manager responding to their negotiation attempt. Provide:
1. A realistic response as a hiring manager would give
2. Feedback on their negotiation approach

Analyze their message for:
- Confidence level
- Use of data/research
- Personal language ("I" statements)
- Question asking
- Professional tone
- Preparation level

Provide feedback in this JSON structure:
{
  "response": "Your response as the hiring manager",
  "feedback": {
    "strengths": ["strength 1", "strength 2"],
    "areasForImprovement": ["area 1", "area 2"],
    "suggestions": ["suggestion 1", "suggestion 2"]
  }
}

Keep the hiring manager response professional and realistic. Make feedback constructive and encouraging.
`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are an expert salary negotiation coach. Always respond with valid JSON that matches the requested structure exactly. Be encouraging and constructive in feedback.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    // Parse the JSON response
    const result = JSON.parse(content) as { response: string; feedback: Feedback };
    return result;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    // Fallback to mock implementation if API fails
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
