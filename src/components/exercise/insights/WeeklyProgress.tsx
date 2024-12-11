import React from 'react';
import { BarChart } from '../../charts';

export default function WeeklyProgress() {
  const weeklyData = [45, 60, 30, 45, 60, 0, 45];
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Activity</h3>
      
      <div className="h-64">
        <BarChart
          data={weeklyData}
          labels={weekDays}
          label="Minutes"
          color="#3b82f6"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Total Time</p>
          <p className="text-xl font-semibold text-gray-900">285 min</p>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Workouts</p>
          <p className="text-xl font-semibold text-gray-900">6 sessions</p>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Avg Duration</p>
          <p className="text-xl font-semibold text-gray-900">47.5 min</p>
        </div>

        <div className="bg-orange-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Calories</p>
          <p className="text-xl font-semibold text-gray-900">2,450 kcal</p>
        </div>
      </div>
    </div>
  );
}