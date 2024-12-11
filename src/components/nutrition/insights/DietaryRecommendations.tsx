import React from 'react';
import { Utensils, Apple, Fish, Leaf } from 'lucide-react';

export default function DietaryRecommendations() {
  const recommendations = [
    {
      category: 'Proteins',
      icon: Fish,
      items: [
        { name: 'Salmon', frequency: '2-3x/week', benefits: 'Rich in omega-3' },
        { name: 'Chicken Breast', frequency: '3-4x/week', benefits: 'Lean protein' },
        { name: 'Lentils', frequency: '2-3x/week', benefits: 'Plant protein + fiber' }
      ]
    },
    {
      category: 'Carbohydrates',
      icon: Apple,
      items: [
        { name: 'Sweet Potatoes', frequency: '3-4x/week', benefits: 'Complex carbs' },
        { name: 'Quinoa', frequency: '2-3x/week', benefits: 'Complete protein' },
        { name: 'Oats', frequency: 'Daily', benefits: 'Fiber + beta-glucans' }
      ]
    },
    {
      category: 'Vegetables',
      icon: Leaf,
      items: [
        { name: 'Spinach', frequency: 'Daily', benefits: 'Iron + antioxidants' },
        { name: 'Broccoli', frequency: '3-4x/week', benefits: 'Vitamin C + K' },
        { name: 'Bell Peppers', frequency: '2-3x/week', benefits: 'Vitamins A + C' }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Utensils className="w-5 h-5 text-green-600" />
        <h3 className="font-semibold text-gray-900">Recommended Foods</h3>
      </div>

      <div className="space-y-6">
        {recommendations.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.category} className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-4">
                <Icon className="w-5 h-5 text-green-600" />
                <h4 className="font-medium text-gray-900">{category.category}</h4>
              </div>
              
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.benefits}</p>
                    </div>
                    <span className="text-sm text-green-600 font-medium">{item.frequency}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}