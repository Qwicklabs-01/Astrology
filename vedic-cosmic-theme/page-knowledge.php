<?php
/**
 * Template Name: Knowledge Hub
 * Description: The Vedic Knowledge Base landing page
 */
get_header(); ?>

<div class="min-h-screen bg-primary pb-20">

    <!-- Header Banner -->
    <div class="relative py-20 mb-16 overflow-hidden border-b border-gold/10">
        <div class="absolute inset-0 bg-gradient-to-b from-secondary/80 to-primary z-0"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full"
             style="background: radial-gradient(ellipse at center, rgba(201,168,76,0.15), transparent 70%); filter: blur(2rem);"></div>

        <div class="relative z-10 text-center max-w-4xl mx-auto px-4">
            <p class="font-accent text-xs tracking-[0.3em] text-gold/80 mb-4 uppercase">The Cosmic Encyclopedia</p>
            <h1 class="font-hero text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-6">
                Knowledge Hub
            </h1>
            <p class="font-body text-xl text-cream/70 italic max-w-2xl mx-auto">
                "To know the stars is to know the self." Dive into the profound wisdom of the ancient Rishis.
            </p>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Knowledge Categories (static — to be extended with CPTs or ACF) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php
            $knowledge_categories = array(
                array(
                    'icon'        => '🌌',
                    'title'       => 'Foundations of Jyotish',
                    'description' => 'The birth chart, houses, planets, signs, and the nine-fold Navamsa. The essential building blocks of Vedic astrology.',
                    'slug'        => 'foundations',
                ),
                array(
                    'icon'        => '🪐',
                    'title'       => 'The Nine Planets (Navagrahas)',
                    'description' => 'In-depth profiles of each graha — their qualities, significations, exaltations, debilitations, and their role in your chart.',
                    'slug'        => 'planets',
                ),
                array(
                    'icon'        => '✨',
                    'title'       => '27 Nakshatras',
                    'description' => 'The lunar mansions form the heart of Vedic astrology. Understand each nakshatra\'s deity, symbol, and influence on the mind.',
                    'slug'        => 'nakshatras',
                ),
                array(
                    'icon'        => '🏠',
                    'title'       => 'Vastu Shastra',
                    'description' => 'The Vedic science of sacred space. Learn directional energies, zone corrections, and the five-element balance.',
                    'slug'        => 'vastu',
                ),
                array(
                    'icon'        => '🔢',
                    'title'       => 'Numerology Systems',
                    'description' => 'Compare Chaldean, Pythagorean, and Vedic number science. Understand how vibrations of numbers shape your destiny.',
                    'slug'        => 'numerology',
                ),
                array(
                    'icon'        => '🙏',
                    'title'       => 'Remedial Astrology',
                    'description' => 'Mantras, gems, yantras, and rituals for planetary pacification. The art of karma correction through ancient Vedic remedies.',
                    'slug'        => 'remedies',
                ),
            );
            foreach ( $knowledge_categories as $index => $cat ) :
            ?>
            <a href="<?php echo esc_url( home_url( '/knowledge/' . $cat['slug'] ) ); ?>"
               class="block glass-card p-10 rounded-2xl border border-gold/20 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(201,168,76,0.15)]">
                <div class="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="text-6xl mb-6 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"><?php echo $cat['icon']; ?></div>
                <h2 class="font-hero text-2xl text-cream mb-4 group-hover:text-gold-light transition-colors relative z-10"><?php echo esc_html( $cat['title'] ); ?></h2>
                <p class="font-body text-cream/60 leading-relaxed relative z-10 mb-8"><?php echo esc_html( $cat['description'] ); ?></p>
                <div class="font-accent text-xs tracking-[0.2em] text-gold uppercase flex items-center group-hover:text-gold-light transition-colors relative z-10">
                    Enter Library <span class="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </div>
            </a>
            <?php endforeach; ?>
        </div>

        <!-- Philosophy Banner -->
        <div class="mt-32 p-12 text-center border-t border-gold/10">
            <p class="font-hero text-4xl text-gold mb-4" style="font-family: 'Noto Serif Devanagari', serif;">तमसो मा ज्योतिर्गमय</p>
            <p class="font-body text-2xl text-cream italic">"Tamaso Ma Jyotir Gamaya"</p>
            <p class="font-accent text-xs tracking-widest text-gold/60 uppercase mt-4">Lead us from darkness to light</p>
        </div>
    </div>
</div>

<?php get_footer(); ?>
