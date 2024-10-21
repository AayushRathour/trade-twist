import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Clock } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  rentPrice: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, rentPrice, image, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">{category}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-emerald-600">${price.toFixed(2)}</span>
          <span className="text-sm text-gray-500">Rent: ${rentPrice.toFixed(2)}/day</span>
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors flex items-center justify-center">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
          <button className="flex-1 bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 transition-colors flex items-center justify-center">
            <Clock className="w-4 h-4 mr-2" />
            Rent
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;