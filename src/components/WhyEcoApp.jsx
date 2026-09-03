import React, { useEffect, useState } from 'react';
import { ShieldCheck, Leaf, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyEcoApp() {
  const [userCount, setUserCount] = useState(49850);

  // Simulate growing user base
  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-neon-accent" />,
      title: "Verified Sustainable",
      description: "Every product goes through a rigorous vetting process for environmental impact."
    },
    {
      icon: <Leaf className="w-6 h-6 text-eco-400" />,
      title: "Carbon Negative",
      description: "We offset 200% of our carbon footprint through certified global projects."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      title: "Track Your Impact",
      description: "See the exact amount of plastic and CO2 you've saved with your purchases."
    }
  ];

  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-neon-accent/5 to-dark-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-neon-accent tracking-widest uppercase mb-4">Why Earthly?</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-app-text mb-6">
            More than a store. <br/> A movement for <span className="text-neon-accent">change.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-app-surface border border-app-border flex items-center justify-center group-hover:bg-app-surface-hover transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-app-text mb-2">{feature.title}</h4>
                  <p className="text-app-text-muted leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof / User Count */}
          <div className="glass-panel p-10 rounded-3xl text-center border border-neon-accent/20 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-accent/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neon-accent/20 text-neon-accent mb-8">
              <Users className="w-10 h-10" />
            </div>
            
            <h4 className="text-2xl font-medium text-app-text-muted mb-4">Join our growing community of</h4>
            <div className="text-6xl md:text-7xl font-extrabold text-app-text mb-6 tracking-tight flex justify-center items-baseline gap-2">
              {userCount.toLocaleString()}
              <span className="text-3xl text-neon-accent">+</span>
            </div>
            <p className="text-xl text-app-text-muted mb-8">
              Eco-warriors actively reducing global pollution today.
            </p>
            
            <Link 
              to="/shop" 
              className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 text-white border-transparent font-bold text-lg px-10 py-4 rounded-full hover:bg-white transition-colors hover-lift"
            >
              Start Making a Difference
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
