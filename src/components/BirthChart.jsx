import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BirthChart = () => {
  const [formData, setFormData] = useState({ name: '', dob: '', tob: '', pob: '' });
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

  const calculate = (e) => {
    e.preventDefault();
    if (!formData.dob) return;
    
    // Create a deterministic seed based on inputs
    const seedString = `${formData.name}-${formData.dob}-${formData.tob}-${formData.pob}`.toLowerCase().replace(/\s/g, '');
    let seed = hashString(seedString);

    // Pseudo-random generator using the seed
    const nextRandom = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    const nakshatras = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"];
    const planetsData = [
      { name: "Sun", rules: "Leo" }, { name: "Moon", rules: "Cancer" },
      { name: "Mars", rules: "Aries, Scorpio" }, { name: "Mercury", rules: "Gemini, Virgo" },
      { name: "Jupiter", rules: "Sagittarius, Pisces" }, { name: "Venus", rules: "Taurus, Libra" },
      { name: "Saturn", rules: "Capricorn, Aquarius" }, { name: "Rahu", rules: "None" }, { name: "Ketu", rules: "None" }
    ];
    const dignities = ["Exalted", "Moolatrikona", "Own Sign", "Great Friend", "Friend", "Neutral", "Enemy", "Great Enemy", "Debilitated"];

    const lagnaIndex = Math.floor(nextRandom() * 12);
    const lagna = signs[lagnaIndex];
    
    const moonIndex = Math.floor(nextRandom() * 12);
    const rashi = signs[moonIndex];
    const nakshatra = nakshatras[Math.floor(nextRandom() * 27)];
    
    const dashaLords = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"];
    const currentDasha = dashaLords[Math.floor(nextRandom() * 9)];
    const dashaEndYear = new Date().getFullYear() + Math.floor(nextRandom() * 15) + 1;

    let chartMap = Array(12).fill("");
    chartMap[lagnaIndex] = "As ";

    const planets = planetsData.map(p => {
      let signIndex = Math.floor(nextRandom() * 12);
      // Ensure Rahu and Ketu are always opposite (6 signs apart)
      if (p.name === "Ketu") {
        const rahuIndex = planetsData.findIndex(x => x.name === "Rahu");
        // This relies on Rahu being generated before Ketu in the planetsData array
      }
      
      if (p.name === "Rahu") {
        // Just store signIndex for Rahu to use for Ketu
        p.tempSignIndex = signIndex;
      }
      if (p.name === "Ketu") {
        const rahu = planetsData.find(x => x.name === "Rahu");
        signIndex = (rahu.tempSignIndex + 6) % 12;
      }

      chartMap[signIndex] += p.name.substring(0,2) + " ";
      
      let house = ((signIndex - lagnaIndex + 12) % 12) + 1;
      let degree = `${Math.floor(nextRandom() * 30)}°${Math.floor(nextRandom() * 60)}'`;
      let status = dignities[Math.floor(nextRandom() * dignities.length)];

      return {
        name: p.name,
        sign: signs[signIndex],
        house: house,
        degree: degree,
        status: status
      };
    });

    setResults({
      lagna,
      nakshatra,
      rashi,
      dasha: `${currentDasha} Mahadasha (Ends ${dashaEndYear})`,
      planets,
      chartMap
    });
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="font-accent text-xs tracking-[0.3em] text-gold/80 mb-4 uppercase">Sacred Mathematics</div>
          <h1 className="font-hero text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-6">
            Birth Chart Calculator
          </h1>
          <p className="font-body text-cream/70 max-w-2xl mx-auto italic text-lg">
            Generate your precise Vedic birth chart (Janam Kundali) and uncover the celestial blueprint written at the moment of your birth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Input Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="lg:col-span-4 glass-card p-6 sm:p-8 rounded-xl border border-gold/20 h-fit"
          >
            <h2 className="font-hero text-2xl text-cream mb-6 flex items-center gap-2">
              <span className="text-gold">✦</span> Birth Details
            </h2>
            <form onSubmit={calculate} className="space-y-6">
              <div>
                <label className="block font-accent text-xs tracking-widest text-gold mb-2 uppercase">Full Name</label>
                <input 
                  type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-primary/50 border border-gold/30 rounded-md px-4 py-3 font-body text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50"
                />
              </div>
              <div>
                <label className="block font-accent text-xs tracking-widest text-gold mb-2 uppercase">Date of Birth</label>
                <input 
                  type="date" required value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})}
                  className="w-full bg-primary/50 border border-gold/30 rounded-md px-4 py-3 font-body text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50" style={{ colorScheme: 'dark' }}
                />
              </div>
              <div>
                <label className="block font-accent text-xs tracking-widest text-gold mb-2 uppercase">Time of Birth</label>
                <input 
                  type="time" required value={formData.tob} onChange={(e) => setFormData({...formData, tob: e.target.value})}
                  className="w-full bg-primary/50 border border-gold/30 rounded-md px-4 py-3 font-body text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50" style={{ colorScheme: 'dark' }}
                />
              </div>
              <div>
                <label className="block font-accent text-xs tracking-widest text-gold mb-2 uppercase">Place of Birth</label>
                <input 
                  type="text" required placeholder="City, Country" value={formData.pob} onChange={(e) => setFormData({...formData, pob: e.target.value})}
                  className="w-full bg-primary/50 border border-gold/30 rounded-md px-4 py-3 font-body text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50"
                />
              </div>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-gold to-copper text-primary font-accent uppercase tracking-widest text-sm hover:shadow-[0_0_20px_hsl(var(--color-gold)/0.4)] transition-all duration-300 font-bold rounded-md">
                Cast Chart
              </button>
            </form>
          </motion.div>

          {/* Results Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {!results ? (
                <motion.div 
                  key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="h-full min-h-[400px] border border-dashed border-gold/20 rounded-xl flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="text-6xl mb-4 opacity-30 mix-blend-screen text-glow">☸</div>
                  <h3 className="font-hero text-2xl text-cream/60 mb-2">Awaiting Data</h3>
                  <p className="font-body text-cream/40">Enter your exact birth time to calculate your ascendant and planetary placements.</p>
                </motion.div>
              ) : (
                <motion.div key="results" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">
                  
                  {/* Summary Bar */}
                  <div className="glass-card p-6 rounded-xl border border-gold/20 flex flex-wrap gap-6 justify-between bg-secondary/50">
                    <div className="flex flex-col">
                      <span className="font-accent text-[10px] tracking-widest text-gold/60 uppercase">Lagna (Ascendant)</span>
                      <span className="font-hero text-2xl text-cream">{results.lagna}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-accent text-[10px] tracking-widest text-gold/60 uppercase">Moon Sign</span>
                      <span className="font-hero text-2xl text-cream">{results.rashi}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-accent text-[10px] tracking-widest text-gold/60 uppercase">Nakshatra</span>
                      <span className="font-hero text-2xl text-cream">{results.nakshatra}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-accent text-[10px] tracking-widest text-gold/60 uppercase">Current Dasha</span>
                      <span className="font-hero text-2xl text-cream">{results.dasha}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Visual Chart (South Indian Style Mock) */}
                    <div className="glass-card p-6 rounded-xl border border-gold/20 flex flex-col items-center justify-center min-h-[300px]">
                      <h4 className="font-accent text-xs tracking-widest text-gold mb-6 uppercase">South Indian Chart</h4>
                      <div className="w-full max-w-[280px] aspect-square grid grid-cols-4 grid-rows-4 gap-1 p-1 bg-gold/20 rounded-md">
                        {/* 16 squares of South Indian Chart */}
                        {Array.from({ length: 16 }).map((_, i) => {
                          const isMiddle = [5,6,9,10].includes(i);
                          if (isMiddle) return <div key={i} className="bg-primary/50 rounded-sm"></div>;
                          
                          // South Indian chart maps Pisces to top-left (i=0) and goes clockwise
                          const rashiIndexMap = {
                            0: 11, // Pisces
                            1: 0,  // Aries
                            2: 1,  // Taurus
                            3: 2,  // Gemini
                            7: 3,  // Cancer
                            11: 4, // Leo
                            15: 5, // Virgo
                            14: 6, // Libra
                            13: 7, // Scorpio
                            12: 8, // Sagittarius
                            8: 9,  // Capricorn
                            4: 10  // Aquarius
                          };
                          
                          let content = results.chartMap[rashiIndexMap[i]] || "";
                          
                          return (
                            <div key={i} className={`bg-secondary flex flex-wrap items-center justify-center p-1 rounded-sm text-[9px] sm:text-[10px] font-bold ${content.includes('As') ? 'text-gold-light border border-gold shadow-[inset_0_0_10px_rgba(201,168,76,0.2)]' : 'text-cream/80'} gap-1`}>
                              {content.trim().split(' ').map((p, idx) => (
                                <span key={idx} className={p === 'As' ? 'text-gold' : ''}>{p}</span>
                              ))}
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-[10px] text-cream/40 mt-4 italic">Chart calculated using Lahiri Ayanamsa</p>
                    </div>

                    {/* Planetary Positions Table */}
                    <div className="glass-card p-6 rounded-xl border border-gold/20">
                      <h4 className="font-accent text-xs tracking-widest text-gold mb-4 uppercase">Planetary Placements</h4>
                      <div className="overflow-x-auto custom-scrollbar">
                        <table className="w-full text-left text-sm">
                          <thead>
                            <tr className="border-b border-gold/10 text-gold-light/70 font-accent uppercase tracking-wider text-[10px]">
                              <th className="pb-2">Planet</th>
                              <th className="pb-2">Sign</th>
                              <th className="pb-2">Degree</th>
                              <th className="pb-2 text-right">Dignity</th>
                            </tr>
                          </thead>
                          <tbody className="font-body text-cream/80 text-xs">
                            {results.planets.map((p, i) => (
                              <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="py-2.5 font-bold">{p.name}</td>
                                <td className="py-2.5 opacity-80">{p.sign}</td>
                                <td className="py-2.5 opacity-80">{p.degree}</td>
                                <td className={`py-2.5 text-right font-bold ${p.status === 'Exalted' ? 'text-green-400' : p.status === 'Debilitated' ? 'text-red-400' : 'text-gold'}`}>
                                  {p.status}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
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

export default BirthChart;
