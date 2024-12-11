import React from 'react';
import { useNavigate } from 'react-router-dom';
import NutritionHeader from '../../components/nutrition/NutritionHeader';
import { 
  MacronutrientBreakdown,
  DietaryRecommendations,
  MealPlanning,
  NutrientDeficiencies
} from '../../components/nutrition/insights';

export default function NutritionInsights() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <NutritionHeader />
      
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <MacronutrientBreakdown />
        <DietaryRecommendations />
        <MealPlanning />
        <NutrientDeficiencies />
      </div>
    </div>
  );
}