'use client';

import { Message } from '@/app/types';

interface FeedbackPanelProps {
  message: Message;
  onClose: () => void;
}

export default function FeedbackPanel({ message, onClose }: FeedbackPanelProps) {
  if (!message.feedback) return null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-4">
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold">Feedback</h3>
        <button onClick={onClose} className="text-green-100 hover:text-white text-xl">
          ✕
        </button>
      </div>

      <div className="p-4 space-y-4">
        {message.feedback.strengths.length > 0 && (
          <div>
            <h4 className="font-semibold text-green-700 mb-2">✓ Strengths</h4>
            <ul className="space-y-1">
              {message.feedback.strengths.map((strength, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {message.feedback.areasForImprovement.length > 0 && (
          <div>
            <h4 className="font-semibold text-orange-700 mb-2">⚡ Areas for Improvement</h4>
            <ul className="space-y-1">
              {message.feedback.areasForImprovement.map((area, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {message.feedback.suggestions.length > 0 && (
          <div>
            <h4 className="font-semibold text-blue-700 mb-2">💡 Suggestions</h4>
            <ul className="space-y-1">
              {message.feedback.suggestions.map((suggestion, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start">
                  <span className="text-blue-600 mr-2">→</span>
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
