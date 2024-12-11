import React from 'react';
import { Droplet } from 'lucide-react';
import CircularGauge from '../shared/CircularGauge';

interface HydrationMetricProps {
  current: number;
  goal: number;
  recommendation: string;
}

export default function HydrationMetric({ current, goal, recommendation }: HydrationMetricProps) {
  const percentage = (current / goal) * 100;

  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="flex items-center gap-2 mb-3">
        <Droplet className="w-5 h-5 text-blue-500" />
        <h3 className="font-medium text-gray-900">Hydration</h3>
      </div>

      <div className="flex justify-center mb-4">
        <CircularGauge
          value={current}
          maxValue={goal}
          size={120}
          strokeWidth={10}
          valueLabel="L"
        />
      </div>

      <div className="bg-blue-50 rounded-lg p-3">
        <p className="text-sm text-blue-900">{recommendation}</p>
      </div>
    </div>
  );
}