<?php
/**
 * Template Name: Birth Chart Calculator
 * Description: Vedic Birth Chart (Kundali) powered by React
 */
get_header(); ?>

<div class="min-h-screen bg-primary relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none z-0">
        <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ruby/5 blur-[120px] rounded-full"></div>
    </div>

    <div class="relative z-10 pt-8 pb-4 text-center border-b border-gold/10">
        <div class="max-w-4xl mx-auto px-4">
            <p class="font-accent text-xs tracking-[0.3em] text-gold/70 uppercase mb-3">South Indian Kundali</p>
            <h1 class="font-hero text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-4">
                Birth Chart Calculator
            </h1>
            <p class="font-body text-cream/60 italic max-w-xl mx-auto">
                Generate your complete Vedic birth chart with planetary positions, nakshatra, and Vimshottari Dasha timeline.
            </p>
        </div>
    </div>

    <div id="birthchart-root" class="relative z-10">
        <div class="flex items-center justify-center py-40">
            <div class="text-center">
                <div class="w-16 h-16 border-4 border-gold/20 border-t-gold rounded-full animate-spin mb-6 mx-auto"></div>
                <p class="font-accent text-xs tracking-[0.2em] text-gold uppercase animate-pulse">Reading the Stars...</p>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>
