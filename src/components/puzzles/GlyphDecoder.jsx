import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GLYPHS = [
  { id: 'sun', symbol: '☀', meaning: 'K\'in (Sol/Día)' },
  { id: 'moon', symbol: '☾', meaning: 'Uh (Luna)' },
  { id: 'jaguar', symbol: '🐆', meaning: 'Balam (Jaguar)' },
  { id: 'king', symbol: '👑', meaning: 'Ajaw (Señor/Rey)' },
  { id: 'water', symbol: '💧', meaning: 'Ha\' (Agua)' },
  { id: 'mountain', symbol: '⛰', meaning: 'Witz (Montaña)' },
  { id: 'cacao', symbol: '🍫', meaning: 'Kakaw (Cacao)' },
  { id: 'shield', symbol: '🛡', meaning: 'Pakal (Escudo)' },
];

const GlyphDecoder = ({ onComplete }) => {
  const [selected, setSelected] = useState([]);
  const targetSequence = ['sun', 'mountain', 'king']; // Example puzzle
  
  const handleGlyphClick = (id) => {
    const newSelected = [...selected, id];
    setSelected(newSelected);
    
    if (newSelected.length === targetSequence.length) {
      if (JSON.stringify(newSelected) === JSON.stringify(targetSequence)) {
        onComplete(true);
      } else {
        setTimeout(() => setSelected([]), 1000);
        onComplete(false);
      }
    }
  };

  return (
    <div className="maya-card">
      <h3 className="text-xl mb-4 text-center">Descifra la Secuencia Real</h3>
      <p className="text-sm text-stone-400 mb-6 text-center italic">
        "El Sol corona la Montaña bajo el mando del Gran Ajaw"
      </p>
      
      <div className="grid grid-cols-4 gap-4">
        {GLYPHS.map((glyph) => (
          <motion.button
            key={glyph.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleGlyphClick(glyph.id)}
            className={`h-20 flex flex-col items-center justify-center rounded-lg border transition-all ${
              selected.includes(glyph.id) 
                ? 'border-mayan-gold bg-mayan-gold/20 text-mayan-gold' 
                : 'border-jade/30 bg-jade/5 text-jade'
            }`}
          >
            <span className="text-3xl">{glyph.symbol}</span>
            <span className="text-[10px] mt-1 uppercase tracking-tighter opacity-60">
              {glyph.meaning.split(' ')[0]}
            </span>
          </motion.button>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center gap-2">
        {targetSequence.map((_, i) => (
          <div 
            key={i} 
            className={`w-12 h-1 border-b-2 transition-all duration-500 ${
              selected[i] ? 'border-mayan-gold' : 'border-stone-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GlyphDecoder;
