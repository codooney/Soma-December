import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, ArrowRight, ArrowLeft } from 'lucide-react';

interface OnboardingStep {
  title: string;
  description: string;
  fields: {
    id: string;
    label: string;
    type: string;
    options?: string[];
    placeholder?: string;
  }[];
}

const steps: OnboardingStep[] = [
  {
    title: "Basic Information",
    description: "Help us personalize your experience",
    fields: [
      { id: "age", label: "Age", type: "number", placeholder: "Enter your age" },
      { id: "height", label: "Height (cm)", type: "number", placeholder: "Enter height in cm" },
      { id: "weight", label: "Weight (kg)", type: "number", placeholder: "Enter weight in kg" }
    ]
  },
  {
    title: "Health Goals",
    description: "What would you like to achieve?",
    fields: [
      {
        id: "primaryGoal",
        label: "Primary Goal",
        type: "select",
        options: [
          "Improve overall health",
          "Increase energy levels",
          "Optimize athletic performance",
          "Better sleep quality",
          "Weight management"
        ]
      }
    ]
  }
];

export default function OnboardingFlow() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      navigate('/connect-wearables');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSkip = () => {
    navigate('/connect-wearables');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <Activity className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">Soma AI</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div
            className="h-2 bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* Current Step */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {steps[currentStep].title}
          </h2>
          <p className="text-gray-600 mb-6">
            {steps[currentStep].description}
          </p>

          <div className="space-y-4">
            {steps[currentStep].fields.map(field => (
              <div key={field.id}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                {field.type === 'select' ? (
                  <select
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData[field.id] || ''}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                  >
                    <option value="">Select an option</option>
                    {field.options?.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData[field.id] || ''}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleBack}
            className={`flex items-center gap-2 text-gray-600 font-medium ${
              currentStep === 0 ? 'invisible' : ''
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={handleSkip}
              className="text-gray-500 hover:text-gray-700"
            >
              Skip
            </button>
            <button
              onClick={handleNext}
              className="flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}