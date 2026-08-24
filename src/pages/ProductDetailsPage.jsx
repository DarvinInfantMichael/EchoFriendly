import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Leaf, Droplet, Wind, ArrowRight, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';

export default function ProductDetailsPage({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find((p) => p.id === parseInt(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-32">
        <h2 className="text-3xl font-bold text-white mb-4">Product Not Found</h2>
        <button 
          onClick={() => navigate('/')}
          className="text-neon-accent hover:underline flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </button>
      </div>
    );
  }

  const { environmentalImpact: impact } = product;

  return (
    <div className="flex-1 bg-dark-bg w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        <button 
          onClick={() => navigate('/')}
          className="text-gray-400 hover:text-white flex items-center gap-2 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Image Section */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-gray-900 rounded-3xl overflow-hidden glass-panel">
            <img 
              src={product.image} 
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-lighten"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 to-transparent" />
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <span className="text-neon-accent text-sm font-semibold tracking-wider uppercase mb-3">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              {product.name}
            </h1>
            <span className="text-3xl font-bold text-gray-300 mb-8">
              ${product.price.toFixed(2)}
            </span>
            
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              {product.description}
            </p>

            {/* Environmental Impact Analysis */}
            {impact && (
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-white flex items-center gap-3 mb-6">
                  <Leaf className="w-6 h-6 text-neon-accent" />
                  Environmental Impact Analysis
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                    <div className="flex justify-center mb-3 text-blue-400">
                      <Droplet className="w-8 h-8" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{impact.plasticSaved}g</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Plastic Saved/yr</div>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                    <div className="flex justify-center mb-3 text-green-400">
                      <Wind className="w-8 h-8" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{impact.carbonSaved}kg</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">CO2 Saved/yr</div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                    <div className="flex justify-center mb-3 text-cyan-400">
                      <Droplet className="w-8 h-8" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{impact.waterSaved}L</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Water Saved</div>
                  </div>
                </div>

                {/* Interactive Comparison */}
                <div className="bg-black/30 rounded-2xl p-6 md:p-8 border border-white/5 shadow-inner">
                  <h4 className="text-base font-medium text-gray-300 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span>Yearly Plastic Waste</span>
                    <span className="text-sm text-gray-500 font-normal">vs {impact.comparison.traditional}</span>
                  </h4>
                  
                  {/* Traditional Bar */}
                  <div className="mb-5 group relative">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">{impact.comparison.traditional}</span>
                      <span className="text-red-400 font-bold">{impact.comparison.traditionalPlastic}g</span>
                    </div>
                    <div className="h-4 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-red-900 to-red-500 w-full" />
                    </div>
                  </div>

                  {/* Eco Bar */}
                  <div className="group relative">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-neon-accent font-medium">{product.name}</span>
                      <span className="text-neon-accent font-bold">{impact.comparison.ecoPlastic}g</span>
                    </div>
                    <div className="h-4 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-neon-accent w-full origin-left transition-all duration-1000"
                        style={{ width: '2%', minWidth: '4px' }}
                      />
                    </div>
                  </div>
                  
                  <p className="mt-6 text-base text-gray-400 flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                    <ArrowRight className="w-5 h-5 text-neon-accent shrink-0 mt-0.5" />
                    <span>By choosing this product, you prevent <strong className="text-white">{impact.plasticSaved}g</strong> of plastic waste from entering landfills each year.</span>
                  </p>
                </div>
              </div>
            )}

            <div className="mt-auto pt-8 border-t border-white/10">
              <button 
                onClick={() => onAddToCart(product)}
                className="w-full bg-neon-accent text-dark-bg px-8 py-4 rounded-2xl font-bold text-lg hover:bg-neon-accent/90 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(157,255,0,0.3)] hover:shadow-[0_0_30px_rgba(157,255,0,0.5)] flex justify-center items-center gap-3"
              >
                Add to Cart - ${product.price.toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
