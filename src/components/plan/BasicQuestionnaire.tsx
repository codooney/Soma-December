import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface QuestionnaireData {
  processedFood: string;
  exerciseFrequency: string;
  weightGoal: string;
  exercisePreference: string;
}

interface BasicQuestionnaireProps {
  onComplete: (data: QuestionnaireData) => void;
}

export default function BasicQuestionnaire({ onComplete }: BasicQuestionnaireProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuestionnaireData>({
    processedFood: '',
    exerciseFrequency: '',
    weightGoal: '',
    exercisePreference: '',
  });

  const questions = [
    {
      id: 'processedFood',
      question: 'How often do you eat processed foods?',
      options: ['Daily', 'Occasionally', 'Rarely', 'Never'],
    },
    {
      id: 'exerciseFrequency',
      question: 'How many days a week do you exercise?',
      options: ['None', '1-2 days', '3-4 days', '5+ days'],
    },
    {
      id: 'weightGoal',
      question: 'Do you have a weight loss goal?',
      options: ['Yes', 'No', 'Not Sure'],
    },
    {
      id: 'exercisePreference',
      question: 'What types of exercises do you prefer?',
      options: ['Cardio', 'Strength Training', 'Flexibility', 'Mixed'],
    },
  ];

  const handleAnswer = (answer: string) => {
    const questionId = questions[currentQuestion].id as keyof QuestionnaireData;
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      onComplete(answers);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div
            className="h-2 bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {currentQ.question}
        </h2>
        <p className="text-gray-600 mb-8">
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <div className="space-y-4">
          {currentQ.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-blue-600 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>

        {currentQuestion > 0 && (
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 mt-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous Question
          </button>
        )}
      </div>
    </div>
  );
}