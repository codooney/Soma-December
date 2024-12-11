import React from 'react';
import { Heart } from 'lucide-react';
import LineChart from '../../charts/LineChart';

interface PulseOxMetricProps {
  spO2: number;
  respiratoryRate: number;
  history: {
    timestamps: Date[];
    values: number[];
  };
}

export default function PulseOxMetric({ spO2, respiratoryRate, history }: PulseOxMetricProps) {
  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="flex items-center gap-2 mb-3">
        <Heart className="w-5 h-5 text-red-500" />
        <h3 className="font-medium text-gray-900">Pulse Ox & Breathing</h3>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-2xl font-bold text-gray-900">{spO2}%</p>
          <p className="text-sm text-gray-600">Blood Oxygen</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{respiratoryRate}</p>
          <p className="text-sm text-gray-600">Breaths/min</p>
        </div>
      </div>

      <div className="h-32">
        <LineChart
          data={history.values}
          labels={history.timestamps}
          label="SpO2"
          color="#ef4444"
          fillColor="rgba(239, 68, 68, 0.1)"
        />
      </div>
    </div>
  );
}