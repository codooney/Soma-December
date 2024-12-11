import React, { useState } from 'react';
import { ArrowLeft, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

interface ProgramProps {
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
  onBack: () => void;
}

export default function Program({ data, onBack }: ProgramProps) {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const totalWeeks = parseInt(data.schedule.programDuration);

  const mockWorkouts = {
    Cardio: ['Running', 'HIIT', 'Cycling'],
    Strength: ['Upper Body', 'Lower Body', 'Core'],
    Recovery: ['Yoga', 'Stretching', 'Mobility']
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        {/* Goals Summary */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Your Program</h2>
          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-sm text-gray-600 mb-1">Primary Goal</p>
            <p className="font-medium text-gray-900">{data.goals.primary}</p>
          </div>
        </div>

        {/* Program Timeline */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-3">Program Timeline</h3>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {Array.from({ length: totalWeeks }, (_, i) => (
              <button
                key={i}
                onClick={() => setSelectedWeek(i + 1)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium ${
                  selectedWeek === i + 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                Week {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Weekly Schedule */}
        <div className="space-y-4">
          {data.schedule.workoutDays.map((day, index) => (
            <div key={day} className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-medium text-gray-900">{day}</p>
                  <p className="text-sm text-gray-600">{data.schedule.preferredTimes[day]}</p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              
              <div className="space-y-2">
                {mockWorkouts[data.preferences.workoutType as keyof typeof mockWorkouts]?.[index % 3] && (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">
                      {mockWorkouts[data.preferences.workoutType as keyof typeof mockWorkouts][index % 3]}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <button
            onClick={() => {}}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Week {selectedWeek}
          </button>
        </div>
      </div>
    </div>
  );
}