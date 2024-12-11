import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';

interface ScheduleProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

export default function Schedule({ onNext, onBack }: ScheduleProps) {
  const [schedule, setSchedule] = useState({
    programDuration: '',
    workoutDays: [] as string[],
    preferredTimes: {} as Record<string, string>
  });

  const handleDayToggle = (day: string) => {
    setSchedule(prev => ({
      ...prev,
      workoutDays: prev.workoutDays.includes(day)
        ? prev.workoutDays.filter(d => d !== day)
        : [...prev.workoutDays, day]
    }));
  };

  const handleTimeChange = (day: string, time: string) => {
    setSchedule(prev => ({
      ...prev,
      preferredTimes: {
        ...prev.preferredTimes,
        [day]: time
      }
    }));
  };

  const handleSubmit = () => {
    onNext({ schedule });
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-bold text-gray-900">Schedule Your Program</h2>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Program Duration
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['4 weeks', '8 weeks', '12 weeks'].map(duration => (
                <button
                  key={duration}
                  onClick={() => setSchedule(prev => ({ ...prev, programDuration: duration }))}
                  className={`p-3 rounded-lg text-sm font-medium ${
                    schedule.programDuration === duration
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {duration}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Workout Days
            </label>
            <div className="grid grid-cols-7 gap-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <button
                  key={day}
                  onClick={() => handleDayToggle(day)}
                  className={`p-3 rounded-lg text-sm font-medium ${
                    schedule.workoutDays.includes(day)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Times
            </label>
            <div className="space-y-3">
              {schedule.workoutDays.map(day => (
                <div key={day} className="flex items-center gap-3">
                  <span className="w-12 text-sm font-medium text-gray-700">{day}</span>
                  <select
                    value={schedule.preferredTimes[day] || ''}
                    onChange={(e) => handleTimeChange(day, e.target.value)}
                    className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (6-9 AM)</option>
                    <option value="midday">Midday (11-2 PM)</option>
                    <option value="afternoon">Afternoon (2-5 PM)</option>
                    <option value="evening">Evening (5-8 PM)</option>
                  </select>
                </div>
              ))}
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