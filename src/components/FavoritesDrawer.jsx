import React from 'react';
import { X, ShoppingCart, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FavoritesDrawer({ 
  isOpen, 
  onClose, 
  favorites, 
  onRemoveFavorite,
  onAddToCart
}) {
  const navigate = useNavigate();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-app-bg/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full max-w-md bg-dark-bg/95 backdrop-blur-2xl border-l border-app-border shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-app-border">
          <h2 className="text-xl font-bold text-app-text">Your Favorites</h2>
          <div className="flex items-center gap-4">
            <button 
              onClick={onClose}
              className="p-2 -mr-2 text-app-text-muted hover:text-app-text hover:bg-app-surface-hover rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {favorites.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-app-text-muted">
              <div className="w-20 h-20 bg-app-surface rounded-full flex items-center justify-center mb-2 border border-app-border shadow-inner">
                <Heart className="w-8 h-8 text-gray-500" />
              </div>
              <p className="text-lg font-medium text-app-text">Your favorites list is empty.</p>
              <p className="text-sm">Explore our products and save your favorites here.</p>
              <button 
                onClick={() => { onClose(); navigate('/'); }}
                className="mt-4 text-neon-accent font-medium hover:text-app-text underline underline-offset-4 transition-colors"
              >
                Explore Products
              </button>
            </div>
          ) : (
            <ul className="space-y-6 text-left">
              {favorites.map((item) => (
                <li key={item.id} className="flex py-2">
                  <div 
                    className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-app-border bg-app-surface cursor-pointer" 
                    onClick={() => { onClose(); navigate(`/product/${item.id}`); }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-app-text">
                        <h3 
                          className="line-clamp-2 cursor-pointer hover:text-neon-accent transition-colors" 
                          onClick={() => { onClose(); navigate(`/product/${item.id}`); }}
                        >
                          {item.name}
                        </h3>
                        <p className="ml-4 text-neon-accent">₹{item.price.toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-app-text-muted">{item.category}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm mt-2">
                      <button
                        type="button"
                        onClick={() => { onAddToCart(item); onClose(); }}
                        className="flex items-center gap-1 font-medium text-neon-accent hover:text-app-text transition-colors"
                      >
                        <ShoppingCart className="w-4 h-4" /> Add to Cart
                      </button>

                      <button
                        type="button"
                        onClick={() => onRemoveFavorite(item)}
                        className="font-medium text-red-400 hover:text-red-300 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
