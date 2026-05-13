import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const blogPosts = [
  { id: 1, title: 'Saturn Transit in Aquarius: What to Expect', category: 'Transits', date: 'October 12, 2025', readTime: '8 min read', image: '🪐', excerpt: 'As the taskmaster planet moves through its Moolatrikona sign, expect restructuring in global systems and personal discipline. Here is how it affects your Moon sign.' },
  { id: 2, title: 'The Spiritual Significance of Lunar Eclipses', category: 'Eclipses', date: 'September 28, 2025', readTime: '5 min read', image: '🌘', excerpt: 'Eclipses are not times for worldly beginnings, but rather powerful portals for inward journeying, mantra chanting, and releasing karmic baggage.' },
  { id: 3, title: 'Vastu Corrections for the Modern Apartment', category: 'Vastu Tips', date: 'September 15, 2025', readTime: '6 min read', image: '🏢', excerpt: 'Living in an apartment restricts structural changes. Discover 5 powerful, non-destructive Vastu remedies using mirrors, salt, and yantras.' },
  { id: 4, title: 'Activating the Jupiter Energy (Guru Kripa)', category: 'Spiritual Practices', date: 'August 30, 2025', readTime: '4 min read', image: '🙏', excerpt: 'Jupiter represents grace, wisdom, and expansion. Learn the specific mantras and Thursday fasting routines to strengthen your chart\'s greatest benefic.' },
  { id: 5, title: 'Understanding Sade Sati: A Period of Refinement', category: 'Transits', date: 'August 14, 2025', readTime: '10 min read', image: '⏳', excerpt: 'Often feared, the 7.5-year transit of Saturn over the natal moon is actually a crucial period for spiritual maturity and burning karma.' },
  { id: 6, title: 'The Power of the Brahmasthana', category: 'Vastu Tips', date: 'July 22, 2025', readTime: '5 min read', image: '✨', excerpt: 'The center of your home dictates the flow of prana. Why you must keep it clean, empty, and well-lit for optimal health.' }
];

const categories = ['All', 'Transits', 'Eclipses', 'Vastu Tips', 'Spiritual Practices'];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts[0]; // Just use the first post as featured for the mock

  return (
    <div className="pt-24 pb-20 min-h-screen bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="font-accent text-xs tracking-[0.3em] text-gold/80 mb-4 uppercase">Cosmic Insights</div>
          <h1 className="font-hero text-4xl sm:text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-6">
            The Oracle's Journal
          </h1>
          <p className="font-body text-cream/70 max-w-2xl mx-auto italic text-lg">
            Astrological forecasts, Vastu guidelines, and spiritual practices for navigating the currents of time.
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          className="mb-20 cursor-pointer group"
        >
          <div className="glass-card p-1 rounded-2xl border border-gold/30 bg-secondary relative overflow-hidden flex flex-col md:flex-row">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="md:w-1/2 min-h-[300px] bg-primary/50 flex items-center justify-center border-b md:border-b-0 md:border-r border-gold/20 rounded-t-xl md:rounded-l-xl md:rounded-tr-none relative overflow-hidden">
              <div className="absolute w-[300px] h-[300px] bg-gold/10 blur-[80px] rounded-full"></div>
              <div className="text-9xl relative z-10 filter drop-shadow-[0_0_20px_rgba(201,168,76,0.3)] group-hover:scale-110 transition-transform duration-700">{featuredPost.image}</div>
            </div>

            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 text-gold-light font-accent text-[10px] tracking-widest uppercase rounded-full">Featured</span>
                <span className="font-accent text-[10px] tracking-widest text-cream/40 uppercase">{featuredPost.date}</span>
              </div>
              <h2 className="font-hero text-3xl md:text-4xl text-cream mb-6 group-hover:text-gold-light transition-colors">{featuredPost.title}</h2>
              <p className="font-body text-cream/70 text-lg leading-relaxed mb-8">{featuredPost.excerpt}</p>
              <span className="font-accent text-xs tracking-[0.2em] text-gold uppercase flex items-center group-hover:text-gold-light transition-colors w-fit">
                Read Article <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-accent text-xs tracking-widest uppercase transition-all duration-300 border ${
                activeCategory === category 
                ? 'bg-gold border-gold text-primary shadow-[0_0_15px_hsl(var(--color-gold)/0.4)]' 
                : 'bg-transparent border-gold/30 text-gold hover:border-gold hover:bg-gold/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8 rounded-2xl border border-gold/20 flex flex-col group cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(201,168,76,0.1)] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <span className="font-accent text-[10px] tracking-widest text-gold/60 uppercase">{post.category}</span>
                  <span className="font-accent text-[10px] tracking-widest text-cream/40 uppercase">{post.readTime}</span>
                </div>
                
                <div className="text-6xl mb-6 filter drop-shadow-md relative z-10">{post.image}</div>
                
                <h3 className="font-hero text-2xl text-cream mb-4 group-hover:text-gold-light transition-colors relative z-10">{post.title}</h3>
                
                <p className="font-body text-cream/60 leading-relaxed mb-8 flex-grow relative z-10">{post.excerpt}</p>
                
                <div className="flex justify-between items-center mt-auto pt-6 border-t border-gold/10 relative z-10">
                  <span className="font-accent text-[10px] tracking-widest text-cream/40 uppercase">{post.date}</span>
                  <span className="font-accent text-[10px] tracking-widest text-gold uppercase flex items-center">
                    Read <span className="ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">→</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Blog;
