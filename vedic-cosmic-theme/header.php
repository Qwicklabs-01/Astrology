<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
    
    <style>
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-down { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
    </style>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site flex flex-col min-h-screen">
    <header id="masthead" class="site-header fixed top-0 w-full z-[100] transition-all duration-500">
        <!-- Top Bar -->
        <div class="bg-primary/90 backdrop-blur-sm text-gold py-1.5 text-[10px] font-accent tracking-[0.4em] border-b border-gold/10 text-center uppercase">
            ✦ Ancient Vedic Wisdom for the Modern Soul ✦
        </div>

        <!-- Main Nav -->
        <nav class="bg-secondary/40 backdrop-blur-xl border-b border-gold/5 py-4 transition-all hover:bg-secondary/60">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center">
                    <!-- Brand -->
                    <div class="flex-shrink-0">
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex flex-col items-center group">
                            <span class="font-hero text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold group-hover:to-copper transition-all duration-500 text-glow">
                                <?php bloginfo( 'name' ); ?>
                            </span>
                            <span class="font-accent text-[8px] tracking-[0.5em] text-cream/40 uppercase -mt-1 group-hover:text-gold/60 transition-colors">
                                Jyotish · Vastu · Numerology
                            </span>
                        </a>
                    </div>

                    <!-- Desktop Navigation -->
                    <div class="hidden lg:flex items-center space-x-12">
                        <?php
                        wp_nav_menu( array(
                            'theme_location' => 'primary',
                            'menu_class'     => 'flex items-center space-x-10 list-none m-0 p-0',
                            'container'      => false,
                            'fallback_cb'    => false,
                            'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
                            'walker'         => new Vedic_Cosmic_Walker(),
                        ) );
                        ?>
                        <div class="h-8 w-px bg-gold/20 mx-2"></div>
                        <a href="<?php echo esc_url( home_url( '/forecast' ) ); ?>" class="relative group py-3 px-8 overflow-hidden border border-gold/30">
                            <div class="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span class="relative z-10 font-accent text-xs tracking-widest text-gold group-hover:text-primary transition-colors uppercase font-bold">Free Reading</span>
                        </a>
                    </div>

                    <!-- Mobile Toggle -->
                    <div class="lg:hidden flex items-center">
                        <button id="mobile-menu-toggle" class="text-gold p-2 hover:bg-white/5 rounded-full transition-colors">
                            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8h16M4 16h16"></path></svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu Overlay -->
            <div id="mobile-menu" class="fixed inset-0 z-[110] bg-primary/98 backdrop-blur-2xl flex-col items-center justify-center space-y-8 animate-fade-in p-10" style="display:none;">
                <button id="mobile-menu-close" class="absolute top-10 right-10 text-gold p-2">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                <div class="text-center mb-12">
                    <span class="font-hero text-4xl text-gold block mb-2"><?php bloginfo( 'name' ); ?></span>
                    <div class="w-12 h-px bg-gold/50 mx-auto"></div>
                </div>

                <?php
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'menu_class'     => 'flex flex-col space-y-6 list-none m-0 p-0 text-center',
                    'container'      => false,
                    'fallback_cb'    => false,
                    'walker'         => new Vedic_Cosmic_Walker(),
                ) );
                ?>
                
                <div class="pt-8">
                    <a href="<?php echo esc_url( home_url( '/forecast' ) ); ?>" class="block w-64 py-5 bg-gold text-primary font-accent font-bold uppercase tracking-widest text-xs">
                        Start Free Forecast
                    </a>
                </div>
            </div>
        </nav>
    </header>

    <main id="primary" class="site-main flex-grow flex flex-col pt-24 md:pt-28">

    <script>
        // Header Scroll Effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header nav');
            if (!header) return;
            if (window.scrollY > 50) {
                header.classList.add('py-2', 'bg-secondary/90');
                header.classList.remove('py-4', 'bg-secondary/40');
            } else {
                header.classList.add('py-4', 'bg-secondary/40');
                header.classList.remove('py-2', 'bg-secondary/90');
            }
        });

        // Mobile Menu — use style.display to avoid Tailwind hidden/flex conflict
        const toggle = document.getElementById('mobile-menu-toggle');
        const closeBtn = document.getElementById('mobile-menu-close');
        const menu = document.getElementById('mobile-menu');

        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                menu.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        }

        if (closeBtn && menu) {
            closeBtn.addEventListener('click', () => {
                menu.style.display = 'none';
                document.body.style.overflow = '';
            });
        }
    </script>
