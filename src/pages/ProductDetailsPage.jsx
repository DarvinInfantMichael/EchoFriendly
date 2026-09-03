import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Leaf, Droplet, Wind, ArrowRight, ArrowLeft, Star, Heart, Truck, Package, RefreshCcw, CheckCircle } from 'lucide-react';
import { products } from '../data/products';
import { useAuth } from '../context/AuthContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetailsPage({ onAddToCart, favorites, onToggleFavorite }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const product = products.find((p) => p.id === parseInt(id));

  const defaultReviews = [
    {
      id: 'mock-1',
      userName: 'Sarah Jenkins',
      avatar: 'https://i.pravatar.cc/150?u=sarah',
      text: 'Absolutely love this! It feels so much better knowing I am reducing my plastic waste. Highly recommend.',
      rating: 5,
      date: '10/12/2023'
    },
    {
      id: 'mock-2',
      userName: 'Michael T.',
      avatar: 'https://i.pravatar.cc/150?u=michael',
      text: 'Great quality, but took a few days to get used to it. Still, a solid purchase for the environment.',
      rating: 4,
      date: '11/05/2023'
    }
  ];

  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem(`reviews_${id}`);
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.length > 0 ? parsed : defaultReviews;
    }
    return defaultReviews;
  });
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(5);
  const [recentlyViewedIds, setRecentlyViewedIds] = useState([]);

  // New states for fashion layout
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  
  const sizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
  const disabledSizes = ['L', 'XXXL']; // Mock out of stock sizes

  useEffect(() => {
    localStorage.setItem(`reviews_${id}`, JSON.stringify(reviews));
  }, [reviews, id]);

  // Track Recently Viewed Items
  useEffect(() => {
    if (!product) return;
    const storedHistory = localStorage.getItem('recentlyViewed');
    let history = storedHistory ? JSON.parse(storedHistory) : [];
    
    // Remove current product if it exists to move it to the front
    history = history.filter(viewedId => viewedId !== product.id);
    // Add to front
    history.unshift(product.id);
    // Keep max 5 items to show up to 4 other items
    if (history.length > 5) {
      history = history.slice(0, 5);
    }
    
    localStorage.setItem('recentlyViewed', JSON.stringify(history));
    setRecentlyViewedIds(history);
  }, [id, product]);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.trim()) return;
    
    const review = {
      id: Date.now(),
      userName: user?.name || 'Anonymous',
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'Anonymous')}&background=random`,
      text: newReview,
      rating: rating,
      date: new Date().toLocaleDateString()
    };
    
    setReviews([...reviews, review]);
    setNewReview('');
    setRating(5);
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isFavorite = favorites?.some(f => f.id === product?.id);

  // Compute products to show (excluding current one)
  const recentlyViewedProducts = recentlyViewedIds
    .filter(viewedId => viewedId !== product?.id)
    .map(viewedId => products.find(p => p.id === viewedId))
    .filter(Boolean)
    .slice(0, 4); // Show max 4 items

  if (!product) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-32">
        <h2 className="text-3xl font-bold text-app-text mb-4">Product Not Found</h2>
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
  const thumbnails = product.gallery || [product.image, product.image, product.image]; // Mock gallery thumbnails if no gallery provided

  return (
    <div className="flex-1 bg-dark-bg w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        <button 
          onClick={() => navigate('/')}
          className="text-app-text-muted hover:text-app-text flex items-center gap-2 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Image Gallery Section */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:w-20 shrink-0 scrollbar-hide">
              {thumbnails.map((thumb, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveThumbnail(idx)}
                  className={`shrink-0 w-20 h-24 rounded-lg overflow-hidden border-2 transition-all ${activeThumbnail === idx ? 'border-neon-accent shadow-[0_0_10px_rgba(157,255,0,0.3)]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={thumb} alt="Thumbnail" className="w-full h-full object-cover bg-app-surface" />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 relative aspect-[4/5] md:aspect-auto md:h-[600px] bg-app-surface rounded-3xl overflow-hidden glass-panel border border-app-border flex items-center justify-center">
              <img 
                src={thumbnails[activeThumbnail]} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-contain p-4"
                style={{ mixBlendMode: 'var(--app-blend)' }}
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:col-span-5 flex flex-col">
            <h1 className="text-3xl md:text-4xl font-extrabold text-app-text mb-2 leading-tight uppercase">
              {product.name}
            </h1>
            
            {product.weight && (
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-dark-bg/90 text-white shadow-sm border border-white/20">
                  {product.weight}
                </span>
              </div>
            )}
            
            {product.isSale && (
              <div className="mb-4">
                <span className="bg-dark-surface text-app-text border border-app-border px-4 py-1.5 rounded text-sm font-bold tracking-wider">
                  40% off
                </span>
              </div>
            )}

            <div className="flex flex-col mb-4">
              {product.isSale && (
                <span className="text-lg text-gray-500 line-through mb-1 font-medium">
                  Rs. {product.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="text-4xl font-bold text-app-text">
                Rs. {product.price.toFixed(2)}
              </span>
              <p className="text-sm text-app-text-muted mt-2 font-medium">Shipping calculated at checkout.</p>
            </div>
            
            <div className="flex items-center gap-2 mb-8 text-eco-500 font-bold tracking-wide">
              <CheckCircle className="w-5 h-5 fill-eco-500 text-dark-bg" />
              In stock!
            </div>
            
            {/* Size Selector */}
            <div className="mb-8">
              <span className="block text-sm font-bold text-app-text mb-3">size:</span>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {sizes.map(size => {
                  const isOutOfStock = disabledSizes.includes(size);
                  return (
                    <button
                      key={size}
                      disabled={isOutOfStock}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 rounded-lg text-sm font-bold transition-all border ${
                        isOutOfStock 
                          ? 'bg-app-surface text-gray-600 border-app-border cursor-not-allowed line-through' 
                          : selectedSize === size
                            ? 'bg-white text-dark-bg border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                            : 'bg-transparent text-app-text border-app-border hover:border-white'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 mb-10 border-b border-app-border pb-10">
              {/* Quantity Selector */}
              <div className="flex items-center bg-app-surface rounded-lg border border-app-border h-14">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 text-app-text hover:text-neon-accent h-full flex items-center justify-center font-bold text-xl transition-colors"
                >
                  -
                </button>
                <span className="w-8 text-center text-app-text font-bold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 text-app-text hover:text-neon-accent h-full flex items-center justify-center font-bold text-xl transition-colors"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button 
                onClick={() => selectedSize && onAddToCart({ ...product, quantity, size: selectedSize })}
                className={`flex-1 h-14 rounded-lg font-extrabold text-sm tracking-wider uppercase transition-all ${
                  selectedSize 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-app-bg text-app-text border border-app-border hover:bg-app-surface'
                }`}
              >
                {selectedSize ? `Add to Cart` : 'SELECT THE OPTIONS ABOVE'}
              </button>
              
              {/* Favorite Button */}
              <button 
                onClick={() => onToggleFavorite(product)}
                className="h-14 w-14 shrink-0 rounded-lg bg-app-surface border border-app-border flex items-center justify-center hover:bg-app-surface-hover transition-colors group"
              >
                <Heart className={`w-6 h-6 transition-transform group-hover:scale-110 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-app-text'}`} />
              </button>
            </div>
            
            <p className="text-base text-app-text-muted leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Environmental Impact Analysis */}
            {impact && (
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-app-text flex items-center gap-3 mb-6">
                  <Leaf className="w-6 h-6 text-neon-accent" />
                  Environmental Impact Analysis
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div className="bg-app-surface border border-app-border rounded-2xl p-6 text-center hover:bg-app-surface-hover transition-colors">
                    <div className="flex justify-center mb-3 text-blue-400">
                      <Droplet className="w-8 h-8" />
                    </div>
                    <div className="text-2xl font-bold text-app-text mb-1">{impact.plasticSaved}g</div>
                    <div className="text-xs text-app-text-muted uppercase tracking-wider font-medium">Plastic Saved/yr</div>
                  </div>
                  
                  <div className="bg-app-surface border border-app-border rounded-2xl p-6 text-center hover:bg-app-surface-hover transition-colors">
                    <div className="flex justify-center mb-3 text-green-400">
                      <Wind className="w-8 h-8" />
                    </div>
                    <div className="text-2xl font-bold text-app-text mb-1">{impact.carbonSaved}kg</div>
                    <div className="text-xs text-app-text-muted uppercase tracking-wider font-medium">CO2 Saved/yr</div>
                  </div>

                  <div className="bg-app-surface border border-app-border rounded-2xl p-6 text-center hover:bg-app-surface-hover transition-colors">
                    <div className="flex justify-center mb-3 text-cyan-400">
                      <Droplet className="w-8 h-8" />
                    </div>
                    <div className="text-2xl font-bold text-app-text mb-1">{impact.waterSaved}L</div>
                    <div className="text-xs text-app-text-muted uppercase tracking-wider font-medium">Water Saved</div>
                  </div>
                </div>

                {/* Interactive Comparison */}
                <div className="bg-app-bg/30 rounded-2xl p-6 md:p-8 border border-app-border shadow-inner">
                  <h4 className="text-base font-medium text-app-text-muted mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span>Yearly Plastic Waste</span>
                    <span className="text-sm text-gray-500 font-normal">vs {impact.comparison.traditional}</span>
                  </h4>
                  
                  {/* Traditional Bar */}
                  <div className="mb-5 group relative">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-app-text-muted">{impact.comparison.traditional}</span>
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
                  
                  <p className="mt-6 text-base text-app-text-muted flex items-start gap-3 bg-app-surface p-4 rounded-xl border border-app-border">
                    <ArrowRight className="w-5 h-5 text-neon-accent shrink-0 mt-0.5" />
                    <span>By choosing this product, you prevent <strong className="text-app-text">{impact.plasticSaved}g</strong> of plastic waste from entering landfills each year.</span>
                  </p>
                </div>
              </div>
            )}

            <div className="mt-auto pt-8 border-t border-app-border">
              <div className="flex flex-col gap-4 text-sm text-app-text-muted bg-app-surface p-5 rounded-2xl border border-app-border">
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-neon-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-app-text font-medium block">Shipping Information</span>
                    <span>Free delivery on orders over ₹1000. Standard delivery time: 3-5 business days.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-neon-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-app-text font-medium block">Eco-Friendly Packaging</span>
                    <span>100% plastic-free, recyclable, and compostable packaging materials.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RefreshCcw className="w-5 h-5 text-neon-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-app-text font-medium block">Return Policy</span>
                    <span>Easy 14-day return policy for unused products.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16 pt-12 border-t border-app-border">
          <h3 className="text-2xl font-bold text-app-text mb-8">Customer Reviews</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Reviews List */}
            <div>
              {reviews.length === 0 ? (
                <p className="text-app-text-muted">No reviews yet. Be the first to review this product!</p>
              ) : (
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-app-surface border border-app-border rounded-2xl p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-4">
                          {review.avatar ? (
                            <img 
                              src={review.avatar} 
                              alt={review.userName} 
                              className="w-12 h-12 rounded-full object-cover border-2 border-app-border"
                            />
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-neon-accent/20 flex items-center justify-center text-neon-accent font-bold">
                              {review.userName.charAt(0)}
                            </div>
                          )}
                          <div>
                            <p className="text-app-text font-semibold">{review.userName}</p>
                            <p className="text-sm text-gray-500">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-app-text-muted">{review.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Review Form */}
            <div>
              <div className="bg-app-bg/30 rounded-2xl p-6 md:p-8 border border-app-border shadow-inner">
                <h4 className="text-xl font-semibold text-app-text mb-6">Write a Review</h4>
                {user ? (
                  <form onSubmit={handleSubmitReview} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-app-text-muted mb-2">Rating</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setRating(star)}
                            className="focus:outline-none"
                          >
                            <Star 
                              className={`w-6 h-6 transition-colors ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600 hover:text-yellow-400/50'}`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-app-text-muted mb-2">Your Review</label>
                      <textarea
                        required
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                        className="w-full bg-app-surface border border-app-border rounded-xl p-4 text-app-text placeholder-gray-500 focus:outline-none focus:border-neon-accent focus:ring-1 focus:ring-neon-accent transition-all min-h-[120px]"
                        placeholder="What do you think about this product?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-pink-500 to-orange-500 text-white border-transparent px-6 py-3 rounded-xl font-bold hover:bg-neon-accent/90 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_15px_rgba(157,255,0,0.2)]"
                    >
                      Submit Review
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-app-text-muted mb-4">Please log in to share your thoughts.</p>
                    <button 
                      onClick={() => navigate('/login')}
                      className="bg-app-surface-hover text-app-text px-6 py-2 rounded-xl font-medium hover:bg-white/20 transition-colors"
                    >
                      Login to Review
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Recently Viewed Section */}
        {recentlyViewedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-app-border">
            <h3 className="text-2xl font-bold text-app-text mb-8">Recently Viewed</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {recentlyViewedProducts.map((p) => (
                <ProductCard 
                  key={`recent-${p.id}`} 
                  product={p} 
                  onAddToCart={onAddToCart} 
                  isFavorite={favorites?.some(f => f.id === p.id)}
                  onToggleFavorite={onToggleFavorite}
                />
              ))}
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}
