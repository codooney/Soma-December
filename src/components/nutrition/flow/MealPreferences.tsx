import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';

interface MealPreferencesProps {
  onNext: (data: any) => void;
}

export default function MealPreferences({ onNext }: MealPreferencesProps) {
  const [meals, setMeals] = useState({
    breakfastTime: '',
    lunchTime: '',
    dinnerTime: '',
    snacks: false,
    mealPrepPreference: ''
  });

  const handleSubmit = () => {
    onNext({ meals });
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="w-6 h-6 text-green-600" />
          <h2 className="text-xl font-bold text-gray-900">Meal Preferences</h2>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Breakfast Time
            </label>
            <select
              value={meals.breakfastTime}
              onChange={(e) => setMeals(prev => ({ ...prev, breakfastTime: e.target.value }))}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="">Select time</option>
              <option value="6-7">6:00 - 7:00 AM</option>
              <option value="7-8">7:00 - 8:00 AM</option>
              <option value="8-9">8:00 - 9:00 AM</option>
              <option value="9-10">9:00 - 10:00 AM</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lunch Time
            </label>
            <select
              value={meals.lunchTime}
              onChange={(e) => setMeals(prev => ({ ...prev, lunchTime: e.target.value }))}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="">Select time</option>
              <option value="11-12">11:00 AM - 12:00 PM</option>
              <option value="12-1">12:00 - 1:00 PM</option>
              <option value="1-2">1:00 - 2:00 PM</option>
              <option value="2-3">2:00 - 3:00 PM</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dinner Time
            </label>
            <select
              value={meals.dinnerTime}
              onChange={(e) => setMeals(prev => ({ ...prev, dinnerTime: e.target.value }))}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="">Select time</option>
              <option value="5-6">5:00 - 6:00 PM</option>
              <option value="6-7">6:00 - 7:00 PM</option>
              <option value="7-8">7:00 - 8:00 PM</option>
              <option value="8-9">8:00 - 9:00 PM</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Snacks
            </label>
            <div className="space-x-4">
              <button
                onClick={() => setMeals(prev => ({ ...prev, snacks: true }))}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  meals.snacks
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => setMeals(prev => ({ ...prev, snacks: false }))}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  !meals.snacks
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                No
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meal Prep Preference
            </label>
            <select
              value={meals.mealPrepPreference}
              onChange={(e) => setMeals(prev => ({ ...prev, mealPrepPreference: e.target.value }))}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="">Select preference</option>
              <option value="daily">Daily cooking</option>
              <option value="batch">Batch cooking (2-3 times per week)</option>
              <option value="weekly">Weekly meal prep</option>
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
            Create Plan
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}