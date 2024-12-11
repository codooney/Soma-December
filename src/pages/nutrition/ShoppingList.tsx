import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import { ShoppingBag, ArrowLeft, Check } from 'lucide-react';

export default function ShoppingList() {
  const navigate = useNavigate();

  const groceryList = {
    'Proteins': [
      { name: 'Chicken Breast', amount: '500g' },
      { name: 'Salmon', amount: '400g' },
      { name: 'Greek Yogurt', amount: '500g' },
      { name: 'Eggs', amount: '12 units' }
    ],
    'Carbohydrates': [
      { name: 'Sweet Potatoes', amount: '1kg' },
      { name: 'Brown Rice', amount: '500g' },
      { name: 'Quinoa', amount: '250g' },
      { name: 'Oats', amount: '500g' }
    ],
    'Healthy Fats': [
      { name: 'Avocados', amount: '3 units' },
      { name: 'Olive Oil', amount: '500ml' },
      { name: 'Mixed Nuts', amount: '200g' },
      { name: 'Chia Seeds', amount: '100g' }
    ],
    'Vegetables': [
      { name: 'Spinach', amount: '300g' },
      { name: 'Broccoli', amount: '500g' },
      { name: 'Bell Peppers', amount: '4 units' },
      { name: 'Carrots', amount: '500g' }
    ]
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-8 h-8 text-green-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Shopping List</h1>
              <p className="text-gray-600">Based on your nutritional needs</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/nutrition')}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Insights
          </button>
        </div>

        {/* Shopping List */}
        <div className="space-y-6">
          {Object.entries(groceryList).map(([category, items]) => (
            <div key={category} className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{category}</h2>
              <div className="space-y-3">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <button className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                        <Check className="w-4 h-4 text-transparent hover:text-green-500" />
                      </button>
                      <span className="text-gray-900">{item.name}</span>
                    </div>
                    <span className="text-gray-600">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}