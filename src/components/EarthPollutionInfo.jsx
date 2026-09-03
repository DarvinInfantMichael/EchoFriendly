import React from 'react';
import { Factory, Droplet, Wind, AlertTriangle } from 'lucide-react';

export default function EarthPollutionInfo() {
  const stats = [
    {
      id: 1,
      icon: <Factory className="w-8 h-8 text-red-400" />,
      value: "400 Million",
      unit: "Tons",
      label: "Plastic Waste Annually",
      description: "Globally, we produce over 400 million tons of plastic waste every year. A significant portion ends up in our oceans and ecosystems."
    },
    {
      id: 2,
      icon: <Droplet className="w-8 h-8 text-blue-400" />,
      value: "8 Million",
      unit: "Tons",
      label: "Plastic in Oceans",
      description: "Around 8 million tons of plastic enter our oceans annually, threatening marine life and entering the human food chain."
    },
    {
      id: 3,
      icon: <Wind className="w-8 h-8 text-app-text-muted" />,
      value: "99%",
      unit: "of Population",
      label: "Breathe Polluted Air",
      description: "The WHO reports that almost the entire global population breathes air that exceeds WHO air quality limits."
    }
  ];

  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm font-medium mb-6 border border-red-500/20">
            <AlertTriangle className="w-4 h-4" />
            The Reality We Face
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-app-text mb-6">
            Our Earth is <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">Choking.</span>
          </h2>
          <p className="text-lg md:text-xl text-app-text-muted leading-relaxed">
            The convenience of modern life has come at a staggering cost to our planet. Unchecked pollution is altering our climate, destroying habitats, and threatening our very existence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover-lift">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-2xl bg-app-bg/40 border border-app-border flex items-center justify-center mb-8 relative z-10">
                {stat.icon}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-extrabold text-app-text">{stat.value}</span>
                  <span className="text-lg font-medium text-app-text-muted">{stat.unit}</span>
                </div>
                <h3 className="text-xl font-bold text-app-text mb-4">{stat.label}</h3>
                <p className="text-app-text-muted leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
