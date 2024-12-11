import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity } from 'lucide-react';
import { biomarkerData } from '../data/biomarkerData';

export default function ResultsDashboard() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/insights/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-8 mb-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Activity className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Health Dashboard</h1>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="bg-blue-50 rounded-2xl p-4 mb-4">
                <h2 className="font-semibold text-gray-900 mb-2">Overall Health Score</h2>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-3xl font-bold text-blue-600">85</span>
                  <span className="text-gray-600">/100</span>
                </div>
              </div>
              <p className="text-gray-600">
                Your results indicate good overall health with some areas for optimization.
                Click on any category below for detailed insights and personalized recommendations.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(biomarkerData).map((category) => {
              const Icon = category.IconComponent;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-left w-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-xl ${
                      category.status === 'Optimal' ? 'bg-green-50' : 
                      category.status === 'Good' ? 'bg-blue-50' : 
                      'bg-yellow-50'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        category.status === 'Optimal' ? 'text-green-500' :
                        category.status === 'Good' ? 'text-blue-500' :
                        'text-yellow-500'
                      }`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Health Score</span>
                      <span className={`font-semibold ${
                        category.status === 'Optimal' ? 'text-green-500' :
                        category.status === 'Good' ? 'text-blue-500' :
                        'text-yellow-500'
                      }`}>
                        {category.score}/100
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          category.status === 'Optimal' 
                            ? 'bg-gradient-to-r from-green-400 to-green-500' :
                          category.status === 'Good'
                            ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
                            'bg-gradient-to-r from-yellow-400 to-yellow-500'
                        }`}
                        style={{ width: `${category.score}%` }}
                      ></div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm">{category.summary}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}