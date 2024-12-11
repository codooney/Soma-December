import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, FileText, AlertCircle } from 'lucide-react';
import Layout from './Layout';

export default function UploadScreen() {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (!selectedFile.type.match('application/pdf|text/*|image/*')) {
        setError('Please upload a PDF, text file, or image');
        return;
      }
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB');
        return;
      }
      setFile(selectedFile);
      setError('');
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleAnalyzeClick = () => {
    navigate('/loading');
    setTimeout(() => {
      navigate('/results');
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <FileText className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Upload Results</h1>
          <p className="text-gray-600">Upload your blood test results for AI analysis</p>
        </div>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse bg-blue-200 rounded-full blur-xl opacity-50"></div>
              <Activity className="w-12 h-12 text-blue-600 relative z-10" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Upload Your Test Results</h2>
          <p className="text-gray-600">
            We support PDF files, images, and text documents from most major labs
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept=".pdf,image/*,text/*"
            onChange={handleFileChange}
          />
          
          {error && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-2 rounded-lg">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}
          
          {!file ? (
            <div className="space-y-4 w-full max-w-sm">
              <button
                onClick={handleUploadClick}
                className="w-full bg-white border-2 border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Upload File
              </button>
              <div className="text-center text-gray-500">or</div>
              <button
                onClick={handleAnalyzeClick}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                View Demo Results
              </button>
            </div>
          ) : (
            <div className="text-center">
              <div className="mb-4 text-gray-700">
                <span className="font-medium">{file.name}</span>
              </div>
              <button
                onClick={handleAnalyzeClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Analyze Results
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}