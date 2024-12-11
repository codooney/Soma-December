import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Target, TrendingUp } from 'lucide-react';

interface DataGoalsProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

export default function DataGoals({ onNext, onBack }: DataGoalsProps) {
  const [goals, setGoals] = useState({
    primary: '',
    secondary: '',
    shortTerm: '',
    longTerm: ''
  });

  const handleSubmit = () => {
    onNext({ goals });
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-bold text-gray-900">Set Your Goals</h2>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Primary Goal
            </label>
            <select
              value={goals.primary}
              onChange={(e) => setGoals(prev => ({ ...prev, primary: e.target.value }))}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select a goal</option>
              <option value="weight-loss">Weight Loss</option>
              <option value="muscle-gain">Muscle Gain</option>
              <option value="endurance">Improve Endurance</option>
              <option value="strength">Increase Strength</option>
              <option value="flexibility">Enhance Flexibility</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Secondary Goal
            </label>
            <select
              value={goals.secondary}
              onChange={(e) => setGoals(prev => ({ ...prev, secondary: e.target.value }))}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select a goal</option>
              <option value="stress-reduction">Stress Reduction</option>
              <option value="better-sleep">Better Sleep</option>
              <option value="posture">Improve Posture</option>
              <option value="balance">Better Balance</option>
              <option value="energy">Increase Energy</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Short-term Objective (1-3 months)
            </label>
            <input
              type="text"
              value={goals.shortTerm}
              onChange={(e) => setGoals(prev => ({ ...prev, shortTerm: e.target.value }))}
              placeholder="e.g., Run 5K without stopping"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Long-term Vision (6-12 months)
            </label>
            <input
              type="text"
              value={goals.longTerm}
              onChange={(e) => setGoals(prev => ({ ...prev, longTerm: e.target.value }))}
              placeholder="e.g., Complete a half marathon"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}