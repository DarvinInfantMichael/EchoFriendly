import React from 'react';
import { ShoppingCart, Leaf, User as UserIcon, LogOut, Heart, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ cartItemCount, onOpenCart, favoriteCount, onOpenFavorites }) {
  const { user, logout } = useAuth();
  const { isLightMode, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-40 w-full bg-gradient-to-r from-pink-500 to-orange-500 backdrop-blur-2xl border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to={user ? "/shop" : "/"} className="flex items-center gap-2 transition-transform hover:scale-105">
            <Leaf className="h-8 w-8 text-white" />
            <span className="font-bold text-xl tracking-tight text-white">Earthly</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {!user && (
              <Link to="/" className="text-white/80 hover:text-white font-medium transition-colors">Home</Link>
            )}
            <Link to="/shop" className="text-white/80 hover:text-white font-medium transition-colors">Shop</Link>
            <Link to="/about" className="text-white/80 hover:text-white font-medium transition-colors">About Us</Link>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button 
              onClick={onOpenFavorites}
              className="relative p-2 text-white/80 hover:text-white rounded-full transition-all hover:bg-white/10"
              aria-label="Open favorites"
            >
              <Heart className="h-6 w-6" />
              {favoriteCount > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-transparent">
                  {favoriteCount}
                </span>
              )}
            </button>

            <button 
              onClick={onOpenCart}
              className="relative p-2 text-white/80 hover:text-white rounded-full transition-all hover:bg-white/10"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-pink-600 shadow-sm ring-2 ring-transparent">
                  {cartItemCount}
                </span>
              )}
            </button>

            {user ? (
              <div className="flex items-center gap-2">
                <button 
                  onClick={toggleTheme}
                  className="p-2 text-white/80 hover:text-white rounded-full transition-all hover:bg-white/10"
                  title="Toggle Theme"
                >
                  {isLightMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </button>
                <Link
                  to="/profile"
                  className="p-2 text-white/80 hover:text-white rounded-full transition-all hover:bg-white/10"
                  title="Profile"
                >
                  <UserIcon className="h-5 w-5" />
                </Link>
                <button
                  onClick={logout}
                  className="p-2 text-white/80 hover:text-white rounded-full transition-all hover:bg-white/10"
                  title="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden sm:flex items-center gap-2 px-6 py-2 text-sm font-bold text-pink-600 bg-white hover:bg-gray-100 rounded-full transition-all shadow-md"
              >
                <UserIcon className="h-4 w-4" />
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
