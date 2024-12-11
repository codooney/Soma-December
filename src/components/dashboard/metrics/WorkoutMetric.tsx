import React from 'react';
import { Dumbbell } from 'lucide-react';

interface WorkoutMetricProps {
  lastWorkout: {
    type: string;
    duration: number;
    pace: string;
    cadence: number;
    power: number;
    recoveryTime: number;
  };
}

export default function WorkoutMetric({ lastWorkout }: WorkoutMetricProps) {
  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="flex items-center gap-2 mb-3">
        <Dumbbell className="w-5 h-5 text-orange-500" />
        <h3 className="font-medium text-gray-900">Last Workout</h3>
      </div>

      <div className="mb-4">
        <p className="text-lg font-semibold text-gray-900">{lastWorkout.type}</p>
        <p className="text-sm text-gray-600">
          {Math.floor(lastWorkout.duration / 60)}h {lastWorkout.duration % 60}m
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-sm text-gray-600">Pace</p>
          <p className="font-medium text-gray-900">{lastWorkout.pace}/km</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-sm text-gray-600">Cadence</p>
          <p className="font-medium text-gray-900">{lastWorkout.cadence} spm</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-sm text-gray-600">Power</p>
          <p className="font-medium text-gray-900">{lastWorkout.power}W</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-sm text-gray-600">Recovery</p>
          <p className="font-medium text-gray-900">{lastWorkout.recoveryTime}h</p>
        </div>
      </div>
    </div>
  );
}