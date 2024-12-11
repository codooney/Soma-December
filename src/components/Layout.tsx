import React from 'react';
import { Home, Activity, ListTodo, User, Settings } from 'lucide-react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
            <User className="w-6 h-6" />
            <span className="font-medium">John</span>
          </button>
          <button className="text-gray-700 hover:text-blue-600 transition-colors">
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 pb-20">
        {children}
      </main>

      {/* Navigation */}
      <Navigation />
    </div>
  );
}