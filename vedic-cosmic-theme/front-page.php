<?php
/**
 * The front page template file
 */

get_header(); ?>

<div class="flex flex-col w-full overflow-hidden">
    <!-- HERO SECTION: THE COSMIC GATEWAY -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <!-- Deep Space Background -->
        <div class="absolute inset-0 z-0 bg-primary">
            <!-- Dynamic Starfield -->
            <div class="absolute inset-0 opacity-40">
                <?php for($i=0; $i<80; $i++): ?>
                <div class="absolute w-[<?php echo rand(1, 3); ?>px] h-[<?php echo rand(1, 3); ?>px] bg-white rounded-full star" 
                     style="top: <?php echo rand(0, 100); ?>%; left: <?php echo rand(0, 100); ?>%; animation-delay: <?php echo rand(0, 50)/10; ?>s; opacity: <?php echo rand(2, 8)/10; ?>;"></div>
                <?php endfor; ?>
            </div>
            
            <!-- Nebular Glows -->
            <div class="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[150px] animate-pulse"></div>
            <div class="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-copper/10 rounded-full blur-[150px] animate-pulse" style="animation-delay: 2s;"></div>
            
            <!-- Sacred Geometry Overlay (Mandala) -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] aspect-square opacity-[0.03] pointer-events-none">
                <svg viewBox="0 0 100 100" class="w-full h-full animate-[spin_300s_linear_infinite]">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" stroke-width="0.1" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="0.1" />
                    <?php for($i=0; $i<12; $i++): ?>
                    <g transform="rotate(<?php echo $i*30; ?> 50 50)">
                        <path d="M50 2 L55 15 L50 28 L45 15 Z" fill="none" stroke="currentColor" stroke-width="0.1" />
                        <circle cx="50" cy="10" r="1" fill="currentColor" />
                    </g>
                    <?php endfor; ?>
                </svg>
            </div>
        </div>

        <!-- Hero Content Wrapper -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div class="flex flex-col items-center text-center">
                <!-- Celestial Badge -->
                <div class="mb-8 inline-flex items-center px-4 py-1 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-md animate-[fade-in-down_1s_ease-out]">
                    <span class="w-2 h-2 bg-gold rounded-full mr-3 animate-pulse"></span>
                    <span class="font-accent text-[10px] tracking-[0.4em] text-gold uppercase">Celestial Wisdom · Since 1998</span>
                </div>

                <!-- Main Heading -->
                <h1 class="font-hero text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-gold-light via-gold to-copper mb-8 leading-[1] tracking-tight text-glow animate-[fade-in_1.5s_ease-out]">
                    Vedic<br/><span class="italic font-sub text-cream/90">Cosmic</span>
                </h1>

                <!-- Tagline -->
                <p class="max-w-2xl font-sub text-xl md:text-2xl text-cream/70 mb-12 italic leading-relaxed animate-[fade-in-up_1s_ease-out_0.5s_both]">
                    "Mapping the geometry of your destiny through the ancient lens of the Navagraha."
                </p>

                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row gap-6 mb-16 animate-[fade-in-up_1s_ease-out_0.8s_both]">
                    <a href="<?php echo esc_url( home_url( '/forecast' ) ); ?>" class="relative group px-10 py-5 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-r from-gold to-copper transition-transform duration-500 group-hover:scale-105"></div>
                        <span class="relative z-10 font-accent font-bold uppercase tracking-[0.2em] text-xs text-primary">Get Your Forecast</span>
                    </a>
                    <a href="#tools" class="px-10 py-5 border border-gold/40 hover:border-gold text-gold font-accent uppercase tracking-[0.2em] text-xs transition-all backdrop-blur-sm bg-white/5">
                        Free Tools
                    </a>
                </div>

                <!-- Scroll Indicator -->
                <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 animate-bounce">
                    <span class="text-[10px] font-accent tracking-widest text-gold uppercase mb-2">Explore</span>
                    <div class="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- THE PLANETARY BELT (Ticker) -->
    <div class="relative z-20 -mt-10 mb-20">
        <div class="bg-secondary/80 backdrop-blur-xl border-y border-gold/20 py-8 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div class="flex whitespace-nowrap animate-[marquee_50s_linear_infinite] space-x-24">
                <?php 
                $planets = [
                    ['symbol' => '☉', 'name' => 'Sun', 'rashi' => 'Aries'],
                    ['symbol' => '☽', 'name' => 'Moon', 'rashi' => 'Libra'],
                    ['symbol' => '♂', 'name' => 'Mars', 'rashi' => 'Capricorn'],
                    ['symbol' => '☿', 'name' => 'Mercury', 'rashi' => 'Pisces'],
                    ['symbol' => '♃', 'name' => 'Jupiter', 'rashi' => 'Taurus'],
                    ['symbol' => '♀', 'name' => 'Venus', 'rashi' => 'Pisces'],
                    ['symbol' => '♄', 'name' => 'Saturn', 'rashi' => 'Aquarius'],
                ];
                for($j=0; $j<3; $j++): // Duplicate for infinite scroll
                    foreach($planets as $p): ?>
                        <div class="flex items-center space-x-4">
                            <span class="text-3xl text-gold font-sanskrit"><?php echo $p['symbol']; ?></span>
                            <span class="font-hero text-sm tracking-widest text-cream/90 uppercase"><?php echo $p['name']; ?></span>
                            <span class="font-sub italic text-gold/60 text-lg">in <?php echo $p['rashi']; ?></span>
                        </div>
                    <?php endforeach; 
                endfor; ?>
            </div>
        </div>
    </div>

    <!-- THE SACRED SCIENCES (Services) -->
    <section id="services" class="py-32 bg-primary relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
                <div class="max-w-2xl">
                    <h2 class="font-hero text-5xl md:text-7xl text-gold mb-6 leading-tight">Sacred<br/><span class="text-cream">Disciplines</span></h2>
                    <p class="font-body text-xl text-cream/60 leading-relaxed italic">Decoding the cosmic frequencies that shape our material and spiritual existence.</p>
                </div>
                <div class="w-full lg:w-1/3 h-px bg-gold/20 mb-4 hidden lg:block"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <?php
                $sacred_services = [
                    [
                        'title' => 'Vedic Jyotish',
                        'desc' => 'Your karmic blueprint analyzed through the positions of the 9 planets (Navagraha).',
                        'icon' => '☸️',
                        'bg' => 'bg-gold/5'
                    ],
                    [
                        'title' => 'Vastu Vidya',
                        'desc' => 'The science of architecture and placement to harmonize your space with universal law.',
                        'icon' => '⛩️',
                        'bg' => 'bg-copper/5'
                    ],
                    [
                        'title' => 'Chaldean Numerology',
                        'desc' => 'Unlocking the vibrational power of names and dates to align with success.',
                        'icon' => '🔢',
                        'bg' => 'bg-celestial/5'
                    ]
                ];
                foreach ($sacred_services as $s): ?>
                <div class="group relative p-12 <?php echo $s['bg']; ?> border border-gold/10 hover:border-gold/40 transition-all duration-700 overflow-hidden">
                    <div class="absolute -top-10 -right-10 text-9xl opacity-[0.03] group-hover:opacity-10 transition-all duration-700 grayscale group-hover:grayscale-0">
                        <?php echo $s['icon']; ?>
                    </div>
                    <div class="relative z-10">
                        <div class="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 inline-block grayscale group-hover:grayscale-0"><?php echo $s['icon']; ?></div>
                        <h3 class="font-hero text-3xl text-cream mb-6 group-hover:text-gold transition-colors"><?php echo $s['title']; ?></h3>
                        <p class="font-body text-cream/50 text-lg leading-relaxed mb-10"><?php echo $s['desc']; ?></p>
                        <a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="inline-flex items-center text-[10px] font-accent tracking-[0.3em] text-gold uppercase group-hover:text-gold-light">
                            Deep Dive <span class="ml-4 w-12 h-px bg-gold/30 group-hover:w-20 transition-all"></span>
                        </a>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- THE DIVINE QUOTE (Philosophy) -->
    <section class="relative py-40 overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80" alt="Cosmos" class="w-full h-full object-cover opacity-10">
            <div class="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary"></div>
        </div>
        <div class="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <div class="mb-12 text-gold-light text-6xl opacity-30 font-sanskrit animate-pulse">ॐ</div>
            <h3 class="font-hero text-4xl md:text-5xl text-cream mb-8 leading-tight italic">
                "Your life is not a series of accidents, but a sequence of alignments."
            </h3>
            <p class="font-accent text-sm tracking-[0.4em] text-gold uppercase">- The Ancient Seers of Bharat -</p>
        </div>
    </section>

    <!-- THE ORACLE TOOLS (Interactives) -->
    <section id="tools" class="py-32 bg-secondary/30 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-24">
                <span class="font-accent text-[10px] tracking-[0.5em] text-gold uppercase block mb-4">Empowerment Through Insight</span>
                <h2 class="font-hero text-5xl md:text-7xl text-cream mb-8">Digital <span class="text-gold italic">Oracle</span></h2>
                <div class="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <?php
                $tools = [
                    ['name' => 'Forecast', 'slug' => 'forecast', 'desc' => '5-Year Destiny Map', 'icon' => '📅'],
                    ['name' => 'Birth Chart', 'slug' => 'birth-chart', 'desc' => 'Soul Snapshot', 'icon' => '☸️'],
                    ['name' => 'Panchang', 'slug' => 'panchang', 'desc' => 'Daily Time Quality', 'icon' => '⏳'],
                    ['name' => 'Vastu Grid', 'slug' => 'vastu-compass', 'desc' => 'Spatial Harmony', 'icon' => '🏠'],
                ];
                foreach ($tools as $t): ?>
                <a href="<?php echo esc_url( home_url( '/' . $t['slug'] ) ); ?>" class="glass-card group p-8 flex flex-col items-center text-center hover-glow border border-white/5">
                    <div class="text-4xl mb-6 grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-500"><?php echo $t['icon']; ?></div>
                    <h4 class="font-hero text-xl text-cream mb-2"><?php echo $t['name']; ?></h4>
                    <p class="font-accent text-[10px] tracking-widest text-gold opacity-60 uppercase"><?php echo $t['desc']; ?></p>
                </a>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- THE CONSULTATION CTA -->
    <section class="py-32 bg-primary">
        <div class="max-w-5xl mx-auto px-4">
            <div class="relative p-12 md:p-20 border border-gold/20 bg-secondary/50 rounded-2xl overflow-hidden group">
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(201,168,76,0.1),_transparent_50%)]"></div>
                <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div class="max-w-md">
                        <h2 class="font-hero text-4xl text-gold mb-6">Need Clarity?</h2>
                        <p class="font-body text-cream/70 text-lg leading-relaxed">Schedule a private session for an in-depth analysis of your birth chart and specific life questions.</p>
                    </div>
                    <a href="mailto:consult@vediccosmic.com" class="px-12 py-6 bg-gold text-primary font-accent font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] transition-all">
                        Book Consultation
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>
