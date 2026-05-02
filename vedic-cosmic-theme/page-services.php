<?php
/**
 * Template Name: Services Page
 */

get_header(); ?>

<div class="pt-24 pb-20 min-h-screen bg-primary">
    <!-- Header Banner -->
    <div class="relative py-20 mb-16 overflow-hidden border-b border-gold/10">
        <div class="absolute inset-0 bg-gradient-to-b from-secondary/80 to-primary z-0"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.15),_transparent_70%)] blur-2xl"></div>
        
        <div class="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 class="font-hero text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-6">
                Our Sacred Services
            </h1>
            <p class="font-body text-xl text-cream/70 italic">
                "Mapping the microcosm to the macrocosm."
            </p>
        </div>
    </div>

    <!-- Services List -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <?php
        $services = [
            [
                'id' => 'astrology',
                'title' => 'Vedic Astrology',
                'icon' => '☉',
                'desc' => 'A profound exploration of your soul’s blueprint using the ancient science of Jyotish. Decode the karmic patterns mapped out by the Navagraha (9 planets) at your exact moment of birth.',
                'sub' => ['Natal Chart (Janam Kundali) Analysis', 'Mahadasha & Antardasha Predictions', 'Career & Finance 5-Year Forecast', 'Remedial Astrology (Upayas)']
            ],
            [
                'id' => 'vastu',
                'title' => 'Vastu Shastra',
                'icon' => '🏠',
                'desc' => 'Harmonize your living and working spaces with the cosmic elements. Correct energetic imbalances in your property without demolition to unlock health, wealth, and peace.',
                'sub' => ['Home & Residential Vastu', 'Office & Commercial Space Vastu', 'Vastu Correction without Demolition', 'Geopathic Stress Analysis']
            ],
            [
                'id' => 'numerology',
                'title' => 'Numerology',
                'icon' => '🔢',
                'desc' => 'Uncover the vibrational frequencies embedded in your name and birthdate using Chaldean and Pythagorean systems to ensure your name is a magnet for success.',
                'sub' => ['Life Path & Destiny Number Analysis', 'Name Correction Numerology', 'Business Name Vibration Check', 'Personal Year Forecast (Lo Shu Grid)']
            ]
        ];

        foreach ($services as $service) : ?>
            <div id="<?php echo esc_attr($service['id']); ?>" class="flex flex-col lg:flex-row gap-12 items-start">
                <div class="w-full lg:w-1/3 flex flex-col justify-center items-center p-12 glass-card rounded-2xl border border-gold/20 relative overflow-hidden group">
                    <div class="text-8xl mb-6 opacity-80 group-hover:scale-110 transition-all duration-700"><?php echo $service['icon']; ?></div>
                    <h2 class="font-hero text-3xl text-gold text-center relative z-10"><?php echo $service['title']; ?></h2>
                </div>

                <div class="w-full lg:w-2/3">
                    <p class="font-body text-cream/80 text-lg leading-relaxed mb-8"><?php echo $service['desc']; ?></p>
                    <h4 class="font-accent text-sm tracking-[0.2em] text-gold uppercase mb-4 border-b border-gold/20 pb-2 inline-block">Areas of Focus</h4>
                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <?php foreach ($service['sub'] as $sub) : ?>
                            <li class="flex items-start text-cream/70 font-body text-sm">
                                <span class="text-gold mr-3 opacity-60">✦</span><?php echo $sub; ?>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>

<?php get_footer(); ?>
