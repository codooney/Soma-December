import React from 'react';
import { Apple, Calendar, Clock } from 'lucide-react';

interface PersonalizedPlanProps {
  data: {
    preferences: {
      dietType: string;
      restrictions: string[];
      allergies: string[];
      intolerances: string[];
    };
    goals: {
      primary: string;
      caloryTarget: string;
      macroPreference: string;
      mealFrequency: string;
    };
    meals: {
      breakfastTime: string;
      lunchTime: string;
      dinnerTime: string;
      snacks: boolean;
      mealPrepPreference: string;
    };
  };
}

export default function PersonalizedPlan({ data }: PersonalizedPlanProps) {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <Apple className="w-6 h-6 text-green-600" />
          <h2 className="text-xl font-bold text-gray-900">Your Nutrition Plan</h2>
        </div>

        <div className="space-y-6">
          {/* Goals Summary */}
          <div className="bg-green-50 rounded-xl p-4">
            <h3 className="font-medium text-gray-900 mb-2">Your Goals</h3>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-600">Primary Goal:</span> {data.goals.primary}</p>
              <p><span className="text-gray-600">Daily Calories:</span> {data.goals.caloryTarget} calories</p>
              <p><span className="text-gray-600">Macro Split:</span> {data.goals.macroPreference}</p>
            </div>
          </div>

          {/* Diet Overview */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-medium text-gray-900 mb-2">Diet Overview</h3>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-600">Diet Type:</span> {data.preferences.dietType}</p>
              <p><span className="text-gray-600">Restrictions:</span> {data.preferences.restrictions.join(', ')}</p>
              {data.preferences.allergies.length > 0 && (
                <p><span className="text-gray-600">Allergies:</span> {data.preferences.allergies.join(', ')}</p>
              )}
            </div>
          </div>

          {/* Meal Schedule */}
          <div className="bg-blue-50 rounded-xl p-4">
            <h3 className="font-medium text-gray-900 mb-2">Daily Schedule</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <p className="text-sm"><span className="text-gray-600">Breakfast:</span> {data.meals.breakfastTime}</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <p className="text-sm"><span className="text-gray-600">Lunch:</span> {data.meals.lunchTime}</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <p className="text-sm"><span className="text-gray-600">Dinner:</span> {data.meals.dinnerTime}</p>
              </div>
              {data.meals.snacks && (
                <p className="text-sm text-gray-600">Including mid-morning and afternoon snacks</p>
              )}
            </div>
          </div>

          {/* Meal Prep */}
          <div className="bg-purple-50 rounded-xl p-4">
            <h3 className="font-medium text-gray-900 mb-2">Meal Preparation</h3>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-purple-600" />
              <p className="text-sm text-gray-600">{data.meals.mealPrepPreference}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-4">
          <button className="w-full bg-green-600 text-white rounded-lg py-3 hover:bg-green-700 transition-colors">
            View Meal Plan
          </button>
          <button className="w-full bg-gray-100 text-gray-700 rounded-lg py-3 hover:bg-gray-200 transition-colors">
            Generate Shopping List
          </button>
        </div>
      </div>
    </div>
  );
}