import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedProducts />
      <Categories />
    </>
  );
};

export default HomePage;