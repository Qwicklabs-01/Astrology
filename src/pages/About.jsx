import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-primary">
      {/* Header Banner */}
      <div className="relative py-20 mb-16 overflow-hidden border-b border-gold/10">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-primary z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_center,_hsl(var(--color-gold)/0.15),_transparent_70%)] blur-2xl"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-hero text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-6">
              Meet the Astrologer
            </h1>
            <p className="font-body text-xl text-cream/70 italic">
              "Astrology is not fatalism — it is a map, not the territory."
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sidebar / Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="glass-card p-4 rounded-2xl border border-gold/20 relative overflow-hidden aspect-[3/4] flex items-center justify-center bg-secondary/30">
              {/* Placeholder for Photo */}
              <div className="text-9xl opacity-20">🧘</div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-primary via-primary/80 to-transparent">
                <h3 className="font-hero text-2xl text-gold-light mb-1">Acharya S.K.</h3>
                <p className="font-accent text-xs tracking-widest text-cream/60 uppercase">Vedic Astrologer & Vastu Expert</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl border border-gold/10">
              <h4 className="font-accent text-sm tracking-[0.2em] text-gold uppercase mb-4 border-b border-gold/20 pb-2">Credentials</h4>
              <ul className="space-y-3 font-body text-cream/70 text-sm">
                <li className="flex items-center"><span className="text-gold mr-2">✦</span> Jyotish Visharad (ICAS)</li>
                <li className="flex items-center"><span className="text-gold mr-2">✦</span> Vastu Dosh Nivaran Specialist</li>
                <li className="flex items-center"><span className="text-gold mr-2">✦</span> Certified in Nadi Astrology</li>
                <li className="flex items-center"><span className="text-gold mr-2">✦</span> Bhrigu Samhita Reader</li>
              </ul>
            </div>
            
            <div className="glass-card p-6 rounded-xl border border-gold/10">
              <h4 className="font-accent text-sm tracking-[0.2em] text-gold uppercase mb-4 border-b border-gold/20 pb-2">Associations</h4>
              <ul className="space-y-3 font-body text-cream/70 text-sm">
                <li>Indian Council of Astrological Sciences</li>
                <li>Global Vastu Research Institute</li>
                <li>International Numerology Forum</li>
              </ul>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="lg:col-span-8 font-body text-cream/80 text-lg leading-relaxed space-y-8"
          >
            <h2 className="font-hero text-3xl text-gold mb-6">A Journey Through the Stars</h2>
            <p>
              With over 25 years of dedicated study and practice in the sacred sciences, my mission is to bridge the profound wisdom of ancient Rishis with the complexities of modern life. Having analyzed over 10,000 natal charts across the globe, I do not believe in predicting a fixed, unchangeable doom. Instead, I view the birth chart as a cosmic blueprint—a map of karmic potentials that we can navigate with conscious action and targeted remedies.
            </p>
            <p>
              My journey into Jyotish began in my early twenties under the direct tutelage of traditional masters in Varanasi. I was initiated into the parampara (lineage) of Parashari astrology, later expanding my expertise into Nadi techniques and Vastu Shastra. This holistic approach allows me to not just read a chart, but to understand the energetic environment of the individual.
            </p>

            <div className="my-12 p-8 bg-secondary/50 border-l-4 border-gold rounded-r-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 text-9xl text-gold/5 font-sanskrit">ॐ</div>
              <p className="font-hero text-2xl text-cream italic relative z-10">
                "The planets do not compel, they impel. We are the masters of our destiny once we understand the currents we are swimming in."
              </p>
            </div>

            <h3 className="font-hero text-2xl text-gold mb-6 mt-12">Experience Timeline</h3>
            <div className="space-y-8 border-l border-gold/20 ml-3 pl-8 relative">
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-gold border-4 border-primary"></div>
                <h4 className="font-accent text-sm tracking-widest text-gold-light uppercase mb-1">Present</h4>
                <p className="text-sm">Founder of Vedic Cosmic, serving clients across 40+ countries. Conducting advanced workshops on predictive astrology.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-gold/50"></div>
                <h4 className="font-accent text-sm tracking-widest text-gold-light uppercase mb-1">2010 - 2020</h4>
                <p className="text-sm">Awarded Jyotish Visharad. Became a sought-after Vastu consultant for commercial real estate and industrial projects.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-gold/50"></div>
                <h4 className="font-accent text-sm tracking-widest text-gold-light uppercase mb-1">1998 - 2010</h4>
                <p className="text-sm">Rigorous traditional training and initiation into the deeper esoteric practices of remedial astrology and gemology.</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
