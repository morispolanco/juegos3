import React, { useState, useEffect } from 'react';
import { motion, Reorder } from 'framer-motion';

const CodexReconstruction = ({ onComplete }) => {
  const initialItems = [
    { id: '1', text: 'El descenso del dios Kukulcán', image: '🐉' },
    { id: '2', text: 'La alineación de los astros', image: '⭐' },
    { id: '3', text: 'El ritual del fuego nuevo', image: '🔥' },
    { id: '4', text: 'La cosecha del cacao real', image: '🌿' },
  ];

  const [items, setItems] = useState([...initialItems].sort(() => Math.random() - 0.5));
  const targetOrder = initialItems.map(item => item.id);

  useEffect(() => {
    const currentOrder = items.map(item => item.id);
    if (JSON.stringify(currentOrder) === JSON.stringify(targetOrder)) {
      setTimeout(() => onComplete(true), 1000);
    }
  }, [items]);

  return (
    <div className="maya-card">
      <h3 className="text-xl mb-2 text-center">Reconstrucción de Códice</h3>
      <p className="text-xs text-stone-400 mb-6 text-center italic">
        "Ordena los fragmentos según la cronología sagrada"
      </p>

      <Reorder.Group axis="y" values={items} onReorder={setItems} className="space-y-3">
        {items.map((item) => (
          <Reorder.Item 
            key={item.id} 
            value={item}
            className="bg-jungle-deep/50 border border-jade/20 p-4 rounded-lg cursor-grab active:cursor-grabbing flex items-center gap-4 hover:border-jade/50 transition-colors"
          >
            <span className="text-2xl">{item.image}</span>
            <span className="text-sm font-bold text-stone-300">{item.text}</span>
            <div className="ml-auto text-stone-600">☰</div>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <div className="mt-6 text-center">
        <p className="text-[10px] text-jade uppercase tracking-widest animate-pulse">
          Arrastra para ordenar
        </p>
      </div>
    </div>
  );
};

export default CodexReconstruction;
