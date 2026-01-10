import React from 'react';
import { motion } from 'framer-motion';
import { Ear, Palette, Code, CheckCircle, Rocket } from 'lucide-react';
const steps = [{
  id: 1,
  title: 'Écoute & Analyse',
  description: 'Nous étudions vos besoins, vos objectifs et votre marché pour définir une stratégie digitale sur mesure.',
  icon: Ear
}, {
  id: 2,
  title: 'Conception & Design',
  description: "Création de maquettes et prototypes interactifs pour valider l'expérience utilisateur avant le développement.",
  icon: Palette
}, {
  id: 3,
  title: 'Développement Agile',
  description: "Codage itératif avec des points d'étape réguliers pour assurer une adéquation parfaite avec vos attentes.",
  icon: Code
}, {
  id: 4,
  title: 'Tests & Validation',
  description: 'Phase rigoureuse de tests fonctionnels, de performance et de sécurité sur tous les supports cibles.',
  icon: CheckCircle
}, {
  id: 5,
  title: 'Déploiement & Support',
  description: 'Mise en ligne sécurisée et accompagnement continu pour garantir la pérennité de votre solution.',
  icon: Rocket
}];
export function Process() {
  return <section id="process" className="relative py-32 px-6 bg-black/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24 text-center">
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
            Notre Processus
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
            De l'idée à la réalité
          </motion.h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => <motion.div key={step.id} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: '-100px'
          }} transition={{
            duration: 0.7,
            delay: index * 0.1
          }} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <div className="flex-1 md:w-1/2 pl-16 md:pl-0 md:px-16">
                  <div className={`text-left ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h4 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#0a0e27] border border-blue-500/30 flex items-center justify-center z-10 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]">
                    <step.icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>

                {/* Empty Side for Balance */}
                <div className="hidden md:block flex-1 md:w-1/2" />
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}