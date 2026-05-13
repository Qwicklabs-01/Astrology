<?php
/**
 * Template Name: Contact Page
 */

get_header(); ?>

<div class="pt-24 pb-20 min-h-screen bg-primary">
    <!-- Header Banner -->
    <div class="relative py-20 mb-16 overflow-hidden border-b border-gold/10">
        <div class="absolute inset-0 bg-gradient-to-b from-secondary/80 to-primary z-0"></div>
        <div class="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 class="font-hero text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-6">
                Connect with the Stars
            </h1>
            <p class="font-body text-xl text-cream/70 italic">
                Seek guidance for your life's most profound questions.
            </p>
        </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <!-- Contact Info -->
            <div class="space-y-12">
                <div>
                    <h2 class="font-hero text-3xl text-gold mb-6">Contact Information</h2>
                    <p class="font-body text-cream/60 leading-relaxed text-lg mb-10">
                        Whether you're looking for a personal horoscope, Vastu consultation for your home, or want to learn about our courses, we are here to guide you.
                    </p>
                </div>

                <div class="space-y-8">
                    <div class="flex items-start gap-6">
                        <div class="text-3xl text-gold opacity-60">📍</div>
                        <div>
                            <h4 class="font-accent text-sm tracking-widest text-gold uppercase mb-2">Our Ashram</h4>
                            <p class="text-cream/80 font-body">123 Cosmic Way, Spiritual Valley<br/>Varanasi, UP, India</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-6">
                        <div class="text-3xl text-gold opacity-60">✉️</div>
                        <div>
                            <h4 class="font-accent text-sm tracking-widest text-gold uppercase mb-2">Email Us</h4>
                            <p class="text-cream/80 font-body">consult@vediccosmic.com<br/>support@vediccosmic.com</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-6">
                        <div class="text-3xl text-gold opacity-60">📞</div>
                        <div>
                            <h4 class="font-accent text-sm tracking-widest text-gold uppercase mb-2">Call/WhatsApp</h4>
                            <p class="text-cream/80 font-body">+91 98765 43210</p>
                        </div>
                    </div>
                </div>

                <!-- Social Links -->
                <div class="pt-10 border-t border-gold/10">
                    <h4 class="font-accent text-[10px] tracking-[0.4em] text-gold uppercase mb-6">Follow the Journey</h4>
                    <div class="flex gap-6">
                        <a href="#" class="w-12 h-12 flex items-center justify-center border border-gold/20 text-gold hover:bg-gold hover:text-primary transition-all">FB</a>
                        <a href="#" class="w-12 h-12 flex items-center justify-center border border-gold/20 text-gold hover:bg-gold hover:text-primary transition-all">IG</a>
                        <a href="#" class="w-12 h-12 flex items-center justify-center border border-gold/20 text-gold hover:bg-gold hover:text-primary transition-all">YT</a>
                    </div>
                </div>
            </div>

            <div class="glass-card p-10 md:p-16 border border-gold/10 rounded-2xl">
                <h3 class="font-hero text-2xl text-cream mb-8">Send a Message</h3>

                <?php if ( isset($_GET['sent']) && $_GET['sent'] === '1' ) : ?>
                    <div class="mb-6 p-4 border border-gold/30 bg-gold/10 text-gold font-accent text-xs tracking-widest uppercase text-center">
                        ✦ Your message has been sent to the cosmos. We will respond soon. ✦
                    </div>
                <?php endif; ?>

                <form method="post" action="<?php echo esc_url( admin_url('admin-post.php') ); ?>" class="space-y-6">
                    <?php wp_nonce_field( 'vedic_contact_form', 'vedic_contact_nonce' ); ?>
                    <input type="hidden" name="action" value="vedic_contact_submit">
                    <!-- Honeypot anti-spam field -->
                    <input type="text" name="website" style="display:none;" tabindex="-1" autocomplete="off">

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label for="contact_name" class="font-accent text-[10px] tracking-widest text-gold uppercase">Full Name</label>
                            <input id="contact_name" type="text" name="contact_name" required
                                   class="w-full bg-primary/50 border border-gold/20 p-4 text-cream focus:border-gold outline-none transition-all"
                                   placeholder="Your full name">
                        </div>
                        <div class="space-y-2">
                            <label for="contact_email" class="font-accent text-[10px] tracking-widest text-gold uppercase">Email Address</label>
                            <input id="contact_email" type="email" name="contact_email" required
                                   class="w-full bg-primary/50 border border-gold/20 p-4 text-cream focus:border-gold outline-none transition-all"
                                   placeholder="your@email.com">
                        </div>
                    </div>
                    <div class="space-y-2">
                        <label for="contact_subject" class="font-accent text-[10px] tracking-widest text-gold uppercase">Subject</label>
                        <select id="contact_subject" name="contact_subject"
                                class="w-full bg-primary/50 border border-gold/20 p-4 text-cream focus:border-gold outline-none transition-all">
                            <option value="astrology">Astrology Consultation</option>
                            <option value="vastu">Vastu Correction</option>
                            <option value="numerology">Numerology Analysis</option>
                            <option value="general">General Inquiry</option>
                        </select>
                    </div>
                    <div class="space-y-2">
                        <label for="contact_message" class="font-accent text-[10px] tracking-widest text-gold uppercase">Message</label>
                        <textarea id="contact_message" name="contact_message" rows="5" required
                                  class="w-full bg-primary/50 border border-gold/20 p-4 text-cream focus:border-gold outline-none transition-all"
                                  placeholder="Share your question with the cosmos..."></textarea>
                    </div>
                    <button type="submit" class="w-full py-5 bg-gold text-primary font-accent font-bold uppercase tracking-[0.2em] text-xs hover:bg-gold-light transition-all">
                        Send to Oracle
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>
