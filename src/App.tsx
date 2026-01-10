import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParticleField } from './components/ParticleField';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { ProjectDetail } from './pages/ProjectDetail';
import { NotFound } from './pages/NotFound';
export function App() {
  return <Router>
      <main className="relative min-h-screen w-full bg-[#000000] text-white overflow-hidden selection:bg-blue-500/30">
        {/* Navigation */}
        <Header />

        {/* Background Effects */}
        <ParticleField />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </main>
    </Router>;
}