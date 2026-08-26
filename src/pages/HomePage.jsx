import React from 'react';
import Hero from '../components/Hero';
import AboutMission from '../components/AboutMission';
import TodayDiscount from '../components/TodayDiscount';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

export default function HomePage({ onAddToCart }) {
  // Calculate the day of the year to pick a deterministic product every day
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff = today - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  // Feature a different product every day based on the day of the year
  const dealOfTheDay = products[dayOfYear % products.length] || products[0];

  return (
    <div className="w-full">
      <Hero />
      <AboutMission />
      <TodayDiscount product={dealOfTheDay} onAddToCart={onAddToCart} />
      <ProductList 
        products={products} 
        onAddToCart={onAddToCart} 
      />
    </div>
  );
}
