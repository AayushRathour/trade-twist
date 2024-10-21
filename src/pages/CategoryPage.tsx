import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const categoryProducts = {
  'textbooks': [
    {
      id: 1,
      name: "Calculus Textbook",
      price: 45.99,
      rentPrice: 5.99,
      image: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Textbooks"
    },
    {
      id: 5,
      name: "Physics for Scientists and Engineers",
      price: 59.99,
      rentPrice: 6.99,
      image: "https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Textbooks"
    },
    // Add more textbooks...
  ],
  'electronics': [
    {
      id: 2,
      name: "MacBook Pro 2021",
      price: 899.99,
      rentPrice: 29.99,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Electronics"
    },
    {
      id: 6,
      name: "iPad Air",
      price: 499.99,
      rentPrice: 19.99,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      category: "Electronics"
    },
    // Add more electronics...
  ],
  // Add more categories...
};

const CategoryPage = () => {
  const { name } = useParams();
  const categoryName = name?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  const products = categoryProducts[name as keyof typeof categoryProducts] || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">{categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;