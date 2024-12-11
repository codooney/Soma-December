import React from 'react';
import { Heart, Moon, Footprints, TrendingUp } from 'lucide-react';
import LineChart from '../charts/LineChart';

interface MetricsGridProps {
  data: {
    heartRate: number[];
    steps: number[];
    sleep: number[];
    calories: number[];
  };
  dates: Date[];
}

export default function MetricsGrid({ data, dates }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <Heart className="w-5 h-5 text-red-500" />
          <span className="text-sm text-gray-600">Heart Rate</span>
        </div>
        <p className="text-2xl font-bold text-gray-900">72 <span className="text-sm font-normal text-gray-600">bpm</span></p>
        <div className="mt-2 h-20">
          <LineChart
            data={data.heartRate}
            labels={dates}
            label="BPM"
            color="#ef4444"
            fillColor="rgba(239, 68, 68, 0.1)"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <Footprints className="w-5 h-5 text-blue-500" />
          <span className="text-sm text-gray-600">Steps</span>
        </div>
        <p className="text-2xl font-bold text-gray-900">8,439</p>
        <div className="mt-2 h-20">
          <LineChart
            data={data.steps}
            labels={dates}
            label="Steps"
            color="#3b82f6"
            fillColor="rgba(59, 130, 246, 0.1)"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <Moon className="w-5 h-5 text-purple-500" />
          <span className="text-sm text-gray-600">Sleep</span>
        </div>
        <p className="text-2xl font-bold text-gray-900">7h 20m</p>
        <div className="mt-2 h-20">
          <LineChart
            data={data.sleep}
            labels={dates}
            label="Hours"
            color="#8b5cf6"
            fillColor="rgba(139, 92, 246, 0.1)"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-green-500" />
          <span className="text-sm text-gray-600">Calories</span>
        </div>
        <p className="text-2xl font-bold text-gray-900">2,184</p>
        <div className="mt-2 h-20">
          <LineChart
            data={data.calories}
            labels={dates}
            label="Calories"
            color="#22c55e"
            fillColor="rgba(34, 197, 94, 0.1)"
          />
        </div>
      </div>
    </div>
  );
}