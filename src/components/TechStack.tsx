import React from 'react';
import { motion } from 'framer-motion';
const technologies = [{
  name: 'React',
  category: 'Frontend'
}, {
  name: 'Vue.js',
  category: 'Frontend'
}, {
  name: 'Next.js',
  category: 'Framework'
}, {
  name: 'TypeScript',
  category: 'Language'
}, {
  name: 'Node.js',
  category: 'Backend'
}, {
  name: 'Python',
  category: 'Backend'
}, {
  name: 'React Native',
  category: 'Mobile'
}, {
  name: 'Flutter',
  category: 'Mobile'
}, {
  name: 'Swift',
  category: 'iOS'
}, {
  name: 'Kotlin',
  category: 'Android'
}, {
  name: 'Electron',
  category: 'Desktop'
}, {
  name: '.NET',
  category: 'Desktop'
}, {
  name: 'PostgreSQL',
  category: 'Database'
}, {
  name: 'MongoDB',
  category: 'Database'
}, {
  name: 'AWS',
  category: 'Cloud'
}, {
  name: 'Docker',
  category: 'DevOps'
}];
export function TechStack() {
  return <section className="relative py-32 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-blue-400 tracking-[0.3em] text-sm font-medium mb-4 uppercase">
            Technologies
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
          duration: 0.6,
          delay: 0.1
        }} className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Notre Stack Technique
          </motion.h3>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des technologies de pointe pour des solutions performantes et
            évolutives
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {technologies.map((tech, index) => <motion.div key={tech.name} initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.4,
          delay: index * 0.05
        }} whileHover={{
          scale: 1.05,
          y: -5
        }} className="group relative">
              <div className="aspect-square rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center p-4 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-white/80 group-hover:text-white transition-colors mb-2">
                  {tech.name.charAt(0)}
                </div>
                <div className="text-xs text-gray-500 text-center font-medium">
                  {tech.name}
                </div>
              </div>

              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                <span className="text-xs text-white font-medium">
                  {tech.name}
                </span>
                <span className="text-xs text-blue-400 ml-2">
                  • {tech.category}
                </span>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}