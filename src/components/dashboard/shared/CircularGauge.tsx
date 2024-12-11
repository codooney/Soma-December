import React from 'react';

interface CircularGaugeProps {
  value: number;
  maxValue: number;
  size: number;
  strokeWidth: number;
  valueLabel?: string;
}

export default function CircularGauge({ 
  value, 
  maxValue, 
  size, 
  strokeWidth,
  valueLabel 
}: CircularGaugeProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = (value / maxValue) * 100;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        className="transform -rotate-90"
        width={size}
        height={size}
      >
        <circle
          className="text-gray-200"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="text-blue-600 transition-all duration-300"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        {valueLabel && <span className="text-sm text-gray-600">{valueLabel}</span>}
      </div>
    </div>
  );
}