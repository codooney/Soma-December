import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, ArrowRight, Apple, Chrome, Heart } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleAuth = () => {
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-md mx-auto px-4">
        <nav className="py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Soma AI</span>
            </div>
          </div>
        </nav>

        <div className="py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Heart className="w-16 h-16 text-blue-600 animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Soma AI
            </h1>
            <p className="text-lg text-gray-600 mb-12 px-4">
              Use AI-powered insights to understand your body and improve your health
            </p>

            <div className="space-y-4">
              <button
                onClick={handleAuth}
                className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 font-medium px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Chrome className="w-5 h-5" />
                Continue with Google
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={handleAuth}
                className="w-full flex items-center justify-center gap-3 bg-black text-white font-medium px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Apple className="w-5 h-5" />
                Continue with Apple
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}