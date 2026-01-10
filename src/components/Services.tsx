import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Monitor, Code2, Layers, Cpu } from 'lucide-react';
const services = [{
  id: 'web',
  title: 'Développement Web',
  description: 'Applications web performantes et évolutives, conçues pour une expérience utilisateur fluide et immersive.',
  icon: Globe,
  tech: ['React', 'Next.js', 'Vue.js', 'Node.js', 'TypeScript'],
  color: 'from-blue-500/20 to-purple-500/20',
  border: 'group-hover:border-blue-500/50'
}, {
  id: 'mobile',
  title: 'Applications Mobile',
  description: 'Solutions natives et cross-platform pour iOS et Android, alliant performance et design intuitif.',
  icon: Smartphone,
  tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS/Android'],
  color: 'from-purple-500/20 to-pink-500/20',
  border: 'group-hover:border-purple-500/50'
}, {
  id: 'desktop',
  title: 'Logiciels Desktop',
  description: 'Applications de bureau robustes et sécurisées pour Windows, macOS et Linux, adaptées aux besoins métiers complexes.',
  icon: Monitor,
  tech: ['Electron', '.NET', 'Qt', 'C++', 'Cross-platform'],
  color: 'from-cyan-500/20 to-blue-500/20',
  border: 'group-hover:border-cyan-500/50'
}];
export function Services() {
  return <section id="services" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
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
            Nos Expertises
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
        }} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Technologies & Solutions
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => <motion.div key={service.id} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h4 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h4>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tech.map(tech => <span key={tech} className="px-3 py-1 text-xs font-medium text-blue-200 bg-blue-900/30 rounded-full border border-blue-500/20">
                      {tech}
                    </span>)}
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}