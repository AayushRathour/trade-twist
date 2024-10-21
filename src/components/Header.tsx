import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <ShoppingBag className="w-8 h-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-800">Trade Twist</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link></li>
            <li><Link to="/buy" className="text-gray-600 hover:text-blue-600 transition-colors">Buy</Link></li>
            <li><Link to="/rent" className="text-gray-600 hover:text-blue-600 transition-colors">Rent</Link></li>
            <li><Link to="/sell" className="text-gray-600 hover:text-blue-600 transition-colors">Sell</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">Log In</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;