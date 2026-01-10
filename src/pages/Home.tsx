import React from 'react';
import { Hero } from '../components/Hero';
import { SplitSection } from '../components/SplitSection';
import { Stats } from '../components/Stats';
import { Values } from '../components/Values';
import { Services } from '../components/Services';
import { TechStack } from '../components/TechStack';
import { CTASection } from '../components/CTASection';
import { Process } from '../components/Process';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
export function Home() {
  return <>
      {/* Hero Section */}
      <Hero />

      {/* Content Container */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-[#0a0e27]/80 to-black">
        {/* About Section */}
        <SplitSection index={1} title="Qui sommes-nous ?" subtitle="Votre partenaire digital" description="ERIDANUS CORPORATION est une startup innovante spécialisée dans le développement d'applications sur mesure. Notre mission est d'accompagner les petites entreprises dans leur transformation digitale avec des solutions techniques robustes et un design moderne." image="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1000&auto=format&fit=crop" />

        {/* Stats Section */}
        <Stats />

        {/* Values Section */}
        <Values />

        {/* Services Section */}
        <Services />

        {/* Tech Stack Section */}
        <TechStack />

        {/* CTA Section */}
        <CTASection />

        {/* Process Section */}
        <Process />

        {/* Projects Grid */}
        <div id="portfolio">
          <ProjectShowcase />
        </div>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />
      </div>
    </>;
}