import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
const testimonials = [{
  id: 1,
  content: "ERIDANUS a transformé notre vision en une application mobile performante. Leur expertise technique est remarquable et l'équipe a su nous guider à chaque étape.",
  author: 'Marie Dubois',
  role: 'CEO',
  company: 'TechStart'
}, {
  id: 2,
  content: 'Un partenaire de confiance qui comprend nos besoins métier. Le processus était transparent et le résultat dépasse nos attentes en termes de qualité et de performance.',
  author: 'Jean Martin',
  role: 'Directeur Digital',
  company: 'InnovateCorp'
}, {
  id: 3,
  content: 'Professionnalisme et créativité. Notre site web reflète parfaitement notre identité de marque avec des animations fluides qui impressionnent nos clients.',
  author: 'Sophie Laurent',
  role: 'Fondatrice',
  company: 'DesignStudio'
}];
export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  const next = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prev = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <section id="testimonials" className="relative py-32 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-blue-400 tracking-[0.3em] text-sm font-medium mb-4 uppercase">
            Témoignages
          </motion.h2>
          <motion.h3 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Ils nous font confiance
          </motion.h3>
        </div>

        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-blue-500/20" />

          <div className="min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div key={currentIndex} initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} exit={{
              opacity: 0,
              x: -20
            }} transition={{
              duration: 0.4
            }} className="text-center">
                <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-blue-400 text-sm">
                    {testimonials[currentIndex].role},{' '}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button onClick={prev} className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10" aria-label="Previous testimonial">
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-blue-500' : 'bg-white/20'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
            </div>
            <button onClick={next} className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10" aria-label="Next testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>;
}