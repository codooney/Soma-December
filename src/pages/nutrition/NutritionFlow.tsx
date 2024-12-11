import React, { useState } from 'react';
import Layout from '../../components/Layout';
import DietaryPreferences from '../../components/nutrition/flow/DietaryPreferences';
import HealthGoals from '../../components/nutrition/flow/HealthGoals';
import MealPreferences from '../../components/nutrition/flow/MealPreferences';
import PersonalizedPlan from '../../components/nutrition/flow/PersonalizedPlan';

type FlowStep = 'preferences' | 'goals' | 'meals' | 'plan';

export default function NutritionFlow() {
  const [currentStep, setCurrentStep] = useState<FlowStep>('preferences');
  const [nutritionData, setNutritionData] = useState({
    preferences: {
      dietType: '',
      restrictions: [],
      allergies: [],
      dislikes: []
    },
    goals: {
      primary: '',
      caloryTarget: '',
      macroPreference: '',
      mealFrequency: ''
    },
    meals: {
      breakfastTime: '',
      lunchTime: '',
      dinnerTime: '',
      snacks: false,
      mealPrepPreference: ''
    }
  });

  const handleNext = (data: any) => {
    setNutritionData(prev => ({ ...prev, ...data }));
    const steps: FlowStep[] = ['preferences', 'goals', 'meals', 'plan'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'preferences':
        return <DietaryPreferences onNext={handleNext} />;
      case 'goals':
        return <HealthGoals onNext={handleNext} />;
      case 'meals':
        return <MealPreferences onNext={handleNext} />;
      case 'plan':
        return <PersonalizedPlan data={nutritionData} />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        {renderStep()}
      </div>
    </Layout>
  );
}