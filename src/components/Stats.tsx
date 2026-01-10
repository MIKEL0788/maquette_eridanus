import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
interface StatProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}
function AnimatedCounter({
  end,
  label,
  suffix = '',
  duration = 2
}: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000
  });
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);
  useEffect(() => {
    const unsubscribe = springValue.on('change', latest => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.6
  }} className="text-center">
      <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
        {displayValue}
        {suffix}
      </div>
      <div className="text-gray-400 text-sm md:text-base font-medium tracking-wide uppercase">
        {label}
      </div>
    </motion.div>;
}
export function Stats() {
  return <section className="relative py-24 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          <AnimatedCounter end={50} label="Projets réalisés" suffix="+" />
          <AnimatedCounter end={35} label="Clients satisfaits" suffix="+" />
          <AnimatedCounter end={20} label="Technologies maîtrisées" suffix="+" />
          <AnimatedCounter end={98} label="Taux de satisfaction" suffix="%" />
        </div>
      </div>
    </section>;
}