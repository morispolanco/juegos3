import React, { useState } from 'react';
import CodexReconstruction from '../components/puzzles/CodexReconstruction';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Archives = () => {
  const [solved, setSolved] = useState(false);
  const navigate = useNavigate();

  const handleComplete = () => {
    setSolved(true);
  };

  return (
    <div className="max-w-md mx-auto py-8">
      <h2 className="text-3xl font-serif text-mayan-gold mb-8 text-center uppercase tracking-widest">Archivo de Códices</h2>
      
      <AnimatePresence mode="wait">
        {!solved ? (
          <motion.div
            key="puzzle"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
          >
            <CodexReconstruction onComplete={handleComplete} />
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <div className="bg-jade/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto border-2 border-jade animate-bounce">
              <Trophy className="w-12 h-12 text-jade" />
            </div>
            <h3 className="text-2xl font-serif text-mayan-gold">¡Códice Restaurado!</h3>
            <p className="text-stone-400 italic">"Has preservado el conocimiento de los antiguos para las futuras generaciones."</p>
            <button 
              onClick={() => navigate('/')}
              className="btn-maya w-full"
            >
              Volver al Inicio
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Archives;
