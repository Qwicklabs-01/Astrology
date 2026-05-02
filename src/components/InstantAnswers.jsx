import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const responses = [
  { text: "The stars favor your endeavor. Proceed with confidence.", type: "positive", icon: "✨" },
  { text: "Patience is required. The current planetary alignments suggest waiting.", type: "neutral", icon: "⏳" },
  { text: "Obstacles are present. Re-evaluate your strategy and seek wise counsel.", type: "negative", icon: "🚧" },
  { text: "A sudden shift in energy is imminent. Stay adaptable.", type: "neutral", icon: "🌀" },
  { text: "Jupiter's grace shines upon this question. Great success is indicated.", type: "positive", icon: "🌟" },
  { text: "Saturn demands discipline. Put in the hard work before expecting results.", type: "neutral", icon: "⚖️" },
  { text: "The Moon's phases suggest fluctuating emotions regarding this matter. Seek inner clarity first.", type: "neutral", icon: "🌖" },
  { text: "Ketu's influence indicates that letting go of this desire will bring true peace.", type: "negative", icon: "💨" },
  { text: "Mars grants you the courage. Take bold, decisive action now.", type: "positive", icon: "⚔️" },
  { text: "Venus promises harmony. Relationships and partnerships will flourish here.", type: "positive", icon: "💖" }
];

const InstantAnswers = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [isConsulting, setIsConsulting] = useState(false);

  const askOracle = (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    setIsConsulting(true);
    setAnswer(null);
    
    // Create a deterministic hash of the question
    const hashString = (str) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0; 
      }
      return Math.abs(hash);
    };

    // Simulate reading the stars
    setTimeout(() => {
      const questionHash = hashString(question.toLowerCase().trim());
      const responseIndex = questionHash % responses.length;
      setAnswer(responses[responseIndex]);
      setIsConsulting(false);
    }, 2000);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-primary relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="font-accent text-xs tracking-[0.3em] text-gold/80 mb-4 uppercase">Prashna Shastra</div>
          <h1 className="font-hero text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-6">
            The Cosmic Oracle
          </h1>
          <p className="font-body text-cream/70 italic text-lg">
            Focus your mind on a single, clear question. When you are ready, ask the cosmos for an instant answer.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          className="glass-card p-8 sm:p-12 rounded-3xl border border-gold/30 shadow-[0_0_50px_rgba(201,168,76,0.1)]"
        >
          <form onSubmit={askOracle} className="relative mb-8">
            <input 
              type="text" 
              placeholder="Type your question here..." 
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              disabled={isConsulting}
              className="w-full bg-secondary/80 border-b-2 border-gold/30 px-6 py-6 font-hero text-2xl text-center text-cream focus:outline-none focus:border-gold placeholder:text-cream/20 transition-all rounded-t-xl"
            />
            <button 
              type="submit" 
              disabled={isConsulting || !question.trim()}
              className="mt-8 px-12 py-4 bg-gradient-to-r from-gold to-copper text-primary font-accent uppercase tracking-widest text-sm hover:shadow-[0_0_30px_hsl(var(--color-gold)/0.4)] transition-all duration-300 font-bold rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isConsulting ? 'Consulting the Stars...' : 'Seek Answer'}
            </button>
          </form>

          <AnimatePresence mode="wait">
            {isConsulting && (
              <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center py-12">
                <div className="w-16 h-16 border-4 border-gold/20 border-t-gold rounded-full animate-spin mb-6"></div>
                <p className="font-accent text-xs tracking-[0.2em] text-gold uppercase animate-pulse">Calculating Planetary Positions</p>
              </motion.div>
            )}

            {answer && !isConsulting && (
              <motion.div 
                key="answer" 
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }} 
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} 
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className={`py-12 border-t border-gold/10 relative ${
                  answer.type === 'positive' ? 'text-green-400' : 
                  answer.type === 'negative' ? 'text-red-400' : 'text-gold-light'
                }`}
              >
                <div className="text-6xl mb-6 filter drop-shadow-[0_0_15px_currentColor]">{answer.icon}</div>
                <h3 className="font-hero text-3xl sm:text-4xl leading-tight max-w-xl mx-auto drop-shadow-md">
                  "{answer.text}"
                </h3>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

export default InstantAnswers;
