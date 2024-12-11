import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Target } from 'lucide-react';

interface HealthGoalsProps {
  onNext: (data: any) => void;
}

export default function HealthGoals({ onNext }: HealthGoalsProps) {
  const [goals, setGoals] = useState({
    primary: '',
    caloryTarget: '',
    macroPreference: '',
    mealFrequency: ''
  });

  const handleSubmit = () => {
    onNext({ goals });
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-6 h-6 text-green-600" />
          <h2 className="text-xl font-bold text-gray-900">Health Goals</h2>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Primary Goal
            </label>
            <select
              value={goals.primary}
              onChange={(e) => setGoals(prev => ({ ...prev, primary: e.target.value }))}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="">Select a goal</option>
              <option value="weight-loss">Weight Loss</option>
              <option value="muscle-gain">Muscle Gain</option>
              <option value="maintenance">Maintain Weight</option>
              <option value="health-optimization">Optimize Health</option>
              <option value="energy-boost">Boost Energy</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Daily Calorie Target
            </label>
            <select
              value={goals.caloryTarget}
              onChange={(e) => setGoals(prev => ({ ...prev, caloryTarget: e.target.value }))}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="">Select target</option>
              <option value="1500">1500 calories</option>
              <option value="2000">2000 calories</option>
              <option value="2500">2500 calories</option>
              <option value="3000">3000 calories</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Macro Preference
            </label>
            <select
              value={goals.macroPreference}
              onChange={(e) => setGoals(prev => ({ ...prev, macroPreference: e.target.value }))}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="">Select preference</option>
              <option value="balanced">Balanced (40/30/30)</option>
              <option value="low-carb">Low Carb (20/40/40)</option>
              <option value="high-protein">High Protein (30/40/30)</option>
              <option value="keto">Ketogenic (5/30/65)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Meal Frequency
            </label>
            <select
              value={goals.mealFrequency}
              onChange={(e) => setGoals(prev => ({ ...prev, mealFrequency: e.target.value }))}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="">Select frequency</option>
              <option value="3">3 meals per day</option>
              <option value="4">4 meals per day</option>
              <option value="5">5 meals per day</option>
              <option value="6">6 meals per day</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-green-600"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}