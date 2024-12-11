import React from 'react';
import { Dumbbell, ArrowRight } from 'lucide-react';

interface ExerciseHeaderProps {
  onCreatePlan: () => void;
}

export default function ExerciseHeader({ onCreatePlan }: ExerciseHeaderProps) {
  return (
    <div className="bg-white px-4 py-6 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Dumbbell className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Exercise Insights</h1>
              <p className="text-gray-600">Personalized recommendations based on your health data</p>
            </div>
          </div>
        </div>

        <button
          onClick={onCreatePlan}
          className="w-full bg-blue-600 text-white rounded-xl py-3 px-4 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
        >
          Create Personalized Exercise Plan
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}