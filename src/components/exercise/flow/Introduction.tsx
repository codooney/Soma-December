import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';

interface IntroductionProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Introduction({ onNext, onBack }: IntroductionProps) {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-blue-100 rounded-full">
            <Activity className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 text-center mb-4">
          Your Personalized Exercise Journey
        </h1>
        
        <p className="text-gray-600 text-center mb-8">
          Let's create a custom exercise program based on your health data, goals, and preferences.
          This program will adapt to your progress and help you achieve optimal results.
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">1</div>
            <div>
              <p className="font-medium text-gray-900">Review Your Health Data</p>
              <p className="text-sm text-gray-600">We'll analyze your wearable data and blood test results</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">2</div>
            <div>
              <p className="font-medium text-gray-900">Set Your Goals</p>
              <p className="text-sm text-gray-600">Define what you want to achieve in the short and long term</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">3</div>
            <div>
              <p className="font-medium text-gray-900">Customize Your Program</p>
              <p className="text-sm text-gray-600">Choose your preferred workout types and schedule</p>
            </div>
          </div>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-blue-600 text-white rounded-xl py-3 px-4 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}