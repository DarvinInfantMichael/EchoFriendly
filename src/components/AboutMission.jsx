import React from 'react';
import { Globe, Recycle, Zap } from 'lucide-react';

export default function AboutMission() {
  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -left-40 top-20 w-96 h-96 bg-neon-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-20 w-96 h-96 bg-eco-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-neon-accent tracking-widest uppercase mb-4">Our Mission</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-app-text mb-6">
            Rethinking consumption for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-accent to-eco-400">healthier planet.</span>
          </h3>
          <p className="text-lg md:text-xl text-app-text-muted leading-relaxed">
            We believe that small, everyday choices can create a massive ripple effect. Our goal is to make sustainable, eco-friendly products accessible, beautiful, and completely transparent in their environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <div className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center hover-lift">
            <div className="w-16 h-16 rounded-2xl bg-app-surface border border-app-border flex items-center justify-center mb-6 text-neon-accent shadow-[0_0_15px_rgba(157,255,0,0.2)]">
              <Recycle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-app-text mb-3">Zero Waste Focus</h4>
            <p className="text-app-text-muted">
              Every product we offer is designed to minimize landfill contribution, utilizing biodegradable materials and circular design principles.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center hover-lift">
            <div className="w-16 h-16 rounded-2xl bg-app-surface border border-app-border flex items-center justify-center mb-6 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <Globe className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-app-text mb-3">Ethical Sourcing</h4>
            <p className="text-app-text-muted">
              We partner exclusively with makers who prioritize fair labor practices and environmentally sound manufacturing processes.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center hover-lift">
            <div className="w-16 h-16 rounded-2xl bg-app-surface border border-app-border flex items-center justify-center mb-6 text-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.2)]">
              <Zap className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-app-text mb-3">Carbon Neutral</h4>
            <p className="text-app-text-muted">
              We offset 100% of carbon emissions from shipping and operations, ensuring your purchase actively fights climate change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
