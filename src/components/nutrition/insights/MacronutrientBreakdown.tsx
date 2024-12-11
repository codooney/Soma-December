import React from 'react';
import { Utensils } from 'lucide-react';
import { CircularGauge } from '../../dashboard/shared';

export default function MacronutrientBreakdown() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Utensils className="w-5 h-5 text-green-600" />
        <h3 className="font-semibold text-gray-900">Macronutrient Balance</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <CircularGauge
            value={40}
            maxValue={100}
            size={120}
            strokeWidth={10}
            valueLabel="%"
          />
          <p className="text-center mt-2">
            <span className="block font-medium text-gray-900">Carbohydrates</span>
            <span className="text-sm text-gray-600">200g / day</span>
          </p>
        </div>

        <div>
          <CircularGauge
            value={30}
            maxValue={100}
            size={120}
            strokeWidth={10}
            valueLabel="%"
          />
          <p className="text-center mt-2">
            <span className="block font-medium text-gray-900">Protein</span>
            <span className="text-sm text-gray-600">150g / day</span>
          </p>
        </div>

        <div>
          <CircularGauge
            value={30}
            maxValue={100}
            size={120}
            strokeWidth={10}
            valueLabel="%"
          />
          <p className="text-center mt-2">
            <span className="block font-medium text-gray-900">Fats</span>
            <span className="text-sm text-gray-600">67g / day</span>
          </p>
        </div>
      </div>

      <div className="mt-6 bg-green-50 rounded-lg p-4">
        <p className="text-sm text-green-800">
          Your macronutrient balance is optimized for your weight management and energy goals.
        </p>
      </div>
    </div>
  );
}