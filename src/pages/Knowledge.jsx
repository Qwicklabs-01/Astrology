import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { knowledgeCategories } from '../data/knowledgeBase';

const Knowledge = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-primary">
      {/* Header Banner */}
      <div className="relative py-20 mb-16 overflow-hidden border-b border-gold/10">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-primary z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_center,_hsl(var(--color-gold)/0.15),_transparent_70%)] blur-2xl"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="font-accent text-xs tracking-[0.3em] text-gold/80 mb-4 uppercase">The Cosmic Encyclopedia</div>
            <h1 className="font-hero text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-6">
              Knowledge Hub
            </h1>
            <p className="font-body text-xl text-cream/70 italic max-w-2xl mx-auto">
              "To know the stars is to know the self." Dive into the profound wisdom of the ancient Rishis.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {knowledgeCategories.map((category, index) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link 
                to={`/knowledge/${category.id}`}
                className="block h-full glass-card p-10 rounded-2xl border border-gold/20 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(201,168,76,0.15)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-6xl mb-6 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]">
                  {category.icon}
                </div>
                <h3 className="font-hero text-2xl text-cream mb-4 group-hover:text-gold-light transition-colors relative z-10">
                  {category.title}
                </h3>
                <p className="font-body text-cream/60 leading-relaxed relative z-10 mb-8">
                  {category.description}
                </p>
                <div className="font-accent text-xs tracking-[0.2em] text-gold uppercase flex items-center group-hover:text-gold-light transition-colors relative z-10 mt-auto">
                  Enter Library <motion.span className="ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }}>→</motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Philosophy snippet */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 text-center border-t border-gold/10"
        >
          <p className="font-sanskrit text-4xl text-gold mb-4 text-glow">तमसो मा ज्योतिर्गमय</p>
          <p className="font-sub text-2xl text-cream italic">"Tamaso Ma Jyotir Gamaya"</p>
          <p className="font-accent text-xs tracking-widest text-gold/60 uppercase mt-4">Lead us from darkness to light</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Knowledge;
