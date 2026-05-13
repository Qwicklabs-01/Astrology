import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  { title: "Vedic Astrology", desc: "Deep analysis of your natal chart.", icon: "☉" },
  { title: "Vastu Shastra", desc: "Align your home with cosmic energies.", icon: "🏠" },
  { title: "Numerology", desc: "Discover the power of your numbers.", icon: "🔢" },
  { title: "Palmistry", desc: "Read the map written in your hands.", icon: "✋" },
  { title: "Alchemy & Gems", desc: "Harness the power of planetary stones.", icon: "💎" },
  { title: "Muhurta Timing", desc: "Find the perfect moment to start.", icon: "⏳" }
];

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Starfield Background */}
        <div className="absolute inset-0 z-0 bg-primary">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_hsl(var(--color-gold-light)/0.15),_hsl(var(--color-primary)),_hsl(var(--color-primary)))]"></div>
          {/* Subtle stars */}
          {[...Array(60)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                opacity: Math.random() * 0.4 + 0.1,
                transform: `scale(${Math.random() * 1 + 0.5})`
              }}
            ></div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col md:flex-row items-center justify-between py-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="md:w-1/2 pt-12 md:pt-0"
          >
            <h1 className="font-hero text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-gold-light via-gold to-copper mb-6 leading-[1.1] text-glow pb-2">
              Decode the<br/>Language of<br/>the Cosmos
            </h1>
            <p className="font-sub text-xl md:text-2xl text-cream/80 mb-8 italic">
              Vedic Astrology · Vastu Shastra · Numerology
              <br/>
              <span className="text-gold/90 not-italic text-lg font-medium tracking-wide">Ancient Sciences for Modern Life</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <Link to="/forecast" className="px-8 py-4 bg-gradient-to-r from-gold to-copper text-primary font-accent uppercase tracking-widest text-sm hover:shadow-[0_0_25px_hsl(var(--color-gold)/0.6)] transition-all duration-300 text-center font-bold relative overflow-hidden group">
                <span className="relative z-10">Explore Forecast Tool</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              </Link>
              <a href="#services" className="px-8 py-4 border border-gold/50 text-gold font-accent uppercase tracking-widest text-sm hover:bg-gold/10 hover:border-gold transition-all duration-300 text-center backdrop-blur-sm">
                Learn the Science
              </a>
            </div>
            <div className="flex items-center gap-4 text-xs font-accent tracking-widest text-cream/60 uppercase border-l-[3px] border-gold/40 pl-5">
              <p className="leading-loose">25+ Years Experience <br/> 10,000+ Charts Analyzed <br/> Jyotish Visharad Certified</p>
            </div>
          </motion.div>

          {/* Abstract Cosmic Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="md:w-1/2 h-[350px] sm:h-[400px] md:h-[500px] flex items-center justify-center relative mt-16 md:mt-0 opacity-80 md:opacity-100"
          >
            <div className="absolute w-[240px] h-[240px] sm:w-[350px] sm:h-[350px] md:w-[550px] md:h-[550px] border border-gold/10 rounded-full animate-[spin_100s_linear_infinite]"></div>
            <div className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[420px] md:h-[420px] border border-gold/20 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite_reverse]">
                {/* Zodiac signs placeholder */}
                <div className="absolute top-0 -mt-2 sm:-mt-3 text-gold font-sanskrit text-xl sm:text-2xl filter drop-shadow-[0_0_8px_hsl(var(--color-gold)/0.8)]">♈</div>
                <div className="absolute right-0 -mr-2 sm:-mr-3 text-gold font-sanskrit text-xl sm:text-2xl filter drop-shadow-[0_0_8px_hsl(var(--color-gold)/0.8)]">♋</div>
                <div className="absolute bottom-0 -mb-2 sm:-mb-3 text-gold font-sanskrit text-xl sm:text-2xl filter drop-shadow-[0_0_8px_hsl(var(--color-gold)/0.8)]">♎</div>
                <div className="absolute left-0 -ml-2 sm:-ml-3 text-gold font-sanskrit text-xl sm:text-2xl filter drop-shadow-[0_0_8px_hsl(var(--color-gold)/0.8)]">♑</div>
            </div>
            <div className="absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] border border-gold/30 rounded-full border-dashed animate-[spin_40s_linear_infinite]"></div>
            <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[180px] md:h-[180px] bg-gradient-to-tr from-gold to-copper rounded-full blur-[60px] opacity-40 animate-pulse"></div>
            <div className="absolute text-gold-light text-7xl sm:text-9xl font-sanskrit opacity-30 mix-blend-screen text-glow">ॐ</div>
          </motion.div>
        </div>
      </section>

      {/* Planetary Ticker */}
      <div className="bg-secondary/50 border-y border-gold/10 py-4 overflow-hidden backdrop-blur-sm">
        <div className="flex whitespace-nowrap animate-marquee text-gold/80 font-sub text-xl">
          <span className="mx-8">☉ Sun in Aries</span>
          <span className="mx-8">☽ Moon in Libra</span>
          <span className="mx-8">♂ Mars in Capricorn</span>
          <span className="mx-8">☿ Mercury in Pisces</span>
          <span className="mx-8">♃ Jupiter in Taurus</span>
          <span className="mx-8">♀ Venus in Pisces</span>
          <span className="mx-8">♄ Saturn in Aquarius</span>
          <span className="mx-8">☊ Rahu in Pisces</span>
          <span className="mx-8">☋ Ketu in Virgo</span>
          {/* Duplicate for seamless loop */}
          <span className="mx-8">☉ Sun in Aries</span>
          <span className="mx-8">☽ Moon in Libra</span>
          <span className="mx-8">♂ Mars in Capricorn</span>
          <span className="mx-8">☿ Mercury in Pisces</span>
          <span className="mx-8">♃ Jupiter in Taurus</span>
          <span className="mx-8">♀ Venus in Pisces</span>
          <span className="mx-8">♄ Saturn in Aquarius</span>
          <span className="mx-8">☊ Rahu in Pisces</span>
          <span className="mx-8">☋ Ketu in Virgo</span>
        </div>
      </div>

      {/* Services Overview */}
      <section id="services" className="py-32 bg-primary relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="font-hero text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-6 inline-block">Sacred Sciences</h2>
            <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card p-10 rounded-lg group cursor-pointer relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="text-5xl mb-8 opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110 transform origin-left drop-shadow-[0_0_10px_rgba(201,168,76,0)] group-hover:drop-shadow-[0_0_15px_hsl(var(--color-gold)/0.4)]">{service.icon}</div>
                <h3 className="font-hero text-2xl text-cream mb-4 group-hover:text-gold-light transition-colors duration-300 relative z-10">{service.title}</h3>
                <p className="font-body text-cream/60 mb-8 leading-relaxed relative z-10">{service.desc}</p>
                <Link 
                  to={
                    service.title === "Vedic Astrology" ? "/services#astrology" :
                    service.title === "Vastu Shastra" ? "/services#vastu" :
                    service.title === "Numerology" ? "/numerology" :
                    service.title === "Palmistry" ? "/services#palmistry" :
                    service.title === "Alchemy & Gems" ? "/services#alchemy" :
                    "/services#muhurta"
                  } 
                  className="font-accent text-xs tracking-[0.2em] text-gold uppercase flex items-center group-hover:text-gold-light transition-colors relative z-10 mt-auto w-fit"
                >
                  Explore <motion.span className="ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }}>→</motion.span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Strip */}
      <section id="knowledge" className="py-24 bg-secondary relative border-y border-gold/10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTIwIDBsMjAgMjAtMjAgMjBMMCAyMHoiIGZpbGw9IiNDOUE4NEMiLz48L3N2Zz4=')] mix-blend-screen"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sanskrit text-3xl md:text-5xl text-gold mb-6 text-glow">यथा पिण्डे तथा ब्रह्माण्डे</p>
            <h3 className="font-sub text-3xl md:text-4xl text-cream mb-10 italic">"Yatha Pinde Tatha Brahmande"</h3>
            <div className="w-16 h-[1px] bg-gold/50 mx-auto mb-10"></div>
            <p className="font-body text-xl text-cream/70 leading-relaxed mb-10">
              As is the microcosm, so is the macrocosm. The positions of the celestial bodies at your birth are not merely distant rocks in space—they are a mirror reflecting the unique energetic blueprint of your soul's journey.
            </p>
            <Link to="/knowledge" className="inline-block px-8 py-3 border border-gold text-gold font-accent uppercase tracking-widest text-sm hover:bg-gold hover:text-primary transition-all duration-300">
              Enter the Knowledge Hub
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tools Strip */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-copper/90 via-gold/90 to-copper/90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-hero text-4xl text-primary mb-12 drop-shadow-md">Try Our Free Tools</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/forecast" className="w-full sm:w-auto text-center px-8 py-4 bg-primary text-gold font-accent uppercase tracking-widest text-sm hover:bg-secondary hover:text-gold-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
              5-Year Forecast
            </Link>
            <Link to="/birth-chart" className="w-full sm:w-auto text-center px-8 py-4 bg-primary text-gold font-accent uppercase tracking-widest text-sm hover:bg-secondary hover:text-gold-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Birth Chart Calculator
            </Link>
            <Link to="/numerology" className="w-full sm:w-auto text-center px-8 py-4 bg-primary text-gold font-accent uppercase tracking-widest text-sm hover:bg-secondary hover:text-gold-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Numerology Calculator
            </Link>
            <Link to="/panchang" className="w-full sm:w-auto text-center px-8 py-4 bg-primary text-gold font-accent uppercase tracking-widest text-sm hover:bg-secondary hover:text-gold-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Daily Panchang
            </Link>
            <Link to="/vastu-compass" className="w-full sm:w-auto text-center px-8 py-4 bg-primary text-gold font-accent uppercase tracking-widest text-sm hover:bg-secondary hover:text-gold-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Vastu Compass
            </Link>
            <Link to="/oracle" className="w-full sm:w-auto text-center px-8 py-4 bg-primary text-gold font-accent uppercase tracking-widest text-sm hover:bg-secondary hover:text-gold-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Instant Oracle
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
