import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import OnboardingFlow from './pages/OnboardingFlow';
import ConnectWearables from './pages/ConnectWearables';
import Dashboard from './pages/Dashboard';
import LoadingScreen from './components/LoadingScreen';
import ResultsDashboard from './components/ResultsDashboard';
import DetailedInsights from './components/DetailedInsights';
import PlanFlow from './pages/PlanFlow';
import SettingsPage from './pages/SettingsPage';
import NutritionInsights from './pages/nutrition/NutritionInsights';
import NutritionFlow from './pages/nutrition/NutritionFlow';
import ExerciseInsights from './pages/exercise/ExerciseInsights';
import ExerciseProgramFlow from './pages/exercise/ExerciseProgramFlow';
import ShoppingList from './pages/nutrition/ShoppingList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/onboarding" element={<OnboardingFlow />} />
      <Route path="/connect-wearables" element={<ConnectWearables />} />
      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      <Route path="/loading" element={<Layout><LoadingScreen /></Layout>} />
      <Route path="/results" element={<Layout><ResultsDashboard /></Layout>} />
      <Route path="/insights/:categoryId" element={<Layout><DetailedInsights /></Layout>} />
      <Route path="/plan" element={<Layout><PlanFlow /></Layout>} />
      <Route path="/settings" element={<Layout><SettingsPage /></Layout>} />
      <Route path="/nutrition" element={<Layout><NutritionInsights /></Layout>} />
      <Route path="/nutrition/plan" element={<Layout><NutritionFlow /></Layout>} />
      <Route path="/nutrition/shopping-list" element={<Layout><ShoppingList /></Layout>} />
      <Route path="/exercise" element={<Layout><ExerciseInsights /></Layout>} />
      <Route path="/exercise/program" element={<Layout><ExerciseProgramFlow /></Layout>} />
    </Routes>
  );
}

export default App;