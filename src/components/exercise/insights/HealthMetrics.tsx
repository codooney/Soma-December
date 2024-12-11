import React from 'react';
import { Heart, Activity, TrendingUp } from 'lucide-react';
import CircularGauge from '../../dashboard/shared/CircularGauge';

export default function HealthMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-red-500" />
          <h3 className="font-semibold text-gray-900">Cardiovascular Health</h3>
        </div>
        <div className="flex justify-center mb-4">
          <CircularGauge
            value={68}
            maxValue={100}
            size={120}
            strokeWidth={10}
            valueLabel="bpm"
          />
        </div>
        <p className="text-sm text-center text-gray-600">Resting Heart Rate</p>
        <p className="text-sm text-center text-green-600">↓ 3 bpm from last week</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-5 h-5 text-blue-500" />
          <h3 className="font-semibold text-gray-900">Fitness Level</h3>
        </div>
        <div className="flex justify-center mb-4">
          <CircularGauge
            value={48}
            maxValue={60}
            size={120}
            strokeWidth={10}
            valueLabel="VO2 max"
          />
        </div>
        <p className="text-sm text-center text-gray-600">Above Average</p>
        <p className="text-sm text-center text-green-600">↑ 2 points this month</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-green-500" />
          <h3 className="font-semibold text-gray-900">Recovery Status</h3>
        </div>
        <div className="flex justify-center mb-4">
          <CircularGauge
            value={85}
            maxValue={100}
            size={120}
            strokeWidth={10}
            valueLabel="%"
          />
        </div>
        <p className="text-sm text-center text-gray-600">Well Recovered</p>
        <p className="text-sm text-center text-green-600">Ready for high intensity</p>
      </div>
    </div>
  );
}