import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from 'lucide-react';
export function Contact() {
  return <section id="contact" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
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
            <h2 className="text-blue-400 tracking-[0.3em] text-sm font-medium mb-4 uppercase">
              Contact
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">
              Démarrons votre projet
            </h3>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Prêt à transformer votre vision en réalité digitale ? Discutons de
              vos besoins et construisons ensemble votre solution sur mesure.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a href="mailto:contact@eridanus.corp" className="text-gray-400 hover:text-white transition-colors">
                    eridanuscorporation@yahoo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Téléphone</h4>
                  <a href="tel:+2250788939465" className="text-gray-400 hover:text-white transition-colors">
                    +225 07 88 93 94 65
                  </a>
                  <br />
                  <a href="tel:+2250774591141" className="text-gray-400 hover:text-white transition-colors">
                    +225 07 74 59 11 41
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Bureau</h4>
                  <p className="text-gray-400">
                    Yamoussokro, Abidjan
                    <br />
                    Disponible dans le monde entier
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all duration-300">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Nom complet
                  </label>
                  <input type="text" id="name" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="votre@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-gray-300">
                  Entreprise
                </label>
                <input type="text" id="company" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Nom de votre entreprise" />
              </div>

              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium text-gray-300">
                  Type de projet
                </label>
                <select id="type" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                  <option value="" className="bg-gray-900">
                    Sélectionnez une option
                  </option>
                  <option value="web" className="bg-gray-900">
                    Développement Web
                  </option>
                  <option value="mobile" className="bg-gray-900">
                    Application Mobile
                  </option>
                  <option value="desktop" className="bg-gray-900">
                    Logiciel Desktop
                  </option>
                  <option value="other" className="bg-gray-900">
                    Autre demande
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Décrivez brièvement votre projet..." />
              </div>

              <button type="button" className="w-full bg-white text-black font-bold py-4 rounded-lg hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-2">
                Envoyer votre demande
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
}