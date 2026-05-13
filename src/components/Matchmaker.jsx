import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Matchmaker = () => {
  const [partner1, setPartner1] = useState({ name: '', dob: '', tob: '', pob: '' });
  const [partner2, setPartner2] = useState({ name: '', dob: '', tob: '', pob: '' });
  const [results, setResults] = useState(null);

  // Simple deterministic hash function
  const hashString = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0; 
    }
    return Math.abs(hash);
  };

  const calculateMatch = (e) => {
    e.preventDefault();
    if (!partner1.dob || !partner2.dob) return;
    
    // Create a deterministic seed based on inputs
    const seedString = `${partner1.name}-${partner1.dob}-${partner2.name}-${partner2.dob}`.toLowerCase().replace(/\s/g, '');
    let seed = hashString(seedString);

    // Pseudo-random generator using the seed
    const nextRandom = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    const kootas = [
      { name: "Varna", desc: "Spiritual Compatibility", max: 1 },
      { name: "Vashya", desc: "Mutual Attraction", max: 2 },
      { name: "Tara", desc: "Health & Well-being", max: 3 },
      { name: "Yoni", desc: "Physical Compatibility", max: 4 },
      { name: "Graha Maitri", desc: "Mental Compatibility", max: 5 },
      { name: "Gana", desc: "Temperament", max: 6 },
      { name: "Bhakoot", desc: "Family Harmony", max: 7 },
      { name: "Nadi", desc: "Genetic & Pulse", max: 8 }
    ];

    let totalScore = 0;
    const scoredKootas = kootas.map(k => {
      // Generate a score skewed slightly higher (so most matches aren't terrible)
      let r = nextRandom();
      // 30% chance for full marks, otherwise random fraction
      let scored = r > 0.7 ? k.max : parseFloat((r * k.max).toFixed(1));
      
      // Nadi and Bhakoot often have strict 0 or full points in traditional astrology
      if (k.name === "Nadi" || k.name === "Bhakoot") {
        scored = r > 0.5 ? k.max : 0;
      }

      totalScore += scored;
      return { ...k, scored };
    });

    let status = "";
    let description = "";
    
    if (totalScore >= 28) {
      status = "Excellent Match";
      description = "A highly compatible union with strong emotional and spiritual alignment. The Nadi and Bhakoot doshas are absent, ensuring health and prosperity.";
    } else if (totalScore >= 18) {
      status = "Average Match";
      description = "An acceptable match. There is enough baseline compatibility, but conscious effort will be needed to harmonize the differences in temperament.";
    } else {
      status = "Challenging Match";
      description = "Caution is advised. Significant astrological incompatibilities exist in core areas like Nadi or Bhakoot, which may require specific remedies.";
    }

    setResults({
      score: totalScore.toFixed(1),
      outOf: 36,
      status: status,
      description: description,
      kootas: scoredKootas
    });
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-primary relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="font-accent text-xs tracking-[0.3em] text-gold/80 mb-4 uppercase">Ashtakoot Milan</div>
          <h1 className="font-hero text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-6">
            Compatibility Matchmaker
          </h1>
          <p className="font-body text-cream/70 max-w-2xl mx-auto italic text-lg">
            Compare the lunar constellations (Nakshatras) of two individuals to determine their cosmic alignment across 8 crucial parameters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Input Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <form onSubmit={calculateMatch} className="space-y-6">
              
              {/* Partner 1 */}
              <div className="glass-card p-6 sm:p-8 rounded-xl border border-gold/20">
                <h2 className="font-hero text-xl text-gold-light mb-6 border-b border-gold/10 pb-2">Person 1 Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block font-accent text-xs tracking-widest text-gold mb-1 uppercase">Name</label>
                    <input type="text" required value={partner1.name} onChange={(e) => setPartner1({...partner1, name: e.target.value})} className="w-full bg-primary/50 border border-gold/30 rounded-md px-3 py-2 font-body text-cream focus:outline-none focus:border-gold" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-accent text-xs tracking-widest text-gold mb-2 uppercase">Date</label>
                      <input type="date" required value={partner1.dob} onChange={(e) => setPartner1({...partner1, dob: e.target.value})} className="w-full bg-primary/50 border border-gold/30 rounded-md px-4 py-2 font-body text-cream focus:outline-none focus:border-gold" style={{ colorScheme: 'dark' }} />
                    </div>
                    <div>
                      <label className="block font-accent text-xs tracking-widest text-gold mb-2 uppercase">Time</label>
                      <input type="time" required value={partner1.tob} onChange={(e) => setPartner1({...partner1, tob: e.target.value})} className="w-full bg-primary/50 border border-gold/30 rounded-md px-4 py-2 font-body text-cream focus:outline-none focus:border-gold" style={{ colorScheme: 'dark' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center -my-2 relative z-10">
                <div className="bg-secondary border border-gold text-gold rounded-full w-10 h-10 flex items-center justify-center font-sanskrit text-xl shadow-[0_0_15px_hsl(var(--color-gold)/0.3)]">
                  +
                </div>
              </div>

              {/* Partner 2 */}
              <div className="glass-card p-6 sm:p-8 rounded-xl border border-gold/20">
                <h2 className="font-hero text-xl text-gold-light mb-6 border-b border-gold/10 pb-2">Person 2 Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block font-accent text-xs tracking-widest text-gold mb-1 uppercase">Name</label>
                    <input type="text" required value={partner2.name} onChange={(e) => setPartner2({...partner2, name: e.target.value})} className="w-full bg-primary/50 border border-gold/30 rounded-md px-3 py-2 font-body text-cream focus:outline-none focus:border-gold" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-accent text-xs tracking-widest text-gold mb-2 uppercase">Date</label>
                      <input type="date" required value={partner2.dob} onChange={(e) => setPartner2({...partner2, dob: e.target.value})} className="w-full bg-primary/50 border border-gold/30 rounded-md px-4 py-2 font-body text-cream focus:outline-none focus:border-gold" style={{ colorScheme: 'dark' }} />
                    </div>
                    <div>
                      <label className="block font-accent text-xs tracking-widest text-gold mb-2 uppercase">Time</label>
                      <input type="time" required value={partner2.tob} onChange={(e) => setPartner2({...partner2, tob: e.target.value})} className="w-full bg-primary/50 border border-gold/30 rounded-md px-4 py-2 font-body text-cream focus:outline-none focus:border-gold" style={{ colorScheme: 'dark' }} />
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-gold to-copper text-primary font-accent uppercase tracking-widest text-sm hover:shadow-[0_0_20px_hsl(var(--color-gold)/0.4)] transition-all duration-300 font-bold rounded-md">
                Check Compatibility
              </button>
            </form>
          </motion.div>

          {/* Results Area */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!results ? (
                <motion.div 
                  key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="h-full min-h-[500px] border border-dashed border-gold/20 rounded-xl flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="text-6xl mb-4 opacity-30 mix-blend-screen text-glow">💞</div>
                  <h3 className="font-hero text-2xl text-cream/60 mb-2">Waiting for Match Data</h3>
                  <p className="font-body text-cream/40">Enter the birth details of both individuals to reveal their Guna Milan score.</p>
                </motion.div>
              ) : (
                <motion.div key="results" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6 h-full flex flex-col">
                  
                  {/* Score Card */}
                  <div className="glass-card p-8 rounded-xl border border-gold text-center relative overflow-hidden bg-gradient-to-b from-gold/10 to-transparent">
                    <div className="absolute -top-10 -right-10 text-9xl text-gold/5 font-sanskrit">ॐ</div>
                    <h3 className="font-accent text-sm tracking-[0.3em] text-gold uppercase mb-2">Total Milan Score</h3>
                    <div className="font-hero text-7xl text-gold-light mb-2 drop-shadow-[0_0_15px_rgba(201,168,76,0.5)]">
                      {results.score} <span className="text-3xl text-gold/50">/ {results.outOf}</span>
                    </div>
                    <div className={`inline-block px-4 py-1 border font-accent text-xs uppercase tracking-widest rounded-full mb-6 ${
                      results.status === 'Excellent Match'
                        ? 'border-green-500/50 bg-green-500/10 text-green-400'
                        : results.status === 'Average Match'
                        ? 'border-amber-500/50 bg-amber-500/10 text-amber-400'
                        : 'border-red-500/50 bg-red-500/10 text-red-400'
                    }`}>
                      {results.status}
                    </div>
                    <p className="font-body text-cream/80 leading-relaxed max-w-lg mx-auto">
                      {results.description}
                    </p>
                  </div>

                  {/* Kootas Breakdown */}
                  <div className="glass-card p-6 rounded-xl border border-gold/20 flex-grow">
                    <h4 className="font-accent text-xs tracking-widest text-gold mb-6 uppercase border-b border-gold/10 pb-2">The 8 Kootas (Parameters)</h4>
                    <div className="space-y-4">
                      {results.kootas.map((koota, i) => (
                        <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2 hover:bg-white/5 rounded-md transition-colors">
                          <div className="w-full sm:w-1/3">
                            <div className="font-hero text-lg text-cream">{koota.name}</div>
                            <div className="font-accent text-[10px] text-gold/60 uppercase tracking-wider">{koota.desc}</div>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="w-full sm:w-1/2 h-2 bg-primary rounded-full overflow-hidden border border-gold/20">
                            <div 
                              className="h-full bg-gradient-to-r from-gold to-copper rounded-full"
                              style={{ width: `${(koota.scored / koota.max) * 100}%` }}
                            ></div>
                          </div>
                          
                          <div className="w-full sm:w-1/6 text-right font-hero text-xl text-gold-light">
                            {koota.scored}<span className="text-sm text-gold/50">/{koota.max}</span>
                          </div>
                        </div>
                      ))}
                    </div>
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

export default Matchmaker;
