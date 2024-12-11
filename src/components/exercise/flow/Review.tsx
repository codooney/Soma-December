import React from 'react';
import { ArrowLeft, ArrowRight, ClipboardCheck } from 'lucide-react';

interface ReviewProps {
  data: {
    goals: {
      primary: string;
      secondary: string;
      shortTerm: string;
      longTerm: string;
    };
    preferences: {
      workoutType: string;
      cardioStyle: string;
      duration: string;
      frequency: string;
      equipment: string[];
    };
    schedule: {
      programDuration: string;
      workoutDays: string[];
      preferredTimes: Record<string, string>;
    };
  };
  onNext: () => void;
  onBack: () => void;
}

export default function Review({ data, onNext, onBack }: ReviewProps) {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <ClipboardCheck className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-bold text-gray-900">Review Your Program</h2>
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-medium text-gray-900 mb-3">Your Goals</h3>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-600">Primary Goal:</span> {data.goals.primary}</p>
              <p><span className="text-gray-600">Secondary Goal:</span> {data.goals.secondary}</p>
              <p><span className="text-gray-600">Short-term:</span> {data.goals.shortTerm}</p>
              <p><span className="text-gray-600">Long-term:</span> {data.goals.longTerm}</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-medium text-gray-900 mb-3">Exercise Preferences</h3>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-600">Workout Type:</span> {data.preferences.workoutType}</p>
              <p><span className="text-gray-600">Cardio Style:</span> {data.preferences.cardioStyle}</p>
              <p><span className="text-gray-600">Duration:</span> {data.preferences.duration}</p>
              <p><span className="text-gray-600">Equipment:</span> {data.preferences.equipment.join(', ')}</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-medium text-gray-900 mb-3">Schedule</h3>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-600">Duration:</span> {data.schedule.programDuration}</p>
              <p><span className="text-gray-600">Workout Days:</span> {data.schedule.workoutDays.join(', ')}</p>
              <div>
                <p className="text-gray-600 mb-1">Preferred Times:</p>
                {Object.entries(data.schedule.preferredTimes).map(([day, time]) => (
                  <p key={day}>{day}: {time}</p>
                ))}
              </div>
            </div>
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
            onClick={onNext}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Program
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}