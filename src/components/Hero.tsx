import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const handleMouseMove = (e: React.MouseEvent) => {
    const {
      clientX,
      clientY
    } = e;
    const {
      innerWidth,
      innerHeight
    } = window;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouseX.set(x);
    mouseY.set(y);
  };
  const springConfig = {
    damping: 25,
    stiffness: 150
  };
  const moveX = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), springConfig);
  const moveXInverse = useSpring(useTransform(mouseX, [0, 1], [10, -10]), springConfig);
  const moveYInverse = useSpring(useTransform(mouseY, [0, 1], [10, -10]), springConfig);
  // Scroll opacity effect
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  return <motion.section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#050816] to-black" onMouseMove={handleMouseMove} style={{
    opacity
  }}>
      {/* Background Glow */}
      <motion.div className="absolute w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" style={{
      x: moveXInverse,
      y: moveYInverse
    }} />

      {/* Main Typography */}
      <div className="relative z-10 text-center px-4">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="text-blue-400 tracking-[0.5em] text-sm md:text-base font-medium mb-4 uppercase">
          Immersive Digital Experience
        </motion.h2>

        <motion.h1 initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 1.2,
        ease: 'easeOut'
      }} style={{
        x: moveX,
        y: moveY,
        scale
      }} className="text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 tracking-tighter leading-none select-none drop-shadow-2xl">
          ERIDANUS
        </motion.h1>

        <motion.p initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 0.8
      }} className="mt-8 text-gray-400 max-w-lg mx-auto text-lg md:text-xl font-light">
          Crafting the future of digital interaction with precision and depth.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5,
      duration: 1
    }} className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest">Explore</span>
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2,
        ease: 'easeInOut'
      }}>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </motion.section>;
}