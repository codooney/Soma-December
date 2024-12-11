import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import PersonalizedPlan from '../components/plan/PersonalizedPlan';

export default function PlanFlow() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-[calc(100vh-9rem)] bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <PersonalizedPlan questionnaireData={{
          processedFood: '',
          exerciseFrequency: '',
          weightGoal: '',
          exercisePreference: ''
        }} />
      </div>
    </Layout>
  );
}