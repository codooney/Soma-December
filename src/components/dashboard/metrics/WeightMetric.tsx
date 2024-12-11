import React from 'react';
import { Scale } from 'lucide-react';
import LineChart from '../../charts/LineChart';

interface WeightMetricProps {
  current: {
    weight: number;
    bmi: number;
    bodyFat: number;
  };
  history: {
    timestamps: Date[];
    weights: number[];
  };
}

export default function WeightMetric({ current, history }: WeightMetricProps) {
  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="flex items-center gap-2 mb-3">
        <Scale className="w-5 h-5 text-blue-500" />
        <h3 className="font-medium text-gray-900">Body Composition</h3>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div>
          <p className="text-xl font-bold text-gray-900">{current.weight}</p>
          <p className="text-sm text-gray-600">kg</p>
        </div>
        <div>
          <p className="text-xl font-bold text-gray-900">{current.bmi}</p>
          <p className="text-sm text-gray-600">BMI</p>
        </div>
        <div>
          <p className="text-xl font-bold text-gray-900">{current.bodyFat}%</p>
          <p className="text-sm text-gray-600">Body Fat</p>
        </div>
      </div>

      <div className="h-32">
        <LineChart
          data={history.weights}
          labels={history.timestamps}
          label="Weight"
          color="#3b82f6"
          fillColor="rgba(59, 130, 246, 0.1)"
        />
      </div>
    </div>
  );
}