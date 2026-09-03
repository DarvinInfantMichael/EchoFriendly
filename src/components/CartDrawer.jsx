import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart
}) {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

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
          <h2 className="text-xl font-bold text-app-text">Your Cart</h2>
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
              className="p-2 -mr-2 text-app-text-muted hover:text-app-text hover:bg-app-surface-hover rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-app-text-muted">
              <div className="w-20 h-20 bg-app-surface rounded-full flex items-center justify-center mb-2 border border-app-border shadow-inner">
                <Trash2 className="w-8 h-8 text-gray-500" />
              </div>
              <p className="text-lg font-medium text-app-text">Your cart is empty.</p>
              <p className="text-sm">Looks like you haven't added any eco-friendly products yet.</p>
              <button 
                onClick={onClose}
                className="mt-4 text-neon-accent font-medium hover:text-app-text underline underline-offset-4 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6 text-left">
              {cartItems.map((item) => (
                <li key={item.id} className="flex py-2">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-app-border bg-app-surface">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-app-text">
                        <h3 className="line-clamp-2">{item.name}</h3>
                        <p className="ml-4 text-neon-accent">₹{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-app-text-muted">{item.category}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm mt-2">
                      <div className="flex items-center border border-app-border rounded-lg bg-app-bg/20">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 text-app-text-muted hover:text-app-text hover:bg-app-surface-hover rounded-l-lg transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 font-medium text-app-text">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 text-app-text-muted hover:text-app-text hover:bg-app-surface-hover rounded-r-lg transition-colors"
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
          <div className="border-t border-app-border px-6 py-6 bg-app-bg/20">
            <div className="flex justify-between text-base font-medium text-app-text mb-4">
              <p>Subtotal</p>
              <p className="text-neon-accent">₹{subtotal.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-app-text-muted mb-6 text-left">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <button
                onClick={handleCheckout}
                className="w-full flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-pink-500 to-orange-500 px-6 py-4 text-base font-medium text-white border-transparent shadow-sm hover:bg-white hover:scale-[1.02] transition-all"
              >
                Checkout Securely
              </button>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-app-text-muted">
              <p>
                or{' '}
                <button
                  type="button"
                  className="font-medium text-neon-accent hover:text-app-text transition-colors"
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
