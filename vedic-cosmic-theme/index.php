<?php
/**
 * The main template file (Fallback and Blog)
 */

get_header(); ?>

<div class="pt-32 pb-20 min-h-screen bg-primary">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="mb-16 text-center">
            <h1 class="font-hero text-5xl md:text-7xl text-gold mb-6">Cosmic Insights</h1>
            <p class="font-sub text-xl text-cream/60 italic">Ancient wisdom, modern perspectives.</p>
            <div class="w-32 h-px bg-gold/30 mx-auto mt-8"></div>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <?php if ( have_posts() ) : ?>
                <?php while ( have_posts() ) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('glass-card p-8 flex flex-col border border-gold/5 group'); ?>>
                        <?php if ( has_post_thumbnail() ) : ?>
                            <div class="mb-6 overflow-hidden">
                                <?php the_post_thumbnail('medium_large', ['class' => 'w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500']); ?>
                            </div>
                        <?php endif; ?>

                        <div class="mb-4 flex items-center gap-4 text-[10px] font-accent tracking-widest text-gold/60 uppercase">
                            <span><?php echo get_the_date(); ?></span>
                            <span class="w-1 h-1 bg-gold/30 rounded-full"></span>
                            <span><?php the_category(', '); ?></span>
                        </div>

                        <h2 class="font-hero text-2xl text-cream mb-4 group-hover:text-gold transition-colors">
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h2>

                        <div class="font-body text-cream/60 mb-8 line-clamp-3">
                            <?php the_excerpt(); ?>
                        </div>

                        <a href="<?php the_permalink(); ?>" class="mt-auto font-accent text-[10px] tracking-widest text-gold uppercase flex items-center group-hover:text-gold-light transition-colors">
                            Read Article <span class="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                        </a>
                    </article>
                <?php endwhile; ?>
            <?php else : ?>
                <div class="col-span-full text-center py-20">
                    <p class="font-sub text-2xl text-cream/40 italic">The stars have not yet written any stories here...</p>
                </div>
            <?php endif; ?>
        </div>

        <div class="mt-20 flex justify-center gap-4">
            <?php the_posts_pagination([
                'prev_text' => '<span class="text-gold">← Previous</span>',
                'next_text' => '<span class="text-gold">Next →</span>',
                'class' => 'font-accent text-sm tracking-widest uppercase text-gold'
            ]); ?>
        </div>
    </div>
</div>

<?php get_footer(); ?>
