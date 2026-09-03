import React from 'react';
import AboutMission from '../components/AboutMission';
import { Leaf, Users, Heart, Wind } from 'lucide-react';
import reducingPollutionImg from '../assets/reducing_pollution.jpg';

export default function AboutPage() {
  return (
    <div className="relative flex-1 w-full flex flex-col pt-16 min-h-screen">
      {/* Full Page Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${reducingPollutionImg})` }}
      />
      <div className="absolute inset-0 z-0 bg-dark-bg/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col flex-1">
        {/* About Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-12">
          <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-eco-500/10 to-transparent pointer-events-none rounded-t-3xl" />
        
        <div className="relative z-10 text-center glass-panel p-12 md:p-20 rounded-3xl mt-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-app-surface rounded-full border border-app-border shadow-[0_0_30px_rgba(157,255,0,0.15)]">
              <Leaf className="h-12 w-12 text-neon-accent" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-app-text tracking-tight mb-6">
            Our Story
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-app-text-muted max-w-3xl mx-auto font-light leading-relaxed">
            Earthly was founded with a simple idea: that premium quality and environmental responsibility should never be mutually exclusive.
          </p>
        </div>
      </section>

      {/* Mission Section (reused component) */}
      <AboutMission />

      {/* Reducing Pollution & Atmosphere Info Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-surface/50 skew-y-3 transform origin-bottom-left" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text & Quote Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold text-sm mb-6 border border-cyan-500/30">
                <Wind className="w-4 h-4" />
                Our Atmosphere
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-app-text leading-tight mb-6">
                Breathing Life Back Into Earth
              </h2>
              <p className="text-lg text-app-text-muted leading-relaxed mb-8">
                Air pollution continues to degrade our planet's delicate atmosphere, trapping greenhouse gases and accelerating climate change. Our goal is to reduce this burden by encouraging the use of products that leave a lighter footprint.
              </p>
              
              <blockquote className="border-l-4 border-neon-accent pl-6 py-2 my-8 bg-app-surface rounded-r-xl p-4 italic text-xl text-app-text-muted font-medium">
                "The Earth's atmosphere is a delicate blanket of life. When we reduce pollution, we don't just save nature—we save ourselves."
              </blockquote>
              
              <p className="text-app-text-muted leading-relaxed">
                Every small choice adds up. Whether it's opting for organic materials, eliminating single-use plastics, or choosing upcycled fashion, each step helps restore the balance of our skies and the purity of the air we breathe.
              </p>
            </div>

            {/* Removed inline image because it's now the page background */}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 border-t border-app-border relative bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-app-text">Why We Do This</h2>
            <p className="mt-4 text-app-text-muted max-w-2xl mx-auto">
              We're a small team of passionate individuals dedicated to proving that sustainable living can be beautiful, practical, and accessible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-10 rounded-3xl flex items-start gap-6 hover-lift">
              <div className="p-4 bg-app-surface rounded-2xl border border-app-border text-pink-400">
                <Heart className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-app-text mb-2">Passion for the Planet</h3>
                <p className="text-app-text-muted leading-relaxed">
                  Every decision we make, from sourcing raw materials to our packaging, is heavily scrutinized for its environmental impact. We love our planet and want to protect it for future generations.
                </p>
              </div>
            </div>
            
            <div className="glass-panel p-10 rounded-3xl flex items-start gap-6 hover-lift">
              <div className="p-4 bg-app-surface rounded-2xl border border-app-border text-blue-400">
                <Users className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-app-text mb-2">Community First</h3>
                <p className="text-app-text-muted leading-relaxed">
                  We believe in building a community of conscious consumers. By educating, sharing resources, and offering high-quality alternatives, we aim to inspire collective action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      </div> {/* End of Content wrapper */}
    </div>
  );
}
