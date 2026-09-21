import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SpecialOffersCarousel({ title, subtitle, products, category, onAddToCart, favorites, onToggleFavorite }) {
  const carouselRef = useRef(null);

  // Get one product from each category
  const categoryMap = new Map();
  products.forEach(p => {
    if (p.category && !categoryMap.has(p.category)) {
      categoryMap.set(p.category, p);
    }
  });
  const displayProducts = Array.from(categoryMap.values());

  if (displayProducts.length === 0) return null;

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-dark-bg relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-accent/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-eco-500/20 text-eco-400 text-sm font-bold tracking-wider uppercase mb-3 border border-eco-500/30">
              Limited Time
            </div>
            <h2 className="text-3xl font-extrabold text-app-text flex items-center gap-3">
              {title || <>Special Offers: <span className="text-neon-accent">{category}</span></>}
            </h2>
            <p className="text-app-text-muted mt-2">{subtitle || 'Discover premium eco-friendly picks for you.'}</p>
          </div>
          
          <div className="flex gap-3 self-start sm:self-end">
            <button 
              onClick={scrollLeft}
              className="p-3 rounded-full bg-dark-surface border border-dark-border text-app-text-muted hover:text-app-text hover:border-neon-accent hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all duration-300"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollRight}
              className="p-3 rounded-full bg-dark-surface border border-dark-border text-app-text-muted hover:text-app-text hover:border-neon-accent hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all duration-300"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="relative">
          {/* Edge fade effects */}
          <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-2"
          >
            {displayProducts.map(product => (
              <div key={product.id} className="w-[280px] sm:w-[320px] snap-start shrink-0 transition-transform duration-300 hover:-translate-y-2">
                <ProductCard 
                  product={product}
                  onAddToCart={onAddToCart}
                  isFavorite={favorites?.some(f => f.id === product.id)}
                  onToggleFavorite={onToggleFavorite}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
