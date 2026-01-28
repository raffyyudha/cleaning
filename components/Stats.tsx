import React from 'react';
import { STATS } from '../constants';
import { motion } from 'framer-motion';

const Stats: React.FC = () => {
  return (
    <section className="bg-accent-600 py-12 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-wrap justify-between items-center divide-y md:divide-y-0 md:divide-x divide-black/10">
            {STATS.map((stat, index) => (
                <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-1 px-4 py-4 text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start gap-4"
                >
                    <div className="bg-black/20 p-3 rounded-full text-black">
                        <stat.icon size={24} />
                    </div>
                    <div>
                        <div className="text-3xl font-display font-bold text-black">
                            {stat.value}
                        </div>
                        <div className="text-black/60 font-medium text-xs uppercase tracking-wider">
                            {stat.label}
                        </div>
                    </div>
                </motion.div>
            ))}
            </div>
        </div>
    </section>
  );
};

export default Stats;