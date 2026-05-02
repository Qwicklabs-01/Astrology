import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { knowledgeCategories, knowledgeContent } from '../data/knowledgeBase';

const KnowledgeCategory = () => {
  const { categoryId } = useParams();
  const categoryMeta = knowledgeCategories.find(c => c.id === categoryId);
  const contentData = knowledgeContent[categoryId] || [];

  const [activeArticle, setActiveArticle] = useState(contentData.length > 0 ? contentData[0].id : null);

  useEffect(() => {
    if (contentData.length > 0) {
      setActiveArticle(contentData[0].id);
    }
  }, [categoryId]);

  if (!categoryMeta) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-primary flex flex-col items-center justify-center text-center">
        <h1 className="font-hero text-4xl text-gold mb-4">Category Not Found</h1>
        <Link to="/knowledge" className="text-cream/70 hover:text-gold transition-colors underline">Return to Knowledge Hub</Link>
      </div>
    );
  }

  const activeContent = contentData.find(a => a.id === activeArticle);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-primary">
      {/* Small Header */}
      <div className="bg-secondary/50 border-b border-gold/10 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <Link to="/knowledge" className="font-accent text-xs tracking-widest text-gold/60 uppercase hover:text-gold transition-colors mb-4 inline-block">
              ← Back to Hub
            </Link>
            <h1 className="font-hero text-3xl md:text-5xl text-cream flex items-center gap-4">
              <span className="text-gold opacity-80">{categoryMeta.icon}</span> {categoryMeta.title}
            </h1>
          </div>
          <div className="font-body text-cream/60 italic max-w-sm">
            {categoryMeta.description}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3">
            <div className="sticky top-32 glass-card p-6 rounded-xl border border-gold/20">
              <h3 className="font-accent text-xs tracking-[0.2em] text-gold uppercase mb-6 border-b border-gold/10 pb-4">
                Articles
              </h3>
              <ul className="space-y-2">
                {contentData.map(article => (
                  <li key={article.id}>
                    <button
                      onClick={() => setActiveArticle(article.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-body text-sm transition-all duration-300 ${
                        activeArticle === article.id 
                          ? 'bg-gold/10 text-gold-light border-l-2 border-gold shadow-[inset_0_0_10px_hsl(var(--color-gold)/0.05)]' 
                          : 'text-cream/60 hover:text-cream hover:bg-white/5 border-l-2 border-transparent'
                      }`}
                    >
                      {article.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              {activeContent && (
                <motion.div
                  key={activeContent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card p-8 md:p-12 rounded-2xl border border-gold/10"
                >
                  <h2 className="font-hero text-4xl text-gold-light mb-10 pb-6 border-b border-gold/10">
                    {activeContent.title}
                  </h2>
                  
                  <div className="space-y-12">
                    {activeContent.sections.map((section, index) => (
                      <div key={index}>
                        <h3 className="font-hero text-2xl text-cream mb-4">{section.title}</h3>
                        <p className="font-body text-cream/80 text-lg leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default KnowledgeCategory;
