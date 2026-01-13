import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const navItems = [{
  name: 'Accueil',
  href: '/'
}, {
  name: 'À propos',
  href: '/about'
}, {
  name: 'Services',
  href: '/#services'
}, {
  name: 'Portfolio',
  href: '/portfolio'
}, {
  name: 'Contact',
  href: '/#contact'
}];
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    scrollY
  } = useScroll();
  const lastScrollY = useRef(0);
  const location = useLocation();
  useMotionValueEvent(scrollY, 'change', latest => {
    const previous = lastScrollY.current;
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    lastScrollY.current = latest;
  });
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };
  return <motion.header variants={{
    visible: {
      y: 0
    },
    hidden: {
      y: '-100%'
    }
  }} animate={isHidden ? 'hidden' : 'visible'} transition={{
    duration: 0.35,
    ease: 'easeInOut'
  }} className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-black/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="z-50 relative">
          <img 
            src="/logo_eridanus.png" 
            alt="ERIDANUS Logo" 
            className="h-10 w-auto" 
            onError={(e) => {
              // Si le logo ne se charge pas, afficher le nom du site
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const textNode = document.createElement('span');
              textNode.className = 'text-2xl font-black tracking-tighter text-white';
              textNode.textContent = 'ERIDANUS';
              target.parentNode?.insertBefore(textNode, target.nextSibling);
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => item.href.startsWith('/#') ? <a key={item.name} href={item.href} onClick={e => {
          if (location.pathname === '/') {
            e.preventDefault();
            handleNavClick(item.href);
          }
        }} className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide">
                {item.name}
              </a> : <Link key={item.name} to={item.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide">
                {item.name}
              </Link>)}
          <a href="/#contact" onClick={e => {
          if (location.pathname === '/') {
            e.preventDefault();
            handleNavClick('/#contact');
          }
        }} className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
            Démarrer votre projet
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-50 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="absolute inset-0 h-screen bg-black flex flex-col items-center justify-center gap-8 md:hidden">
            {navItems.map(item => item.href.startsWith('/#') ? <a key={item.name} href={item.href} onClick={e => {
          if (location.pathname === '/') {
            e.preventDefault();
            handleNavClick(item.href);
          }
          setIsMobileMenuOpen(false);
        }} className="text-2xl font-bold text-white tracking-tight">
                  {item.name}
                </a> : <Link key={item.name} to={item.href} className="text-2xl font-bold text-white tracking-tight">
                  {item.name}
                </Link>)}
            <a href="/#contact" onClick={e => {
          if (location.pathname === '/') {
            e.preventDefault();
            handleNavClick('/#contact');
          }
          setIsMobileMenuOpen(false);
        }} className="mt-4 px-8 py-4 bg-white text-black font-bold rounded-full">
              Démarrer votre projet
            </a>
          </motion.div>}
      </div>
    </motion.header>;
}