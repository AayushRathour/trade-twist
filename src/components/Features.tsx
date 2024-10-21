import React from 'react';
import { Book, Laptop, Microscope, Clock, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Book className="w-12 h-12 text-blue-600" />,
    title: 'Textbooks',
    description: 'Find affordable textbooks for all your courses. Buy or rent for the semester.',
  },
  {
    icon: <Laptop className="w-12 h-12 text-blue-600" />,
    title: 'Electronics',
    description: 'Get great deals on laptops, tablets, and more. Short-term rentals available.',
  },
  {
    icon: <Microscope className="w-12 h-12 text-blue-600" />,
    title: 'Lab Equipment',
    description: 'Exchange or rent lab instruments and materials easily.',
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-600" />,
    title: 'Flexible Rentals',
    description: 'Rent items for a day, week, or semester. Perfect for short-term needs.',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What You Can Find on Trade Twist</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;