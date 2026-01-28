import React, { useState, useRef, useEffect } from 'react';
import { BEFORE_AFTER_IMAGE } from '../constants';
import { Sparkles, MoveHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent-500 font-bold uppercase tracking-widest text-xs">Transformation Gallery</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-4">
            SEE THE <span className="text-accent-500">DIFFERENCE</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Drag the slider to see how we transform spaces from dull and dingy to bright and sparkling clean.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
            <div 
                ref={containerRef}
                className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden cursor-ew-resize border border-white/10 shadow-2xl select-none"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
            >
                {/* Image 2 (AFTER - Clean) - Background Layer */}
                <div className="absolute inset-0">
                    <img 
                        src={BEFORE_AFTER_IMAGE} 
                        alt="After Cleaning" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 right-6 bg-accent-500 text-black font-bold px-4 py-1 rounded-full text-sm z-10 flex items-center gap-2">
                        <Sparkles size={14} /> AFTER
                    </div>
                </div>

                {/* Image 1 (BEFORE - Dirty) - Foreground Layer clipped */}
                <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                >
                    <img 
                        src={BEFORE_AFTER_IMAGE} 
                        alt="Before Cleaning" 
                        className="w-full h-full object-cover filter sepia-[0.4] brightness-75 contrast-75 grayscale-[0.3]" 
                    />
                    {/* Dark overlay for extra "dirty" effect */}
                    <div className="absolute inset-0 bg-yellow-900/10 mix-blend-multiply"></div>
                    
                    <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md text-white font-bold px-4 py-1 rounded-full text-sm z-10">
                        BEFORE
                    </div>
                </div>

                {/* Slider Handle */}
                <div 
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center shadow-xl border-2 border-white">
                        <MoveHorizontal size={20} className="text-black" />
                    </div>
                </div>
            </div>
            
            <div className="mt-6 flex justify-center text-sm text-slate-500 items-center gap-2">
                <MoveHorizontal size={14} />
                <span>Drag slider to compare</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;