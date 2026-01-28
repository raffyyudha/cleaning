import React from 'react';
import { COMPANY_NAME, TAGLINE } from '../constants';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-500 py-12 border-t border-white/10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
            <h3 className="font-display font-bold text-white text-xl">TMC<span className="text-accent-500">CLEANING</span></h3>
            <p className="text-xs mt-2 max-w-xs">{TAGLINE}</p>
        </div>
        
        <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>

        <div className="text-xs">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;