import React, { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="shop" className="py-24 bg-dark-bg relative">
      {/* Decorative background glow */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-neon-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Sustainable Selection
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Carefully crafted products that are gentle on the earth and beautiful in your home.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-eco-500 text-white shadow-lg shadow-eco-500/30'
                  : 'bg-dark-surface text-gray-400 hover:text-white border border-dark-border hover:border-eco-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-500 mt-12">
            No products found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
