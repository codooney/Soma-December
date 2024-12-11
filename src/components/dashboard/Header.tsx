import React from 'react';
import { User, Plus } from 'lucide-react';

interface HeaderProps {
  userName: string;
  onAnalyzeClick: () => void;
}

export default function Header({ userName, onAnalyzeClick }: HeaderProps) {
  return (
    <div className="bg-white px-4 py-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <User className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Hello, {userName}</h1>
            <p className="text-sm text-gray-600">Use AI-powered insights to understand your body and improve your health</p>
          </div>
        </div>
      </div>

      <button
        onClick={onAnalyzeClick}
        className="w-full bg-blue-600 text-white rounded-xl py-3 px-4 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
      >
        <Plus className="w-5 h-5" />
        Analyze Blood Test Results
      </button>
    </div>
  );
}