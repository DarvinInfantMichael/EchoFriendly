import React, { useState, useEffect } from 'react';
import { Tag, Clock, ArrowRight, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TodayDiscount({ product, onAddToCart }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0); // Next midnight
      
      const difference = midnight - now;
      
      if (difference > 0) {
        return {
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { hours: 0, minutes: 0, seconds: 0 };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  if (!product) return null;

  const discountPercentage = 30;
  const discountedPrice = (product.price * (1 - discountPercentage / 100)).toFixed(2);

  return (
    <section className="py-16 relative overflow-hidden bg-dark-bg">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-accent/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 lg:p-12 border border-neon-accent/20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Image side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-accent/20 to-eco-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark-surface">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-lg shadow-red-500/30">
                  <Tag className="w-3 h-3" />
                  {discountPercentage}% OFF
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-accent/10 text-neon-accent text-sm font-medium mb-6 border border-neon-accent/20">
                <Clock className="w-4 h-4" />
                Deal of the Day
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                {product.name}
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 line-clamp-3">
                {product.description}
              </p>

              {/* Price block */}
              <div className="flex items-end gap-4 mb-8">
                <div className="flex flex-col">
                  <span className="text-gray-500 line-through text-lg font-medium">${product.price.toFixed(2)}</span>
                  <span className="text-5xl font-extrabold text-neon-accent">${discountedPrice}</span>
                </div>
              </div>

              {/* Timer */}
              <div className="flex items-center gap-4 mb-10">
                <div className="flex flex-col items-center p-3 glass-panel rounded-xl min-w-[70px]">
                  <span className="text-2xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-xs text-gray-500 uppercase">Hours</span>
                </div>
                <span className="text-2xl font-bold text-gray-600">:</span>
                <div className="flex flex-col items-center p-3 glass-panel rounded-xl min-w-[70px]">
                  <span className="text-2xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-xs text-gray-500 uppercase">Mins</span>
                </div>
                <span className="text-2xl font-bold text-gray-600">:</span>
                <div className="flex flex-col items-center p-3 glass-panel rounded-xl min-w-[70px]">
                  <span className="text-2xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="text-xs text-gray-500 uppercase">Secs</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 w-full">
                <button 
                  onClick={() => onAddToCart({ ...product, price: parseFloat(discountedPrice) })}
                  className="flex-1 flex items-center justify-center gap-2 bg-neon-accent hover:bg-neon-accent/90 text-dark-bg font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(205,255,100,0.4)] hover-lift"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <Link 
                  to={`/product/${product.id}`}
                  className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium py-4 px-8 rounded-xl border border-white/10 transition-all duration-300 hover-lift"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
