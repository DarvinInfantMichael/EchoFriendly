import React from 'react';
import heroBg from '../assets/hero_bg_dark_1787508920575.png';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-dark-bg overflow-hidden border-b border-dark-border">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          src={heroBg}
          alt="Dark eco friendly products flatlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[80vh] flex flex-col justify-center">
        <div className="max-w-2xl text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-neon-accent/30 bg-neon-accent/10 text-neon-accent text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-neon-accent mr-2 animate-pulse"></span>
            New arrivals available now
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-md">
            <span className="block">Sustainable living</span>{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-eco-400 to-neon-accent">made beautiful.</span>
          </h1>
          <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg md:mt-5 md:text-xl drop-shadow-sm">
            Discover our curated collection of premium, eco-friendly essentials designed to seamlessly integrate sustainability into your everyday life.
          </p>
          <div className="mt-8 sm:flex sm:justify-start">
            <div className="rounded-md shadow-lg shadow-neon-accent/20">
              <a href="#shop" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-dark-bg bg-neon-accent hover:bg-white hover:scale-105 transition-all md:py-4 md:text-lg md:px-10 group">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
