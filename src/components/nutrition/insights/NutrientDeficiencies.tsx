import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function NutrientDeficiencies() {
  const nutrients = [
    {
      name: 'Vitamin D',
      status: 'Low',
      level: '25 ng/mL',
      recommendation: 'Increase sun exposure and consider supplementation',
      foods: ['Fatty fish', 'Egg yolks', 'Fortified dairy']
    },
    {
      name: 'Iron',
      status: 'Normal',
      level: '95 μg/dL',
      recommendation: 'Maintain current intake',
      foods: ['Red meat', 'Spinach', 'Legumes']
    },
    {
      name: 'Vitamin B12',
      status: 'Optimal',
      level: '750 pg/mL',
      recommendation: 'Continue current diet',
      foods: ['Fish', 'Meat', 'Dairy products']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Low':
        return 'bg-red-100 text-red-800';
      case 'Normal':
        return 'bg-yellow-100 text-yellow-800';
      case 'Optimal':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <AlertCircle className="w-5 h-5 text-green-600" />
        <h3 className="font-semibold text-gray-900">Nutrient Status</h3>
      </div>

      <div className="space-y-4">
        {nutrients.map((nutrient) => (
          <div key={nutrient.name} className="bg-gray-50 rounded-xl p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-medium text-gray-900">{nutrient.name}</h4>
                <p className="text-sm text-gray-600">{nutrient.level}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusColor(nutrient.status)}`}>
                {nutrient.status}
              </span>
            </div>
            
            <p className="text-sm text-gray-700 mb-3">{nutrient.recommendation}</p>
            
            <div className="flex flex-wrap gap-2">
              {nutrient.foods.map((food) => (
                <span key={food} className="bg-white px-2 py-1 rounded text-sm text-gray-600">
                  {food}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}