import React from 'react';
import ProductCard from './ProductCard';
import { useAuth } from '../context/AuthContext';
import { Grid, Heart, Home, Navigation, Sparkles, Palette, Shirt, Gem } from 'lucide-react';

const categoryIcons = {
  'All': <Grid className="w-4 h-4" />,
  'Personal Care': <Heart className="w-4 h-4" />,
  'Home & Kitchen': <Home className="w-4 h-4" />,
  'On the Go': <Navigation className="w-4 h-4" />,
  'Beauty': <Sparkles className="w-4 h-4" />,
  'Handmade': <Palette className="w-4 h-4" />,
  'Clothing': <Shirt className="w-4 h-4" />,
  'Accessories': <Gem className="w-4 h-4" />
};

export default function ProductList({ products, onAddToCart, favorites, onToggleFavorite, activeCategory = 'All', setActiveCategory, priceBucket = 'All', setPriceBucket }) {
  const { user } = useAuth();
  
  const categories = ['All', ...new Set(products.map(p => p.category))];
  const priceBuckets = ['All', 'Under $25', '$25 - $50', '$50 - $100', 'Over $100'];

  const filteredProducts = products.filter(p => {
    const categoryMatch = activeCategory === 'All' || p.category === activeCategory;
    
    let priceMatch = true;
    if (priceBucket === 'Under $25') priceMatch = p.price < 25;
    else if (priceBucket === '$25 - $50') priceMatch = p.price >= 25 && p.price <= 50;
    else if (priceBucket === '$50 - $100') priceMatch = p.price > 50 && p.price <= 100;
    else if (priceBucket === 'Over $100') priceMatch = p.price > 100;

    return categoryMatch && priceMatch;
  });

  return (
    <section id="shop" className="py-24 bg-dark-bg relative">
      {/* Decorative background glow */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-neon-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-app-text sm:text-4xl">
            Our Sustainable Selection
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-app-text-muted mx-auto">
            Carefully crafted products that are gentle on the earth and beautiful in your home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
              isFavorite={favorites?.some(f => f.id === product.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="flex flex-col items-center justify-center p-12 bg-dark-surface/30 rounded-2xl border border-dark-border text-center mt-6">
            <span className="text-4xl mb-4">🔍</span>
            <h3 className="text-xl font-bold text-app-text mb-2">No products found</h3>
            <p className="text-app-text-muted">
              We couldn't find any products matching your current filters.
            </p>
            <button 
              onClick={() => {
                if (setActiveCategory) setActiveCategory('All');
                if (setPriceBucket) setPriceBucket('All');
              }}
              className="mt-6 px-6 py-2 bg-dark-surface hover:bg-dark-border text-app-text rounded-full transition-colors border border-dark-border"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
