import React from 'react';
import { Users, Home, Briefcase, HeartHandshake } from 'lucide-react';

export default function TargetAudience() {
  const audiences = [
    {
      id: 1,
      icon: <HeartHandshake className="w-8 h-8 text-eco-400" />,
      title: "Eco-Conscious Individuals",
      description: "People ready to make small, impactful changes in their daily routines to protect the environment and support sustainable brands."
    },
    {
      id: 2,
      icon: <Home className="w-8 h-8 text-blue-400" />,
      title: "Modern Families",
      description: "Parents looking for safe, non-toxic, and reusable alternatives for their households, prioritizing the health of the next generation."
    },
    {
      id: 3,
      icon: <Briefcase className="w-8 h-8 text-purple-400" />,
      title: "Responsible Businesses",
      description: "Companies and offices striving for zero-waste operations and looking to supply their workspaces with sustainable goods."
    },
    {
      id: 4,
      icon: <Users className="w-8 h-8 text-neon-accent" />,
      title: "Community Leaders",
      description: "Advocates who influence their communities to adopt greener lifestyles and demand corporate accountability."
    }
  ];

  return (
    <section className="py-24 bg-dark-bg/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/3 text-left">
            <h2 className="text-sm font-bold text-neon-accent tracking-widest uppercase mb-4">Who needs to act?</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-app-text mb-6">
              Sustainability is <span className="text-eco-400">Everyone's</span> Responsibility.
            </h3>
            <p className="text-lg text-app-text-muted leading-relaxed mb-8">
              Reducing pollution isn't a task for a select few. It requires a collective effort from all walks of life. Whether you're managing a household or running a corporation, your choices matter.
            </p>
            <button className="bg-app-surface border border-app-border hover:bg-app-surface-hover text-app-text font-medium py-3 px-8 rounded-full transition-colors">
              Find Your Impact
            </button>
          </div>

          {/* Audience Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {audiences.map((audience) => (
              <div key={audience.id} className="bg-app-bg/40 border border-app-border p-8 rounded-3xl hover:border-app-border transition-colors">
                <div className="mb-6 inline-block p-4 rounded-2xl bg-app-surface">
                  {audience.icon}
                </div>
                <h4 className="text-xl font-bold text-app-text mb-3">{audience.title}</h4>
                <p className="text-app-text-muted text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
