import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BedDouble, Bath, Calculator, ArrowRight, DollarSign, CheckCircle } from 'lucide-react';
import { WHATSAPP_NUMBERS } from '../constants';

const PricingEstimator: React.FC = () => {
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);

  // Simple logic to keep price between $100 and $300 roughly
  // Base $70 + Bed($20) + Bath($30)
  const calculatePrice = () => {
    let price = 70 + (bedrooms * 25) + (bathrooms * 30);
    // Clamp between 100 and 300 roughly for display logic
    if (price < 100) price = 100;
    
    return price;
  };

  const price = calculatePrice();
  const primaryNumber = WHATSAPP_NUMBERS[0].number;

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Side */}
          <div className="flex-1">
             <div className="inline-flex items-center gap-2 text-accent-500 font-bold uppercase tracking-widest text-xs mb-4">
                <Calculator size={16} />
                <span>Transparent Pricing</span>
             </div>
             <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                Get an <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Instant Estimate</span>
             </h2>
             <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Our pricing is simple and transparent. Rates typically range from <span className="text-white font-bold">$100 to $300</span> depending on the size of your home. Use the calculator to see your estimated rate.
             </p>
             
             <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-500">
                        <DollarSign size={14} />
                    </div>
                    <span>Competitive rates starting at $100</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-500">
                        <CheckCircle size={14} />
                    </div>
                    <span>Includes standard supplies & equipment</span>
                </li>
             </ul>
          </div>

          {/* Calculator Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-[500px] bg-slate-950 border border-white/10 rounded-3xl p-8 shadow-2xl relative"
          >
            {/* Glossy Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none"></div>

            <div className="space-y-8 relative z-10">
                
                {/* Bedrooms Input */}
                <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                        <BedDouble size={18} className="text-accent-500" /> Bedrooms
                    </label>
                    <div className="flex justify-between gap-2 bg-slate-900/50 p-2 rounded-xl border border-white/5">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <button
                                key={num}
                                onClick={() => setBedrooms(num)}
                                className={`flex-1 py-3 rounded-lg font-bold transition-all duration-300 ${
                                    bedrooms === num 
                                    ? 'bg-accent-500 text-black shadow-lg shadow-accent-500/20' 
                                    : 'text-slate-500 hover:bg-white/5'
                                }`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bathrooms Input */}
                <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                        <Bath size={18} className="text-accent-500" /> Bathrooms
                    </label>
                    <div className="flex justify-between gap-2 bg-slate-900/50 p-2 rounded-xl border border-white/5">
                        {[1, 2, 3, 4].map((num) => (
                            <button
                                key={num}
                                onClick={() => setBathrooms(num)}
                                className={`flex-1 py-3 rounded-lg font-bold transition-all duration-300 ${
                                    bathrooms === num 
                                    ? 'bg-accent-500 text-black shadow-lg shadow-accent-500/20' 
                                    : 'text-slate-500 hover:bg-white/5'
                                }`}
                            >
                                {num}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Total Display */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-slate-400 font-medium">Estimated Price</span>
                        <div className="text-right">
                             <motion.span 
                                key={price}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="block font-display font-bold text-5xl text-white"
                             >
                                ${price}
                             </motion.span>
                        </div>
                    </div>
                    <p className="text-right text-xs text-slate-500 mb-6">*Final price may vary based on condition.</p>
                    
                    <a 
                        href={`https://wa.me/${primaryNumber}?text=Hi, I'm interested in booking a clean for a ${bedrooms} Bedroom, ${bathrooms} Bathroom home. Estimated price is $${price}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-accent-500 transition-colors group"
                    >
                        <span>Book This Service</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingEstimator;