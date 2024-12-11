import React from 'react';
import { Apple, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NutritionHeader() {
  const navigate = useNavigate();

  return (
    <div className="bg-white px-4 py-6 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Apple className="w-8 h-8 text-green-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Nutrition Insights</h1>
              <p className="text-gray-600">Personalized recommendations based on your health data</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate('/nutrition/plan')}
          className="w-full bg-green-600 text-white rounded-xl py-3 px-4 flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
        >
          Create Personalized Nutrition Plan
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}