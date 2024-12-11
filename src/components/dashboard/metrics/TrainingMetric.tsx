import React from 'react';
import { Activity } from 'lucide-react';
import LineChart from '../../charts/LineChart';

interface TrainingMetricProps {
  vo2max: number;
  trainingLoad: number;
  recovery: number;
  predictions: {
    fiveK: string;
    tenK: string;
  };
}

export default function TrainingMetric({ vo2max, trainingLoad, recovery, predictions }: TrainingMetricProps) {
  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="flex items-center gap-2 mb-3">
        <Activity className="w-5 h-5 text-green-500" />
        <h3 className="font-medium text-gray-900">Training Status</h3>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-2xl font-bold text-gray-900">{vo2max}</p>
          <p className="text-sm text-gray-600">VO2 Max</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{recovery}%</p>
          <p className="text-sm text-gray-600">Recovery</p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <p className="text-sm font-medium text-gray-900 mb-2">Training Load</p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="h-2 rounded-full bg-green-500"
            style={{ width: `${trainingLoad}%` }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-900">Race Predictions</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-50 rounded-lg p-2 text-center">
            <p className="text-xs text-gray-600">5K</p>
            <p className="font-medium text-gray-900">{predictions.fiveK}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-2 text-center">
            <p className="text-xs text-gray-600">10K</p>
            <p className="font-medium text-gray-900">{predictions.tenK}</p>
          </div>
        </div>
      </div>
    </div>
  );
}