export const knowledgeCategories = [
  { 
    id: 'astrology', 
    title: 'Vedic Astrology', 
    icon: '✨', 
    description: 'Explore the 9 Planets, 12 Rashis, 27 Nakshatras, and foundational principles of Jyotish.' 
  },
  { 
    id: 'vastu', 
    title: 'Vastu Shastra', 
    icon: '🏛️', 
    description: 'Learn the sacred architecture, elements, and energetic flow of spaces.' 
  },
  { 
    id: 'numerology', 
    title: 'Numerology', 
    icon: '🔢', 
    description: 'Discover the vibrations behind names, numbers, and the Lo Shu grid.' 
  },
  { 
    id: 'palmistry', 
    title: 'Palmistry', 
    icon: '✋', 
    description: 'Read the lines, mounts, and unique markings of the human hand.' 
  },
  { 
    id: 'alchemy', 
    title: 'Alchemy & Gems', 
    icon: '💎', 
    description: 'Harness the power of Navaratna (nine gems), Yantras, and Rudraksha.' 
  }
];

export const knowledgeContent = {
  astrology: [
    {
      id: 'navagraha',
      title: 'The 9 Planets (Navagraha)',
      sections: [
        { title: '☉ Surya (Sun)', content: 'Soul, father, authority, ego, leadership. Aries exaltation, Libra debilitation, Leo own sign. Karaka for: self, father, government, health (heart, eyes), career in politics/administration. Day: Sunday. Gemstone: Ruby. Mantra: Gayatri Mantra.' },
        { title: '☽ Chandra (Moon)', content: 'Mind, mother, emotions, nurturing. Cancer own sign, Taurus exaltation, Scorpio debilitation. Karaka for: mind, mother, water, travel. Day: Monday. Gemstone: Pearl. Mantra: Chandra Mantra.' },
        { title: '♂ Mangal (Mars)', content: 'Energy, courage, aggression, siblings. Aries/Scorpio own signs, Capricorn exaltation, Cancer debilitation. Karaka for: blood, property, siblings. Day: Tuesday. Gemstone: Red Coral. Includes Manglik analysis.' },
        { title: '☿ Budha (Mercury)', content: 'Intellect, communication, commerce. Gemini/Virgo own signs, Virgo exaltation, Pisces debilitation. Karaka for: speech, business, skin. Day: Wednesday. Gemstone: Emerald.' },
        { title: '♃ Guru (Jupiter)', content: 'Wisdom, dharma, children. Sagittarius/Pisces own signs, Cancer exaltation, Capricorn debilitation. Karaka for: knowledge, children, liver, guru. Day: Thursday. Gemstone: Yellow Sapphire.' },
        { title: '♀ Shukra (Venus)', content: 'Love, beauty, luxury. Taurus/Libra own signs, Pisces exaltation, Virgo debilitation. Karaka for: relationships, art, vehicles. Day: Friday. Gemstone: Diamond/White Sapphire.' },
        { title: '♄ Shani (Saturn)', content: 'Karma, discipline, longevity. Capricorn/Aquarius own signs, Libra exaltation, Aries debilitation. Karaka for: longevity, career, servants. Day: Saturday. Gemstone: Blue Sapphire. Rules Sade Sati and Dhaiya.' },
        { title: '☊ Rahu (North Node)', content: 'Obsession, foreign, innovation, illusion. Shadow planet. Exaltation in Taurus/Gemini. Karaka for: foreign lands, technology, unconventional paths. Gemstone: Hessonite (Gomed).' },
        { title: '☋ Ketu (South Node)', content: 'Liberation, spirituality, past life, detachment. Exaltation in Scorpio/Sagittarius. Karaka for: moksha, occult, ancestors, spiritual powers. Gemstone: Cat\'s Eye (Lehsuniya).' }
      ]
    },
    {
      id: 'rashis',
      title: 'The 12 Rashis (Zodiac Signs)',
      sections: [
        { title: '1. Mesha (Aries)', content: 'Ruler: Mars. Element: Fire. Modality: Cardinal. Traits: Pioneering, courageous, impatient, independent.' },
        { title: '2. Vrishabha (Taurus)', content: 'Ruler: Venus. Element: Earth. Modality: Fixed. Traits: Stable, artistic, stubborn, sensual.' },
        { title: '3. Mithuna (Gemini)', content: 'Ruler: Mercury. Element: Air. Modality: Mutable. Traits: Communicative, adaptable, dual-natured, intellectual.' },
        { title: '4. Karka (Cancer)', content: 'Ruler: Moon. Element: Water. Modality: Cardinal. Traits: Emotional, nurturing, protective, moody.' },
        { title: '5. Simha (Leo)', content: 'Ruler: Sun. Element: Fire. Modality: Fixed. Traits: Regal, confident, dramatic, generous.' },
        { title: '6. Kanya (Virgo)', content: 'Ruler: Mercury. Element: Earth. Modality: Mutable. Traits: Analytical, perfectionist, service-oriented, critical.' },
        { title: '7. Tula (Libra)', content: 'Ruler: Venus. Element: Air. Modality: Cardinal. Traits: Diplomatic, aesthetic, indecisive, partnership-focused.' },
        { title: '8. Vrischika (Scorpio)', content: 'Ruler: Mars/Ketu. Element: Water. Modality: Fixed. Traits: Intense, transformative, secretive, powerful.' },
        { title: '9. Dhanu (Sagittarius)', content: 'Ruler: Jupiter. Element: Fire. Modality: Mutable. Traits: Philosophical, optimistic, dogmatic, adventurous.' },
        { title: '10. Makara (Capricorn)', content: 'Ruler: Saturn. Element: Earth. Modality: Cardinal. Traits: Ambitious, disciplined, cold, structured.' },
        { title: '11. Kumbha (Aquarius)', content: 'Ruler: Saturn/Rahu. Element: Air. Modality: Fixed. Traits: Innovative, humanitarian, detached, eccentric.' },
        { title: '12. Meena (Pisces)', content: 'Ruler: Jupiter/Venus. Element: Water. Modality: Mutable. Traits: Compassionate, mystical, escapist, imaginative.' }
      ]
    },
    {
      id: 'nakshatras',
      title: 'The 27 Nakshatras',
      sections: [
        { title: 'Overview', content: 'The 27 Lunar Mansions represent the deeper psychological and spiritual layer of the zodiac. The Moon spends approximately one day in each nakshatra. Each is ruled by a planet and a specific deity.' },
        { title: 'Ketu Ruled (Spiritual/Destructive)', content: 'Ashwini (Horse head - speed/healing), Magha (Throne - authority/ancestors), Mula (Tied roots - destruction/foundation).' },
        { title: 'Venus Ruled (Pleasure/Creation)', content: 'Bharani (Yoni - creation/death), Purva Phalguni (Hammock - pleasure), Purva Ashadha (Fan - invincibility).' },
        { title: 'Sun Ruled (Power/Authority)', content: 'Krittika (Flame - purification), Uttara Phalguni (Fig tree - patronage), Uttara Ashadha (Tusk - final victory).' },
        { title: 'Moon Ruled (Growth/Mind)', content: 'Rohini (Chariot - growth/fertility), Hasta (Hand - skill), Shravana (Ear - listening/learning).' },
        { title: 'Mars Ruled (Action/Searching)', content: 'Mrigashira (Deer head - gentle searching), Chitra (Pearl - beauty/architecture), Dhanishtha (Drum - rhythm/wealth).' },
        { title: 'Rahu Ruled (Storms/Independence)', content: 'Ardra (Teardrop - destruction/renewal), Swati (Sword - independence/movement), Shatabhisha (Empty circle - healing/mystery).' },
        { title: 'Jupiter Ruled (Wisdom/Expansion)', content: 'Punarvasu (Quiver - return/restoration), Vishakha (Arch - ambition), Purva Bhadrapada (Cot - austerity/fire).' },
        { title: 'Saturn Ruled (Duty/Nourishment)', content: 'Pushya (Flower/teat - nourishment/auspicious), Anuradha (Staff/lotus - devotion), Uttara Bhadrapada (Twins - depth/wisdom).' },
        { title: 'Mercury Ruled (Intellect/Completion)', content: 'Ashlesha (Serpent - kundalini/mysticism), Jyeshtha (Amulet - protection/seniority), Revati (Fish - completion/nourishment).' }
      ]
    },
    {
      id: 'bhavas',
      title: 'The 12 Bhavas (Houses)',
      sections: [
        { title: '1st House (Lagna)', content: 'Self, body, personality, constitution, overall life path.' },
        { title: '2nd House (Dhana)', content: 'Wealth, speech, immediate family, food, early education, face/eyes.' },
        { title: '3rd House (Sahaja)', content: 'Siblings, courage, communication, short journeys, writing, hands.' },
        { title: '4th House (Sukha)', content: 'Home, mother, vehicles, inner happiness, real estate, basic education.' },
        { title: '5th House (Putra)', content: 'Children, intelligence, past life merit (poorva punya), speculation, romance, creativity.' },
        { title: '6th House (Ari)', content: 'Enemies, debts, diseases, daily service, litigation, pets, obstacles.' },
        { title: '7th House (Yuvati)', content: 'Spouse, partnerships, public image, open enemies, trade, legal binding.' },
        { title: '8th House (Randhra)', content: 'Longevity, sudden transformation, hidden things, inheritance, occult, surgery, chronic illness.' },
        { title: '9th House (Dharma)', content: 'Fortune, guru, father, religion, higher education, long travel, philosophy.' },
        { title: '10th House (Karma)', content: 'Career, reputation, authority, government, fame, mid-heaven.' },
        { title: '11th House (Labha)', content: 'Gains, income, elder siblings, social circles, fulfillment of desires.' },
        { title: '12th House (Vyaya)', content: 'Losses, foreign lands, moksha (liberation), sleep/bed pleasures, hospitals, isolation, meditation.' }
      ]
    }
  ],
  vastu: [
    {
      id: 'principles',
      title: 'Foundational Principles',
      sections: [
        { title: 'The 5 Elements (Pancha Bhuta)', content: 'Prithvi (Earth), Jal (Water), Agni (Fire), Vayu (Air), Akasha (Space). Proper balancing of these elements in their respective directions brings harmony.' },
        { title: 'The 8 Directions', content: 'North (Mercury/Wealth), North-East (Jupiter/Wisdom - most sacred), East (Sun/Health), South-East (Venus/Fire), South (Mars/Courage), South-West (Rahu/Stability), West (Saturn/Gains), North-West (Moon/Movement).' },
        { title: 'Vastu Purusha Mandala', content: 'The 9x9 sacred grid with 81 padas representing the cosmic being pinned to the earth. The center (Brahmasthana) must remain open and free of heavy objects.' }
      ]
    },
    {
      id: 'room-guide',
      title: 'Room-by-Room Guide',
      sections: [
        { title: 'Main Entrance', content: 'Best directions are North, East, or North-East. Ensure a clear pathway and a slightly raised threshold.' },
        { title: 'Master Bedroom', content: 'South-West zone brings stability. Sleep with head towards South or East. Avoid mirrors facing the bed.' },
        { title: 'Kitchen', content: 'South-East (Agni zone). Cook facing East. Keep water sink and fire stove apart.' },
        { title: 'Pooja Room', content: 'North-East zone. Face East or North while praying. Avoid placing it under staircases or near toilets.' }
      ]
    }
  ],
  numerology: [
    {
      id: 'core-numbers',
      title: 'Core Numbers',
      sections: [
        { title: 'Life Path Number', content: 'Derived from the sum of your full Date of Birth. It reveals your broader life purpose, innate talents, and the path you are destined to walk.' },
        { title: 'Destiny Number', content: 'Derived from the sum of your full birth name using Chaldean or Pythagorean alphabetic values. It shows your karmic mission and how others perceive you.' },
        { title: 'Soul Urge Number', content: 'Sum of the vowels in your name. Reveals your inner motivations and secret desires.' }
      ]
    },
    {
      id: 'loshu-grid',
      title: 'Lo Shu Grid Analysis',
      sections: [
        { title: 'The 3x3 Magic Square', content: 'A grid where numbers 1-9 are placed. The sum of any row, column, or diagonal equals 15. The presence or absence of numbers in your DOB creates specific energy planes.' },
        { title: 'Planes of Expression', content: 'Mental (4-9-2), Physical (8-1-6), Emotional (3-5-7). Practical Line (4-5-6). Willpower (9-5-1).' }
      ]
    }
  ],
  palmistry: [
    {
      id: 'major-lines',
      title: 'Major Lines & Mounts',
      sections: [
        { title: 'Life Line', content: 'Indicates vitality, health events, and major life changes. Contrary to popular belief, length does not equate to lifespan.' },
        { title: 'Head & Heart Lines', content: 'Head Line shows intellectual capacity and decision-making style. Heart Line reveals emotional nature and relationship patterns.' },
        { title: 'The Mounts', content: 'Fleshy pads at the base of fingers. Jupiter (Index): Ambition/Leadership. Saturn (Middle): Wisdom/Fate. Apollo (Ring): Art/Fame. Mercury (Little): Business/Communication.' }
      ]
    }
  ],
  alchemy: [
    {
      id: 'gemstones',
      title: 'Jyotish Gemstone Therapy',
      sections: [
        { title: 'The Navaratna', content: 'The nine precious gems corresponding to the Navagraha. Ruby (Sun), Pearl (Moon), Red Coral (Mars), Emerald (Mercury), Yellow Sapphire (Jupiter), Diamond (Venus), Blue Sapphire (Saturn), Hessonite (Rahu), Cat\'s Eye (Ketu).' },
        { title: 'Wearing Rules', content: 'Gems must be prescribed based on the natal chart (typically strengthening benefic lagna, 5th, or 9th lords). Wrong stones can cause severe harm. Proper consecration (Prana Pratishtha) is required.' }
      ]
    }
  ]
};
