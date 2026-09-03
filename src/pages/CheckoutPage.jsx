import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft, CheckCircle2, Truck, CreditCard, Package } from 'lucide-react';

export default function CheckoutPage({ cartItems, onClearCart }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    address: '',
    city: '',
    zip: '',
    phone: '',
  });

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 1000 ? 0 : 99; // Free shipping over 1000
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for order processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onClearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-32 px-4 text-center">
        <div className="w-24 h-24 bg-neon-accent/20 rounded-full flex items-center justify-center mb-8 border-2 border-neon-accent shadow-[0_0_50px_rgba(157,255,0,0.3)]">
          <CheckCircle2 className="w-12 h-12 text-neon-accent" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-app-text mb-6">Order Confirmed!</h1>
        <p className="text-xl text-app-text-muted max-w-2xl mx-auto mb-12">
          Thank you for choosing Earthly. Your eco-friendly products will be shipped to you shortly. You have taken another step towards a sustainable future!
        </p>
        <button
          onClick={() => navigate('/shop')}
          className="bg-gradient-to-r from-pink-500 to-orange-500 text-white border-transparent px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  if (cartItems.length === 0 && !isSuccess) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-32">
        <Package className="w-16 h-16 text-gray-600 mb-4" />
        <h2 className="text-3xl font-bold text-app-text mb-4">Your cart is empty</h2>
        <button 
          onClick={() => navigate('/shop')}
          className="text-neon-accent hover:underline flex items-center gap-2 mt-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Go to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
      <button 
        onClick={() => navigate(-1)}
        className="text-app-text-muted hover:text-app-text flex items-center gap-2 mb-8 transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back
      </button>

      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-app-text tracking-tight mb-2">Checkout</h1>
        <p className="text-app-text-muted">Complete your delivery details to finish your order.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Delivery Form */}
        <div className="lg:col-span-7 space-y-8">
          <form id="checkout-form" onSubmit={handleSubmit} className="glass-panel p-8 md:p-10 rounded-3xl space-y-8 relative overflow-hidden">
            {isSubmitting && (
              <div className="absolute inset-0 bg-dark-bg/80 backdrop-blur-sm z-10 flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-neon-accent"></div>
              </div>
            )}
            
            <div>
              <h2 className="text-2xl font-bold text-app-text mb-6 flex items-center gap-3">
                <Truck className="w-6 h-6 text-neon-accent" />
                Delivery Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-app-text-muted">Full Name</label>
                  <input 
                    required
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-app-surface border border-app-border rounded-xl p-4 text-app-text placeholder-gray-600 focus:border-neon-accent focus:ring-1 focus:ring-neon-accent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-app-text-muted">Email Address</label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-app-surface border border-app-border rounded-xl p-4 text-app-text placeholder-gray-600 focus:border-neon-accent focus:ring-1 focus:ring-neon-accent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-app-text-muted">Street Address</label>
                  <input 
                    required
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-app-surface border border-app-border rounded-xl p-4 text-app-text placeholder-gray-600 focus:border-neon-accent focus:ring-1 focus:ring-neon-accent transition-all outline-none"
                    placeholder="123 Earthly Way"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-app-text-muted">City</label>
                  <input 
                    required
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-app-surface border border-app-border rounded-xl p-4 text-app-text placeholder-gray-600 focus:border-neon-accent focus:ring-1 focus:ring-neon-accent transition-all outline-none"
                    placeholder="Mumbai"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-app-text-muted">ZIP / Postal Code</label>
                  <input 
                    required
                    type="text" 
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="w-full bg-app-surface border border-app-border rounded-xl p-4 text-app-text placeholder-gray-600 focus:border-neon-accent focus:ring-1 focus:ring-neon-accent transition-all outline-none"
                    placeholder="400001"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-app-text-muted">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-app-surface border border-app-border rounded-xl p-4 text-app-text placeholder-gray-600 focus:border-neon-accent focus:ring-1 focus:ring-neon-accent transition-all outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-app-border">
              <h2 className="text-2xl font-bold text-app-text mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-neon-accent" />
                Payment Method
              </h2>
              <div className="bg-eco-500/10 border border-eco-500/20 rounded-xl p-4 flex items-center gap-4 text-eco-400">
                <div className="w-4 h-4 rounded-full bg-neon-accent ring-4 ring-neon-accent/20"></div>
                <span className="font-medium">Cash on Delivery (Eco-Delivery Mode)</span>
              </div>
            </div>
          </form>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 glass-panel p-8 md:p-10 rounded-3xl">
            <h2 className="text-2xl font-bold text-app-text mb-8">Order Summary</h2>
            
            <div className="space-y-6 max-h-[40vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 rounded-xl bg-app-surface overflow-hidden flex-shrink-0 border border-app-border">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-app-text font-medium line-clamp-1">{item.name}</h4>
                    <p className="text-app-text-muted text-sm mb-1">Qty: {item.quantity}</p>
                    <p className="text-neon-accent font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-app-border space-y-4">
              <div className="flex justify-between text-app-text-muted">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-app-text-muted">
                <span>Shipping</span>
                <span>{shipping === 0 ? <span className="text-eco-400 font-medium">Free</span> : `₹${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between items-end pt-4 border-t border-app-border mt-4">
                <span className="text-lg font-bold text-app-text">Total</span>
                <span className="text-3xl font-extrabold text-neon-accent">₹{total.toFixed(2)}</span>
              </div>
            </div>

            <button 
              form="checkout-form"
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-10 bg-gradient-to-r from-pink-500 to-orange-500 text-white border-transparent px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(157,255,0,0.2)] disabled:opacity-50 disabled:pointer-events-none"
            >
              {isSubmitting ? 'Processing...' : `Place Order - ₹${total.toFixed(2)}`}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
