import { NextRequest, NextResponse } from 'next/server';
import { JobOffer, NegotiationScript } from '@/app/types';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateScriptWithAI(jobOffer: JobOffer): Promise<NegotiationScript> {
  const prompt = `
You are an expert salary negotiation coach specializing in helping women negotiate fair compensation. Create a tailored negotiation script based on the following job offer details:

Job Details:
- Position: ${jobOffer.position}
- Company: ${jobOffer.company}
- Offered Salary: $${jobOffer.offerSalary}
- Industry: ${jobOffer.industry || 'Not specified'}
- Experience: ${jobOffer.experience || 'Not specified'}
- Additional Details: ${jobOffer.additionalDetails || 'None provided'}

Please generate a negotiation script with the following structure:
1. Opening statement: A professional, confident greeting that expresses enthusiasm and transitions into compensation discussion
2. Key talking points: 3-5 specific points backed by market research, experience, and value proposition
3. Closing statement: A clear ask for the desired salary range with flexibility options
4. Anticipated objections: 3 common objections with prepared responses

Make the script personalized to the candidate's situation and industry. Use professional language that shows confidence and preparation. Focus on collaborative negotiation rather than confrontation.

Return the response in JSON format with this exact structure:
{
  "opening": "opening statement text",
  "keyPoints": ["point 1", "point 2", "point 3"],
  "closingStatement": "closing statement text",
  "anticipatedObjections": [
    {
      "objection": "objection text",
      "response": "response text"
    }
  ]
}
`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are an expert salary negotiation coach. Always respond with valid JSON that matches the requested structure exactly.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1500,
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    // Parse the JSON response
    const script = JSON.parse(content) as NegotiationScript;
    return script;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    // Fallback to mock implementation if API fails
    return {
      opening: `Good morning! Thank you so much for this opportunity at ${jobOffer.company}. I'm truly excited about the role of ${jobOffer.position}. I'd like to discuss the compensation package to ensure it aligns with my experience and market rates.`,
      keyPoints: [
        `Market research shows ${jobOffer.position} roles typically pay between $${jobOffer.offerSalary} - $${jobOffer.offerSalary + 20000}`,
        `My background in ${jobOffer.experience || 'this field'} brings additional value`,
        `I'm committed to making meaningful contributions to ${jobOffer.company}`,
        `This role is a great fit for my career goals in the ${jobOffer.industry || 'tech'} industry`,
      ],
      closingStatement: `I believe a salary of $[your target] would be fair given my skills and the market rate. What flexibility do you have in adjusting the offer?`,
      anticipatedObjections: [
        {
          objection: 'We have a fixed budget.',
          response: 'I understand budget constraints are important. Could we explore other forms of compensation like signing bonus, additional PTO, or professional development opportunities?',
        },
        {
          objection: "That's above our range for this position.",
          response: 'I appreciate that. Based on my research and experience, this is in line with market rates. Can you share what flexibility exists in the budget?',
        },
        {
          objection: "We offer other benefits to compensate.",
          response: 'I appreciate the benefits. Can you walk me through them? I want to ensure I fully understand the complete package.',
        },
      ],
    };
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const jobOffer: JobOffer = body;

    // Validate input
    if (!jobOffer.position || !jobOffer.company || !jobOffer.offerSalary) {
      return NextResponse.json(
        { error: 'Missing required fields: position, company, offerSalary' },
        { status: 400 }
      );
    }

    const script = await generateScriptWithAI(jobOffer);

    return NextResponse.json(script, { status: 200 });
  } catch (error) {
    console.error('Error generating script:', error);
    return NextResponse.json(
      { error: 'Failed to generate negotiation script' },
      { status: 500 }
    );
  }
}
