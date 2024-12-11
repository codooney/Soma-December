import React from 'react';
import { Heart } from 'lucide-react';
import CircularGauge from '../shared/CircularGauge';

interface HeartRateMetricProps {
  currentRate: number;
  restingRate: number;
  hrvScore: number;
  stressLevel: 'Low' | 'Moderate' | 'High';
}

export default function HeartRateMetric({ currentRate, restingRate, hrvScore, stressLevel }: HeartRateMetricProps) {
  const getStressColor = (level: string) => {
    switch (level) {
      case 'Low': return 'text-green-600';
      case 'Moderate': return 'text-yellow-600';
      case 'High': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Heart className="w-5 h-5 text-red-500" />
        <h3 className="font-bold text-gray-900">Heart Rate & Stress</h3>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <CircularGauge
            value={currentRate}
            maxValue={200}
            size={120}
            strokeWidth={12}
            valueLabel="bpm"
          />
          <p className="text-center text-sm text-gray-600 mt-2">Current HR</p>
        </div>

        <div className="space-y-4">
          <div className="bg-red-50 rounded-lg p-3">
            <p className="text-sm text-gray-600 mb-1">Resting HR</p>
            <p className="text-lg font-bold text-gray-900">{restingRate} bpm</p>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-3">
            <p className="text-sm text-gray-600 mb-1">HRV Status</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold text-gray-900">{hrvScore}</p>
              <span className={`text-sm font-medium ${getStressColor(stressLevel)}`}>
                {stressLevel} Stress
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}