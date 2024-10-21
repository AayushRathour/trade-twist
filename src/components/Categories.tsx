import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  'Textbooks',
  'Electronics',
  'Lab Equipment',
  'Study Materials',
  'Furniture',
  'Stationery',
  'Musical Instruments',
  'Sports Equipment',
];

const Categories = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category.toLowerCase().replace(' ', '-')}`}
              className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:bg-blue-50 hover:border-blue-200 transition-colors"
            >
              <span className="text-lg font-medium text-gray-800">{category}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;