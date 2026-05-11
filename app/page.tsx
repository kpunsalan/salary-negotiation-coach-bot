'use client';

import { useState } from 'react';
import JobOfferForm from './components/JobOfferForm';
import NegotiationScriptDisplay from './components/NegotiationScript';
import ConversationUI from './components/ConversationUI';
import { JobOffer, NegotiationScript } from './types';

type PageStep = 'form' | 'script' | 'practice';

export default function Home() {
  const [step, setStep] = useState<PageStep>('form');
  const [script, setScript] = useState<NegotiationScript | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleJobOfferSubmit = async (offer: JobOffer) => {
    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch('/api/generate-script', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(offer),
      });

      if (!response.ok) {
        throw new Error('Failed to generate script');
      }

      const generatedScript = await response.json();
      setScript(generatedScript);
      setStep('script');
    } catch (err) {
      setError('Failed to generate negotiation script. Please try again.');
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleStartPractice = () => {
    setStep('practice');
  };

  const handleReset = () => {
    setStep('form');
    setScript(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            💪 Salary Negotiation Coach
          </h1>
          <p className="text-xl text-gray-600">
            Practice your negotiation skills with AI coaching and get personalized feedback
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                step === 'form' || step === 'script' || step === 'practice'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-300 text-gray-700'
              }`}
            >
              1
            </div>
            <div className={`h-1 w-16 ${step === 'script' || step === 'practice' ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                step === 'script' || step === 'practice' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'
              }`}
            >
              2
            </div>
            <div className={`h-1 w-16 ${step === 'practice' ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                step === 'practice' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'
              }`}
            >
              3
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-800">
            {error}
          </div>
        )}

        {/* Main Content */}
        <div className="space-y-8">
          {step === 'form' && <JobOfferForm onSubmit={handleJobOfferSubmit} isLoading={isGenerating} />}

          {step === 'script' && script && (
            <>
              <NegotiationScriptDisplay script={script} />
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition duration-200"
                >
                  ← Back to Form
                </button>
                <button
                  onClick={handleStartPractice}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-200"
                >
                  Start Practice Conversation →
                </button>
              </div>
            </>
          )}

          {step === 'practice' && script && <ConversationUI script={script} />}

          {step === 'practice' && (
            <div className="flex justify-center">
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition duration-200"
              >
                ← Start Over
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-300 text-center text-gray-600">
          <p>
            Empowering women to negotiate confidently. Practice makes perfect! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
