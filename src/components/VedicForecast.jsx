import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, Area, AreaChart, ReferenceLine
} from "recharts";

const yearData = [
  {
    year: "2026–27",
    label: "Year 1",
    career: 95,
    finance: 95,
    health: 75,
    relationships: 80,
    overall: 90,
    dasha: "Jupiter / Moon",
    theme: "PEAK EXPANSION",
    color: "#D4A843",
    transit: "Jupiter in Cancer (10th house)",
    highlight: "Strongest career & income window. Major promotion or business breakthrough expected Sep 2026–Jan 2027.",
    icon: "☿",
  },
  {
    year: "2027–28",
    label: "Year 2",
    career: 65,
    finance: 60,
    health: 70,
    relationships: 55,
    overall: 62,
    dasha: "Jupiter / Mars → Saturn MD",
    theme: "PIVOT & TRANSITION",
    color: "#C17B2A",
    transit: "Saturn approaching Aries (7th house)",
    highlight: "Mahadasha transition. Career identity shifts. A defining professional choice between security and ambition.",
    icon: "♂",
  },
  {
    year: "2028–29",
    label: "Year 3",
    career: 50,
    finance: 45,
    health: 55,
    relationships: 50,
    overall: 48,
    dasha: "Saturn / Saturn",
    theme: "KARMIC FOUNDATION",
    color: "#7A6030",
    transit: "Saturn in Aries (7th house)",
    highlight: "Most demanding year. Hard work with slow visible results. What you build now defines the next decade.",
    icon: "♄",
  },
  {
    year: "2029–30",
    label: "Year 4",
    career: 68,
    finance: 65,
    health: 65,
    relationships: 60,
    overall: 65,
    dasha: "Saturn / Saturn (closing)",
    theme: "CREDIBILITY EMERGES",
    color: "#8A8050",
    transit: "Saturn entering Taurus",
    highlight: "Professional credibility solidifies. Peer recognition arrives. Strong window for long-term asset acquisition.",
    icon: "⊕",
  },
  {
    year: "2030–31",
    label: "Year 5",
    career: 82,
    finance: 80,
    health: 78,
    relationships: 75,
    overall: 80,
    dasha: "Saturn / Mercury",
    theme: "SECOND ASCENT",
    color: "#D4A843",
    transit: "Saturn conjunct natal Jupiter/Rahu",
    highlight: "Renewal. Multiple income streams, intellectual authority, business ventures. Second peak of the 5-year window.",
    icon: "☿",
  },
];

const planetData = [
  { planet: "☉ Sun", sign: "Aries", nakshatra: "Bharani", house: "7th", strength: 78, role: "Partnerships & Identity" },
  { planet: "☽ Moon", sign: "Libra", nakshatra: "Swati", house: "1st (Lagna)", strength: 72, role: "Career & Mind" },
  { planet: "♄ Saturn", sign: "Taurus", nakshatra: "Krittika", house: "8th", strength: 65, role: "Transformation & Karma" },
  { planet: "♃ Jupiter", sign: "Taurus", nakshatra: "Rohini", house: "8th", strength: 82, role: "Wealth & Wisdom" },
  { planet: "☊ Rahu", sign: "Taurus", nakshatra: "Rohini", house: "8th", strength: 58, role: "Ambition & Disruption" },
  { planet: "☋ Ketu", sign: "Scorpio", nakshatra: "Anuradha", house: "2nd", strength: 55, role: "Spiritual Depth" },
];

const dashaTimeline = [
  { name: "Rahu MD", start: 2001, end: 2012, color: "#6A4A8A" },
  { name: "Jupiter MD", start: 2012, end: 2028, color: "#D4A843" },
  { name: "Saturn MD", start: 2028, end: 2047, color: "#5A7A8A" },
  { name: "Mercury MD", start: 2047, end: 2064, color: "#4A8A5A" },
];

const antardasha = [
  { label: "Jup/Venus", period: "mid-2022 → mid-2025", status: "past" },
  { label: "Jup/Sun", period: "mid-2025 → Mar 2026", status: "past" },
  { label: "Jup/Moon", period: "Mar 2026 → Jun 2027", status: "current" },
  { label: "Jup/Mars", period: "Jun 2027 → May 2028", status: "near" },
  { label: "Sat/Sat", period: "late 2028 → 2031", status: "future" },
  { label: "Sat/Mercury", period: "2031 → 2033", status: "future" },
];

const radarData = yearData.map(y => ({
  year: y.label,
  Career: y.career,
  Finance: y.finance,
  Health: y.health,
  Relations: y.relationships,
}));

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 rounded-md border-l-4 border-l-gold">
        <p className="text-gold text-[13px] font-bold mb-2">{label}</p>
        {payload.map((p, i) => (
          <p key={i} className="text-xs my-1" style={{ color: p.color }}>
            {p.name}: <strong>{p.value}</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function VedicForecast() {
  const [formData, setFormData] = useState({ name: '', dob: '', tob: '', pob: '' });
  const [results, setResults] = useState(null);
  
  const [activeYear, setActiveYear] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

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
    
    // Create deterministic seed
    const seedString = `${formData.name}-${formData.dob}-${formData.pob}`.toLowerCase().replace(/\s/g, '');
    let seed = hashString(seedString);
    const nextRandom = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    const currentYear = new Date().getFullYear();
    const dashaLords = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"];
    const mahadasha = dashaLords[Math.floor(nextRandom() * 9)];
    const lagnaSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    const lagna = lagnaSigns[Math.floor(nextRandom() * 12)];

    // Generate dynamic years
    const dynYearData = yearData.map((y, i) => {
      let r = nextRandom();
      return {
        ...y,
        year: `${currentYear + i}–${currentYear + i + 1}`,
        career: Math.floor(40 + r * 60),
        finance: Math.floor(40 + nextRandom() * 60),
        health: Math.floor(40 + nextRandom() * 60),
        relationships: Math.floor(40 + nextRandom() * 60),
        overall: Math.floor(40 + nextRandom() * 60),
        dasha: `${mahadasha} / ${dashaLords[Math.floor(nextRandom() * 9)]}`
      };
    });

    setResults({
      dob: formData.dob,
      pob: formData.pob,
      lagna: lagna,
      yearData: dynYearData
    });
  };

  const selected = results ? results.yearData[activeYear] : yearData[0];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-primary relative overflow-hidden">
      {/* Starfield background */}
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-0" style={{
        background: "radial-gradient(ellipse at 20% 20%, rgba(212,168,67,0.05) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(74,143,163,0.04) 0%, transparent 60%)",
      }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <AnimatePresence mode="wait">
          {!results ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            >
              <div className="text-center mb-12">
                <div className="font-accent text-xs tracking-[0.3em] text-gold/80 mb-4 uppercase">Predictive Astrology</div>
                <h1 className="font-hero text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-6">
                  Vedic 5-Year Forecast
                </h1>
                <p className="font-body text-cream/70 max-w-2xl mx-auto italic text-lg">
                  Map your karmic trajectory through the Vimshottari Dasha system.
                </p>
              </div>

              <div className="max-w-md mx-auto glass-card p-8 rounded-xl border border-gold/20">
                <form onSubmit={calculate} className="space-y-6">
                  <div>
                    <label className="block font-accent text-xs tracking-widest text-gold mb-2 uppercase">Full Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-primary/50 border border-gold/30 rounded-md px-4 py-3 font-body text-cream focus:border-gold outline-none focus:ring-1 focus:ring-gold/50" />
                  </div>
                  <div>
                    <label className="block font-accent text-xs tracking-widest text-gold mb-2 uppercase">Date of Birth</label>
                    <input type="date" required value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})} className="w-full bg-primary/50 border border-gold/30 rounded-md px-4 py-3 font-body text-cream focus:border-gold outline-none focus:ring-1 focus:ring-gold/50" style={{colorScheme:'dark'}}/>
                  </div>
                  <div>
                    <label className="block font-accent text-xs tracking-widest text-gold mb-2 uppercase">Place of Birth</label>
                    <input type="text" required value={formData.pob} onChange={(e) => setFormData({...formData, pob: e.target.value})} className="w-full bg-primary/50 border border-gold/30 rounded-md px-4 py-3 font-body text-cream focus:border-gold outline-none focus:ring-1 focus:ring-gold/50" />
                  </div>
                  <button type="submit" className="w-full py-4 bg-gradient-to-r from-gold to-copper text-primary font-accent uppercase tracking-widest text-sm hover:shadow-[0_0_20px_hsl(var(--color-gold)/0.4)] transition-all font-bold rounded-md">
                    Analyze Timeline
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="font-accent text-[11px] tracking-[0.4em] text-gold/80 mb-3 uppercase">
            Vimshottari Dasha · Chandra Lagna Analysis
          </div>
          <h1 className="font-hero text-3xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-4 uppercase tracking-widest">
            Vedic 5-Year Forecast
          </h1>
          <div className="font-accent text-sm text-cream/70 tracking-widest uppercase">
            {results.dob} · {results.pob} · 2026 – 2031
          </div>
          <div className="inline-block mt-4 px-5 py-2 border border-gold/50 rounded text-xs font-accent tracking-widest text-gold-light uppercase bg-gold/5">
            ✦ CURRENTLY: {results.yearData[0].dasha.toUpperCase()} ANTARDASHA ✦
          </div>
        </div>

        {/* Natal Signature Banner */}
        <div className="bg-gradient-to-br from-gold/10 to-copper/5 border border-gold/20 rounded-xl p-4 sm:p-6 mb-8 flex flex-wrap gap-3 items-center">
          <span className="text-gold text-sm font-bold tracking-wider font-accent uppercase">⚡ Natal Signature:</span>
          <span className="text-cream/80 text-sm font-body">
            Generated deterministically based on your birth coordinates. Chandra Lagna: <strong className="text-cream font-bold">{results.lagna}</strong>
          </span>
        </div>

        {/* Nav Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { key: "overview", label: "📊 5-Year Overview" },
            { key: "dasha", label: "⏳ Dasha Timeline" },
            { key: "planets", label: "🪐 Planetary Chart" },
            { key: "radar", label: "🎯 Life Radar" },
          ].map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)} className={`
              px-4 py-2 rounded-md cursor-pointer text-sm font-accent tracking-wider transition-all
              ${activeTab === tab.key ? 'bg-gold/15 border border-gold text-gold-light' : 'border border-white/10 text-cream/50 hover:bg-white/5'}
            `}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Year Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {results.yearData.map((y, i) => (
                <button key={i} onClick={() => setActiveYear(i)} className={`
                  p-3 rounded-lg text-center transition-all flex flex-col items-center justify-center
                  ${activeYear === i ? 'bg-gold/10 border-gold/50 border' : 'glass-card border-transparent hover:border-gold/30'}
                `}>
                  <div className="text-2xl mb-1">{y.icon}</div>
                  <div className={`text-xs font-bold font-accent tracking-widest uppercase ${activeYear === i ? 'text-gold' : 'text-cream/50'}`}>
                    {y.label}
                  </div>
                  <div className={`text-[10px] font-accent mt-1 ${activeYear === i ? 'text-cream/80' : 'text-cream/30'}`}>
                    {y.year}
                  </div>
                  <div className="w-full mt-3 h-[3px] rounded-full bg-black/40 overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: `${y.overall}%`, backgroundColor: y.color }}></div>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Year Detail */}
            <div className="glass-card rounded-xl p-6 sm:p-8 border-l-4" style={{ borderLeftColor: selected.color }}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                <div>
                  <span className="text-[11px] font-accent tracking-[0.3em] uppercase" style={{ color: selected.color }}>
                    {selected.year} · {selected.label}
                  </span>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-hero text-cream tracking-wide">
                    {selected.theme}
                  </h2>
                </div>
                <div className="sm:text-right">
                  <div className="text-[10px] font-accent tracking-[0.2em] text-cream/40 uppercase">Dasha</div>
                  <div className="text-sm font-bold font-body" style={{ color: selected.color }}>{selected.dasha}</div>
                  <div className="text-xs text-cream/60 mt-1 font-body">{selected.transit}</div>
                </div>
              </div>
              
              <p className="text-cream/80 text-sm sm:text-base leading-relaxed font-body italic mb-8">
                "{selected.highlight}"
              </p>
              
              {/* Score bars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Career", value: selected.career, color: "#D4A843" },
                  { label: "Finance", value: selected.finance, color: "#4A8FA3" },
                  { label: "Health", value: selected.health, color: "#4A8A5A" },
                  { label: "Relationships", value: selected.relationships, color: "#C17B2A" },
                ].map(s => (
                  <div key={s.label}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-accent tracking-widest text-cream/60 uppercase">{s.label}</span>
                      <span className="text-xs font-bold" style={{ color: s.color }}>{s.value}/100</span>
                    </div>
                    <div className="h-[6px] bg-black/40 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{
                        width: `${s.value}%`,
                        background: `linear-gradient(90deg, ${s.color}88, ${s.color})`,
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Area Chart */}
            <div className="glass-card rounded-xl p-6 sm:p-8">
              <div className="text-[11px] font-accent tracking-[0.3em] text-cream/50 mb-6 uppercase">
                Career & Finance Trajectory
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={results.yearData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="careerGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#D4A843" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#D4A843" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="financeGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4A8FA3" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#4A8FA3" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="year" tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }} axisLine={{ stroke: "rgba(255,255,255,0.1)" }} tickLine={false} />
                    <YAxis tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 100]} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", fontFamily: '"Josefin Sans", sans-serif' }} />
                    <ReferenceLine y={70} stroke="rgba(255,255,255,0.1)" strokeDasharray="4 4" label={{ value: "Favorable", fill: "rgba(255,255,255,0.3)", fontSize: 10 }} />
                    <Area type="monotone" dataKey="career" name="Career" stroke="#D4A843" fill="url(#careerGrad)" strokeWidth={2} dot={{ fill: "#D4A843", r: 4 }} />
                    <Area type="monotone" dataKey="finance" name="Finance" stroke="#4A8FA3" fill="url(#financeGrad)" strokeWidth={2} dot={{ fill: "#4A8FA3", r: 4 }} />
                    <Area type="monotone" dataKey="overall" name="Overall" stroke="#8A6A20" fill="none" strokeWidth={1} strokeDasharray="4 4" dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* DASHA TIMELINE TAB */}
        {activeTab === "dasha" && (
          <div className="space-y-6">
            {/* Mahadasha bar */}
            <div className="glass-card rounded-xl p-6 sm:p-8">
              <div className="text-[11px] font-accent tracking-[0.3em] text-cream/50 mb-6 uppercase">
                Mahadasha Lifecycle (Birth → Age 63)
              </div>
              <div className="relative h-16 bg-black/50 rounded-lg overflow-hidden flex">
                {dashaTimeline.map((d, i) => {
                  const total = 2064 - 2001;
                  const width = ((d.end - d.start) / total) * 100;
                  const isCurrent = d.name === "Jupiter MD";
                  const isNext = d.name === "Saturn MD";
                  return (
                    <div key={i} className="h-full relative flex flex-col items-center justify-center" style={{
                      width: `${width}%`,
                      background: isCurrent ? `${d.color}33` : isNext ? `${d.color}22` : `${d.color}18`,
                      borderLeft: isCurrent ? `3px solid ${d.color}` : isNext ? `2px solid ${d.color}88` : "none",
                      borderRight: "1px solid rgba(0,0,0,0.5)",
                    }}>
                      <div className="text-[10px] font-accent tracking-widest text-center px-1" style={{ color: isCurrent ? d.color : isNext ? `${d.color}AA` : 'rgba(255,255,255,0.3)' }}>
                        {isCurrent ? "▶ " : ""}{d.name}
                      </div>
                      <div className="text-[9px] text-cream/30 mt-1 font-body">{d.start}–{d.end}</div>
                    </div>
                  );
                })}
                {/* NOW marker */}
                <div className="absolute top-0 bottom-0 w-[2px] bg-gold opacity-80" style={{ left: `${((2026 - 2001) / (2064 - 2001)) * 100}%` }}>
                  <div className="absolute -top-5 -left-3 text-gold text-[9px] font-accent tracking-widest">NOW</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-5">
                {dashaTimeline.map((d, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-sm" style={{ background: d.color }}></div>
                    <span className="text-[11px] font-accent text-cream/60 uppercase">{d.name} ({d.end - d.start} yrs)</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Antardasha sequence */}
            <div className="glass-card rounded-xl p-6 sm:p-8">
              <div className="text-[11px] font-accent tracking-[0.3em] text-cream/50 mb-6 uppercase">
                Antardasha (Sub-Period) Sequence
              </div>
              <div className="space-y-2">
                {antardasha.map((a, i) => (
                  <div key={i} className={`flex items-center gap-4 p-3 sm:p-4 rounded-lg border ${a.status === 'current' ? 'bg-gold/10 border-gold/50' : 'bg-black/30 border-white/5'}`}>
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: a.status === 'current' ? '#D4A843' : a.status === 'past' ? '#3A3020' : a.status === 'near' ? '#8A6020' : '#2A2218' }}></div>
                    <div className="flex-1">
                      <span className={`text-sm font-body ${a.status === 'current' ? 'text-gold-light font-bold' : a.status === 'past' ? 'text-cream/40' : 'text-cream/80'}`}>
                        {a.label}
                      </span>
                      {a.status === 'current' && (
                        <span className="ml-3 text-[9px] text-gold font-accent tracking-[0.2em] uppercase hidden sm:inline">← You are here</span>
                      )}
                    </div>
                    <div className="text-xs font-body text-cream/50">{a.period}</div>
                    <div className={`text-[10px] font-accent tracking-widest w-16 text-right uppercase ${a.status === 'current' ? 'text-gold' : a.status === 'past' ? 'text-cream/30' : a.status === 'near' ? 'text-[#8A6020]' : 'text-cream/20'}`}>
                      {a.status === 'current' ? 'Active' : a.status === 'past' ? 'Past' : a.status === 'near' ? 'Next' : 'Future'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overall scores bar chart */}
            <div className="glass-card rounded-xl p-6 sm:p-8">
              <div className="text-[11px] font-accent tracking-[0.3em] text-cream/50 mb-6 uppercase">
                Year-By-Year Comparative Scores
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={results.yearData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="year" tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 100]} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", fontFamily: '"Josefin Sans", sans-serif' }} />
                    <Bar dataKey="career" name="Career" fill="#D4A843" opacity={0.9} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="finance" name="Finance" fill="#4A8FA3" opacity={0.9} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="health" name="Health" fill="#4A8A5A" opacity={0.9} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* PLANETS TAB */}
        {activeTab === "planets" && (
          <div className="space-y-6">
            {/* House wheel simplified */}
            <div className="glass-card rounded-xl p-6 sm:p-8">
              <div className="text-[11px] font-accent tracking-[0.3em] text-cream/50 mb-6 uppercase">
                Chandra Lagna House Map ({results.lagna} Ascendant)
              </div>
              <div className="overflow-x-auto pb-4">
                <div className="grid grid-cols-4 grid-rows-3 gap-1 min-w-[500px]">
                  {[
                    { h: "12", sign: "Virgo", planets: "", note: "Losses · Foreign" },
                    { h: "1", sign: "Libra", planets: "☽ Moon", note: "Self · LAGNA", highlight: true },
                    { h: "2", sign: "Scorpio", planets: "☋ Ketu", note: "Wealth · Speech" },
                    { h: "3", sign: "Sagittarius", planets: "", note: "Courage · Comms" },
                    { h: "11", sign: "Leo", planets: "", note: "Gains · Income" },
                    { h: "CENTER", sign: "", planets: `Born\n${results.dob}\n${results.pob}`, note: "", center: true },
                    { h: "CENTER2", sign: "", planets: "", note: "", center: true, empty: true },
                    { h: "4", sign: "Capricorn", planets: "", note: "Home · Mother" },
                    { h: "10", sign: "Cancer", planets: "", note: "Career · Fame" },
                    { h: "CENTER3", sign: "", planets: "", note: "", center: true, empty: true },
                    { h: "CENTER4", sign: "", planets: "", note: "", center: true, empty: true },
                    { h: "5", sign: "Aquarius", planets: "", note: "Intelligence" },
                    { h: "9", sign: "Gemini", planets: "", note: "Fortune · Dharma" },
                    { h: "8", sign: "Taurus", planets: "♄♃☊", note: "Transformation ★", power: true },
                    { h: "7", sign: "Aries", planets: "☉ Sun", note: "Partnerships" },
                    { h: "6", sign: "Pisces", planets: "", note: "Health · Enemies" },
                  ].map((cell, i) => {
                    if (cell.center) return (
                      <div key={i} className="bg-black/40 flex items-center justify-center min-h-[90px] rounded">
                        {!cell.empty && (
                          <div className="text-center text-cream/40 text-[10px] font-accent tracking-widest uppercase leading-loose whitespace-pre-line">
                            {cell.planets}
                          </div>
                        )}
                      </div>
                    );
                    return (
                      <div key={i} className={`
                        rounded p-3 min-h-[90px] flex flex-col justify-between
                        ${cell.highlight ? 'bg-gold/10 border border-gold/40' : cell.power ? 'bg-copper/10 border border-copper/40' : 'bg-black/40 border border-white/5'}
                      `}>
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-[9px] font-accent tracking-widest text-cream/50">H{cell.h}</span>
                          <span className={`text-[9px] font-accent tracking-widest uppercase ${cell.highlight ? 'text-gold' : cell.power ? 'text-copper' : 'text-cream/50'}`}>{cell.sign}</span>
                        </div>
                        {cell.planets && (
                          <div className={`text-lg my-1 tracking-widest ${cell.highlight ? 'text-gold-light' : cell.power ? 'text-copper' : 'text-cream'}`}>
                            {cell.planets}
                          </div>
                        )}
                        <div className="text-[9px] text-cream/40 font-body leading-tight">{cell.note}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-4 text-xs font-body text-cream/60 italic border-l-2 border-copper/50 pl-3">
                <strong className="text-copper font-normal">★ 8th house triple conjunction</strong> (Saturn + Jupiter + Rahu) is the dominant natal signature — rules hidden wealth, transformation, and karmic depth.
              </div>
            </div>

            {/* Planetary strength chart */}
            <div className="glass-card rounded-xl p-6 sm:p-8">
              <div className="text-[11px] font-accent tracking-[0.3em] text-cream/50 mb-6 uppercase">
                Planetary Strength & Role
              </div>
              <div className="space-y-4">
                {planetData.map((p, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-start sm:items-center pb-4 border-b border-white/5 last:border-0">
                    <div className="w-full sm:w-1/4 text-sm font-hero text-cream">{p.planet}</div>
                    <div className="w-full sm:w-1/5 text-xs font-accent tracking-widest text-cream/50 uppercase">{p.sign}</div>
                    <div className="w-full sm:w-1/5 text-xs font-body text-cream/50">{p.nakshatra}</div>
                    <div className="w-full sm:flex-1 mt-2 sm:mt-0">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[10px] font-accent uppercase tracking-widest text-cream/40">{p.role}</span>
                        <span className="text-[10px] font-bold text-gold">{p.strength}%</span>
                      </div>
                      <div className="h-1.5 bg-black/40 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{
                          width: `${p.strength}%`,
                          background: `linear-gradient(90deg, rgba(193,123,42,0.5), #D4A843)`,
                        }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* RADAR TAB */}
        {activeTab === "radar" && (
          <div className="space-y-6">
            <div className="glass-card rounded-xl p-6 sm:p-8">
              <div className="text-[11px] font-accent tracking-[0.3em] text-cream/50 mb-6 uppercase">
                Life Area Radar — All 5 Years
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.yearData.map((y, i) => (
                  <div key={i} className="bg-black/30 border rounded-lg p-4" style={{ borderColor: `${y.color}33` }}>
                    <div className="text-[10px] font-accent tracking-widest uppercase mb-1" style={{ color: y.color }}>
                      {y.label}: {y.year}
                    </div>
                    <div className="text-[11px] font-body text-cream/60 mb-3">{y.theme}</div>
                    <div className="h-[200px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={[
                          { subject: "Career", value: y.career },
                          { subject: "Finance", value: y.finance },
                          { subject: "Health", value: y.health },
                          { subject: "Relations", value: y.relationships },
                          { subject: "Overall", value: y.overall },
                        ]}>
                          <PolarGrid stroke="rgba(255,255,255,0.05)" />
                          <PolarAngleAxis dataKey="subject" tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 10, fontFamily: '"Josefin Sans", sans-serif', textTransform: 'uppercase' }} />
                          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
                          <Radar name={y.label} dataKey="value" stroke={y.color} fill={y.color} fillOpacity={0.25} strokeWidth={1.5} />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gemstone & Remedy */}
            <div className="glass-card rounded-xl p-6 sm:p-8">
              <div className="text-[11px] font-accent tracking-[0.3em] text-cream/50 mb-6 uppercase">
                Gemstones & Remedies
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { gem: "Yellow Sapphire", planet: "♃ Jupiter", color: "#D4A843", day: "Thursday", metal: "Gold", finger: "Right Index", carat: "5+ carats", urgency: "WEAR NOW" },
                  { gem: "Pearl", planet: "☽ Moon", color: "#C8D8E8", day: "Monday", metal: "Silver", finger: "Right Small", carat: "5–7 carats", urgency: "RECOMMENDED" },
                  { gem: "White Sapphire", planet: "♀ Venus", color: "#E8E8F0", day: "Friday", metal: "Platinum", finger: "Right Ring", carat: "4+ carats", urgency: "OPTIONAL" },
                ].map((g, i) => (
                  <div key={i} className="bg-black/30 border rounded-lg p-5 text-center flex flex-col items-center" style={{ borderColor: `${g.color}33` }}>
                    <div className="text-3xl mb-3">💎</div>
                    <div className="text-sm font-hero font-bold tracking-wide mb-1" style={{ color: g.color }}>{g.gem}</div>
                    <div className="text-xs font-accent tracking-widest text-cream/50 uppercase mb-4">{g.planet}</div>
                    <div className="inline-block px-3 py-1 border rounded text-[9px] font-accent tracking-widest uppercase mb-5" style={{ color: g.color, borderColor: `${g.color}66` }}>
                      {g.urgency}
                    </div>
                    <div className="w-full space-y-2">
                      {[
                        ["Day", g.day], ["Metal", g.metal], ["Finger", g.finger], ["Min.", g.carat]
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between text-[11px] border-b border-white/5 pb-1 last:border-0">
                          <span className="font-accent tracking-widest text-cream/40 uppercase">{k}</span>
                          <span className="font-body text-cream/80">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center flex flex-col items-center">
          <div className="text-[10px] font-accent tracking-widest text-cream/40 uppercase mb-1">
            ⚠️ Analysis generated dynamically · Accuracy is for demonstration purposes
          </div>
          <div className="text-[10px] font-accent tracking-widest text-cream/30 uppercase">
            Vimshottari Dasha · Lahiri Ayanamsa · Sidereal positions
          </div>
          <button onClick={() => setResults(null)} className="mt-6 px-6 py-2 border border-gold/30 rounded-md text-gold hover:bg-gold/10 text-xs font-accent tracking-widest uppercase transition-all">
            Recalculate New Chart
          </button>
        </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
