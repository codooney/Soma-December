import React from 'react';
import { Moon } from 'lucide-react';
import { BarChart } from '../../charts';

interface SleepMetricProps {
  duration: number;
  score: number;
  weeklyAverage: number;
  stages: {
    deep: number;
    light: number;
    rem: number;
    awake: number;
  };
}

export default function SleepMetric({ duration, score, weeklyAverage, stages }: SleepMetricProps) {
  const stageData = [
    stages.deep,
    stages.light,
    stages.rem,
    stages.awake
  ];

  const stageLabels = ['Deep', 'Light', 'REM', 'Awake'];
  const stageColors = ['#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe'];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Moon className="w-5 h-5 text-purple-500" />
        <h3 className="font-bold text-gray-900">Sleep</h3>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <p className="text-2xl font-bold text-gray-900">{duration}h</p>
          <p className="text-sm text-gray-600">Duration</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{score}</p>
          <p className="text-sm text-gray-600">Sleep Score</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{weeklyAverage}h</p>
          <p className="text-sm text-gray-600">Weekly Avg</p>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-900">Sleep Stages</p>
        <div className="h-24">
          <BarChart
            data={stageData}
            labels={stageLabels}
            label="Hours"
            color={stageColors}
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {stageLabels.map((label, index) => (
            <div key={label} className="text-center">
              <p className="text-xs font-medium" style={{ color: stageColors[index] }}>
                {label}
              </p>
              <p className="text-xs text-gray-600">
                {stageData[index]}h
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}