import React from 'react';
import { ShoppingCart, Leaf, User as UserIcon, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ cartItemCount, onOpenCart }) {
  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-dark-bg/60 border-b border-dark-border shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <Leaf className="h-8 w-8 text-neon-accent" />
            <span className="font-bold text-xl tracking-tight text-white">Earthly</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-neon-accent font-medium transition-colors">Home</Link>
            <a href="/#shop" className="text-gray-300 hover:text-neon-accent font-medium transition-colors">Shop</a>
            <Link to="/about" className="text-gray-300 hover:text-neon-accent font-medium transition-colors">About Us</Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="hidden sm:flex items-center gap-4">
                <span className="text-sm font-medium text-eco-400">
                  Welcome, {user.name}
                </span>
                <button
                  onClick={logout}
                  className="p-2 text-gray-300 hover:text-red-400 rounded-full transition-all hover:bg-red-500/10"
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all hover:border-eco-500/50"
              >
                <UserIcon className="h-4 w-4" />
                Sign In
              </Link>
            )}

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
