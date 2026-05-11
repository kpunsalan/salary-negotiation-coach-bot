export interface JobOffer {
  position: string;
  company: string;
  offerSalary: number;
  salaryRange?: {
    min: number;
    max: number;
  };
  benefits?: string[];
  industry?: string;
  experience?: string;
  additionalDetails?: string;
}

export interface NegotiationScript {
  opening: string;
  keyPoints: string[];
  closingStatement: string;
  anticipatedObjections: {
    objection: string;
    response: string;
  }[];
}

export interface Message {
  id: string;
  role: 'user' | 'coach';
  content: string;
  timestamp: Date;
  feedback?: Feedback;
}

export interface Feedback {
  strengths: string[];
  areasForImprovement: string[];
  suggestions: string[];
}

export interface CoachingSession {
  id: string;
  jobOffer: JobOffer;
  script: NegotiationScript;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}
