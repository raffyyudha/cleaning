import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_NUMBERS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#projects' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const primaryNumber = WHATSAPP_NUMBERS[0].number;

  return (
    <>
      <motion.nav 
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={`
          relative flex items-center justify-between transition-all duration-500 ease-out
          ${scrolled ? 'w-full max-w-5xl bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full py-3 px-6' : 'w-full max-w-7xl bg-transparent py-4 px-4'}
        `}>
          
          {/* Logo */}
          <a href="#home" className="flex flex-col group relative z-50">
            <span className="font-display font-bold text-xl tracking-tighter text-white">
              TMC<span className="text-accent-500">CLEANING</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 bg-black/20 backdrop-blur-sm px-8 py-2.5 rounded-full border border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <motion.a
              href={`https://wa.me/${primaryNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-500 text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white transition-colors flex items-center gap-2"
            >
              <MessageCircle size={16} />
              <span>Book Now</span>
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-3xl font-bold text-white hover:text-accent-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                  href={`https://wa.me/${primaryNumber}`}
                  className="mt-8 text-accent-500 font-bold text-xl border-b border-accent-500 pb-1"
                >
                  Book a Clean
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;