import React, { useEffect } from 'react';
import { X, Leaf, Droplet, Wind, ArrowRight } from 'lucide-react';

export default function ProductDetailsModal({ product, isOpen, onClose, onAddToCart }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const { environmentalImpact: impact } = product;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-dark-bg border border-white/10 rounded-2xl shadow-2xl flex flex-col md:flex-row glass-panel transform transition-all animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-gray-400 hover:text-white hover:bg-black/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-2/5 relative min-h-[300px] md:min-h-full bg-gray-900">
          <img 
            src={product.image} 
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-lighten"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-dark-bg" />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col relative">
          <span className="text-neon-accent text-sm font-semibold tracking-wider uppercase mb-2">
            {product.category}
          </span>
          <h2 className="text-3xl font-bold text-white mb-2">{product.name}</h2>
          <span className="text-2xl font-bold text-gray-300 mb-6">${product.price.toFixed(2)}</span>
          
          <p className="text-gray-400 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Environmental Impact Analysis */}
          {impact && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                <Leaf className="w-5 h-5 text-neon-accent" />
                Environmental Impact Analysis
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="flex justify-center mb-2 text-blue-400">
                    <Droplet className="w-6 h-6" />
                  </div>
                  <div className="text-xl font-bold text-white">{impact.plasticSaved}g</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Plastic Saved/yr</div>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="flex justify-center mb-2 text-green-400">
                    <Wind className="w-6 h-6" />
                  </div>
                  <div className="text-xl font-bold text-white">{impact.carbonSaved}kg</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">CO2 Saved/yr</div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="flex justify-center mb-2 text-cyan-400">
                    <Droplet className="w-6 h-6" />
                  </div>
                  <div className="text-xl font-bold text-white">{impact.waterSaved}L</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Water Saved</div>
                </div>
              </div>

              {/* Interactive Comparison */}
              <div className="bg-black/30 rounded-xl p-5 border border-white/5">
                <h4 className="text-sm font-medium text-gray-300 mb-4 flex items-center justify-between">
                  <span>Yearly Plastic Waste</span>
                  <span className="text-xs text-gray-500">vs {impact.comparison.traditional}</span>
                </h4>
                
                {/* Traditional Bar */}
                <div className="mb-3 group relative">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">{impact.comparison.traditional}</span>
                    <span className="text-red-400 font-bold">{impact.comparison.traditionalPlastic}g</span>
                  </div>
                  <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-900 to-red-500 w-full" />
                  </div>
                </div>

                {/* Eco Bar */}
                <div className="group relative">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-neon-accent font-medium">{product.name}</span>
                    <span className="text-neon-accent font-bold">{impact.comparison.ecoPlastic}g</span>
                  </div>
                  <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-neon-accent w-full origin-left transition-all duration-1000"
                      style={{ width: '2%', minWidth: '4px' }} // Just to show a tiny sliver for 0g
                    />
                  </div>
                </div>
                
                <p className="mt-4 text-sm text-gray-400 flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-neon-accent shrink-0 mt-0.5" />
                  <span>By choosing this product, you prevent <strong className="text-white">{impact.plasticSaved}g</strong> of plastic waste from entering landfills each year.</span>
                </p>
              </div>
            </div>
          )}

          <div className="mt-auto pt-6 border-t border-white/10">
            <button 
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full sm:w-auto bg-neon-accent text-dark-bg px-8 py-3 rounded-xl font-bold text-lg hover:bg-neon-accent/90 transition-colors shadow-[0_0_20px_rgba(157,255,0,0.3)] hover:shadow-[0_0_30px_rgba(157,255,0,0.5)]"
            >
              Add to Cart - ${product.price.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
