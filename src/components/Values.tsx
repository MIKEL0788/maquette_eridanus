import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Award, Users, Eye } from 'lucide-react';
const values = [{
  id: 'innovation',
  title: 'Innovation',
  description: 'Technologies modernes et solutions créatives pour des applications qui se démarquent.',
  icon: Lightbulb,
  color: 'from-blue-500/20 to-cyan-500/20',
  iconColor: 'text-blue-400'
}, {
  id: 'quality',
  title: 'Qualité',
  description: 'Code propre, tests rigoureux et performances optimales pour une expérience irréprochable.',
  icon: Award,
  color: 'from-purple-500/20 to-pink-500/20',
  iconColor: 'text-purple-400'
}, {
  id: 'proximity',
  title: 'Proximité',
  description: 'Partenariat à long terme avec nos clients, disponibilité et écoute permanente.',
  icon: Users,
  color: 'from-green-500/20 to-emerald-500/20',
  iconColor: 'text-green-400'
}, {
  id: 'transparency',
  title: 'Transparence',
  description: "Visibilité totale sur l'avancement des projets et communication claire à chaque étape.",
  icon: Eye,
  color: 'from-orange-500/20 to-yellow-500/20',
  iconColor: 'text-orange-400'
}];
export function Values() {
  return <section className="relative py-32 px-6">
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
            Nos Valeurs
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
            Ce qui nous guide
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => <motion.div key={value.id} initial={{
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
        }} className="relative group">
              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className={`w-6 h-6 ${value.iconColor}`} />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}