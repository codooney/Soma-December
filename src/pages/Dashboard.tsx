import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/dashboard/Header';
import {
  ActivityMetric,
  HeartRateMetric,
  SleepMetric,
  TrainingMetric,
  WorkoutMetric,
  HydrationMetric,
  PulseOxMetric,
  WeightMetric,
  StressMetric
} from '../components/dashboard/metrics';
import UploadOptions from '../components/upload/UploadOptions';
import { handleUpload } from '../utils/uploadHandlers';
import { subDays } from 'date-fns';

// Generate mock data for the past week
const generateWeekData = () => {
  return Array.from({ length: 7 }, () => Math.floor(Math.random() * 5000) + 5000);
};

const generateDates = () => {
  return Array.from({ length: 7 }, (_, i) => subDays(new Date(), 6 - i));
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [showUploadOptions, setShowUploadOptions] = useState(false);

  const weeklyData = generateWeekData();
  const weekDates = generateDates();

  const handleUploadOption = async (option: 'camera' | 'file') => {
    setShowUploadOptions(false);
    await handleUpload(option);
    navigate('/loading');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        userName="John"
        onAnalyzeClick={() => setShowUploadOptions(true)}
      />

      <div className="px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ActivityMetric
            steps={8439}
            goal={10000}
            distance={5.2}
            floors={12}
            weeklyData={weeklyData}
            weekDates={weekDates}
          />
          <HeartRateMetric
            currentRate={72}
            restingRate={62}
            hrvScore={65}
            stressLevel="Low"
          />
          <SleepMetric
            duration={7.5}
            score={85}
            weeklyAverage={7.2}
            stages={{
              deep: 2.1,
              light: 4.2,
              rem: 1.2,
              awake: 0.3
            }}
          />
          <TrainingMetric
            vo2max={48}
            trainingLoad={75}
            recovery={85}
            predictions={{ fiveK: "22:30", tenK: "46:45" }}
          />
          <WorkoutMetric
            lastWorkout={{
              type: "Running",
              duration: 45,
              pace: "5:30",
              cadence: 175,
              power: 230,
              recoveryTime: 12
            }}
          />
          <HydrationMetric
            current={1.8}
            goal={3.0}
            recommendation="Increase intake due to high activity"
          />
          <PulseOxMetric
            spO2={98}
            respiratoryRate={16}
            history={{
              timestamps: weekDates,
              values: Array.from({ length: 7 }, () => 95 + Math.random() * 5)
            }}
          />
          <WeightMetric
            current={{
              weight: 70.5,
              bmi: 22.4,
              bodyFat: 15.2
            }}
            history={{
              timestamps: weekDates,
              weights: Array.from({ length: 7 }, () => 70 + Math.random())
            }}
          />
          <StressMetric
            score={42}
            insights={[
              "Stress levels are moderate",
              "Recovery is optimal",
              "Consider a breathing exercise"
            ]}
            breathingExercise={{
              duration: 5,
              technique: "Box Breathing"
            }}
          />
        </div>
      </div>

      {showUploadOptions && (
        <UploadOptions
          onClose={() => setShowUploadOptions(false)}
          onOptionSelect={handleUploadOption}
        />
      )}
    </div>
  );
}