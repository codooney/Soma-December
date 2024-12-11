import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Apple } from 'lucide-react';

interface DietaryPreferencesProps {
  onNext: (data: any) => void;
}

export default function DietaryPreferences({ onNext }: DietaryPreferencesProps) {
  const [preferences, setPreferences] = useState({
    dietType: '',
    restrictions: [] as string[],
    allergies: [] as string[],
    intolerances: [] as string[]
  });

  const dietTypes = [
    'Balanced', 'Mediterranean', 'Vegetarian', 'Vegan', 
    'Paleo', 'Keto', 'Low-Carb', 'Plant-Based'
  ];

  const commonRestrictions = [
    'Gluten-Free', 'Dairy-Free', 'Nut-Free', 'Soy-Free',
    'Low-Sodium', 'Low-Sugar', 'Kosher', 'Halal'
  ];

  const handleRestrictionToggle = (item: string) => {
    setPreferences(prev => ({
      ...prev,
      restrictions: prev.restrictions.includes(item)
        ? prev.restrictions.filter(i => i !== item)
        : [...prev.restrictions, item]
    }));
  };

  const handleSubmit = () => {
    onNext({ preferences });
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <Apple className="w-6 h-6 text-green-600" />
          <h2 className="text-xl font-bold text-gray-900">Dietary Preferences</h2>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Diet Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              {dietTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setPreferences(prev => ({ ...prev, dietType: type }))}
                  className={`p-3 rounded-lg text-sm font-medium ${
                    preferences.dietType === type
                      ? 'bg-green-600 text-white'
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
              Dietary Restrictions
            </label>
            <div className="grid grid-cols-2 gap-3">
              {commonRestrictions.map(restriction => (
                <button
                  key={restriction}
                  onClick={() => handleRestrictionToggle(restriction)}
                  className={`p-3 rounded-lg text-sm font-medium ${
                    preferences.restrictions.includes(restriction)
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {restriction}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Food Allergies or Intolerances
            </label>
            <input
              type="text"
              placeholder="Enter any allergies or intolerances"
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              onChange={(e) => setPreferences(prev => ({ ...prev, allergies: e.target.value.split(',') }))}
            />
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