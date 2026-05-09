import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const RewardedAd = ({ isOpen, onClose, onComplete }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      >
        <div className="maya-card max-w-sm w-full p-8 text-center border-mayan-gold">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-stone-500 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="bg-mayan-gold/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-mayan-gold">
            <Play className="w-10 h-10 text-mayan-gold fill-mayan-gold" />
          </div>

          <h3 className="text-2xl font-serif text-mayan-gold mb-2">Anuncio Recompensado</h3>
          <p className="text-stone-400 text-sm mb-8">
            Mira un video corto para obtener una pista mística o duplicar tus recompensas.
          </p>

          <button 
            onClick={onComplete}
            className="btn-maya w-full py-4 text-lg"
          >
            Ver Ahora
          </button>
          
          <p className="mt-4 text-[10px] text-stone-600 uppercase tracking-widest">
            Advertica Ad Network
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RewardedAd;
