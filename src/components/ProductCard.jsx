import React from 'react';
import { Plus, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product, onAddToCart, isFavorite, onToggleFavorite }) {
  const navigate = useNavigate();

  return (
    <div 
      className="group relative rounded-2xl transition-all duration-300 overflow-hidden flex flex-col hover-lift glass-panel cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-app-surface">
        <img 
          src={product.image} 
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-all duration-500 ease-out"
          style={{ mixBlendMode: 'var(--app-blend)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-dark-bg/80 backdrop-blur-md text-neon-accent shadow-sm border border-neon-accent/30">
            {product.category}
          </span>
          {product.weight && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-dark-bg/90 backdrop-blur-md text-white shadow-sm border border-white/20">
              {product.weight}
            </span>
          )}
        </div>
        {product.isSale && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-500/90 text-app-text shadow-lg animate-[pulse_2s_ease-in-out_infinite]">
              20% OFF
            </span>
          </div>
        )}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(product);
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-dark-bg/50 backdrop-blur-md text-app-text hover:text-red-500 transition-colors"
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
        </button>
      </div>
      
      <div className="p-6 flex flex-col flex-grow text-left relative z-10 bg-dark-bg/40 backdrop-blur-sm">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-app-text leading-tight group-hover:text-neon-accent transition-colors">
            {product.name}
          </h3>
          <div className="text-right ml-4 whitespace-nowrap">
            {product.isSale && (
              <div className="text-xs text-gray-500 line-through mb-0.5">₹{product.originalPrice.toFixed(2)}</div>
            )}
            <div className="text-lg font-bold text-neon-accent">
              ₹{product.price.toFixed(2)}
            </div>
          </div>
        </div>
        
        <p className="mt-1 text-sm text-app-text-muted line-clamp-2 flex-grow mb-6">
          {product.description}
        </p>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="mt-auto w-full flex items-center justify-center gap-2 bg-app-surface border border-app-border text-app-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:text-white hover:border-transparent px-4 py-2.5 rounded-xl font-medium transition-all duration-200 active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
