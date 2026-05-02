<?php
/**
 * The template for displaying the footer
 */
?>
    </main><!-- #primary -->

    <footer id="colophon" class="site-footer bg-[#080A0F] border-t border-gold/10 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div class="md:col-span-1">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex flex-col mb-6">
                        <span class="font-hero text-2xl text-gold"><?php bloginfo( 'name' ); ?></span>
                        <span class="font-accent text-[10px] tracking-widest text-cream/50 uppercase">Ancient Wisdom for Modern Life</span>
                    </a>
                    <p class="font-body text-cream/40 text-sm leading-relaxed mb-6">
                        Bridging the profound sciences of Jyotish, Vastu, and Numerology to help you navigate your soul's journey.
                    </p>
                </div>

                <div>
                    <h4 class="font-hero text-lg text-gold mb-6 uppercase tracking-wider">Quick Links</h4>
                    <ul class="space-y-3 font-body text-cream/60 text-sm">
                        <li><a href="<?php echo esc_url( home_url( '/forecast' ) ); ?>" class="hover:text-gold transition-colors">Forecast Tool</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/services' ) ); ?>" class="hover:text-gold transition-colors">All Services</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/knowledge' ) ); ?>" class="hover:text-gold transition-colors">Knowledge Hub</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/about' ) ); ?>" class="hover:text-gold transition-colors">Our Story</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-hero text-lg text-gold mb-6 uppercase tracking-wider">Services</h4>
                    <ul class="space-y-3 font-body text-cream/60 text-sm">
                        <li><a href="<?php echo esc_url( home_url( '/services#astrology' ) ); ?>" class="hover:text-gold transition-colors">Vedic Astrology</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/services#vastu' ) ); ?>" class="hover:text-gold transition-colors">Vastu Shastra</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/services#numerology' ) ); ?>" class="hover:text-gold transition-colors">Numerology</a></li>
                        <li><a href="<?php echo esc_url( home_url( '/services#alchemy' ) ); ?>" class="hover:text-gold transition-colors">Alchemy & Gems</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-hero text-lg text-gold mb-6 uppercase tracking-wider">Contact</h4>
                    <p class="font-body text-cream/40 text-sm mb-4 italic">
                        "Yatha Pinde Tatha Brahmande"
                    </p>
                    <a href="mailto:contact@vediccosmic.com" class="font-accent text-xs tracking-widest text-gold hover:text-gold-light transition-colors block mb-2">
                        CONTACT@VEDICCOSMIC.COM
                    </a>
                </div>
            </div>

            <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-accent tracking-widest text-cream/30 uppercase">
                <p>&copy; <?php echo date('Y'); ?> Vedic Cosmic. All Rights Reserved.</p>
                <div class="flex gap-6">
                    <a href="#" class="hover:text-gold transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-gold transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
