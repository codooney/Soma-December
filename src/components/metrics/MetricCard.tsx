import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  unit: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export default function MetricCard({ title, value, unit, icon: Icon, trend }: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900">{value}</span>
            <span className="text-sm text-gray-600">{unit}</span>
          </div>
        </div>
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      
      {trend && (
        <div className={`flex items-center gap-1 text-sm ${
          trend.isPositive ? 'text-green-600' : 'text-red-600'
        }`}>
          <span>{trend.isPositive ? '↑' : '↓'}</span>
          <span>{Math.abs(trend.value)}% vs last week</span>
        </div>
      )}
    </div>
  );
}