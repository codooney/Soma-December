import React from 'react';

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="h-2 rounded-full bg-blue-600 transition-all duration-300"
        style={{ width: `${Math.min(progress, 100)}%` }}
      />
    </div>
  );
}