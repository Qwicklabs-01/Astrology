import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import VedicForecast from './components/VedicForecast';
import Numerology from './components/Numerology';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';
import Knowledge from './pages/Knowledge';
import KnowledgeCategory from './pages/KnowledgeCategory';
import BirthChart from './components/BirthChart';
import Matchmaker from './components/Matchmaker';
import Panchang from './components/Panchang';
import VastuCompass from './components/VastuCompass';
import InstantAnswers from './components/InstantAnswers';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-primary text-cream selection:bg-gold/30">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/knowledge/:categoryId" element={<KnowledgeCategory />} />
            <Route path="/forecast" element={<VedicForecast />} />
            <Route path="/numerology" element={<Numerology />} />
            <Route path="/birth-chart" element={<BirthChart />} />
            <Route path="/matchmaker" element={<Matchmaker />} />
            <Route path="/panchang" element={<Panchang />} />
            <Route path="/vastu-compass" element={<VastuCompass />} />
            <Route path="/oracle" element={<InstantAnswers />} />
            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
