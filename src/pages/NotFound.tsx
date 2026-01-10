import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
export function NotFound() {
  return <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.div initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.6
      }} className="mb-8">
          <h1 className="text-[12rem] md:text-[16rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-purple-600 leading-none">
            404
          </h1>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page non trouvée
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-md mx-auto">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300">
              <Home className="w-5 h-5" />
              Retour à l'accueil
            </Link>
            <button onClick={() => window.history.back()} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300">
              <ArrowLeft className="w-5 h-5" />
              Page précédente
            </button>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      </div>
    </div>;
}