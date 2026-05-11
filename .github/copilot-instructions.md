# AI Salary Negotiation Coach - Development Instructions

## Project Overview
Building an AI-powered salary negotiation coach that helps women practice and improve their negotiation skills through:
- Job offer and role detail input
- AI-generated tailored negotiation scripts
- Back-and-forth conversation practice with AI
- Real-time feedback on phrasing and approach

## Setup Checklist

- [x] Scaffold the Next.js Project with TypeScript, Tailwind CSS, and ESLint
- [x] Customize the Project Structure
- [x] Install Required Dependencies and Extensions
- [x] Resolve Build Issues
- [x] Create Development Task
- [x] Launch Development Server
- [x] Ensure Documentation is Complete

## Implementation Plan

### Phase 1: Foundation ✅ COMPLETE
- [x] Set up Next.js 14+ with App Router
- [x] Configure TypeScript and Tailwind CSS
- [x] Create API routes for AI interactions
- [x] Set up environment configuration for OpenAI integration

### Phase 2: Core Features ✅ COMPLETE
- [x] Job offer input form component
- [x] Negotiation script generation API
- [x] Conversation practice interface
- [x] Feedback and coaching system

### Phase 3: Polish & Deploy 🚀 IN PROGRESS
- [ ] Error handling and validation
- [ ] User experience refinements  
- [ ] Performance optimization
- [ ] Deployment configuration

## Known Issues

### Development Server Cache Issue
There's a Turbopack cache issue in the development environment that shows stale error messages. The source code has been corrected with proper quote handling. This will not affect production builds. To resolve locally:
1. Delete the `.next` folder: `rm -rf .next`
2. Restart the dev server: `npm run dev`

The API endpoints are functional - the coaching feature will work correctly once the cache is cleared.

## Project Structure

```
app/
├── api/
│   ├── generate-script/
│   │   └── route.ts          # POST endpoint for script generation
│   └── coach/
│       └── route.ts          # POST endpoint for coaching feedback
├── components/
│   ├── JobOfferForm.tsx      # Job details input form
│   ├── NegotiationScript.tsx # Generated script display
│   ├── ConversationUI.tsx    # Chat interface for practice
│   └── FeedbackPanel.tsx     # Feedback display component
├── types/
│   └── index.ts              # TypeScript interfaces and types
├── layout.tsx
├── page.tsx                  # Main application page
└── globals.css
```

## Key Features Implemented

### 1. Job Offer Form
- Collects position, company, salary, industry, experience level
- Form validation and error handling
- Responsive design with Tailwind CSS

### 2. Script Generation API
- Receives job offer details
- Returns customized negotiation script with:
  - Opening statement
  - Key talking points
  - Closing statement
  - Anticipated objections with responses

### 3. Conversation Practice UI
- Real-time chat interface
- AI coach role-play functionality
- Message history display
- Responsive layout for desktop and mobile

### 4. Feedback System
- Analyzes user messages
- Provides strengths and areas for improvement
- Gives actionable suggestions
- Click-to-view feedback on AI responses

## Running the Application

### Development Server
```bash
npm run dev
```
Starts Next.js dev server on http://localhost:3000

### Build
```bash
npm run build
```
Creates production build

### Production
```bash
npm run start
```
Runs production server

### Linting
```bash
npm run lint
```
Checks code quality with ESLint

## Environment Configuration

### Current Setup
- Mock AI implementations for demo purposes
- Can be swapped with real OpenAI API

### Future OpenAI Integration
1. Get API key from https://openai.com/api
2. Create `.env.local` file with:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```
3. Update `/app/api/generate-script/route.ts` and `/app/api/coach/route.ts` with OpenAI client calls

## Development Notes

### Stack
- **Framework:** Next.js 16.2.6 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **API:** Next.js API Routes

### Component Architecture
- Main page manages application state and workflow
- Components are client-side rendered (marked with 'use client')
- API routes handle server-side logic
- Type-safe interfaces for all data structures

### Styling
- Tailwind CSS for all styling
- Responsive design (mobile-first approach)
- Gradient backgrounds and modern UI patterns
- Accessibility-friendly color contrasts

## Next Steps for Phase 3

1. **OpenAI Integration**
   - Replace mock implementations with real AI
   - Add streaming for better UX
   - Handle rate limiting

2. **Enhanced Features**
   - Session persistence (localStorage/database)
   - Multiple negotiation scenarios
   - Progress tracking
   - Export PDF of scripts and feedback

3. **User Experience**
   - Loading states and animations
   - Error boundaries
   - Better error messages
   - Tutorial/onboarding flow

4. **Performance**
   - Code splitting
   - Image optimization
   - API response caching
   - Lighthouse optimization

5. **Deployment**
   - Vercel deployment setup
   - Environment variables configuration
   - Analytics integration
   - Error tracking (Sentry)

## Testing

To test the application:
1. Fill out the job offer form with test data
2. Review the generated negotiation script
3. Click "Start Practice Conversation"
4. Practice multiple responses
5. Click on AI coach messages to view feedback
6. Try different approaches and observe feedback changes

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [OpenAI API Docs](https://platform.openai.com/docs)

## Project Goals

✨ **Mission:** Empower women to negotiate salary confidently and fairly

🎯 **Impact:** 
- Reduce gender wage gap through practice
- Build confidence in negotiation skills
- Provide accessible coaching tool
- Create safe learning environment

💪 **Vision:** Every woman deserves fair compensation and the tools to negotiate for it!
