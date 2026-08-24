import React from 'react';
import Hero from '../components/Hero';
import AboutMission from '../components/AboutMission';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

export default function HomePage({ onAddToCart }) {
  return (
    <div className="w-full">
      <Hero />
      <AboutMission />
      <ProductList 
        products={products} 
        onAddToCart={onAddToCart} 
      />
    </div>
  );
}
