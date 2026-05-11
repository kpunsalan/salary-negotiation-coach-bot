# AI Salary Negotiation Coach

An AI-powered web application that helps women practice and improve their salary negotiation skills through interactive coaching and personalized feedback.

## 🎯 Problem & Solution

**The Problem:** Women are statistically less likely to negotiate salary, often due to lack of practice and fear of backlash.

**The Solution:** An interactive platform that provides:
- Personalized negotiation scripts based on job offer details
- Role-play practice with an AI coach
- Real-time feedback on phrasing and approach
- A safe space to build confidence before actual negotiations

## ✨ Features

### 1. Job Offer Input
- Collect essential job offer details (position, company, salary, etc.)
- Input your experience level and industry information
- Generate tailored negotiation scripts

### 2. Script Generation
- AI-powered negotiation scripts customized to your situation
- Opening statement strategies
- Key talking points backed by market research
- Anticipated objections with prepared responses

### 3. Practice Conversation
- Role-play with an AI coach acting as the hiring manager
- Back-and-forth conversation practice
- Interactive learning environment

### 4. Real-Time Feedback
- Strengths identified in your negotiation approach
- Areas for improvement highlighted
- Specific suggestions for better phrasing
- Learn negotiation best practices through practice

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to `http://localhost:3000`

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   ├── generate-script/route.ts    # Script generation API
│   │   └── coach/route.ts              # Coaching feedback API
│   ├── components/
│   │   ├── JobOfferForm.tsx            # Form for job details
│   │   ├── NegotiationScript.tsx       # Display generated script
│   │   ├── ConversationUI.tsx          # Practice conversation
│   │   └── FeedbackPanel.tsx           # Feedback display
│   ├── types/
│   │   └── index.ts                    # TypeScript interfaces
│   ├── layout.tsx
│   ├── page.tsx                        # Main page
│   └── globals.css
├── public/
├── package.json
├── next.config.ts
└── tsconfig.json
```

## 🔧 Technology Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Next.js App Router with API Routes
- **Styling:** Tailwind CSS with responsive design
- **State Management:** React Hooks

## 📚 How to Use

1. **Enter Job Details:**
   - Fill in the job offer form with your position, company, salary, and experience
   - Click "Generate Negotiation Script"

2. **Review Your Script:**
   - Read through the generated opening statement
   - Review key talking points
   - Study anticipated objections and responses
   - Practice the script mentally

3. **Start Practice Conversation:**
   - Click "Start Practice Conversation"
   - Begin with your opening statement
   - Follow the AI coach's responses
   - Type your responses in the chat

4. **Get Feedback:**
   - Click on AI coach's messages to see feedback
   - Review strengths, areas for improvement, and suggestions
   - Practice different approaches

5. **Refine & Repeat:**
   - Use the feedback to improve your approach
   - Practice multiple times with different strategies
   - Build confidence for your actual negotiation

## 🤖 AI Integration (Future)

Currently, the app uses mock implementations. To integrate with OpenAI's GPT API:

1. Get an API key from [OpenAI](https://openai.com/api)
2. Add `OPENAI_API_KEY` to your `.env.local` file
3. Update `/app/api/generate-script/route.ts` and `/app/api/coach/route.ts` to use the OpenAI API

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎓 Best Practices for Negotiation

### Do's ✓
- Research market rates beforehand
- Start with your opening first
- Use specific numbers, not just "more"
- Reference your skills and experience
- Ask questions to understand constraints
- Practice makes perfect!

### Don'ts ✗
- Don't accept the first offer without negotiation
- Don't be afraid of silence - let them respond
- Don't compare yourself negatively to others
- Don't threaten or ultimatum
- Don't apologize for your worth

## 🌟 Tips for Success

1. **Practice multiple times** - Use the tool to practice different approaches
2. **Study the script** - Familiarize yourself with key points before negotiating
3. **Be specific** - Use data and research to back up your requests
4. **Stay positive** - Frame negotiation as collaborative, not adversarial
5. **Be ready for objections** - Use the anticipated responses as guidance

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💪 Empowering Women

This tool was created with the belief that every woman deserves to negotiate confidently and fairly for her work. Practice, preparation, and support can overcome the barriers that hold us back.

Remember: **Your skills are valuable. Your experience matters. You deserve fair compensation.** 🚀

---

**Built with ❤️ to help women negotiate confidently**
