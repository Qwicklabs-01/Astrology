<?php
/**
 * The template for displaying all pages
 */

get_header(); ?>

<div class="pt-32 pb-20 min-h-screen bg-primary">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <?php
        while ( have_posts() ) :
            the_post();
            ?>
            <header class="mb-12 text-center">
                <h1 class="font-hero text-4xl md:text-6xl text-gold mb-6"><?php the_title(); ?></h1>
                <div class="w-24 h-px bg-gold/30 mx-auto"></div>
            </header>

            <div class="font-body text-lg text-cream/80 leading-relaxed prose prose-invert max-w-none">
                <?php the_content(); ?>
            </div>
            <?php
        endwhile;
        ?>
    </div>
</div>

<?php get_footer(); ?>
