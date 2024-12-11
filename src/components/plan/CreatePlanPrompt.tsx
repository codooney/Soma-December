import React from 'react';
import { ClipboardList, ArrowRight } from 'lucide-react';

interface CreatePlanPromptProps {
  onResponse: (wantsToCreate: boolean) => void;
}

export default function CreatePlanPrompt({ onResponse }: CreatePlanPromptProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-blue-100 rounded-full">
            <ClipboardList className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Create Your Personalized Health Plan
        </h2>
        <p className="text-gray-600 mb-8">
          Based on your wearable data and blood test results, we can create a customized plan 
          to help you achieve your health goals. Would you like to proceed?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onResponse(true)}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Create My Plan
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onResponse(false)}
            className="text-gray-600 hover:text-gray-800 px-6 py-3"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
}