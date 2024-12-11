import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Watch, AppleIcon, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';

interface WearableDevice {
  id: string;
  name: string;
  icon: typeof Activity;
  connected: boolean;
}

export default function ConnectWearables() {
  const navigate = useNavigate();
  const [devices, setDevices] = useState<WearableDevice[]>([
    { id: 'apple', name: 'Apple Health', icon: AppleIcon, connected: false },
    { id: 'garmin', name: 'Garmin Connect', icon: Watch, connected: false },
    { id: 'fitbit', name: 'Fitbit', icon: Watch, connected: false },
    { id: 'whoop', name: 'Whoop', icon: Smartphone, connected: false }
  ]);

  const handleConnect = (deviceId: string) => {
    // Simulate OAuth connection
    setDevices(prev =>
      prev.map(device =>
        device.id === deviceId ? { ...device, connected: true } : device
      )
    );
  };

  const handleContinue = () => {
    navigate('/dashboard');
  };

  const connectedCount = devices.filter(d => d.connected).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <Activity className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">Soma AI</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Connect Your Devices
          </h2>
          <p className="text-gray-600 mb-6">
            Link your wearables to get more accurate health insights and continuous monitoring.
          </p>

          <div className="space-y-4">
            {devices.map(device => {
              const DeviceIcon = device.icon;
              return (
                <div
                  key={device.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <DeviceIcon className="w-6 h-6 text-gray-700" />
                    <span className="font-medium text-gray-900">{device.name}</span>
                  </div>
                  {device.connected ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-sm font-medium">Connected</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleConnect(device.id)}
                      className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Connect
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Status and Navigation */}
        <div className="flex items-center justify-between bg-blue-50 rounded-xl p-4 mb-6">
          <div>
            <p className="text-sm text-gray-600">Connected Devices</p>
            <p className="text-lg font-semibold text-gray-900">{connectedCount} of {devices.length}</p>
          </div>
          <button
            onClick={handleContinue}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={handleContinue}
          className="w-full text-center text-gray-500 hover:text-gray-700"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
}