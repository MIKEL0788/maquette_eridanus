import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
}
const projects: Project[] = [{
  id: 1,
  title: 'Application E-Commerce',
  category: 'Web & Mobile',
  description: 'Plateforme de vente en ligne complète avec application mobile native, système de paiement sécurisé et tableau de bord administrateur.',
  tags: ['React', 'React Native', 'Node.js', 'Stripe'],
  image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop'
}, {
  id: 2,
  title: 'Logiciel de Gestion',
  category: 'Desktop',
  description: 'Application desktop multi-plateforme pour la gestion des stocks et facturation, avec synchronisation cloud en temps réel.',
  tags: ['Electron', 'TypeScript', 'PostgreSQL', 'AWS'],
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'
}, {
  id: 3,
  title: 'Application Santé',
  category: 'Mobile',
  description: 'Application mobile de suivi médical avec notifications intelligentes, synchronisation multi-appareils et conformité RGPD.',
  tags: ['Flutter', 'Firebase', 'HealthKit', 'iOS/Android'],
  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop'
}];
function ProjectCard({
  project
}: {
  project: Project;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{
    rotateX,
    rotateY,
    transformStyle: 'preserve-3d'
  }} initial={{
    opacity: 0,
    y: 50
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: '-10%'
  }} transition={{
    duration: 0.5,
    ease: 'easeOut'
  }} className="relative group w-full perspective-1000">
      <div className="relative bg-[#0f1225] border border-white/5 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-blue-900/20" style={{
      transform: 'translateZ(0px)'
    }}>
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1225] to-transparent z-10 opacity-60" />
          <motion.img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            <span className="text-xs font-mono text-blue-300">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 relative z-20">
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors" style={{
          transform: 'translateZ(20px)'
        }}>
            {project.title}
          </h3>
          <p className="text-gray-400 mb-6 line-clamp-2" style={{
          transform: 'translateZ(10px)'
        }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6" style={{
          transform: 'translateZ(15px)'
        }}>
            {project.tags.map(tag => <span key={tag} className="text-xs font-medium px-2 py-1 bg-white/5 rounded text-gray-300">
                {tag}
              </span>)}
          </div>

          <div className="flex items-center gap-4" style={{
          transform: 'translateZ(25px)'
        }}>
            <button className="flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors">
              View Project <ExternalLink className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>;
}
export function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const filters = ['Tous', 'Web & Mobile', 'Desktop', 'Mobile'];
  const filteredProjects = activeFilter === 'Tous' ? projects : projects.filter(p => p.category === activeFilter);
  return <section className="py-32 px-6 relative z-10 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <h2 className="text-blue-400 tracking-[0.3em] text-sm font-medium mb-4 uppercase">
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Nos Réalisations
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Découvrez quelques projets que nous avons eu le plaisir de
            développer pour nos clients
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {filters.map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === filter ? 'bg-blue-600 text-white shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'}`}>
                {filter}
              </button>)}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>;
}