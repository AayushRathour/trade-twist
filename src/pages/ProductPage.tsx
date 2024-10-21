import React from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Clock, ArrowLeft } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Calculus Textbook",
    price: 45.99,
    rentPrice: 5.99,
    image: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Textbooks",
    description: "A comprehensive calculus textbook covering differential and integral calculus, suitable for undergraduate students."
  },
  {
    id: 2,
    name: "MacBook Pro 2021",
    price: 899.99,
    rentPrice: 29.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Electronics",
    description: "Apple MacBook Pro 2021 model with M1 chip, 13-inch Retina display, and 256GB SSD storage."
  },
  // Add more products...
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <a href="#" onClick={() => window.history.back()} className="inline-flex items-center text-blue-600 hover:underline mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to results
      </a>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.category}</p>
          <p className="text-xl font-semibold mb-2 text-emerald-600">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-4">Rent: ${product.rentPrice.toFixed(2)}/day</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="flex space-x-4 mb-6">
            <button className="flex-1 bg-emerald-500 text-white py-3 px-6 rounded-md hover:bg-emerald-600 transition-colors flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button>
            <button className="flex-1 bg-amber-500 text-white py-3 px-6 rounded-md hover:bg-amber-600 transition-colors flex items-center justify-center">
              <Clock className="w-5 h-5 mr-2" />
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;