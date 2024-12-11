import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Dumbbell, Apple, TrendingUp, Calendar, ArrowRight } from 'lucide-react';

interface PersonalizedPlanProps {
  questionnaireData: {
    processedFood: string;
    exerciseFrequency: string;
    weightGoal: string;
    exercisePreference: string;
  };
}

export default function PersonalizedPlan({ questionnaireData }: PersonalizedPlanProps) {
  const navigate = useNavigate();
  const healthMetrics = {
    cholesterol: 210,
    bloodSugar: 95,
    vitaminD: 28,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Personalized Health Plan</h2>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 rounded-xl p-6">
            <Heart className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-semibold text-gray-900">Health Status</h3>
            <p className="text-gray-600">Good with room for improvement</p>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <TrendingUp className="w-6 h-6 text-green-600 mb-2" />
            <h3 className="font-semibold text-gray-900">Weekly Goal</h3>
            <p className="text-gray-600">Reduce cholesterol by 10%</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6">
            <Calendar className="w-6 h-6 text-purple-600 mb-2" />
            <h3 className="font-semibold text-gray-900">Next Review</h3>
            <p className="text-gray-600">In 4 weeks</p>
          </div>
        </div>

        {/* Diet Plan with Navigation */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/nutrition')}
            className="w-full bg-white hover:bg-gray-50 transition-colors rounded-xl border-2 border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Apple className="w-6 h-6 text-green-600" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900">Nutrition Plan</h3>
                  <p className="text-gray-600">View detailed nutrition insights and recommendations</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
          </button>
        </div>

        {/* Exercise Plan with Navigation */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/exercise')}
            className="w-full bg-white hover:bg-gray-50 transition-colors rounded-xl border-2 border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Dumbbell className="w-6 h-6 text-blue-600" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900">Exercise Plan</h3>
                  <p className="text-gray-600">View detailed exercise insights and recommendations</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
            </div>
          </button>
        </div>

        {/* Weekly Schedule */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Weekly Schedule</h3>
          <div className="grid grid-cols-7 gap-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={day} className="bg-gray-50 rounded-xl p-4 text-center">
                <p className="font-medium text-gray-900 mb-2">{day}</p>
                <div className="space-y-2">
                  {index % 2 === 0 ? (
                    <span className="text-sm text-blue-600">Cardio</span>
                  ) : index % 3 === 0 ? (
                    <span className="text-sm text-purple-600">Strength</span>
                  ) : (
                    <span className="text-sm text-gray-500">Rest</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}