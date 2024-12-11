import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import {
  Settings,
  User,
  Bell,
  Shield,
  Link,
  BarChart,
  Clock,
  LogOut,
  ChevronRight,
  Toggle
} from 'lucide-react';

export default function SettingsPage() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState({
    dailyReminders: true,
    weeklyReports: true,
    healthAlerts: true
  });

  const [units, setUnits] = useState({
    weight: 'kg',
    height: 'cm',
    distance: 'km'
  });

  const handleLogout = () => {
    // Handle logout logic here
    navigate('/');
  };

  const settingsSections = [
    {
      title: 'Account',
      icon: User,
      items: [
        { label: 'Profile Information', value: 'John Doe' },
        { label: 'Email', value: 'john@example.com' },
        { label: 'Password', value: '••••••••' },
        { label: 'Two-Factor Authentication', value: 'Enabled', toggle: true }
      ]
    },
    {
      title: 'Connected Devices',
      icon: Link,
      items: [
        { label: 'Apple Watch', value: 'Connected', status: 'connected' },
        { label: 'Garmin Connect', value: 'Connected', status: 'connected' },
        { label: 'Fitbit', value: 'Not Connected', status: 'disconnected' }
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        {
          label: 'Daily Reminders',
          description: 'Get daily activity and health reminders',
          toggle: true,
          checked: notifications.dailyReminders,
          onChange: () => setNotifications(prev => ({ ...prev, dailyReminders: !prev.dailyReminders }))
        },
        {
          label: 'Weekly Reports',
          description: 'Receive weekly health progress reports',
          toggle: true,
          checked: notifications.weeklyReports,
          onChange: () => setNotifications(prev => ({ ...prev, weeklyReports: !prev.weeklyReports }))
        },
        {
          label: 'Health Alerts',
          description: 'Important alerts about your health metrics',
          toggle: true,
          checked: notifications.healthAlerts,
          onChange: () => setNotifications(prev => ({ ...prev, healthAlerts: !prev.healthAlerts }))
        }
      ]
    },
    {
      title: 'Units & Measurements',
      icon: BarChart,
      items: [
        {
          label: 'Weight',
          options: ['kg', 'lbs'],
          value: units.weight,
          onChange: (value: string) => setUnits(prev => ({ ...prev, weight: value }))
        },
        {
          label: 'Height',
          options: ['cm', 'ft'],
          value: units.height,
          onChange: (value: string) => setUnits(prev => ({ ...prev, height: value }))
        },
        {
          label: 'Distance',
          options: ['km', 'mi'],
          value: units.distance,
          onChange: (value: string) => setUnits(prev => ({ ...prev, distance: value }))
        }
      ]
    },
    {
      title: 'Privacy & Security',
      icon: Shield,
      items: [
        { label: 'Data Sharing', description: 'Manage how your data is shared' },
        { label: 'Privacy Settings', description: 'Control your privacy preferences' },
        { label: 'Export Data', description: 'Download your health data' }
      ]
    },
    {
      title: 'Time Zone',
      icon: Clock,
      items: [
        { label: 'Current Time Zone', value: 'UTC-8 (Pacific Time)', description: 'Automatically set based on your location' }
      ]
    }
  ];

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Settings className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600">Manage your account and preferences</p>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {settingsSections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <section.icon className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                </div>

                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center justify-between py-2"
                    >
                      <div>
                        <p className="font-medium text-gray-900">{item.label}</p>
                        {item.description && (
                          <p className="text-sm text-gray-600">{item.description}</p>
                        )}
                      </div>

                      {'toggle' in item ? (
                        <button
                          onClick={() => item.onChange?.()}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            item.checked ? 'bg-blue-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              item.checked ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      ) : 'options' in item ? (
                        <select
                          value={item.value}
                          onChange={(e) => item.onChange?.(e.target.value)}
                          className="rounded-lg border-gray-300 text-gray-700"
                        >
                          {item.options.map((option) => (
                            <option key={option} value={option}>
                              {option.toUpperCase()}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span className={`text-sm ${
                            item.status === 'connected' ? 'text-green-600' :
                            item.status === 'disconnected' ? 'text-gray-400' :
                            'text-gray-600'
                          }`}>
                            {item.value}
                          </span>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full mt-8 flex items-center justify-center gap-2 text-red-600 bg-red-50 hover:bg-red-100 px-4 py-3 rounded-xl transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Log Out</span>
        </button>
      </div>
    </Layout>
  );
}