import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProducts } from '../context/ProductContext';
import Hero from '../components/Hero';
import TargetAudience from '../components/TargetAudience';
import EarthPollutionInfo from '../components/EarthPollutionInfo';
import AboutMission from '../components/AboutMission';
import WhyEcoApp from '../components/WhyEcoApp';

export default function HomePage({ onAddToCart, favorites, onToggleFavorite }) {
  const { user } = useAuth();
  const { loading, error } = useProducts();

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-dark-bg">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-eco-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-dark-bg text-red-500">
        Error loading products: {error}
      </div>
    );
  }

  if (user) {
    return <Navigate to="/shop" replace />;
  }

  return (
    <div className="w-full">
      <Hero />
      <EarthPollutionInfo />
      <TargetAudience />
      <AboutMission />
      <WhyEcoApp />
    </div>
  );
}
