import React from 'react';
import { Camera, Upload as UploadIcon, X } from 'lucide-react';

interface UploadOptionsProps {
  onClose: () => void;
  onOptionSelect: (option: 'camera' | 'file') => void;
}

export default function UploadOptions({ onClose, onOptionSelect }: UploadOptionsProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-t-2xl p-6 animate-slide-up">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Analyze Blood Test Results</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={() => onOptionSelect('camera')}
            className="w-full flex items-center gap-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Camera className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-900">Take Photo</h3>
              <p className="text-sm text-gray-600">Use your camera to capture results</p>
            </div>
          </button>

          <button
            onClick={() => onOptionSelect('file')}
            className="w-full flex items-center gap-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <UploadIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-900">Upload File</h3>
              <p className="text-sm text-gray-600">Select PDF or image from your device</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}