import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Dumbbell, Heart, Clock } from 'lucide-react';

interface PreferencesProps {
  onNext: (data: any) => void;
  onBack: () => void;
}

export default function Preferences({ onNext, onBack }: PreferencesProps) {
  const [preferences, setPreferences] = useState({
    workoutType: '',
    cardioStyle: '',
    duration: '',
    frequency: '',
    equipment: [] as string[]
  });

  const handleEquipmentToggle = (item: string) => {
    setPreferences(prev => ({
      ...prev,
      equipment: prev.equipment.includes(item)
        ? prev.equipment.filter(i => i !== item)
        : [...prev.equipment, item]
    }));
  };

  const handleSubmit = () => {
    onNext({ preferences });
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <Dumbbell className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-bold text-gray-900">Exercise Preferences</h2>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Workout Type
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['Cardio', 'Strength', 'Hybrid'].map(type => (
                <button
                  key={type}
                  onClick={() => setPreferences(prev => ({ ...prev, workoutType: type }))}
                  className={`p-3 rounded-lg text-sm font-medium ${
                    preferences.workoutType === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cardio Style
            </label>
            <div className="grid grid-cols-2 gap-3">
              {['Running', 'Cycling', 'Swimming', 'HIIT'].map(style => (
                <button
                  key={style}
                  onClick={() => setPreferences(prev => ({ ...prev, cardioStyle: style }))}
                  className={`p-3 rounded-lg text-sm font-medium ${
                    preferences.cardioStyle === style
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Workout Duration
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['30 min', '45 min', '60 min'].map(duration => (
                <button
                  key={duration}
                  onClick={() => setPreferences(prev => ({ ...prev, duration }))}
                  className={`p-3 rounded-lg text-sm font-medium ${
                    preferences.duration === duration
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
              Available Equipment
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Dumbbells',
                'Resistance Bands',
                'Yoga Mat',
                'Pull-up Bar',
                'Kettlebell',
                'None'
              ].map(equipment => (
                <button
                  key={equipment}
                  onClick={() => handleEquipmentToggle(equipment)}
                  className={`p-3 rounded-lg text-sm font-medium ${
                    preferences.equipment.includes(equipment)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {equipment}
                </button>
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