import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/ui/Layout';
import Home from './pages/Home';
import Expedition from './pages/Expedition';

// Placeholder pages
const PlaceholderPage = ({ title }) => (
  <div className="flex flex-col items-center justify-center py-20">
    <h2 className="text-3xl font-serif text-mayan-gold mb-4 uppercase">{title}</h2>
    <div className="maya-card p-12 text-center">
      <p className="text-stone-400 italic">"Esta sección del archivo está siendo restaurada por arqueólogos..."</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expeditions" element={<Home />} /> {/* Redirect to home for now or map list */}
          <Route path="/expedition/:region" element={<Expedition />} />
          <Route path="/archives" element={<PlaceholderPage title="Archivo de Códices" />} />
          <Route path="/maps" element={<PlaceholderPage title="Mapas Secretos" />} />
          <Route path="/ranking" element={<PlaceholderPage title="Salón de Exploradores" />} />
          <Route path="/profile" element={<PlaceholderPage title="Perfil de Arqueólogo" />} />
          <Route path="/shop" element={<PlaceholderPage title="Mercado de Tikal" />} />
          <Route path="/results" element={<PlaceholderPage title="Resultados de Investigación" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
