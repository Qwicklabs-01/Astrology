<?php
/**
 * Template Name: About Page
 */

get_header(); ?>

<div class="pt-24 pb-20 min-h-screen bg-primary overflow-hidden">
    <!-- Hero Section -->
    <section class="relative py-32 flex flex-col items-center text-center">
        <div class="absolute inset-0 z-0">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px]"></div>
        </div>
        <div class="relative z-10 max-w-4xl px-4">
            <h1 class="font-hero text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-8">
                Our Sacred Journey
            </h1>
            <p class="font-sub text-2xl text-cream/70 italic leading-relaxed">
                "Preserving the ancient light of Bharat for a modern world seeking clarity and purpose."
            </p>
        </div>
    </section>

    <!-- Story Section -->
    <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div class="relative group">
                <div class="absolute inset-0 border border-gold/20 translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
                <img src="https://images.unsplash.com/photo-1533618561173-7da05d5f190a?auto=format&fit=crop&q=80" alt="Vedic Scholar" class="relative z-10 w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700">
            </div>
            <div class="space-y-8">
                <h2 class="font-hero text-4xl text-gold mb-6">The Wisdom of the Sages</h2>
                <p class="font-body text-xl text-cream/80 leading-relaxed">
                    Vedic Cosmic was founded with a single mission: to demystify the profound sciences of Vedic Astrology (Jyotish) and Vastu Shastra, making them accessible to the modern individual without losing their sacred essence.
                </p>
                <p class="font-body text-lg text-cream/60 leading-relaxed">
                    Our lineage dates back generations, carrying forward the mathematical precision and spiritual depth of the rishis. We believe that your birth chart is not a prison, but a map of possibilities—a tool for empowerment, not a reason for fear.
                </p>
                <div class="grid grid-cols-2 gap-8 pt-8">
                    <div>
                        <span class="font-hero text-4xl text-gold block mb-2">25+</span>
                        <span class="font-accent text-[10px] tracking-widest text-gold/60 uppercase">Years Experience</span>
                    </div>
                    <div>
                        <span class="font-hero text-4xl text-gold block mb-2">10k+</span>
                        <span class="font-accent text-[10px] tracking-widest text-gold/60 uppercase">Charts Read</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Philosophy Section -->
    <section class="py-32 bg-secondary/30 border-y border-gold/10">
        <div class="max-w-4xl mx-auto px-4 text-center">
            <h2 class="font-hero text-5xl text-cream mb-12">Our Core Principles</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div class="space-y-4">
                    <div class="text-3xl text-gold">👁️</div>
                    <h4 class="font-hero text-xl text-gold">Clarity</h4>
                    <p class="font-body text-cream/60">Providing clear, actionable insights for life's biggest transitions.</p>
                </div>
                <div class="space-y-4">
                    <div class="text-3xl text-gold">🛡️</div>
                    <h4 class="font-hero text-xl text-gold">Privacy</h4>
                    <p class="font-body text-cream/60">Your spiritual journey and data are sacred and strictly confidential.</p>
                </div>
                <div class="space-y-4">
                    <div class="text-3xl text-gold">⚖️</div>
                    <h4 class="font-hero text-xl text-gold">Ethics</h4>
                    <p class="font-body text-cream/60">No fear-based predictions. Only cosmic truth and helpful remedies.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Team / Lead Section -->
    <section class="py-32 max-w-5xl mx-auto px-4 text-center">
        <div class="inline-block p-1 bg-gold/20 rounded-full mb-8">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" alt="Pandit" class="w-32 h-32 rounded-full object-cover">
        </div>
        <h2 class="font-hero text-4xl text-cream mb-2">Acharya V. Sharma</h2>
        <p class="font-accent text-xs tracking-widest text-gold uppercase mb-8">Founder & Lead Astrologer</p>
        <p class="font-sub text-xl text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            "My goal is to help you align your personal vibration with the cosmic rhythm, so you can manifest the life your soul intended."
        </p>
    </section>
</div>

<?php get_footer(); ?>
