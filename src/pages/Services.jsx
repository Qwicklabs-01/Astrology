import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 'astrology',
    title: 'Vedic Astrology',
    icon: '☉',
    description: 'A profound exploration of your soul’s blueprint using the ancient science of Jyotish. Decode the karmic patterns mapped out by the Navagraha (9 planets) at your exact moment of birth.',
    subServices: [
      'Natal Chart (Janam Kundali) Analysis',
      'Mahadasha & Antardasha Predictions',
      'Prashna Kundali (Horary Astrology)',
      'Synastry / Compatibility (Ashtakoot)',
      'Career & Finance 5-Year Forecast',
      'Remedial Astrology (Upayas)'
    ],
    details: { duration: '60-90 Mins', delivery: 'Video Call + PDF Report', price: 'Comprehensive Tier' }
  },
  {
    id: 'vastu',
    title: 'Vastu Shastra',
    icon: '🏠',
    description: 'Harmonize your living and working spaces with the cosmic elements. Correct energetic imbalances in your property without demolition to unlock health, wealth, and peace.',
    subServices: [
      'Home & Residential Vastu',
      'Office & Commercial Space Vastu',
      'Plot Selection & Direction Analysis',
      'Vastu Correction without Demolition',
      'Geopathic Stress Analysis'
    ],
    details: { duration: '120 Mins', delivery: 'On-site or Remote Floorplan Review', price: 'Detailed Tier' }
  },
  {
    id: 'numerology',
    title: 'Numerology',
    icon: '🔢',
    description: 'Uncover the vibrational frequencies embedded in your name and birthdate using Chaldean and Pythagorean systems to ensure your name is a magnet for success.',
    subServices: [
      'Life Path & Destiny Number Analysis',
      'Name Correction Numerology',
      'Business Name Vibration Check',
      'Mobile & Vehicle Number Selection',
      'Personal Year Forecast (Lo Shu Grid)'
    ],
    details: { duration: '45 Mins', delivery: 'Phone Call + Written Summary', price: 'Basic Tier' }
  },
  {
    id: 'palmistry',
    title: 'Palmistry',
    icon: '✋',
    description: 'Read the physical map of your destiny written in your hands. A deep analysis of your major lines, mounts, and unique markings that reflect your neurological pathways.',
    subServices: [
      'Life, Head, and Heart Line Analysis',
      'Fate Line & Career Trajectory',
      'Mounts Analysis (Jupiter, Saturn, etc.)',
      'Special Marks (Stars, Triangles, Fish)',
      'Photo-based Online Palm Reading'
    ],
    details: { duration: '60 Mins', delivery: 'Video Call (High-Res Photos Required)', price: 'Detailed Tier' }
  },
  {
    id: 'alchemy',
    title: 'Alchemy & Gems',
    icon: '💎',
    description: 'Harness the pure frequencies of earth’s minerals. Receive highly specific, chart-based recommendations for Jyotish-quality gemstones to balance afflicted planets.',
    subServices: [
      'Jyotish Gemstone Prescription',
      'Navaratna (Nine Gem) Therapy',
      'Rudraksha Selection Guide',
      'Yantra Prescription & Energization',
      'Crystal Healing Alignment'
    ],
    details: { duration: '30 Mins', delivery: 'Written Report', price: 'Basic Tier' }
  },
  {
    id: 'muhurta',
    title: 'Muhurta Timing',
    icon: '⏳',
    description: 'Timing is everything. Discover the most auspicious cosmic windows to initiate major life events, ensuring the energies of the moment support your success.',
    subServices: [
      'Marriage Ceremony Timing',
      'Business Launch / Incorporation',
      'Griha Pravesh (Housewarming)',
      'Surgery / Medical Procedure Timing',
      'Investment / Property Purchase'
    ],
    details: { duration: 'Varies', delivery: 'Email Report with 3 Options', price: 'Basic Tier' }
  }
];

const Services = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-primary">
      {/* Header Banner */}
      <div className="relative py-20 mb-16 overflow-hidden border-b border-gold/10">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-primary z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_center,_hsl(var(--color-gold)/0.15),_transparent_70%)] blur-2xl"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-hero text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-6">
              Our Sacred Services
            </h1>
            <p className="font-body text-xl text-cream/70 italic">
              "Mapping the microcosm to the macrocosm."
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {servicesData.map((service, index) => (
          <motion.div 
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row gap-12 items-start"
          >
            {/* Visual Side */}
            <div className="w-full lg:w-1/3 flex flex-col justify-center items-center p-12 glass-card rounded-2xl border border-gold/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="text-8xl mb-6 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 drop-shadow-[0_0_15px_rgba(201,168,76,0.3)]">
                {service.icon}
              </div>
              <h2 className="font-hero text-3xl text-gold text-center relative z-10">{service.title}</h2>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-2/3 flex flex-col h-full justify-between">
              <div>
                <p className="font-body text-cream/80 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <h4 className="font-accent text-sm tracking-[0.2em] text-gold uppercase mb-4 border-b border-gold/20 pb-2 inline-block">
                  Areas of Focus
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                  {service.subServices.map((sub, i) => (
                    <li key={i} className="flex items-start text-cream/70 font-body text-sm group">
                      <span className="text-gold mr-3 opacity-60 group-hover:opacity-100 transition-opacity">✦</span>
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
