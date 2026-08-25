import React from 'react';
import AboutMission from '../components/AboutMission';
import { Leaf, Users, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex-1 w-full flex flex-col pt-16">
      {/* About Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-12">
        <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-eco-500/10 to-transparent pointer-events-none rounded-t-3xl" />
        
        <div className="relative z-10 text-center glass-panel p-12 md:p-20 rounded-3xl mt-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/5 rounded-full border border-white/10 shadow-[0_0_30px_rgba(157,255,0,0.15)]">
              <Leaf className="h-12 w-12 text-neon-accent" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Our Story
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Earthly was founded with a simple idea: that premium quality and environmental responsibility should never be mutually exclusive.
          </p>
        </div>
      </section>

      {/* Mission Section (reused component) */}
      <AboutMission />

      {/* Our Values Section */}
      <section className="py-24 bg-dark-bg border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white">Why We Do This</h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We're a small team of passionate individuals dedicated to proving that sustainable living can be beautiful, practical, and accessible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-10 rounded-3xl flex items-start gap-6 hover-lift">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-pink-400">
                <Heart className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Passion for the Planet</h3>
                <p className="text-gray-400 leading-relaxed">
                  Every decision we make, from sourcing raw materials to our packaging, is heavily scrutinized for its environmental impact. We love our planet and want to protect it for future generations.
                </p>
              </div>
            </div>
            
            <div className="glass-panel p-10 rounded-3xl flex items-start gap-6 hover-lift">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-blue-400">
                <Users className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Community First</h3>
                <p className="text-gray-400 leading-relaxed">
                  We believe in building a community of conscious consumers. By educating, sharing resources, and offering high-quality alternatives, we aim to inspire collective action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
