'use client';

import { NegotiationScript } from '@/app/types';

interface NegotiationScriptProps {
  script: NegotiationScript;
}

export default function NegotiationScriptDisplay({ script }: NegotiationScriptProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Your Negotiation Script</h2>

      <div className="border-l-4 border-green-500 pl-4 py-2">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Opening</h3>
        <p className="text-gray-700">{script.opening}</p>
      </div>

      <div className="border-l-4 border-blue-500 pl-4 py-2">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Points</h3>
        <ul className="space-y-2">
          {script.keyPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mr-3 flex-shrink-0">
                {index + 1}
              </span>
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-l-4 border-purple-500 pl-4 py-2">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Closing Statement</h3>
        <p className="text-gray-700">{script.closingStatement}</p>
      </div>

      <div className="border-l-4 border-orange-500 pl-4 py-2">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Anticipated Objections & Responses</h3>
        <div className="space-y-4">
          {script.anticipatedObjections.map((item, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">
                <span className="text-orange-600">Objection:</span> {item.objection}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-green-600">Your Response:</span> {item.response}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <span className="font-semibold">💡 Tip:</span> Practice this script several times before your actual negotiation. Use the conversation practice tool below to role-play with our AI coach!
        </p>
      </div>
    </div>
  );
}
