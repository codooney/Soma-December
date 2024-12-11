import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Info, Leaf, Pill, Dumbbell } from 'lucide-react';
import { biomarkerData } from '../data/biomarkerData';

export default function DetailedInsights() {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const data = biomarkerData[categoryId || ''];
  const Icon = data?.IconComponent;

  const handleBack = () => {
    navigate('/results');
  };

  if (!data) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Dashboard</span>
        </button>

        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <Icon className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{data.title}</h1>
              <p className="text-gray-600">Detailed Analysis & Recommendations</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 rounded-2xl p-4">
              <p className="text-sm text-gray-600 mb-1">Health Score</p>
              <p className="text-3xl font-bold text-blue-600">{data.score}/100</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-4">
              <p className="text-sm text-gray-600 mb-1">Status</p>
              <p className="text-xl font-semibold text-green-600">{data.status}</p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-4">
              <p className="text-sm text-gray-600 mb-1">Trend</p>
              <p className="text-xl font-semibold text-purple-600">{data.trend}</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Key Findings</h2>
            <div className="bg-gray-50 rounded-2xl p-6">
              <ul className="space-y-3">
                {data.findings.map((finding: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{finding}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Detailed Biomarkers</h2>
            <div className="space-y-4">
              {data.biomarkers.map((biomarker: any, index: number) => (
                <div key={index} className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium text-gray-900">{biomarker.name}</h3>
                      <p className="text-sm text-gray-500">{biomarker.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      biomarker.status === 'Optimal' ? 'bg-green-100 text-green-800' :
                      biomarker.status === 'Normal' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {biomarker.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Your Value: <strong>{biomarker.value}</strong></span>
                      <span className="text-gray-500">Range: {biomarker.range}</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          biomarker.status === 'Optimal' ? 'bg-green-500' :
                          biomarker.status === 'Normal' ? 'bg-blue-500' :
                          'bg-yellow-500'
                        }`}
                        style={{ width: `${biomarker.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Personalized Recommendations</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="w-6 h-6 text-green-600" />
                  <h3 className="font-semibold text-gray-900">Dietary Changes</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {data.recommendations.diet.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Pill className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Supplements</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {data.recommendations.supplements.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Dumbbell className="w-6 h-6 text-purple-600" />
                  <h3 className="font-semibold text-gray-900">Lifestyle</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {data.recommendations.lifestyle.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}