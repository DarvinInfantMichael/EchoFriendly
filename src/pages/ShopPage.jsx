import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Menu, X, Grid, Heart, Home, Navigation as NavIcon, Sparkles, Palette, Shirt, Gem } from 'lucide-react';
import TodayDiscount from '../components/TodayDiscount';
import SpecialOffersCarousel from '../components/SpecialOffersCarousel';
import ProductList from '../components/ProductList';
import { products } from '../data/products';

const categoryIcons = {
  'All': <Grid className="w-4 h-4" />,
  'Personal Care': <Heart className="w-4 h-4" />,
  'Home & Kitchen': <Home className="w-4 h-4" />,
  'On the Go': <NavIcon className="w-4 h-4" />,
  'Beauty': <Sparkles className="w-4 h-4" />,
  'Handmade': <Palette className="w-4 h-4" />,
  'Clothing': <Shirt className="w-4 h-4" />,
  'Accessories': <Gem className="w-4 h-4" />
};

export default function ShopPage({ onAddToCart, favorites, onToggleFavorite }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceBucket, setPriceBucket] = useState('All');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { user } = useAuth();
  
  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isDrawerOpen]);
  
  const categories = ['All', ...new Set(products.map(p => p.category))];
  const priceBuckets = ['All', 'Under $25', '$25 - $50', '$50 - $100', 'Over $100'];

  // Calculate the day of the year to pick a deterministic product every day
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff = today - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  // Feature a different product every day based on the day of the year
  const dealOfTheDay = products[dayOfYear % products.length] || products[0];

  return (
    <div className="w-full bg-dark-bg">
      {/* Top Navigation for Filters */}
      <div className="pt-16 pb-4 border-b border-dark-border/50 sticky top-0 z-40 bg-dark-bg/95 backdrop-blur supports-[backdrop-filter]:bg-dark-bg/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-3">
          
          {/* Categories */}
          <div className="flex items-center gap-4">
            {/* Hamburger Button to open Sidebar Drawer */}
            <button 
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold bg-app-surface hover:bg-orange-500/10 border border-app-border hover:border-orange-500/30 text-app-text hover:text-orange-500 transition-colors shrink-0"
            >
              <Menu className="w-4 h-4" />
              <span>All</span>
            </button>
            
            <div className="w-px h-6 bg-dark-border shrink-0"></div>

            <ul className="flex items-center gap-3 overflow-x-auto scrollbar-hide snap-x pb-1">
              {categories.map(category => (
                <li key={category} className="snap-start shrink-0">
                  <button
                    onClick={() => {
                      setActiveCategory(category);
                      document.getElementById('product-list')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-300 ${
                      activeCategory === category 
                        ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white border-transparent shadow-[0_0_15px_rgba(249,115,22,0.4)]' 
                        : 'text-app-text-muted hover:text-orange-500 hover:bg-orange-500/10 border border-transparent hover:border-orange-500/30'
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Slide-out Sidebar Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-app-bg/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsDrawerOpen(false)}
          ></div>
          
          {/* Drawer Content */}
          <div className="relative w-80 max-w-full bg-dark-bg h-full shadow-2xl flex flex-col transform transition-transform animate-slide-in-left overflow-y-auto border-r border-dark-border">
            <div className="p-6 flex items-center justify-between border-b border-dark-border/50 sticky top-0 bg-dark-bg/95 backdrop-blur z-10">
              <h2 className="text-xl font-extrabold text-app-text flex items-center gap-2">
                <Menu className="w-5 h-5 text-neon-accent" />
                Filters
              </h2>
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 rounded-full hover:bg-dark-surface text-app-text-muted hover:text-app-text transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 flex flex-col gap-8">
              {/* Category Sidebar */}
              <div className="bg-dark-surface/30 rounded-2xl p-6 border border-dark-border">
                <h3 className="text-lg font-bold text-app-text mb-6 flex items-center gap-2">
                  <Grid className="w-5 h-5 text-neon-accent" />
                  Categories
                </h3>
                <ul className="flex flex-col gap-2">
                  {categories.map(category => (
                    <li key={category}>
                      <button
                        onClick={() => {
                          setActiveCategory(category);
                          setIsDrawerOpen(false);
                          document.getElementById('product-list')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`flex items-center w-full text-left gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                          activeCategory === category
                            ? 'bg-eco-500 text-app-text shadow-lg shadow-eco-500/30'
                            : 'text-app-text-muted hover:text-app-text hover:bg-dark-surface border border-transparent hover:border-dark-border'
                        }`}
                      >
                        <span className={`${activeCategory === category ? 'text-app-text' : 'text-neon-accent/70'}`}>
                          {categoryIcons[category] || <Grid className="w-4 h-4" />}
                        </span>
                        <span className="font-medium">{category}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range Sidebar - Only visible if logged in */}
              {user && (
                <div className="bg-dark-surface/30 rounded-2xl p-6 border border-dark-border">
                  <h3 className="text-lg font-bold text-app-text mb-6 flex items-center gap-2">
                    <span className="text-neon-accent font-bold">$</span>
                    Price Range
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {priceBuckets.map(bucket => (
                      <li key={bucket}>
                        <button
                          onClick={() => {
                            setPriceBucket(bucket);
                            setIsDrawerOpen(false);
                            document.getElementById('product-list')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className={`flex items-center w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                            priceBucket === bucket
                              ? 'bg-neon-accent/10 text-neon-accent border border-neon-accent/30 font-bold'
                              : 'text-app-text-muted hover:text-app-text hover:bg-dark-surface border border-transparent hover:border-dark-border'
                          }`}
                        >
                          {bucket}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="pt-8">
        <SpecialOffersCarousel
          title={<>Special <span className="text-neon-accent">Offers</span></>}
          subtitle="Discover premium eco-friendly picks for you."
          products={products}
          onAddToCart={onAddToCart}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      </div>

      <div className="py-12 text-center relative">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-neon-accent/10 to-transparent pointer-events-none" />
        <div className="mb-6 inline-block px-6 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 font-bold tracking-wide animate-pulse relative z-10 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
          🎉 SEASON SALE: 20% OFF EVERYTHING! 🎉
        </div>
        <h1 className="text-4xl tracking-tight font-extrabold text-app-text sm:text-5xl md:text-6xl relative z-10">
          Shop Our <span className="text-neon-accent">Collection</span>
        </h1>
        <p className="mt-3 text-base text-app-text-muted sm:mt-5 sm:text-lg max-w-2xl mx-auto relative z-10">
          Every product is a step towards a greener, cleaner Earth. Find your favorites below.
        </p>
      </div>
      
      <TodayDiscount product={dealOfTheDay} onAddToCart={onAddToCart} favorites={favorites} onToggleFavorite={onToggleFavorite} />
      
      <div id="product-list">
        <ProductList 
          products={products} 
          onAddToCart={onAddToCart} 
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          priceBucket={priceBucket}
          setPriceBucket={setPriceBucket}
        />
      </div>
    </div>
  );
}
