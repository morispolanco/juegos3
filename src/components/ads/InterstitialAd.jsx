import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const InterstitialAd = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black p-4"
      >
        <div className="relative w-full max-w-lg aspect-video bg-stone-900 rounded-lg overflow-hidden border border-jade/30 shadow-2xl">
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 bg-jade/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-jade font-bold">AD</span>
            </div>
            <h4 className="text-xl font-serif text-mayan-gold mb-2">Publicidad Arqueológica</h4>
            <p className="text-stone-400 text-sm">El archivo se está cargando...</p>
            
            <div className="mt-8 w-full bg-stone-800 h-1 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 5 }}
                onAnimationComplete={onClose}
                className="h-full bg-jade"
              />
            </div>
          </div>
          
          <div className="absolute bottom-2 right-2">
            <p className="text-[8px] text-stone-600 uppercase tracking-widest">Advertica Network</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InterstitialAd;
