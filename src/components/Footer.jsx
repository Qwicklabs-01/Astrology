import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="about" className="bg-secondary/80 border-t border-gold/10 pt-20 pb-8 relative overflow-hidden mt-auto">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-hero text-3xl text-gold mb-4 hover:text-gold-light transition-colors duration-300">Vedic Cosmic</h2>
            <p className="font-body text-cream/70 mb-6 italic leading-relaxed">
              "Where Ancient Cosmic Science Meets Modern Precision."
            </p>
            <div className="font-accent text-xs tracking-widest text-gold/80 uppercase border-l-0 md:border-l-2 md:border-t-0 border-t-2 border-gold/30 md:pl-4 py-4 md:py-1">
              25+ Years Experience<br />
              Jyotish Visharad
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-accent text-sm tracking-[0.2em] text-cream uppercase mb-6 border-b border-gold/20 pb-2 inline-block relative after:absolute after:bottom-0 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-1/2 after:h-[1px] after:bg-gold">Services</h3>
            <ul className="space-y-4 font-body text-cream/70">
              {[
                { name: 'Vedic Astrology', path: '/services#astrology' },
                { name: 'Vastu Shastra', path: '/services#vastu' },
                { name: 'Numerology', path: '/numerology' },
                { name: 'Palmistry', path: '/services#palmistry' },
                { name: 'Muhurta Timing', path: '/services#muhurta' },
                { name: 'About Acharya', path: '/about' }
              ].map((item) => (
                <li key={item.name} className="group">
                  <Link to={item.path} className="flex justify-center md:justify-start items-center text-cream/70 hover:text-gold transition-colors duration-300">
                    <span className="opacity-0 -ml-4 md:group-hover:opacity-100 group-hover:opacity-100 md:group-hover:ml-0 transition-all duration-300 text-gold mr-2 text-xs">✦</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-accent text-sm tracking-[0.2em] text-cream uppercase mb-6 border-b border-gold/20 pb-2 inline-block relative after:absolute after:bottom-0 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-1/2 after:h-[1px] after:bg-gold">Free Tools</h3>
            <ul className="space-y-4 font-body text-cream/70">
              {[
                { name: '5-Year Forecast', path: '/forecast' },
                { name: 'Birth Chart Calculator', path: '/birth-chart' },
                { name: 'Numerology Calculator', path: '/numerology' },
                { name: 'Ashtakoot Match', path: '/matchmaker' },
                { name: 'Daily Panchang', path: '/panchang' },
                { name: 'Vastu Compass', path: '/vastu-compass' },
                { name: 'Instant Oracle', path: '/oracle' }
              ].map((tool) => (
                <li key={tool.name} className="group">
                  <Link to={tool.path} className="flex justify-center md:justify-start items-center text-cream/70 hover:text-gold transition-colors duration-300">
                    <span className="opacity-0 -ml-4 md:group-hover:opacity-100 group-hover:opacity-100 md:group-hover:ml-0 transition-all duration-300 text-gold mr-2 text-xs">✦</span>
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-accent text-sm tracking-[0.2em] text-cream uppercase mb-6 border-b border-gold/20 pb-2 inline-block relative after:absolute after:bottom-0 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-1/2 after:h-[1px] after:bg-gold">Newsletter</h3>
            <p className="font-body text-cream/70 mb-4 text-sm">Receive Cosmic Insights Every New Moon</p>
            <form className="flex flex-col space-y-3 relative group w-full max-w-sm mx-auto md:mx-0">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-primary/50 border border-gold/20 px-4 py-3 font-body text-cream text-center md:text-left focus:outline-none focus:border-gold/60 focus:bg-primary transition-all rounded-sm backdrop-blur-sm"
              />
              <button 
                type="submit" 
                className="bg-gold/5 border border-gold/50 text-gold hover:bg-gold hover:text-primary transition-all duration-300 font-accent uppercase tracking-widest text-xs py-3 rounded-sm shadow-[0_0_10px_rgba(201,168,76,0)] hover:shadow-[0_0_15px_rgba(201,168,76,0.3)]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="font-body text-xs text-cream/40 italic max-w-2xl">
            Disclaimer: For guidance purposes only. Not a substitute for professional medical, legal, or financial advice. Astrology is a science of probabilities.
          </p>
          <div className="font-accent text-[10px] tracking-widest text-gold/40 uppercase flex flex-wrap justify-center items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Vedic Cosmic.</span>
            <span className="w-1 h-1 rounded-full bg-gold/40 hidden sm:block"></span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
