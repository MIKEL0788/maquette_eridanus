import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
const projects = [{
  id: 1,
  slug: 'ecommerce-fashion',
  title: 'Boutique Mode en Ligne',
  category: 'Web & Mobile',
  client: 'Fashion Boutique Paris',
  year: '2024',
  description: 'Plateforme e-commerce complète avec application mobile, paiement sécurisé et gestion des stocks en temps réel.',
  longDescription: "Développement d'une solution e-commerce full-stack incluant un site web responsive, une application mobile native et un back-office administrateur complet.",
  tags: ['React', 'React Native', 'Node.js', 'Stripe', 'MongoDB'],
  image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop',
  results: ['300% augmentation des ventes en ligne', '50k utilisateurs actifs', '4.8/5 satisfaction client']
}, {
  id: 2,
  slug: 'crm-desktop',
  title: 'Logiciel CRM Desktop',
  category: 'Desktop',
  client: 'InnovateCorp',
  year: '2023',
  description: 'Application desktop multi-plateforme pour la gestion de la relation client avec synchronisation cloud.',
  longDescription: 'Solution CRM complète développée avec Electron, offrant une expérience native sur Windows, macOS et Linux.',
  tags: ['Electron', 'TypeScript', 'PostgreSQL', 'AWS', 'Redis'],
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
  results: ['40% gain de productivité', 'Déploiement sur 200+ postes', 'ROI en 6 mois']
}, {
  id: 3,
  slug: 'health-app',
  title: 'Application Santé Mobile',
  category: 'Mobile',
  client: 'HealthTech Solutions',
  year: '2024',
  description: 'Application mobile de suivi médical avec notifications intelligentes et conformité RGPD.',
  longDescription: 'Application de santé connectée permettant le suivi des constantes vitales, la prise de rendez-vous et la téléconsultation.',
  tags: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit', 'WebRTC'],
  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
  results: ['100k téléchargements', '4.7/5 sur les stores', 'Certification HDS']
}, {
  id: 4,
  slug: 'restaurant-booking',
  title: 'Plateforme de Réservation',
  category: 'Web',
  client: 'Restaurant Network',
  year: '2023',
  description: 'Système de réservation en ligne pour chaîne de restaurants avec gestion des tables en temps réel.',
  longDescription: 'Plateforme web complète avec tableau de bord restaurateur, système de réservation client et intégration paiement.',
  tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Vercel'],
  image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
  results: ['5000 réservations/mois', '15 restaurants connectés', '98% taux de confirmation']
}, {
  id: 5,
  slug: 'logistics-app',
  title: 'Application Logistique',
  category: 'Mobile',
  client: 'TransportCo',
  year: '2024',
  description: "Application mobile pour chauffeurs avec géolocalisation, optimisation d'itinéraires et signature électronique.",
  longDescription: 'Solution mobile complète pour la gestion des livraisons avec tracking en temps réel et preuve de livraison numérique.',
  tags: ['React Native', 'Google Maps', 'Node.js', 'Socket.io', 'MongoDB'],
  image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1000&auto=format&fit=crop',
  results: ['200 chauffeurs équipés', '30% réduction temps livraison', '99.5% taux de livraison']
}, {
  id: 6,
  slug: 'education-platform',
  title: 'Plateforme E-Learning',
  category: 'Web',
  client: 'EduTech Academy',
  year: '2023',
  description: "Plateforme d'apprentissage en ligne avec vidéos, quiz interactifs et suivi de progression.",
  longDescription: 'LMS complet avec gestion des cours, système de paiement, certificats et espace communautaire.',
  tags: ['Vue.js', 'Laravel', 'MySQL', 'Vimeo API', 'Stripe'],
  image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop',
  results: ['10k étudiants inscrits', '500+ cours disponibles', '4.6/5 satisfaction']
}];
export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const filters = ['Tous', 'Web & Mobile', 'Web', 'Mobile', 'Desktop'];
  const filteredProjects = activeFilter === 'Tous' ? projects : projects.filter(p => p.category === activeFilter);
  return <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
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
            Notre
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {' '}
              Portfolio
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
            Découvrez nos réalisations et les résultats concrets obtenus pour
            nos clients
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeFilter === filter ? 'bg-blue-600 text-white shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'}`}>
                {filter}
              </button>)}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => <motion.div key={project.id} initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="group">
                <Link to={`/portfolio/${project.slug}`}>
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                        <span className="text-xs font-medium text-blue-300">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.year}
                        </span>
                        <span>•</span>
                        <span>{project.client}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 mb-6 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 3).map(tag => <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-400">
                            {tag}
                          </span>)}
                        {project.tags.length > 3 && <span className="text-xs px-2 py-1 bg-white/5 rounded text-gray-400">
                            +{project.tags.length - 3}
                          </span>}
                      </div>

                      <div className="flex items-center gap-2 text-blue-400 font-medium text-sm">
                        Voir le projet
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>)}
          </div>
        </div>
      </section>
    </div>;
}