import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, ExternalLink, CheckCircle } from 'lucide-react';
// Mock data - in real app, fetch from API
const projectData: Record<string, any> = {
  'ecommerce-fashion': {
    title: 'Boutique Mode en Ligne',
    client: 'Fashion Boutique Paris',
    year: '2024',
    category: 'Web & Mobile',
    description: 'Plateforme e-commerce complète avec application mobile, paiement sécurisé et gestion des stocks en temps réel.',
    challenge: "Le client souhaitait moderniser sa présence en ligne et offrir une expérience d'achat fluide sur tous les appareils. Le défi principal était d'intégrer un système de gestion des stocks complexe avec plusieurs entrepôts.",
    solution: "Nous avons développé une solution full-stack incluant un site web responsive en React, une application mobile native en React Native, et un back-office administrateur complet. L'architecture microservices permet une scalabilité optimale.",
    tags: ['React', 'React Native', 'Node.js', 'Stripe', 'MongoDB', 'AWS', 'Redis'],
    images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop', 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop', 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop'],
    results: ["300% d'augmentation des ventes en ligne en 6 mois", '50 000 utilisateurs actifs mensuels', '4.8/5 de satisfaction client', 'Temps de chargement < 2 secondes', 'Taux de conversion de 3.2%'],
    testimonial: {
      quote: "ERIDANUS a transformé notre business. L'application est magnifique et nos ventes ont explosé.",
      author: 'Marie Dubois',
      role: 'CEO, Fashion Boutique Paris'
    }
  }
};
export function ProjectDetail() {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  const project = slug ? projectData[slug] : null;
  if (!project) {
    return <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Projet non trouvé
          </h1>
          <Link to="/portfolio" className="text-blue-400 hover:text-blue-300">
            Retour au portfolio
          </Link>
        </div>
      </div>;
  }
  return <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="px-6 py-8">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Retour au portfolio
        </Link>
      </div>

      {/* Hero */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="mb-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {project.year}
              </span>
              <span>•</span>
              <span>{project.client}</span>
              <span>•</span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30">
                {project.category}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              {project.title}
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </motion.div>

          {/* Main Image */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="relative rounded-2xl overflow-hidden aspect-video mb-16">
            <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Le Défi</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {project.challenge}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Notre Solution
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {project.solution}
              </p>
            </div>

            {/* Additional Images */}
            <div className="grid grid-cols-2 gap-4">
              {project.images.slice(1).map((img: string, i: number) => <div key={i} className="relative rounded-xl overflow-hidden aspect-video">
                  <img src={img} alt={`${project.title} ${i + 2}`} className="w-full h-full object-cover" />
                </div>)}
            </div>

            {/* Results */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Résultats</h2>
              <div className="space-y-4">
                {project.results.map((result: string, i: number) => <motion.div key={i} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: i * 0.1
              }} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-lg">{result}</span>
                  </motion.div>)}
              </div>
            </div>

            {/* Testimonial */}
            {project.testimonial && <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <p className="text-xl text-gray-300 italic mb-6">
                  "{project.testimonial.quote}"
                </p>
                <div>
                  <p className="text-white font-bold">
                    {project.testimonial.author}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {project.testimonial.role}
                  </p>
                </div>
              </div>}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-24">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => <span key={tag} className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg text-sm border border-white/10">
                    {tag}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Vous avez un projet similaire ?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Discutons de la façon dont nous pouvons vous aider à atteindre vos
            objectifs
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300">
            Démarrer votre projet
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>;
}