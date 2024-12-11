import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import Introduction from '../../components/exercise/flow/Introduction';
import DataGoals from '../../components/exercise/flow/DataGoals';
import Preferences from '../../components/exercise/flow/Preferences';
import Schedule from '../../components/exercise/flow/Schedule';
import Review from '../../components/exercise/flow/Review';
import Program from '../../components/exercise/flow/Program';

type FlowStep = 'intro' | 'data' | 'preferences' | 'schedule' | 'review' | 'program';

export default function ExerciseProgramFlow() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<FlowStep>('intro');
  const [programData, setProgramData] = useState({
    goals: {
      primary: '',
      secondary: '',
      shortTerm: '',
      longTerm: ''
    },
    preferences: {
      workoutType: '',
      cardioStyle: '',
      duration: '',
      frequency: '',
      equipment: []
    },
    schedule: {
      programDuration: '',
      workoutDays: [],
      preferredTimes: {}
    }
  });

  const handleNext = (data: any) => {
    setProgramData(prev => ({ ...prev, ...data }));
    const steps: FlowStep[] = ['intro', 'data', 'preferences', 'schedule', 'review', 'program'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const steps: FlowStep[] = ['intro', 'data', 'preferences', 'schedule', 'review', 'program'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    } else {
      navigate('/plan');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'intro':
        return <Introduction onNext={handleNext} onBack={handleBack} />;
      case 'data':
        return <DataGoals onNext={handleNext} onBack={handleBack} />;
      case 'preferences':
        return <Preferences onNext={handleNext} onBack={handleBack} />;
      case 'schedule':
        return <Schedule onNext={handleNext} onBack={handleBack} />;
      case 'review':
        return <Review data={programData} onNext={handleNext} onBack={handleBack} />;
      case 'program':
        return <Program data={programData} onBack={handleBack} />;
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