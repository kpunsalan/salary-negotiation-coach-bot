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

## 🤖 AI Integration (Ready!)

The app now uses OpenAI's GPT-4o-mini model for both script generation and coaching conversations.

### Setup Complete ✅
1. ✅ OpenAI API key added to `.env.local`
2. ✅ OpenAI SDK installed
3. ✅ API routes updated to use real AI
4. ✅ Development server restarted

### How It Works
- **Script Generation**: GPT-4o-mini analyzes your job offer details and creates personalized negotiation scripts
- **Coaching Conversations**: AI role-plays as hiring managers and provides real-time feedback on your negotiation approach
- **Smart Feedback**: AI analyzes your messages for confidence, preparation, tone, and negotiation tactics

### API Usage
- Uses GPT-4o-mini for cost-effective, fast responses
- Includes fallback to mock implementations if API fails
- Structured prompts ensure consistent, helpful responses

## 🧪 Testing the Application

The application is now fully functional with OpenAI integration! Here's how to test it:

### 1. Start the Development Server
```bash
npm run dev
```
Server runs at: http://localhost:3000

### 2. Test the Complete Flow
1. **Fill out the Job Offer Form**: Enter position, company, salary, industry, and experience
2. **Review Generated Script**: AI creates a personalized negotiation script
3. **Practice Conversation**: Click "Start Practice Conversation" to chat with AI coach
4. **Get Real-time Feedback**: Click on AI responses to see coaching feedback

### 3. API Testing (Optional)
Both endpoints are working with OpenAI:

**Script Generation:**
```bash
curl -X POST http://localhost:3000/api/generate-script \
  -H "Content-Type: application/json" \
  -d '{"position":"Software Engineer","company":"Tech Corp","offerSalary":100000,"industry":"Technology","experience":"3 years"}'
```

**Coaching Conversation:**
```bash
curl -X POST http://localhost:3000/api/coach \
  -H "Content-Type: application/json" \
  -d '{"message":"I would like to negotiate for a higher salary","script":{"opening":"...","keyPoints":["..."],"closingStatement":"...","anticipatedObjections":[{"objection":"...","response":"..."}]}}'
```

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
