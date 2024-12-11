import React from 'react';
import { Calendar, Clock, Zap, TrendingUp } from 'lucide-react';

export default function WorkoutSummary() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Last Workout Summary</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-600">Type</span>
          </div>
          <p className="font-medium text-gray-900">HIIT Training</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-600">Duration</span>
          </div>
          <p className="font-medium text-gray-900">45 minutes</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-600">Intensity</span>
          </div>
          <p className="font-medium text-gray-900">High</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-600">Calories</span>
          </div>
          <p className="font-medium text-gray-900">485 kcal</p>
        </div>
      </div>
    </div>
  );
}