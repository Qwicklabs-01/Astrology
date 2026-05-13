<?php
/**
 * The template for displaying 404 pages (not found)
 */

get_header(); ?>

<div class="flex-grow flex items-center justify-center relative overflow-hidden py-20">
    <!-- Background star geometry -->
    <div class="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 100 100" class="w-full max-w-3xl animate-spin-slow">
            <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="none" stroke="hsl(var(--color-gold, 43 60% 54%))" stroke-width="0.3" />
            <circle cx="50" cy="50" r="48" fill="none" stroke="hsl(var(--color-gold, 43 60% 54%))" stroke-width="0.2" />
        </svg>
    </div>

    <div class="relative z-10 text-center px-4">
        <p class="font-accent text-[10px] tracking-[0.5em] text-gold uppercase mb-4">Error 404</p>
        <h1 class="font-hero text-[10rem] md:text-[14rem] text-gold leading-none mb-2 opacity-40">404</h1>
        <h2 class="font-hero text-3xl md:text-5xl text-cream mb-8 uppercase tracking-widest">
            Celestial Misalignment
        </h2>
        <p class="font-sub text-lg md:text-xl text-cream/60 italic mb-12 max-w-md mx-auto leading-relaxed">
            &ldquo;The path you seek is currently obscured by cosmic shadows.
            Let us guide you back to the light.&rdquo;
        </p>
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>"
           class="inline-block px-10 py-4 bg-gold text-primary font-accent font-bold uppercase tracking-widest text-xs hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-all duration-300">
            Return to Center
        </a>
    </div>
</div>

<?php get_footer(); ?>
