import React from 'react';

interface Biomarker {
  name: string;
  value: string;
  range: string;
  status: 'low' | 'normal' | 'optimal' | 'elevated';
}

interface HealthCategoryProps {
  title: string;
  icon: React.ReactNode;
  score: number;
  status: 'optimal' | 'good' | 'attention';
  summary: string;
  biomarkers: Biomarker[];
}

export default function HealthCategory({
  title,
  icon,
  score,
  status,
  summary,
  biomarkers
}: HealthCategoryProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'optimal':
        return 'bg-green-100 text-green-800';
      case 'good':
        return 'bg-blue-100 text-blue-800';
      case 'attention':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getBiomarkerColor = (status: string) => {
    switch (status) {
      case 'optimal':
        return 'bg-green-500';
      case 'normal':
        return 'bg-blue-500';
      case 'low':
        return 'bg-yellow-500';
      case 'elevated':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
          {score}
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4">{summary}</p>

      <div className="space-y-3">
        {biomarkers.map((biomarker, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-700">{biomarker.name}</span>
              <span className="text-gray-500">{biomarker.value} ({biomarker.range})</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${getBiomarkerColor(biomarker.status)} transition-all duration-500`}
                style={{
                  width: `${(parseInt(biomarker.value) / parseInt(biomarker.range.split('-')[1])) * 100}%`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}