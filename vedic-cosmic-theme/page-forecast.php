<?php
/**
 * Template Name: Vedic Forecast Tool
 * Description: 5-Year Vedic Forecast powered by React
 */
get_header(); ?>

<div class="min-h-screen bg-primary relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none z-0"
         style="background: radial-gradient(ellipse at 20% 20%, rgba(212,168,67,0.05) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(74,143,163,0.04) 0%, transparent 60%);">
    </div>

    <!-- React Mount Point — VedicForecast component mounts here -->
    <div id="forecast-root" class="relative z-10">
        <div class="flex items-center justify-center py-40">
            <div class="text-center">
                <div class="w-16 h-16 border-4 border-gold/20 border-t-gold rounded-full animate-spin mb-6 mx-auto"></div>
                <p class="font-accent text-xs tracking-[0.2em] text-gold uppercase animate-pulse">Calculating Cosmic Alignment...</p>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>
