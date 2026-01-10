import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Zap } from 'lucide-react';
const team = [{
  name: 'Alexandre Dubois',
  role: 'CEO & Fondateur',
  bio: "10 ans d'expérience en développement web et mobile. Passionné par l'innovation technologique.",
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
}, {
  name: 'Sophie Martin',
  role: 'CTO',
  bio: 'Experte en architecture logicielle et cloud computing. Anciennement chez Google.',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop'
}, {
  name: 'Thomas Laurent',
  role: 'Lead Developer',
  bio: 'Spécialiste React et React Native. Créateur de solutions mobiles innovantes.',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
}, {
  name: 'Marie Petit',
  role: 'UI/UX Designer',
  bio: 'Designer passionnée par les interfaces intuitives et les expériences utilisateur mémorables.',
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop'
}];
const milestones = [{
  year: '2020',
  title: 'Création',
  description: "Fondation d'ERIDANUS CORPORATION à Paris"
}, {
  year: '2021',
  title: 'Croissance',
  description: 'Première équipe de 5 développeurs, 20 projets livrés'
}, {
  year: '2022',
  title: 'Expansion',
  description: 'Ouverture de nouveaux services mobile et desktop'
}, {
  year: '2023',
  title: 'Excellence',
  description: '50+ projets, partenariats stratégiques'
}, {
  year: '2024',
  title: 'Innovation',
  description: 'Lancement de solutions IA et cloud avancées'
}];
export function About() {
  return <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            À propos d'
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              ERIDANUS
            </span>
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="text-xl text-gray-400 leading-relaxed">
            Une équipe passionnée dédiée à transformer vos idées en solutions
            digitales exceptionnelles
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-4xl font-bold text-white mb-6">
                Notre Mission
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Chez ERIDANUS CORPORATION, nous croyons que chaque entreprise
                mérite une présence digitale exceptionnelle. Notre mission est
                de démocratiser l'accès aux technologies de pointe en proposant
                des solutions sur mesure, performantes et accessibles.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Nous accompagnons les petites et moyennes entreprises dans leur
                transformation digitale avec une approche humaine, transparente
                et axée sur les résultats concrets.
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="grid grid-cols-2 gap-6">
              {[{
              icon: Target,
              title: 'Vision',
              desc: 'Excellence technique'
            }, {
              icon: Heart,
              title: 'Passion',
              desc: 'Projets qui comptent'
            }, {
              icon: Users,
              title: 'Équipe',
              desc: 'Experts dévoués'
            }, {
              icon: Zap,
              title: 'Innovation',
              desc: 'Technologies de pointe'
            }].map((item, i) => <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <item.icon className="w-8 h-8 text-blue-400 mb-3" />
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>)}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-4xl font-bold text-white text-center mb-20">
            Notre Histoire
          </motion.h2>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-blue-500/30" />
            {milestones.map((milestone, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -30 : 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 md:w-1/2 md:px-12">
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-16 md:pl-0`}>
                    <div className="text-5xl font-black text-blue-500/20 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 border-4 border-black" />
                <div className="hidden md:block flex-1 md:w-1/2" />
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-4xl font-bold text-white text-center mb-4">
            Notre Équipe
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Des experts passionnés qui mettent leur talent au service de votre
            réussite
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => <motion.div key={index} initial={{
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
          }} className="group">
                <div className="relative mb-6 overflow-hidden rounded-xl aspect-square">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>
    </div>;
}