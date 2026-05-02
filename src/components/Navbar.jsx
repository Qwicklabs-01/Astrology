import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash changes on mount or route change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Knowledge', path: '/knowledge' },
    { name: 'Blog', path: '/blog' },
    { name: 'Forecast Tool', path: '/forecast' },
    { name: 'About', path: '/about' },
  ];

  const handleLinkClick = (e, path) => {
    setMobileMenuOpen(false);
    if (path === '/' && location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="bg-primary text-gold text-center py-2 text-sm font-accent tracking-widest border-b border-gold/10 relative z-50">
        <marquee scrollamount="3">✦ Offering Online & In-Person Consultations · India & Worldwide ✦</marquee>
      </div>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 w-full z-40 transition-all duration-500 ${
          scrolled ? 'bg-secondary/70 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-b border-gold/10 py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" onClick={(e) => handleLinkClick(e, '/')} className="flex flex-col items-center group">
                <span className="font-hero text-2xl lg:text-3xl text-gold group-hover:text-gold-light transition-colors duration-300">
                  Vedic Cosmic
                </span>
                <span className="font-accent text-[10px] tracking-[0.3em] text-cream/70 uppercase group-hover:text-cream transition-colors duration-300">
                  Astrology & Vastu
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.path.startsWith('/#') ? (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-accent uppercase text-sm tracking-widest text-cream/80 hover:text-gold transition-colors relative group"
                  >
                    {link.name}
                    <motion.span 
                      className="absolute -bottom-1 left-0 h-[2px] bg-gold"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className="font-accent uppercase text-sm tracking-widest text-cream/80 hover:text-gold transition-colors relative group"
                  >
                    {link.name}
                    <motion.span 
                      className="absolute -bottom-1 left-0 h-[2px] bg-gold"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                )
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gold hover:text-gold-light p-2 transition-colors"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-secondary/95 backdrop-blur-xl border-b border-gold/20 overflow-hidden absolute w-full z-30 shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                link.path.startsWith('/#') ? (
                  <a
                    key={link.name}
                    href={link.path}
                    className="block px-3 py-4 font-accent uppercase text-sm tracking-widest text-cream border-b border-gold/10 hover:text-gold hover:bg-white/5 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className="block px-3 py-4 font-accent uppercase text-sm tracking-widest text-cream border-b border-gold/10 hover:text-gold hover:bg-white/5 transition-all"
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
