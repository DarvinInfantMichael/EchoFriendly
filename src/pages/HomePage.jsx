import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Hero from '../components/Hero';
import AboutMission from '../components/AboutMission';
import EarthPollutionInfo from '../components/EarthPollutionInfo';
import TargetAudience from '../components/TargetAudience';
import WhyEcoApp from '../components/WhyEcoApp';

export default function HomePage() {
  const { user } = useAuth();

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
