import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import { 
  ExerciseHeader,
  HealthMetrics,
  WorkoutSummary,
  WeeklyProgress,
  RecommendedWorkouts
} from '../../components/exercise/insights';

export default function ExerciseInsights() {
  const navigate = useNavigate();

  const handleCreatePlan = () => {
    navigate('/exercise/program');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ExerciseHeader onCreatePlan={handleCreatePlan} />
      
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <HealthMetrics />
        <WorkoutSummary />
        <WeeklyProgress />
        <RecommendedWorkouts />
      </div>
    </div>
  );
}