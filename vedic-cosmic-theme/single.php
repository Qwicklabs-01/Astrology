<?php
/**
 * The template for displaying all single posts
 */

get_header(); ?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <!-- Post Header -->
    <header class="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <?php if ( has_post_thumbnail() ) : ?>
            <div class="absolute inset-0 z-0">
                <?php the_post_thumbnail('full', ['class' => 'w-full h-full object-cover opacity-30']); ?>
                <div class="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary"></div>
            </div>
        <?php endif; ?>

        <div class="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <div class="mb-6 flex items-center justify-center gap-4 text-[10px] font-accent tracking-[0.3em] text-gold uppercase">
                <span><?php echo get_the_date(); ?></span>
                <span class="w-1 h-1 bg-gold/50 rounded-full"></span>
                <span><?php the_category(', '); ?></span>
            </div>
            <h1 class="font-hero text-5xl md:text-7xl text-cream text-glow mb-8 leading-tight"><?php the_title(); ?></h1>
            <div class="flex items-center justify-center gap-4 font-sub italic text-cream/60">
                <span>By <?php the_author(); ?></span>
            </div>
        </div>
    </header>

    <!-- Post Content -->
    <div class="py-20 bg-primary">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="font-body text-xl text-cream/80 leading-relaxed prose prose-invert prose-gold max-w-none">
                <?php
                while ( have_posts() ) :
                    the_post();
                    the_content();
                endwhile;
                ?>
            </div>

            <!-- Tags & Share -->
            <div class="mt-20 pt-10 border-t border-gold/10 flex flex-wrap gap-4">
                <?php the_tags('<span class="font-accent text-[10px] tracking-widest text-gold/40 uppercase mr-4">Tagged In:</span> ', ' '); ?>
            </div>

            <!-- Post Navigation -->
            <nav class="mt-20 py-10 border-y border-gold/10 flex justify-between items-center gap-8">
                <div class="w-1/2">
                    <?php previous_post_link('%link', '<span class="font-accent text-[10px] tracking-widest text-gold/60 uppercase block mb-2">Previous Article</span> <span class="font-hero text-lg text-cream hover:text-gold transition-colors">%title</span>'); ?>
                </div>
                <div class="w-1/2 text-right">
                    <?php next_post_link('%link', '<span class="font-accent text-[10px] tracking-widest text-gold/60 uppercase block mb-2">Next Article</span> <span class="font-hero text-lg text-cream hover:text-gold transition-colors">%title</span>'); ?>
                </div>
            </nav>
        </div>
    </div>
</article>

<?php get_footer(); ?>
