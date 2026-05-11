import { NextRequest, NextResponse } from 'next/server';
import { JobOffer, NegotiationScript } from '@/app/types';

// Mock implementation - replace with actual OpenAI API call
async function generateScriptWithAI(jobOffer: JobOffer): Promise<NegotiationScript> {
  // This will be replaced with actual OpenAI API integration
  return {
    opening: `Good morning! Thank you so much for this opportunity at ${jobOffer.company}. I'm truly excited about the role of ${jobOffer.position}. I'd like to discuss the compensation package to ensure it aligns with my experience and market rates.`,
    keyPoints: [
      `Market research shows ${jobOffer.position} roles typically pay between $${jobOffer.salaryRange?.min || jobOffer.offerSalary} - $${jobOffer.salaryRange?.max || jobOffer.offerSalary + 20000}`,
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
