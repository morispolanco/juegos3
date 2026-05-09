import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { generateContent, prompts } from '../services/aiService';
import GlyphDecoder from '../components/puzzles/GlyphDecoder';
import RewardedAd from '../components/ads/RewardedAd';
import { useAds } from '../hooks/useAds';
import { Loader2, Skull, Trophy, Lightbulb } from 'lucide-react';

const Expedition = () => {
  const { region } = useParams();
  const navigate = useNavigate();
  const { showInterstitial, showRewarded, isShowingRewarded } = useAds();
  
  const [loading, setLoading] = useState(true);
  const [showRewardedModal, setShowRewardedModal] = useState(false);
  const [onAdComplete, setOnAdComplete] = useState(null);
  const [expedition, setExpedition] = useState(null);
  const [gameState, setGameState] = useState('briefing'); // briefing, puzzle, complete
  const [puzzleSolved, setPuzzleSolved] = useState(false);

  useEffect(() => {
    const fetchExpedition = async () => {
      try {
        const data = await generateContent(
          prompts.expedition(region || 'Petén, Guatemala'),
          'Eres un narrador de aventuras arqueológicas mayas. Genera contenido inmersivo y misterioso.'
        );
        setExpedition(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        // Fallback data if API fails
        setExpedition({
          nombre: "El Templo de las Sombras de Tikal",
          descripcion: "Te encuentras frente a la escalinata del Mundo Perdido. El aire es denso y el sonido de los monos aulladores resuena en la bóveda de la selva.",
          objetivos: ["Encontrar el glifo del sol", "Abrir la cámara secreta", "Recuperar la máscara de jade"],
          leyenda: "Se dice que el rey Garra de Jaguar ocultó su corazón en este templo.",
          dificultad: 3
        });
        setLoading(false);
      }
    };

    fetchExpedition();
  }, [region]);

  const handleStartPuzzle = () => {
    setGameState('puzzle');
  };

  const handlePuzzleComplete = (success) => {
    if (success) {
      setPuzzleSolved(true);
      setTimeout(() => {
        setGameState('complete');
        showInterstitial();
      }, 1500);
    }
  };

  const handleGetClue = () => {
    setShowRewardedModal(true);
    setOnAdComplete(() => () => {
      alert("Pista: Los antiguos reyes siempre miraban al Sol primero.");
      setShowRewardedModal(false);
    });
  };

  const handleAdFinished = () => {
    if (onAdComplete) onAdComplete();
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-64 gap-4">
      <Loader2 className="w-12 h-12 text-jade animate-spin" />
      <p className="text-mayan-gold font-serif text-xl animate-pulse">Abriendo el Archivo...</p>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {gameState === 'briefing' && (
          <motion.div
            key="briefing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <span className="text-jade uppercase tracking-widest text-xs font-bold">Expedición Arqueológica</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-2">{expedition.nombre}</h2>
            </div>

            <div className="maya-card border-l-4 border-l-jade">
              <p className="parchment-text text-lg italic leading-relaxed">
                "{expedition.descripcion}"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="maya-card p-4">
                <h4 className="text-mayan-gold font-bold mb-2 flex items-center gap-2 text-sm">
                  <Skull className="w-4 h-4" /> Objetivos
                </h4>
                <ul className="text-xs text-stone-300 space-y-2">
                  {expedition.objetivos.map((obj, i) => (
                    <li key={i}>• {obj}</li>
                  ))}
                </ul>
              </div>
              <div className="maya-card p-4">
                <h4 className="text-mayan-gold font-bold mb-2 flex items-center gap-2 text-sm">
                  <Trophy className="w-4 h-4" /> Recompensa
                </h4>
                <p className="text-xs text-stone-300">Máscara de Jade de {region || 'Tikal'}</p>
                <div className="mt-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${i < expedition.dificultad ? 'bg-jade' : 'bg-stone-700'}`} />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button onClick={handleStartPuzzle} className="btn-maya w-full py-4 text-xl">
                Explorar Templo
              </button>
              <button onClick={() => navigate('/')} className="btn-maya-outline w-full py-3">
                Retirarse
              </button>
            </div>
          </motion.div>
        )}

        {gameState === 'puzzle' && (
          <motion.div
            key="puzzle"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <GlyphDecoder onComplete={handlePuzzleComplete} />
            
            <div className="flex justify-center">
              <button 
                onClick={handleGetClue}
                className="flex items-center gap-2 text-jade hover:text-mayan-gold transition-colors text-sm font-bold"
              >
                <Lightbulb className="w-4 h-4" /> ¿Necesitas una pista? Ver anuncio
              </button>
            </div>
          </motion.div>
        )}

        {gameState === 'complete' && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8 py-12"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-jade/20 blur-3xl rounded-full scale-150 animate-pulse" />
              <Trophy className="w-32 h-32 text-mayan-gold mx-auto relative z-10" />
            </div>
            
            <h2 className="text-4xl font-serif text-mayan-gold">¡Tesoro Recuperado!</h2>
            <p className="text-stone-300 max-w-sm mx-auto">
              Has descifrado los glifos antiguos y abierto la cámara secreta. La Máscara de Jade es tuya.
            </p>

            <div className="maya-card max-w-sm mx-auto p-4 bg-jade/10">
              <p className="text-sm italic">"Has ganado 250 puntos de prestigio arqueológico."</p>
            </div>

            <div className="flex flex-col gap-4 max-w-sm mx-auto">
              <button onClick={() => navigate('/')} className="btn-maya w-full">
                Volver al Cuartel
              </button>
              <button className="btn-maya-outline w-full">
                Ver Ranking Mundial
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <RewardedAd 
        isOpen={showRewardedModal} 
        onClose={() => setShowRewardedModal(false)}
        onComplete={handleAdFinished}
      />
    </div>
  );
};

export default Expedition;
