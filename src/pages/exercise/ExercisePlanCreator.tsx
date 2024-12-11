import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import { Dumbbell, ArrowLeft, Calendar, Clock, Activity } from 'lucide-react';

export default function ExercisePlanCreator() {
  const navigate = useNavigate();

  const workoutPlan = {
    'Monday': {
      focus: 'Cardio',
      exercises: [
        { name: 'Brisk Walking', duration: '30 min', intensity: 'Moderate' },
        { name: 'Cycling', duration: '20 min', intensity: 'High' },
        { name: 'Cool Down Stretches', duration: '10 min', intensity: 'Low' }
      ]
    },
    'Wednesday': {
      focus: 'Strength',
      exercises: [
        { name: 'Full Body Circuit', duration: '45 min', intensity: 'High' },
        { name: 'Core Workout', duration: '15 min', intensity: 'Moderate' },
        { name: 'Flexibility Work', duration: '10 min', intensity: 'Low' }
      ]
    },
    'Friday': {
      focus: 'Mixed',
      exercises: [
        { name: 'HIIT Session', duration: '25 min', intensity: 'High' },
        { name: 'Bodyweight Exercises', duration: '20 min', intensity: 'Moderate' },
        { name: 'Yoga Flow', duration: '15 min', intensity: 'Low' }
      ]
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Dumbbell className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Exercise Plan</h1>
              <p className="text-gray-600">Your personalized workout schedule</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/exercise')}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Insights
          </button>
        </div>

        {/* Weekly Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Weekly Overview</h2>
          <div className="grid grid-cols-7 gap-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className={`p-4 rounded-xl text-center ${
                workoutPlan[day as keyof typeof workoutPlan]
                  ? 'bg-blue-50'
                  : 'bg-gray-50'
              }`}>
                <p className="font-medium text-gray-900 mb-2">{day}</p>
                {workoutPlan[day as keyof typeof workoutPlan] ? (
                  <span className="text-sm text-blue-600">
                    {workoutPlan[day as keyof typeof workoutPlan].focus}
                  </span>
                ) : (
                  <span className="text-sm text-gray-500">Rest</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Workout Plans */}
        <div className="space-y-6">
          {Object.entries(workoutPlan).map(([day, plan]) => (
            <div key={day} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">{day}</h2>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {plan.focus}
                </span>
              </div>
              <div className="space-y-4">
                {plan.exercises.map((exercise, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <Activity className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">{exercise.name}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            {exercise.duration}
                          </div>
                          <span className={`text-sm ${
                            exercise.intensity === 'High' ? 'text-red-600' :
                            exercise.intensity === 'Moderate' ? 'text-yellow-600' :
                            'text-green-600'
                          }`}>
                            {exercise.intensity} Intensity
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}