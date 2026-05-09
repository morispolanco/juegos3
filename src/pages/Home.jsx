import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, BookOpen, Map, ScrollText } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-serif mb-4 pulse-gold">EL ARCHIVO MAYA</h1>
        <p className="text-stone-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 italic">
          Desentierra los secretos de una civilización perdida. Descifra glifos, reconstruye códices y explora templos ocultos en el corazón de Guatemala.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        <MenuCard 
          to="/expeditions" 
          icon={<Compass className="w-8 h-8" />} 
          title="Iniciar Expedición" 
          desc="Viaja a Tikal, El Mirador y Quiriguá."
        />
        <MenuCard 
          to="/archives" 
          icon={<BookOpen className="w-8 h-8" />} 
          title="Archivo de Códices" 
          desc="Restaura manuscritos antiguos fragmentados."
        />
        <MenuCard 
          to="/maps" 
          icon={<Map className="w-8 h-8" />} 
          title="Mapas Secretos" 
          desc="Encuentra cámaras ocultas y tesoros."
        />
        <MenuCard 
          to="/ranking" 
          icon={<ScrollText className="w-8 h-8" />} 
          title="Salón de Exploradores" 
          desc="Compite por ser el arqueólogo supremo."
        />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 maya-card w-full max-w-md p-4 flex items-center gap-4"
      >
        <div className="bg-fire-glow/20 p-3 rounded-full animate-pulse">
          🔥
        </div>
        <div className="text-left">
          <h4 className="text-mayan-gold font-bold">Desafío Diario</h4>
          <p className="text-sm text-stone-400">El Códice de Dresden espera ser descifrado.</p>
        </div>
        <button className="ml-auto btn-maya py-2 px-4 text-sm">Jugar</button>
      </motion.div>
    </div>
  );
};

const MenuCard = ({ to, icon, title, desc }) => (
  <Link to={to}>
    <motion.div 
      whileHover={{ scale: 1.05, borderColor: '#D4AF37' }}
      className="maya-card h-full text-left flex flex-col items-start gap-3 border-jade/20 hover:shadow-jade/20 transition-all cursor-pointer"
    >
      <div className="text-jade bg-jade/10 p-3 rounded-lg border border-jade/20">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-stone-400">{desc}</p>
    </motion.div>
  </Link>
);

export default Home;
