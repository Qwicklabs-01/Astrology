<?php
/**
 * Template Name: Daily Panchang
 * Description: Vedic Daily Almanac powered by React
 */
get_header(); ?>

<div class="min-h-screen bg-primary relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none z-0">
        <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-celestial/10 blur-[150px] rounded-full"></div>
    </div>

    <div class="relative z-10 pt-8 pb-4 text-center border-b border-gold/10">
        <div class="max-w-4xl mx-auto px-4">
            <p class="font-accent text-xs tracking-[0.3em] text-gold/70 uppercase mb-3">Vedic Daily Almanac</p>
            <h1 class="font-hero text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-4">
                Daily Panchang
            </h1>
            <p class="font-body text-cream/60 italic max-w-xl mx-auto">
                The five limbs of time: Tithi, Vara, Nakshatra, Yoga, and Karana — your daily cosmic almanac for auspicious living.
            </p>
        </div>
    </div>

    <div id="panchang-root" class="relative z-10">
        <div class="flex items-center justify-center py-40">
            <div class="text-center">
                <div class="w-16 h-16 border-4 border-gold/20 border-t-gold rounded-full animate-spin mb-6 mx-auto"></div>
                <p class="font-accent text-xs tracking-[0.2em] text-gold uppercase animate-pulse">Consulting the Almanac...</p>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>
