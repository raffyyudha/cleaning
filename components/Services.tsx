import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const Icon1 = SERVICES[0].icon;
  const Icon2 = SERVICES[1].icon;
  const Icon3 = SERVICES[2].icon;
  const Icon4 = SERVICES[3].icon;

  return (
    <section id="services" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-5xl md:text-7xl text-white mb-6">
              OUR <span className="text-accent-500">EXPERTISE</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-lg">
              We don't just fix things; we engineer solutions. From complex electrical grids to luxury renovations.
            </p>
          </div>
          <div className="hidden md:block">
            <a href="#contact" className="text-white border-b border-accent-500 pb-1 hover:text-accent-500 transition-colors">
                View All Capabilities
            </a>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[800px]">
          
          {/* Large Item 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden bg-slate-900 border border-white/5"
          >
            <img 
                src={SERVICES[0].imageUrl} 
                alt={SERVICES[0].title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <div className="bg-accent-500 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-black">
                    <Icon1 size={24} />
                </div>
                <h3 className="font-display font-bold text-4xl text-white mb-4">{SERVICES[0].title}</h3>
                <p className="text-slate-300 max-w-md mb-6">{SERVICES[0].description}</p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-slate-400 mb-6">
                    {SERVICES[0].features.map((f, i) => <li key={i}>• {f}</li>)}
                </ul>
            </div>
            <div className="absolute top-8 right-8 bg-white/10 backdrop-blur p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-white" />
            </div>
          </motion.div>

          {/* Medium Item 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group rounded-3xl overflow-hidden bg-slate-900 border border-white/5 min-h-[300px]"
          >
            <img 
                src={SERVICES[1].imageUrl} 
                alt={SERVICES[1].title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
                <Icon2 className="text-accent-500 mb-3" size={32} />
                <h3 className="font-display font-bold text-2xl text-white">{SERVICES[1].title}</h3>
            </div>
          </motion.div>

          {/* Medium Item 3 */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="relative group rounded-3xl overflow-hidden bg-slate-900 border border-white/5 min-h-[300px]"
          >
             <img 
                src={SERVICES[2].imageUrl} 
                alt={SERVICES[2].title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
                <Icon3 className="text-accent-500 mb-3" size={32} />
                <h3 className="font-display font-bold text-2xl text-white">{SERVICES[2].title}</h3>
            </div>
          </motion.div>

        </div>
        
        {/* Extra Small Grid for Handyman */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-4 bg-white/5 border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between group hover:bg-white/10 transition-colors"
            >
                <div className="flex items-center gap-6">
                    <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-accent-500 group-hover:text-black transition-colors text-white">
                        <Icon4 size={32} />
                    </div>
                    <div>
                        <h3 className="font-display font-bold text-2xl text-white">{SERVICES[3].title}</h3>
                        <p className="text-slate-400">Perfect for small fixes and general maintenance.</p>
                    </div>
                </div>
                <div className="mt-4 md:mt-0 flex gap-4 text-sm text-slate-500">
                    {SERVICES[3].features.map((f, i) => <span key={i} className="bg-black/30 px-3 py-1 rounded-full">{f}</span>)}
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Services;