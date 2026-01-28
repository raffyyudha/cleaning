import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { TAGLINE, HERO_IMAGES } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-grain opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        
        {/* Text Content */}
        <div className="w-full md:w-3/5 text-center md:text-left z-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 justify-center md:justify-start mb-6"
            >
                <span className="flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-accent-500 text-accent-500" />)}
                </span>
                <span className="text-accent-500 text-xs font-bold tracking-[0.2em] uppercase">Theresa Cox • Fair Grove, MO</span>
            </motion.div>

            <motion.h1 
                className="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white mb-8 tracking-tighter"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                EXPERIENCE<br/>
                <span className="text-stroke hover:text-white transition-colors duration-500">PURE</span><br/>
                CLEAN.
            </motion.h1>

            <motion.p
                className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                {TAGLINE}. Providing immaculate housekeeping and deep cleaning services with 24/7 availability for your convenience.
            </motion.p>

            <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <a href="#services" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden">
                    <span className="relative z-10 flex items-center gap-2 group-hover:gap-4 transition-all">
                        Our Services <ArrowRight size={18} />
                    </span>
                    <div className="absolute inset-0 bg-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                </a>
                 <a href="#contact" className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
                    Contact Us
                </a>
            </motion.div>
        </div>

        {/* Visuals */}
        <motion.div 
            style={{ y: y1, opacity }}
            className="hidden md:block w-2/5 relative h-[600px]"
        >
            <div className="absolute top-10 right-0 w-64 h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-3 z-10">
                <img src={HERO_IMAGES[0]} alt="Clean Living Room" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-accent-500/20 mix-blend-overlay"></div>
            </div>
            <motion.div 
                style={{ y: y2 }}
                className="absolute top-32 left-0 w-72 h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl -rotate-3 z-0"
            >
                <img src={HERO_IMAGES[1]} alt="Sparkling Kitchen" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" />
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 -left-10 bg-slate-900/90 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl z-20"
            >
                <div className="text-accent-500 font-display font-bold text-4xl">24/7</div>
                <div className="text-white text-xs tracking-wider">OPEN<br/>EVERY DAY</div>
            </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;