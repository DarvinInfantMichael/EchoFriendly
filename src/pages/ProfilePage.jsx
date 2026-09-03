import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { User, Mail, Shield, Settings, LogOut, ArrowLeft, Star, MessageSquare } from 'lucide-react';
import { products } from '../data/products';

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" />;
  }

  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    if (user) {
      const allReviews = [];
      // Loop through all products to find reviews left by this user
      products.forEach(product => {
        const productReviewsStr = localStorage.getItem(`reviews_${product.id}`);
        if (productReviewsStr) {
          try {
            const productReviews = JSON.parse(productReviewsStr);
            const userSpecific = productReviews.filter(r => r.userName === user.name);
            userSpecific.forEach(r => {
              allReviews.push({ ...r, product });
            });
          } catch (e) {
            // ignore JSON parse error
          }
        }
      });
      setUserReviews(allReviews);
    }
  }, [user]);

  return (
    <div className="flex-1 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-eco-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto z-10 relative">
        <button 
          onClick={() => navigate(-1)}
          className="text-app-text-muted hover:text-app-text flex items-center gap-2 mb-6 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Go Back
        </button>
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-app-text mb-2">My Profile</h1>
          <p className="text-app-text-muted">Manage your account and preferences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar / Main Info */}
          <div className="md:col-span-1 space-y-6">
            <div className="glass-panel p-8 rounded-3xl text-center">
              <div className="w-24 h-24 mx-auto bg-dark-bg/50 border border-app-border rounded-full flex items-center justify-center mb-4">
                <User className="h-10 w-10 text-eco-400" />
              </div>
              <h2 className="text-xl font-bold text-app-text mb-1">{user.name}</h2>
              <p className="text-app-text-muted text-sm flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                {user.email}
              </p>
              
              <div className="mt-8 pt-8 border-t border-app-border">
                <button
                  onClick={logout}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-xl font-medium transition-all hover-lift"
                >
                  <LogOut className="h-5 w-5" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Details / Settings */}
          <div className="md:col-span-2 space-y-6">
            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-app-text mb-6 flex items-center gap-2">
                <Shield className="h-5 w-5 text-neon-accent" />
                Account Information
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-app-text-muted mb-1 block">Full Name</label>
                  <div className="text-app-text bg-dark-bg/50 border border-app-border px-4 py-3 rounded-xl">
                    {user.name}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-app-text-muted mb-1 block">Email Address</label>
                  <div className="text-app-text bg-dark-bg/50 border border-app-border px-4 py-3 rounded-xl">
                    {user.email}
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-app-text mb-6 flex items-center gap-2">
                <Settings className="h-5 w-5 text-neon-accent" />
                Preferences
              </h3>
              
              <p className="text-app-text-muted">
                Notification preferences and account settings will be available here soon.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-app-text mb-6 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-neon-accent" />
                My Reviews & Ratings
              </h3>
              
              {userReviews.length === 0 ? (
                <div className="text-app-text-muted">
                  <p className="mb-4">You haven't reviewed any products yet.</p>
                  <button 
                    onClick={() => navigate('/')}
                    className="text-neon-accent hover:underline"
                  >
                    Browse products to leave a review
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {userReviews.map((review) => (
                    <div key={review.id} className="bg-dark-bg/50 border border-app-border p-5 rounded-2xl">
                      <div className="flex justify-between items-start mb-2">
                        <Link 
                          to={`/product/${review.product.id}`}
                          className="text-app-text font-semibold hover:text-neon-accent transition-colors"
                        >
                          {review.product.name}
                        </Link>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3.5 h-3.5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">{review.date}</p>
                      <p className="text-app-text-muted text-sm">{review.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
