<?php
/**
 * Template Name: Instant Oracle
 * Description: Vedic Instant Answers Oracle powered by React
 */
get_header(); ?>

<div class="min-h-screen bg-primary relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none z-0">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/3 blur-[200px] rounded-full"></div>
    </div>

    <div class="relative z-10 pt-8 pb-4 text-center border-b border-gold/10">
        <div class="max-w-4xl mx-auto px-4">
            <p class="font-accent text-xs tracking-[0.3em] text-gold/70 uppercase mb-3">The All-Knowing Oracle</p>
            <h1 class="font-hero text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-4">
                Instant Oracle
            </h1>
            <p class="font-body text-cream/60 italic max-w-xl mx-auto">
                Ask the cosmos anything. Receive divine guidance through the ancient art of Vedic oracle reading.
            </p>
        </div>
    </div>

    <div id="oracle-root" class="relative z-10">
        <div class="flex items-center justify-center py-40">
            <div class="text-center">
                <div class="w-16 h-16 border-4 border-gold/20 border-t-gold rounded-full animate-spin mb-6 mx-auto"></div>
                <p class="font-accent text-xs tracking-[0.2em] text-gold uppercase animate-pulse">Opening the Portal...</p>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>
