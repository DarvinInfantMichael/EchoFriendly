import React from 'react';
import { ShoppingCart, Leaf } from 'lucide-react';

export default function Navbar({ cartItemCount, onOpenCart }) {
  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-dark-bg/60 border-b border-dark-border shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-neon-accent" />
            <span className="font-bold text-xl tracking-tight text-white">Earthly</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-neon-accent font-medium transition-colors">Home</a>
            <a href="#shop" className="text-gray-300 hover:text-neon-accent font-medium transition-colors">Shop</a>
            <a href="#about" className="text-gray-300 hover:text-neon-accent font-medium transition-colors">About Us</a>
          </div>

          <div className="flex items-center">
            <button 
              onClick={onOpenCart}
              className="relative p-2 text-gray-300 hover:text-neon-accent rounded-full transition-all hover:bg-white/5"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-neon-accent text-[10px] font-bold text-dark-bg shadow-sm ring-2 ring-dark-bg">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
