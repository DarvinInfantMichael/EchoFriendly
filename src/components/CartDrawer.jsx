import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart
}) {
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full max-w-md bg-dark-bg/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">Your Cart</h2>
          <div className="flex items-center gap-4">
            {cartItems.length > 0 && (
              <button 
                onClick={onClearCart}
                className="text-sm font-medium text-red-400 hover:text-red-300 transition-colors flex items-center gap-1"
                title="Clear Cart"
              >
                <Trash2 className="w-4 h-4" />
                Clear
              </button>
            )}
            <button 
              onClick={onClose}
              className="p-2 -mr-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-gray-400">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-2 border border-white/10 shadow-inner">
                <Trash2 className="w-8 h-8 text-gray-500" />
              </div>
              <p className="text-lg font-medium text-white">Your cart is empty.</p>
              <p className="text-sm">Looks like you haven't added any eco-friendly products yet.</p>
              <button 
                onClick={onClose}
                className="mt-4 text-neon-accent font-medium hover:text-white underline underline-offset-4 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6 text-left">
              {cartItems.map((item) => (
                <li key={item.id} className="flex py-2">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-gray-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-center opacity-90"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-white">
                        <h3 className="line-clamp-2">{item.name}</h3>
                        <p className="ml-4 text-neon-accent">₹{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-400">{item.category}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm mt-2">
                      <div className="flex items-center border border-white/20 rounded-lg bg-black/20">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-l-lg transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 font-medium text-white">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-r-lg transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
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

        {cartItems.length > 0 && (
          <div className="border-t border-white/10 px-6 py-6 bg-black/20">
            <div className="flex justify-between text-base font-medium text-white mb-4">
              <p>Subtotal</p>
              <p className="text-neon-accent">₹{subtotal.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-400 mb-6 text-left">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <button
                className="w-full flex items-center justify-center rounded-full border border-transparent bg-neon-accent px-6 py-4 text-base font-medium text-dark-bg shadow-sm hover:bg-white hover:scale-[1.02] transition-all"
              >
                Checkout Securely
              </button>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-400">
              <p>
                or{' '}
                <button
                  type="button"
                  className="font-medium text-neon-accent hover:text-white transition-colors"
                  onClick={onClose}
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
