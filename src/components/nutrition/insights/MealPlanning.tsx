import React from 'react';
import { Clock, Sun, Coffee, Utensils } from 'lucide-react';

export default function MealPlanning() {
  const meals = [
    {
      time: 'Breakfast (7:00 AM)',
      icon: Coffee,
      suggestions: [
        'Greek yogurt with berries and honey',
        'Oatmeal with nuts and banana',
        'Whole grain toast with avocado'
      ]
    },
    {
      time: 'Lunch (12:30 PM)',
      icon: Sun,
      suggestions: [
        'Grilled chicken salad with quinoa',
        'Mediterranean bowl with hummus',
        'Turkey and avocado wrap'
      ]
    },
    {
      time: 'Dinner (6:30 PM)',
      icon: Utensils,
      suggestions: [
        'Baked salmon with roasted vegetables',
        'Stir-fried tofu with brown rice',
        'Lean beef with sweet potato'
      ]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-5 h-5 text-green-600" />
        <h3 className="font-semibold text-gray-900">Meal Planning</h3>
      </div>

      <div className="space-y-6">
        {meals.map((meal) => {
          const Icon = meal.icon;
          return (
            <div key={meal.time} className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-5 h-5 text-green-600" />
                <h4 className="font-medium text-gray-900">{meal.time}</h4>
              </div>
              
              <div className="space-y-2">
                {meal.suggestions.map((suggestion, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <p className="text-sm text-gray-700">{suggestion}</p>
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