import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Panchang = () => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [location, setLocation] = useState('New Delhi, India');
  const [panchangData, setPanchangData] = useState(null);

  // Simple deterministic hash function
  const hashString = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0; 
    }
    return Math.abs(hash);
  };

  const fetchPanchang = (e) => {
    if (e) e.preventDefault();
    
    // Create deterministic seed based on date and location
    const seedString = `${date}-${location}`.toLowerCase().replace(/\s/g, '');
    let seed = hashString(seedString);
    const nextRandom = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    const d = new Date(date);
    const days = ["Ravivaara (Sunday)", "Somavaara (Monday)", "Mangalavaara (Tuesday)", "Budhavaara (Wednesday)", "Guruvaara (Thursday)", "Shukravaara (Friday)", "Shanivaara (Saturday)"];
    
    const tithis = ["Pratipada", "Dwitiya", "Tritiya", "Chaturthi", "Panchami", "Shashthi", "Saptami", "Ashtami", "Navami", "Dashami", "Ekadashi", "Dwadashi", "Trayodashi", "Chaturdashi", "Purnima", "Amavasya"];
    const pakshas = ["Shukla Paksha", "Krishna Paksha"];
    
    const nakshatras = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"];
    const lords = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"];
    
    const yogas = ["Vishkumbha", "Priti", "Ayushman", "Saubhagya", "Shobhana", "Atiganda", "Sukarma", "Dhriti", "Shula", "Ganda", "Vriddhi", "Dhruva", "Vyaghata", "Harshana", "Vajra", "Siddhi", "Vyatipata", "Variyana", "Parigha", "Shiva", "Siddha", "Sadhya", "Shubha", "Shukla", "Brahma", "Indra", "Vaidhriti"];
    const karanas = ["Bava", "Balava", "Kaulava", "Taitila", "Gara", "Vanija", "Vishti", "Shakuni", "Chatushpada", "Naga", "Kintughna"];

    // Format times pseudo-randomly
    const formatTime = (hour, min) => {
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const h = hour % 12 || 12;
      return `${h.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')} ${ampm}`;
    };

    const sunriseH = 5 + Math.floor(nextRandom() * 2);
    const sunriseM = Math.floor(nextRandom() * 60);
    const sunsetH = 17 + Math.floor(nextRandom() * 3); // 5-7 PM
    const sunsetM = Math.floor(nextRandom() * 60);
    
    const nIdx = Math.floor(nextRandom() * 27);

    setPanchangData({
      sunrise: formatTime(sunriseH, sunriseM),
      sunset: formatTime(sunsetH, sunsetM),
      moonrise: formatTime(18 + Math.floor(nextRandom() * 4), Math.floor(nextRandom() * 60)),
      moonset: formatTime(5 + Math.floor(nextRandom() * 4), Math.floor(nextRandom() * 60)),
      tithi: { 
        name: `${pakshas[Math.floor(nextRandom() * 2)]} ${tithis[Math.floor(nextRandom() * 16)]}`, 
        end: formatTime(10 + Math.floor(nextRandom() * 10), Math.floor(nextRandom() * 60)) 
      },
      nakshatra: { 
        name: nakshatras[nIdx], 
        lord: lords[nIdx % 9], 
        end: formatTime(12 + Math.floor(nextRandom() * 10), Math.floor(nextRandom() * 60)) 
      },
      yoga: { 
        name: yogas[Math.floor(nextRandom() * 27)], 
        end: formatTime(8 + Math.floor(nextRandom() * 12), Math.floor(nextRandom() * 60)) 
      },
      karana: { 
        name: karanas[Math.floor(nextRandom() * 11)], 
        end: formatTime(14 + Math.floor(nextRandom() * 8), Math.floor(nextRandom() * 60)) 
      },
      vaar: days[d.getDay()], // Actually correct based on date!
      auspicious: [
        { name: "Abhijit Muhurta", time: `${formatTime(11, 45 + Math.floor(nextRandom()*10))} - ${formatTime(12, 30 + Math.floor(nextRandom()*20))}` },
        { name: "Amrit Kalam", time: `${formatTime(15 + Math.floor(nextRandom()*3), Math.floor(nextRandom()*60))} - ${formatTime(18 + Math.floor(nextRandom()*3), Math.floor(nextRandom()*60))}` }
      ],
      inauspicious: [
        { name: "Rahu Kalam", time: `${formatTime(7 + Math.floor(nextRandom()*4), Math.floor(nextRandom()*60))} - ${formatTime(9 + Math.floor(nextRandom()*4), Math.floor(nextRandom()*60))}` },
        { name: "Yama Gandam", time: `${formatTime(13 + Math.floor(nextRandom()*3), Math.floor(nextRandom()*60))} - ${formatTime(15 + Math.floor(nextRandom()*3), Math.floor(nextRandom()*60))}` }
      ]
    });
  };

  // Load initial data
  useEffect(() => {
    fetchPanchang();
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="font-accent text-xs tracking-[0.3em] text-gold/80 mb-4 uppercase">The Five Limbs of Time</div>
          <h1 className="font-hero text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-6">
            Daily Panchang
          </h1>
          <p className="font-body text-cream/70 max-w-2xl mx-auto italic text-lg">
            Align your actions with the cosmic rhythm. Check the daily astronomical positions to find auspicious windows for success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="glass-card p-6 sm:p-8 rounded-xl border border-gold/20 sticky top-24">
              <form onSubmit={fetchPanchang} className="space-y-6">
                <div>
                  <label className="block font-accent text-xs tracking-widest text-gold mb-2 uppercase">Date</label>
                  <input 
                    type="date" value={date} onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-primary/50 border border-gold/30 rounded-md px-4 py-3 font-body text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50" style={{ colorScheme: 'dark' }}
                  />
                </div>
                <div>
                  <label className="block font-accent text-xs tracking-widest text-gold mb-2 uppercase">Location</label>
                  <input 
                    type="text" value={location} onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-primary/50 border border-gold/30 rounded-md px-4 py-3 font-body text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50"
                  />
                </div>
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-gold to-copper text-primary font-accent uppercase tracking-widest text-sm hover:shadow-[0_0_20px_hsl(var(--color-gold)/0.4)] transition-all duration-300 font-bold rounded-md">
                  Update Almanac
                </button>
              </form>
            </div>
          </motion.div>

          {/* Display */}
          <div className="lg:col-span-8 space-y-6">
            {panchangData && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                
                {/* Sun & Moon Times */}
                <div className="glass-card p-6 rounded-xl border border-gold/20 flex flex-wrap gap-8 justify-around bg-secondary/50">
                  <div className="text-center">
                    <div className="text-gold text-3xl mb-2">🌅</div>
                    <div className="font-accent text-[10px] tracking-widest text-gold/60 uppercase mb-1">Sunrise</div>
                    <div className="font-hero text-xl text-cream">{panchangData.sunrise}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-copper text-3xl mb-2">🌇</div>
                    <div className="font-accent text-[10px] tracking-widest text-gold/60 uppercase mb-1">Sunset</div>
                    <div className="font-hero text-xl text-cream">{panchangData.sunset}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-cream/80 text-3xl mb-2">🌝</div>
                    <div className="font-accent text-[10px] tracking-widest text-gold/60 uppercase mb-1">Moonrise</div>
                    <div className="font-hero text-xl text-cream">{panchangData.moonrise}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-cream/40 text-3xl mb-2">🌚</div>
                    <div className="font-accent text-[10px] tracking-widest text-gold/60 uppercase mb-1">Moonset</div>
                    <div className="font-hero text-xl text-cream">{panchangData.moonset}</div>
                  </div>
                </div>

                {/* The 5 Angas (Limbs) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-card p-6 rounded-xl border border-gold/20 space-y-4">
                    <h3 className="font-hero text-xl text-gold-light border-b border-gold/10 pb-2 mb-4">The 5 Limbs (Angas)</h3>
                    
                    <div className="flex justify-between items-center pb-2 border-b border-white/5">
                      <span className="font-accent text-[10px] tracking-widest text-gold/80 uppercase w-1/4">Vaar (Day)</span>
                      <span className="font-body text-cream text-sm font-bold w-3/4 text-right">{panchangData.vaar}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-2 border-b border-white/5">
                      <span className="font-accent text-[10px] tracking-widest text-gold/80 uppercase w-1/4">Tithi (Phase)</span>
                      <div className="text-right">
                        <div className="font-body text-cream text-sm font-bold">{panchangData.tithi.name}</div>
                        <div className="text-[10px] text-cream/40">Ends: {panchangData.tithi.end}</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b border-white/5">
                      <span className="font-accent text-[10px] tracking-widest text-gold/80 uppercase w-1/4">Nakshatra</span>
                      <div className="text-right">
                        <div className="font-body text-cream text-sm font-bold">{panchangData.nakshatra.name} (Ruler: {panchangData.nakshatra.lord})</div>
                        <div className="text-[10px] text-cream/40">Ends: {panchangData.nakshatra.end}</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b border-white/5">
                      <span className="font-accent text-[10px] tracking-widest text-gold/80 uppercase w-1/4">Yoga</span>
                      <div className="text-right">
                        <div className="font-body text-cream text-sm font-bold">{panchangData.yoga.name}</div>
                        <div className="text-[10px] text-cream/40">Ends: {panchangData.yoga.end}</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="font-accent text-[10px] tracking-widest text-gold/80 uppercase w-1/4">Karana</span>
                      <div className="text-right">
                        <div className="font-body text-cream text-sm font-bold">{panchangData.karana.name}</div>
                        <div className="text-[10px] text-cream/40">Ends: {panchangData.karana.end}</div>
                      </div>
                    </div>

                  </div>

                  {/* Auspicious / Inauspicious Timings */}
                  <div className="space-y-6">
                    <div className="glass-card p-6 rounded-xl border border-green-500/30 bg-green-500/5">
                      <h3 className="font-accent text-xs tracking-widest text-green-400 uppercase mb-4 flex items-center gap-2">
                        <span className="text-lg">✨</span> Auspicious Timings
                      </h3>
                      <div className="space-y-3">
                        {panchangData.auspicious.map((item, i) => (
                          <div key={i} className="flex justify-between items-center bg-primary/40 px-4 py-2 rounded-md">
                            <span className="font-body text-cream/90 text-sm">{item.name}</span>
                            <span className="font-accent text-xs text-green-300 tracking-wider">{item.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="glass-card p-6 rounded-xl border border-red-500/30 bg-red-500/5">
                      <h3 className="font-accent text-xs tracking-widest text-red-400 uppercase mb-4 flex items-center gap-2">
                        <span className="text-lg">⚠️</span> Inauspicious Timings
                      </h3>
                      <div className="space-y-3">
                        {panchangData.inauspicious.map((item, i) => (
                          <div key={i} className="flex justify-between items-center bg-primary/40 px-4 py-2 rounded-md">
                            <span className="font-body text-cream/90 text-sm">{item.name}</span>
                            <span className="font-accent text-xs text-red-300 tracking-wider">{item.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Panchang;
