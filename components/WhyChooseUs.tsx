import React from 'react';
import { WHY_CHOOSE_US } from '../constants';
import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-900 border-y border-white/5 relative">
      <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent-500 font-bold uppercase tracking-widest text-xs"
          >
            Our Core Values
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-bold text-white mt-4 max-w-3xl mx-auto"
          >
            WHY WE ARE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">PREMIER CHOICE</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-950 p-8 rounded-2xl border border-white/5 hover:border-accent-500/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-500 transition-colors duration-300">
                <item.icon className="text-white group-hover:text-black" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;