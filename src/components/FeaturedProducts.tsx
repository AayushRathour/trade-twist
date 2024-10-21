import React from 'react';
import ProductCard from './ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: "Calculus Textbook",
    price: 45.99,
    rentPrice: 5.99,
    image: "https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Textbooks"
  },
  {
    id: 2,
    name: "MacBook Pro 2021",
    price: 899.99,
    rentPrice: 29.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Microscope Set",
    price: 159.99,
    rentPrice: 12.99,
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Lab Equipment"
  },
  {
    id: 4,
    name: "Ergonomic Desk Chair",
    price: 129.99,
    rentPrice: 7.99,
    image: "https://images.unsplash.com/photo-1505797149-35ebcb05a6fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Furniture"
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;