import React, { useEffect } from 'react';
import { Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LoadingScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate analysis time
    const timer = setTimeout(() => {
      navigate('/results');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="text-center w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 animate-ping bg-blue-200 rounded-full blur-xl opacity-50"></div>
            <Activity className="w-16 h-16 text-blue-600 animate-pulse relative z-10" />
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Analyzing Your Results
        </h2>
        <p className="text-gray-600 mb-8">
          Please wait while we process your test results and create your personalized health insights...
        </p>
        
        {/* Loading Bar */}
        <div className="w-full bg-gray-200 rounded-full overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600 w-full animate-loading"></div>
        </div>
      </div>
    </div>
  );
}