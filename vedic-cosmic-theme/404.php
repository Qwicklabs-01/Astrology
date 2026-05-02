<?php
/**
 * The template for displaying 404 pages (not found)
 */

get_header(); ?>

<div class="min-h-screen bg-primary flex flex-col items-center justify-center text-center px-4">
    <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" class="w-full h-full animate-[spin_120s_linear_infinite]">
            <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="none" stroke="hsl(var(--color-gold))" stroke-width="0.5" />
        </svg>
    </div>

    <div class="relative z-10">
        <h1 class="font-hero text-9xl text-gold mb-4 opacity-50">404</h1>
        <h2 class="font-hero text-4xl text-cream mb-8">Celestial Disalignment</h2>
        <p class="font-sub text-xl text-cream/60 italic mb-12 max-w-md mx-auto">
            "The path you seek is currently obscured by cosmic shadows. Let us guide you back to the light."
        </p>
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="px-10 py-4 bg-gold text-primary font-accent font-bold uppercase tracking-widest text-xs hover:bg-gold-light transition-all">
            Return to Center
        </a>
    </div>
</div>

<?php get_footer(); ?>
