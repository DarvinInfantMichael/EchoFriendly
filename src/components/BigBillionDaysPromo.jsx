import React, { useState, useEffect } from 'react';
import { Sparkles, Leaf, Gift, Clock, ArrowRight, Zap } from 'lucide-react';

export default function BigBillionDaysPromo() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 23, minutes: 59, seconds: 59 });
  const [activeInfo, setActiveInfo] = useState(null);

  // Simple countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
          }
        }
        return { ...prev, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const infoBlocks = [
    {
      id: 'discounts',
      icon: <Zap className="w-6 h-6" />,
      title: 'Massive Eco-Discounts',
      description: 'Up to 70% off on premium sustainable products. Upgrade your lifestyle without harming the planet.'
    },
    {
      id: 'shipping',
      icon: <Leaf className="w-6 h-6" />,
      title: 'Carbon Neutral Shipping',
      description: 'For every order placed during the sale, we plant a tree and offset 100% of shipping emissions.'
    },
    {
      id: 'rewards',
      icon: <Gift className="w-6 h-6" />,
      title: 'Double Earth Points',
      description: 'Earn 2x rewards points on all purchases to redeem on future eco-friendly essentials.'
    }
  ];

  return (
    <div className="my-12 relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 border border-green-500/30 shadow-2xl">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-green-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
      
      <div className="relative z-10 p-8 md:p-12 flex flex-col lg:flex-row gap-10 items-center">
        
        {/* Left Side: Main Promo */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-green-300 font-bold tracking-widest uppercase text-sm animate-pulse">
            <Sparkles className="w-4 h-4" />
            <span>Earthly Exclusive</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            The Big <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">Billion Days</span>
          </h2>
          
          <p className="text-lg text-green-100 max-w-xl mx-auto lg:mx-0">
            Our biggest sustainable shopping event of the year is here. Discover incredible deals on products that love the Earth as much as you do.
          </p>
          
          {/* Countdown Timer */}
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
            <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-black/30 border border-white/10 backdrop-blur-sm">
              <Clock className="w-5 h-5 text-green-400" />
              <div className="text-2xl font-bold text-white tracking-wider font-mono">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <span className="text-green-300/80 text-sm font-medium ml-2">Ends Soon!</span>
            </div>
          </div>
          
          <button className="mt-4 px-8 py-4 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-300 hover:to-emerald-400 text-green-950 font-bold text-lg shadow-[0_0_30px_rgba(52,211,153,0.4)] hover:shadow-[0_0_40px_rgba(52,211,153,0.6)] transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0 group">
            Shop the Sale
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Side: Interactive Info Cards */}
        <div className="flex-1 w-full flex flex-col gap-4">
          <h3 className="text-xl font-bold text-white mb-2 text-center lg:text-left">What to Expect</h3>
          {infoBlocks.map((block) => (
            <div 
              key={block.id}
              onMouseEnter={() => setActiveInfo(block.id)}
              onMouseLeave={() => setActiveInfo(null)}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer backdrop-blur-md flex items-start gap-4 ${
                activeInfo === block.id 
                  ? 'bg-white/20 border-green-300/50 scale-105 shadow-xl' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <div className={`p-3 rounded-xl transition-colors duration-300 ${
                activeInfo === block.id ? 'bg-green-400 text-green-950' : 'bg-black/30 text-green-400'
              }`}>
                {block.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">{block.title}</h4>
                <p className={`text-green-100/80 text-sm mt-1 transition-all duration-300 overflow-hidden ${
                  activeInfo === block.id ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
