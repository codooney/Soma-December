import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Activity, ListTodo, Settings, LogOut } from 'lucide-react';

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = React.useState(location.pathname);

  const navItems = [
    { id: '/dashboard', icon: Home, label: 'Home' },
    { id: '/results', icon: Activity, label: 'AI Insights' },
    { id: '/plan', icon: ListTodo, label: 'My Plan' },
    { id: '/settings', icon: Settings, label: 'Settings' }
  ];

  const handleNavigation = (path: string) => {
    setActive(path);
    navigate(path);
  };

  const handleLogout = () => {
    navigate('/');
  };

  // Don't show navigation on landing page, onboarding, or connect wearables
  const hiddenPaths = ['/', '/onboarding', '/connect-wearables'];
  if (hiddenPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg shadow-lg border-t border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => handleNavigation(id)}
              className={`flex flex-col items-center py-3 px-5 transition-colors ${
                active === id
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-xs font-medium">{label}</span>
            </button>
          ))}
          <button
            onClick={handleLogout}
            className="flex flex-col items-center py-3 px-5 text-gray-500 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-6 h-6 mb-1" />
            <span className="text-xs font-medium">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
}