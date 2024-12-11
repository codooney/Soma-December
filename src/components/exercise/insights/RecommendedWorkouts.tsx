import React from 'react';
import { Dumbbell, Heart, Wind } from 'lucide-react';

export default function RecommendedWorkouts() {
  const workouts = [
    {
      type: 'HIIT',
      icon: Heart,
      duration: '30 min',
      intensity: 'High',
      description: 'High-intensity interval training to improve cardiovascular fitness',
      benefits: ['Burn calories', 'Improve endurance', 'Boost metabolism']
    },
    {
      type: 'Strength',
      icon: Dumbbell,
      duration: '45 min',
      intensity: 'Moderate',
      description: 'Full-body strength training with focus on major muscle groups',
      benefits: ['Build muscle', 'Increase strength', 'Improve posture']
    },
    {
      type: 'Recovery',
      icon: Wind,
      duration: '30 min',
      intensity: 'Low',
      description: 'Active recovery session with mobility and flexibility work',
      benefits: ['Enhance flexibility', 'Reduce soreness', 'Prevent injury']
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Workouts</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workouts.map((workout, index) => {
          const Icon = workout.icon;
          return (
            <div key={index} className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{workout.type}</h4>
                  <p className="text-sm text-gray-600">{workout.duration} • {workout.intensity}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{workout.description}</p>
              
              <div className="space-y-2">
                {workout.benefits.map((benefit, i) => (
                  <p key={i} className="text-sm text-gray-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {benefit}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}