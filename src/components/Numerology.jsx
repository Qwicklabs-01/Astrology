import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const chaldean = { A:1,I:1,J:1,Q:1,Y:1, B:2,K:2,R:2, C:3,G:3,L:3,S:3, D:4,M:4,T:4, E:5,H:5,N:5,X:5, U:6,V:6,W:6, O:7,Z:7, F:8,P:8 };
const careers = { 
  1: "Leadership, Government Service, or Entrepreneurship.", 
  2: "Art, Navy, Psychology, or Liquid-based businesses.", 
  3: "Teaching, Counseling, Consulting, or Spiritual work.", 
  4: "IT, Engineering, Real Estate, or Event Management.",
  5: "Banking, Finance, Sales, or Communications.", 
  6: "Luxury goods, Media, Hospitality, or Design.",
  7: "Research, Occult Sciences, Analytics, or Teaching.",
  8: "Law, Iron/Steel industry, Heavy Machinery, or NGO work.",
  9: "Military, Surgery, Sports, or Humanitarian work."
};
const remedies = { 
  1: "Rise before sunrise to absorb the Sun's energy. Wear warm colors like Ruby or Orange.", 
  2: "Drink from a silver glass. Spend time in moonlight to balance emotional tides.", 
  3: "Respect elders and mentors. Wear yellow or gold. Feed street dogs.",
  4: "Keep surroundings organized. Avoid speculation. Worship Lord Ganesha.",
  5: "Feed green grass to cows on Wednesdays. Keep a piece of green tourmaline.",
  6: "Maintain personal grooming. Use mild fragrances. Respect all women.",
  7: "Practice deep meditation. Feed stray dogs. Avoid cluttered spaces.",
  8: "Serve the needy and laborers. Avoid non-veg food to balance Saturn's harshness.",
  9: "Donate blood if healthy. Worship Lord Hanuman. Channel anger into physical workout."
};

function reduce(n, ignoreZero = true) {
  let s = String(n).split('').reduce((a, b) => (ignoreZero && b === '0' ? a : a + parseInt(b)), 0);
  return s > 9 ? reduce(s, ignoreZero) : s;
}

const Numerology = () => {
  const [formData, setFormData] = useState({ name: '', dob: '', gender: 'male' });
  const [results, setResults] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    if (!formData.dob) return;

    const [y, m, d] = formData.dob.split('-');
    const fullStr = d + m + y;
    
    // Core Logic
    const mulank = reduce(d);
    const bhagyank = reduce(fullStr, true);
    let yearSum = reduce(y);
    let kua = formData.gender === 'male' ? reduce(11 - yearSum) : reduce(4 + yearSum);
    
    let nameTotal = 0;
    formData.name.toUpperCase().split('').forEach(char => { 
      if (chaldean[char]) nameTotal += chaldean[char]; 
    });
    const nameNum = nameTotal > 0 ? reduce(nameTotal) : "N/A";

    // Planes Analysis
    const has = (n) => fullStr.includes(String(n));
    let activePlanes = [];
    if (has(4) && has(3) && has(8)) activePlanes.push({ name: "Thought Plane (4-3-8)", desc: "Strong memory, strategic planning, and intellectual depth." });
    if (has(9) && has(5) && has(1)) activePlanes.push({ name: "Willpower Line (9-5-1)", desc: "Unstoppable determination and strong self-belief." });
    if (has(2) && has(7) && has(6)) activePlanes.push({ name: "Action Plane (2-7-6)", desc: "A person of action rather than words. Strong physical vitality." });
    if (has(4) && has(9) && has(2)) activePlanes.push({ name: "Mental Plane (4-9-2)", desc: "Excellent logical reasoning and highly intellectual." });
    if (has(3) && has(5) && has(7)) activePlanes.push({ name: "Emotional Plane (3-5-7)", desc: "Deeply emotional, spiritual, and intuitive nature." });
    if (has(8) && has(1) && has(6)) activePlanes.push({ name: "Practical Plane (8-1-6)", desc: "Highly practical, grounded, and skilled in material matters." });
    if (has(4) && has(5) && has(6)) activePlanes.push({ name: "Golden Line (4-5-6)", desc: "Extreme fortune, wealth creation, and highly successful." });
    if (has(2) && has(5) && has(8)) activePlanes.push({ name: "Property Line (2-5-8)", desc: "Success in real estate, land, and strong physical foundation." });

    setResults({
      mulank, bhagyank, kua, nameNum, fullStr, activePlanes,
      career: careers[mulank] || "Explore professional management and diverse fields.",
      remedy: remedies[mulank] || "Practice daily meditation to align with your core frequency."
    });
  };

  const gridLayout = [4, 9, 2, 3, 5, 7, 8, 1, 6];

  return (
    <div className="pt-24 pb-20 min-h-screen relative overflow-hidden bg-primary">
      {/* Starfield background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_hsl(var(--color-gold-light)/0.15),_hsl(var(--color-primary)),_hsl(var(--color-primary)))]"></div>
        {/* Subtle stars */}
        {[...Array(30)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-white rounded-full star"
            style={{
              top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`, opacity: Math.random() * 0.4 + 0.1,
              transform: `scale(${Math.random() * 1 + 0.5})`
            }}></div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="text-sm tracking-[0.3em] text-gold/80 mb-4 uppercase font-accent">Mystic Algorithm</div>
          <h1 className="font-hero text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-copper mb-6 drop-shadow-sm">
            Magical Numerology Master
          </h1>
          <p className="font-body text-cream/70 max-w-2xl mx-auto italic text-lg">
            Numerology is the sacred science of identifying your soul's purpose, career trajectory, and hidden energetic blueprints based on the Chaldean and Lo Shu systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Input Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="lg:col-span-4 glass-card p-6 sm:p-8 rounded-xl h-fit border border-gold/20"
          >
            <h2 className="font-hero text-2xl text-cream mb-6 flex items-center gap-2">
              <span className="text-gold">✦</span> Reveal Your Code
            </h2>
            <form onSubmit={calculate} className="space-y-6">
              <div>
                <label className="block font-accent text-xs tracking-widest text-gold mb-2 uppercase">Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. John Doe"
                  className="w-full bg-primary/50 border border-gold/30 rounded-md px-4 py-3 font-body text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all"
                />
                <p className="text-[10px] text-cream/40 mt-1 italic">Used for Chaldean Name Number calculation</p>
              </div>
              
              <div>
                <label className="block font-accent text-xs tracking-widest text-gold mb-2 uppercase">Date of Birth *</label>
                <input 
                  type="date" 
                  required
                  value={formData.dob}
                  onChange={(e) => setFormData({...formData, dob: e.target.value})}
                  className="w-full bg-primary/50 border border-gold/30 rounded-md px-4 py-3 font-body text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all"
                  style={{ colorScheme: 'dark' }}
                />
              </div>

              <div>
                <label className="block font-accent text-xs tracking-widest text-gold mb-2 uppercase">Gender</label>
                <select 
                  value={formData.gender}
                  onChange={(e) => setFormData({...formData, gender: e.target.value})}
                  className="w-full bg-primary/50 border border-gold/30 rounded-md px-4 py-3 font-body text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all appearance-none"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <p className="text-[10px] text-cream/40 mt-1 italic">Required for accurate Kua Number derivation</p>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-gold to-copper text-primary font-accent uppercase tracking-widest text-sm hover:shadow-[0_0_20px_hsl(var(--color-gold)/0.4)] transition-all duration-300 font-bold rounded-md"
              >
                Generate Report
              </button>
            </form>
          </motion.div>

          {/* Results Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {!results ? (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="h-full min-h-[400px] border border-dashed border-gold/20 rounded-xl flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="text-6xl mb-4 opacity-50 grayscale">🔢</div>
                  <h3 className="font-hero text-2xl text-cream/60 mb-2">Awaiting Alignment</h3>
                  <p className="font-body text-cream/40">Enter your details to generate your comprehensive numerological profile.</p>
                </motion.div>
              ) : (
                <motion.div 
                  key="results"
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  {/* Core Numbers */}
                  <div className="glass-card p-6 sm:p-8 rounded-xl border border-gold/20">
                    <h3 className="font-hero text-2xl text-gold-light mb-6 border-b border-gold/10 pb-4">Your Core Numbers</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[
                        { label: "Mulank", value: results.mulank, desc: "Influence starts from birth" },
                        { label: "Bhagyank", value: results.bhagyank, desc: "Strongest after age 35" },
                        { label: "Kua Number", value: results.kua, desc: "Your Angel Number" },
                        { label: "Name Number", value: results.nameNum, desc: "Chaldean System" }
                      ].map((stat, i) => (
                        <div key={i} className="bg-primary/40 border border-gold/10 p-4 rounded-lg text-center relative overflow-hidden group">
                          <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div className="font-accent text-[10px] tracking-widest text-gold/60 uppercase mb-2">{stat.label}</div>
                          <div className="font-hero text-4xl text-cream mb-2 drop-shadow-[0_0_5px_hsl(var(--color-gold)/0.3)]">{stat.value}</div>
                          <div className="font-body text-[9px] text-cream/40 leading-tight">{stat.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Lo Shu Grid */}
                    <div className="glass-card p-6 sm:p-8 rounded-xl border border-gold/20">
                      <h3 className="font-hero text-2xl text-gold-light mb-6 border-b border-gold/10 pb-4">Lo Shu Grid</h3>
                      <div className="grid grid-cols-3 gap-2 max-w-[240px] mx-auto aspect-square">
                        {gridLayout.map((num, i) => {
                          const count = results.fullStr.split('').filter(x => x == num).length;
                          const hasNumber = count > 0;
                          return (
                            <div key={i} className={`flex items-center justify-center font-hero text-2xl rounded-md border ${hasNumber ? 'border-gold bg-gold/10 text-gold-light shadow-[inset_0_0_15px_hsl(var(--color-gold)/0.1)]' : 'border-gold/10 bg-primary/30 text-cream/10'} transition-all`}>
                              {hasNumber ? num.toString().repeat(count) : ''}
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-center font-body text-[11px] text-cream/50 mt-6 italic">Grid maps the manifestation of energies based on your birth date.</p>
                    </div>

                    {/* Planes & Destiny */}
                    <div className="glass-card p-6 sm:p-8 rounded-xl border border-gold/20 flex flex-col">
                      <h3 className="font-hero text-2xl text-gold-light mb-6 border-b border-gold/10 pb-4">Destiny Planes</h3>
                      <div className="flex-grow space-y-3 overflow-y-auto pr-2 max-h-[250px] custom-scrollbar">
                        {results.activePlanes.length > 0 ? (
                          results.activePlanes.map((plane, i) => (
                            <div key={i} className="bg-primary/30 border-l-2 border-gold p-3 rounded-r-md">
                              <div className="font-accent text-[11px] tracking-wider text-gold mb-1 uppercase">{plane.name}</div>
                              <div className="font-body text-xs text-cream/70 leading-relaxed">{plane.desc}</div>
                            </div>
                          ))
                        ) : (
                          <div className="text-center text-cream/40 font-body italic mt-10">
                            No full planes detected in the grid. Use recommended remedies to balance your energy fields.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Vibrational Guidance */}
                  <div className="glass-card p-6 sm:p-8 rounded-xl border border-gold/20 bg-gradient-to-br from-primary via-primary to-secondary">
                    <h3 className="font-hero text-2xl text-gold-light mb-6 border-b border-gold/10 pb-4">Vibrational Guidance</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="text-3xl opacity-80 mt-1">💼</div>
                        <div>
                          <h4 className="font-accent text-xs tracking-widest text-gold uppercase mb-2">Career Suggestion</h4>
                          <p className="font-body text-cream/80 leading-relaxed text-sm">{results.career}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-3xl opacity-80 mt-1">🌿</div>
                        <div>
                          <h4 className="font-accent text-xs tracking-widest text-gold uppercase mb-2">Karmic Remedy</h4>
                          <p className="font-body text-cream/80 leading-relaxed text-sm">{results.remedy}</p>
                        </div>
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

export default Numerology;
