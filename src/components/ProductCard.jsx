import React from 'react';
import { Plus } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group relative rounded-2xl transition-all duration-300 overflow-hidden flex flex-col hover-lift glass-panel">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-900">
        <img 
          src={product.image} 
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 group-hover:opacity-80 transition-all duration-500 ease-out mix-blend-lighten"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-dark-bg/80 backdrop-blur-md text-neon-accent shadow-sm border border-neon-accent/30">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow text-left relative z-10 bg-dark-bg/40 backdrop-blur-sm">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-100 leading-tight">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-neon-accent ml-4 whitespace-nowrap">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        <p className="mt-1 text-sm text-gray-400 line-clamp-2 flex-grow mb-6">
          {product.description}
        </p>
        
        <button 
          onClick={() => onAddToCart(product)}
          className="mt-auto w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white hover:bg-neon-accent hover:text-dark-bg hover:border-transparent px-4 py-2.5 rounded-xl font-medium transition-all duration-200 active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
