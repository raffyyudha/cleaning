import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_NUMBERS } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl p-4 w-72 border border-slate-100 overflow-hidden"
          >
            <div className="bg-green-500 -m-4 p-4 mb-4 flex items-center gap-3">
              <MessageCircle className="text-white" size={24} />
              <div>
                <h3 className="text-white font-bold">Chat with us</h3>
                <p className="text-green-100 text-xs">Typically replies instantly</p>
              </div>
            </div>
            
            <p className="text-slate-600 text-sm mb-4">
              Hi there! 👋 How can we help you today? Select a number below:
            </p>

            <div className="space-y-3">
              {WHATSAPP_NUMBERS.map((wa, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${wa.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-slate-50 hover:bg-green-50 rounded-xl transition-colors group border border-slate-200 hover:border-green-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <MessageCircle size={16} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-sm">{wa.label}</div>
                      <div className="text-xs text-slate-500">+{wa.number}</div>
                    </div>
                  </div>
                  <Send size={16} className="text-slate-400 group-hover:text-green-500 transform group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 ${
            isOpen ? 'bg-slate-800 text-white' : 'bg-green-500 text-white'
        }`}
      >
        <AnimatePresence mode="wait">
            {isOpen ? (
                <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                >
                    <X size={28} />
                </motion.div>
            ) : (
                <motion.div
                    key="chat"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                >
                    <MessageCircle size={32} />
                </motion.div>
            )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingWhatsApp;