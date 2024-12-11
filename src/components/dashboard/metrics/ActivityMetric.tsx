import React from 'react';
import { Footprints, TrendingUp } from 'lucide-react';
import ProgressBar from '../shared/ProgressBar';
import LineChart from '../../charts/LineChart';

interface ActivityMetricProps {
  steps: number;
  goal: number;
  distance: number;
  floors: number;
  weeklyData: number[];
  weekDates: Date[];
}

export default function ActivityMetric({ steps, goal, distance, floors, weeklyData, weekDates }: ActivityMetricProps) {
  const progress = (steps / goal) * 100;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Footprints className="w-5 h-5 text-blue-500" />
            <h3 className="font-bold text-gray-900">Activity</h3>
          </div>
          <p className="text-sm text-gray-600">Today's Progress</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-gray-900">{steps.toLocaleString()}</p>
          <p className="text-sm text-gray-600">steps</p>
        </div>
      </div>

      <div className="mb-4">
        <ProgressBar progress={progress} />
        <div className="flex justify-between mt-2 text-sm">
          <span className="text-gray-600">{Math.round(progress)}% of goal</span>
          <span className="text-gray-600">{goal.toLocaleString()} steps</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-blue-50 rounded-lg p-3">
          <p className="text-sm text-gray-600 mb-1">Distance</p>
          <p className="text-lg font-bold text-gray-900">{distance.toFixed(1)} km</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-3">
          <p className="text-sm text-gray-600 mb-1">Floors</p>
          <p className="text-lg font-bold text-gray-900">{floors}</p>
        </div>
      </div>

      <div className="h-24">
        <LineChart
          data={weeklyData}
          labels={weekDates}
          label="Steps"
          color="#3b82f6"
          fillColor="rgba(59, 130, 246, 0.1)"
        />
      </div>
    </div>
  );
}