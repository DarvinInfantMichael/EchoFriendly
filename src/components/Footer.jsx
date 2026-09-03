import React from 'react';
import { Leaf, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const TwitterIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const FacebookIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-app-bg/80 border-t border-app-border pt-20 pb-10 w-full mt-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-accent/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Leaf className="h-8 w-8 text-neon-accent" />
              <span className="font-bold text-2xl tracking-tight text-app-text">Earthly</span>
            </Link>
            <p className="text-app-text-muted leading-relaxed mb-6">
              Curating sustainable, zero-waste products to help you reduce pollution and live a greener, healthier life.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-app-surface border border-app-border flex items-center justify-center text-app-text-muted hover:text-neon-accent hover:border-neon-accent transition-all">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-app-surface border border-app-border flex items-center justify-center text-app-text-muted hover:text-neon-accent hover:border-neon-accent transition-all">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-app-surface border border-app-border flex items-center justify-center text-app-text-muted hover:text-neon-accent hover:border-neon-accent transition-all">
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-app-text font-bold mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-app-text-muted hover:text-neon-accent transition-colors">All Products</Link></li>
              <li><Link to="/shop" className="text-app-text-muted hover:text-neon-accent transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop" className="text-app-text-muted hover:text-neon-accent transition-colors">Best Sellers</Link></li>
              <li><Link to="/shop" className="text-app-text-muted hover:text-neon-accent transition-colors">Sale Items</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-app-text font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-app-text-muted hover:text-neon-accent transition-colors">Our Mission</Link></li>
              <li><Link to="/about" className="text-app-text-muted hover:text-neon-accent transition-colors">Impact Report</Link></li>
              <li><Link to="/about" className="text-app-text-muted hover:text-neon-accent transition-colors">Careers</Link></li>
              <li><a href="#" className="text-app-text-muted hover:text-neon-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="text-app-text font-bold mb-6">Stay Connected</h4>
            <p className="text-app-text-muted text-sm mb-4">
              Subscribe to get special offers, free giveaways, and sustainability tips.
            </p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-app-surface border border-app-border rounded-xl py-3 pl-12 pr-4 text-app-text focus:outline-none focus:border-neon-accent focus:ring-1 focus:ring-neon-accent transition-all"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white border-transparent font-bold py-3 rounded-xl hover:bg-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
          
        </div>

        <div className="border-t border-app-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Earthly Goods. Creating a sustainable future, beautifully.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-app-text transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-app-text transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-app-text transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
