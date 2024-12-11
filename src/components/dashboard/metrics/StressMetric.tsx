import React from 'react';
import { Activity } from 'lucide-react';

interface StressMetricProps {
  score: number;
  insights: string[];
  breathingExercise: {
    duration: number;
    technique: string;
  };
}

export default function StressMetric({ score, insights, breathingExercise }: StressMetricProps) {
  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="flex items-center gap-2 mb-3">
        <Activity className="w-5 h-5 text-purple-500" />
        <h3 className="font-medium text-gray-900">Stress Management</h3>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <p className="text-2xl font-bold text-gray-900">{score}</p>
          <p className="text-sm text-gray-600">Stress Score</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className={`h-2 rounded-full ${
              score < 30 ? 'bg-green-500' :
              score < 60 ? 'bg-yellow-500' :
              'bg-red-500'
            }`}
            style={{ width: `${score}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {insights.map((insight, index) => (
          <p key={index} className="text-sm text-gray-600">{insight}</p>
        ))}
      </div>

      <button className="w-full mt-4 bg-purple-50 text-purple-700 rounded-lg p-3 text-sm font-medium hover:bg-purple-100 transition-colors">
        Start {breathingExercise.duration}min {breathingExercise.technique}
      </button>
    </div>
  );
}