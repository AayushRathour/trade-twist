import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Your Marketplace for Second-hand Student Goods</h1>
        <p className="text-xl mb-8">Buy, rent, and exchange textbooks, electronics, and more with fellow students.</p>
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex bg-white rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Search for textbooks, laptops, lab equipment..."
              className="flex-grow px-6 py-4 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-4 rounded-r-lg hover:bg-blue-700 transition-colors">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <Link to="/buy" className="flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            <ShoppingBag className="w-5 h-5 mr-2" />
            Buy Now
          </Link>
          <Link to="/rent" className="flex items-center bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
            <Clock className="w-5 h-5 mr-2" />
            Rent Items
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;