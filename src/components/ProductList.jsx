import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, onAddToCart, onProductSelect }) {
  return (
    <section id="shop" className="py-24 bg-dark-bg relative">
      {/* Decorative background glow */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-neon-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Sustainable Selection
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Carefully crafted products that are gentle on the earth and beautiful in your home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
              onProductSelect={onProductSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
