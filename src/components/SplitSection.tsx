import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
interface SplitSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reversed?: boolean;
  index: number;
}
export function SplitSection({
  title,
  subtitle,
  description,
  image,
  reversed = false,
  index
}: SplitSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-20%'
  });
  return <section ref={ref} className={`py-24 md:py-32 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 overflow-hidden`}>
      {/* Image Side */}
      <motion.div className="w-full md:w-1/2 relative group" initial={{
      opacity: 0,
      x: reversed ? 50 : -50
    }} animate={isInView ? {
      opacity: 1,
      x: 0
    } : {}} transition={{
      duration: 0.8,
      delay: 0.2,
      ease: 'easeOut'
    }}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-900 border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <motion.img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />

          {/* Decorative elements */}
          <div className="absolute top-4 left-4 z-20 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
        </div>

        {/* Floating number */}
        <div className={`absolute -bottom-6 ${reversed ? '-left-6' : '-right-6'} text-9xl font-bold text-white/5 font-orbitron select-none z-0`}>
          0{index}
        </div>
      </motion.div>

      {/* Content Side */}
      <motion.div className="w-full md:w-1/2 relative z-10" initial={{
      opacity: 0,
      y: 30
    }} animate={isInView ? {
      opacity: 1,
      y: 0
    } : {}} transition={{
      duration: 0.8,
      delay: 0.4,
      ease: 'easeOut'
    }}>
        <span className="text-blue-400 font-mono text-sm tracking-wider uppercase mb-4 block">
          {subtitle}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          {description}
        </p>

        <button className="group flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors">
          Learn more
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </section>;
}