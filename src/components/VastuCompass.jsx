import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const vastuZones = [
  { id: 'nw', name: 'North West (Vayavya)', element: 'Air (Vayu)', planet: 'Moon', ideal: ['Guest Room', 'Finished Goods', 'Parking'], avoid: ['Master Bedroom', 'Underground Tank'], desc: 'The zone of movement, support, and banking. Brings helpful people into your life.' },
  { id: 'n', name: 'North (Uttara)', element: 'Water (Jal)', planet: 'Mercury', ideal: ['Living Room', 'Entrance', 'Safe/Locker'], avoid: ['Kitchen', 'Toilet', 'Heavy Storage'], desc: 'The zone of wealth (Kubera), career, and new opportunities. Must be kept open, clean, and light.' },
  { id: 'ne', name: 'North East (Ishan)', element: 'Water/Ether', planet: 'Jupiter', ideal: ['Pooja Room', 'Meditation', 'Underground Water'], avoid: ['Toilet', 'Kitchen', 'Staircase', 'Heavy Furniture'], desc: 'The most sacred zone. Source of spiritual growth, wisdom, and clarity. Must never be blocked or polluted.' },
  { id: 'w', name: 'West (Pashcima)', element: 'Space (Akasha)', planet: 'Saturn', ideal: ['Dining Room', 'Children Bedroom', 'Overhead Tank'], avoid: ['Main Entrance (sometimes)', 'Pooja Room'], desc: 'The zone of gains, profits, and fulfillment of desires. Governed by Varuna, lord of water.' },
  { id: 'c', name: 'Center (Brahmasthana)', element: 'Ether (Space)', planet: 'Lord Brahma', ideal: ['Courtyard', 'Open Space'], avoid: ['Pillars', 'Walls', 'Heavy Furniture', 'Toilets'], desc: 'The navel of the Vastu Purusha. The central energy distribution point. Must be entirely open and clear.' },
  { id: 'e', name: 'East (Purva)', element: 'Air/Wood', planet: 'Sun', ideal: ['Main Entrance', 'Living Room', 'Study'], avoid: ['Toilets', 'Heavy Storage', 'Staircase'], desc: 'The zone of social associations, health, and vitality. Let the morning sun rays enter freely.' },
  { id: 'sw', name: 'South West (Nairutya)', element: 'Earth (Prithvi)', planet: 'Rahu', ideal: ['Master Bedroom', 'Heavy Storage', 'Cash/Jewelry', 'Staircase'], avoid: ['Main Entrance', 'Underground Tank', 'Pooja Room', 'Light structures'], desc: 'The zone of stability, relationships, and skills. Must be the heaviest and highest part of the building.' },
  { id: 's', name: 'South (Dakshina)', element: 'Fire/Earth', planet: 'Mars', ideal: ['Bedroom', 'Store Room', 'Staircase'], avoid: ['Main Entrance', 'Underground Water', 'Kitchen'], desc: 'The zone of relaxation, fame, and courage. Governed by Yama. Block this direction for protection.' },
  { id: 'se', name: 'South East (Agneya)', element: 'Fire (Agni)', planet: 'Venus', ideal: ['Kitchen', 'Electrical Equipment', 'Heaters'], avoid: ['Underground Tank', 'Bedroom', 'Main Entrance'], desc: 'The zone of cash flow and physical energy. The fire element must be maintained here.' }
];

const VastuCompass = () => {
  const [activeZone, setActiveZone] = useState(vastuZones[4]); // Default to Center
  const [heading, setHeading] = useState(0);
  const [hasCompass, setHasCompass] = useState(false);

  useEffect(() => {
    const handleOrientation = (e) => {
      let compassHeading = e.webkitCompassHeading || Math.abs(e.alpha - 360);
      if (compassHeading !== null && !isNaN(compassHeading)) {
        setHeading(compassHeading);
        setHasCompass(true);
      }
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation, true);
    }

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation, true);
    };
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-primary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="font-accent text-xs tracking-[0.3em] text-gold/80 mb-4 uppercase">Sacred Architecture</div>
          <h1 className="font-hero text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-6">
            Vastu Purusha Mandala
          </h1>
          <p className="font-body text-cream/70 max-w-2xl mx-auto italic text-lg">
            Explore the energetic zones of your home or office. Click on any direction to reveal its ruling element, planet, and ideal usage.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          
          {/* Compass Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
            className="w-full max-w-[320px] sm:max-w-md aspect-square relative"
          >
            {/* Compass Ring */}
            <div 
              className={`absolute -inset-8 border border-gold/20 rounded-full transition-transform duration-200 ease-out ${!hasCompass ? 'animate-[spin_60s_linear_infinite]' : ''}`}
              style={hasCompass ? { transform: `rotate(${-heading}deg)` } : {}}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-3 text-gold font-accent text-xs">N</div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-3 text-gold font-accent text-xs">S</div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-3 text-gold font-accent text-xs">W</div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-3 text-gold font-accent text-xs">E</div>
            </div>

            <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-1 relative z-10 p-1 glass-card rounded-xl">
              {vastuZones.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(zone)}
                  className={`relative overflow-hidden flex flex-col items-center justify-center text-center p-2 sm:p-3 rounded-lg transition-all duration-300 border ${
                    activeZone.id === zone.id
                    ? 'border-gold bg-gradient-to-br from-gold/20 to-transparent shadow-[inset_0_0_15px_hsl(var(--color-gold)/0.2)]'
                    : 'border-white/5 hover:border-gold/30 hover:bg-white/5'
                  }`}
                >
                  {activeZone.id === zone.id && (
                    <motion.div layoutId="activeGlow" className="absolute inset-0 bg-gold/10" />
                  )}
                  <span className="font-hero text-[10px] sm:text-xs md:text-sm text-cream relative z-10 leading-tight">
                    {zone.name.split(' ')[0]}<br/>{zone.name.split(' ')[1] || ''}
                  </span>
                  {zone.id === 'c' && <span className="font-sanskrit text-2xl sm:text-4xl text-gold/30 absolute opacity-50 select-none">ॐ</span>}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Zone Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
            className="w-full max-w-lg"
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeZone.id}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="glass-card p-8 rounded-2xl border border-gold/30 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 text-9xl text-gold/5 font-hero font-bold">{activeZone.name.charAt(0)}</div>
                
                <h2 className="font-hero text-3xl text-gold-light mb-6 border-b border-gold/10 pb-4">
                  {activeZone.name}
                </h2>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-accent text-[10px] tracking-widest text-gold/60 uppercase mb-1">Ruling Element</h4>
                    <p className="font-body text-cream font-bold">{activeZone.element}</p>
                  </div>
                  <div>
                    <h4 className="font-accent text-[10px] tracking-widest text-gold/60 uppercase mb-1">Ruling Planet</h4>
                    <p className="font-body text-cream font-bold">{activeZone.planet}</p>
                  </div>
                </div>

                <p className="font-body text-cream/80 leading-relaxed mb-8 italic border-l-2 border-gold/30 pl-4 py-1">
                  {activeZone.desc}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-accent text-xs tracking-widest text-green-400 uppercase mb-3 flex items-center gap-2">
                      <span className="text-lg">✨</span> Ideal Placement
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeZone.ideal.map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-300 font-body text-xs rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-accent text-xs tracking-widest text-red-400 uppercase mb-3 flex items-center gap-2">
                      <span className="text-lg">🚫</span> Strictly Avoid
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeZone.avoid.map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-red-500/10 border border-red-500/30 text-red-300 font-body text-xs rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default VastuCompass;
