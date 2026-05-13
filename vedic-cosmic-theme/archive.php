<?php
/**
 * The template for displaying archive pages (blog)
 */
get_header(); ?>

<div class="min-h-screen bg-primary pt-8 pb-20 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

    <!-- Header -->
    <div class="text-center mb-16 px-4">
        <p class="font-accent text-xs tracking-[0.3em] text-gold/80 mb-4 uppercase">Cosmic Insights</p>
        <h1 class="font-hero text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-copper mb-6">
            The Oracle's Journal
        </h1>
        <p class="font-body text-cream/70 max-w-2xl mx-auto italic text-lg">
            Astrological forecasts, Vastu guidelines, and spiritual practices for navigating the currents of time.
        </p>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <?php if ( have_posts() ) : ?>

        <!-- Category Filter (static for now) -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
            <a href="<?php echo get_permalink( get_option('page_for_posts') ); ?>"
               class="px-6 py-2 rounded-full font-accent text-xs tracking-widest uppercase border bg-gold border-gold text-primary shadow-[0_0_15px_rgba(201,168,76,0.3)]">
                All Articles
            </a>
            <?php
            $categories = get_categories();
            foreach ( $categories as $cat ) :
            ?>
            <a href="<?php echo esc_url( get_category_link( $cat->term_id ) ); ?>"
               class="px-6 py-2 rounded-full font-accent text-xs tracking-widest uppercase border bg-transparent border-gold/30 text-gold hover:border-gold hover:bg-gold/5 transition-all duration-300">
                <?php echo esc_html( $cat->name ); ?>
            </a>
            <?php endforeach; ?>
        </div>

        <!-- Article Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php while ( have_posts() ) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class( 'glass-card p-8 rounded-2xl border border-gold/20 flex flex-col group cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(201,168,76,0.1)] relative overflow-hidden' ); ?>>
                <div class="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <?php if ( has_post_thumbnail() ) : ?>
                <div class="mb-6 rounded-xl overflow-hidden aspect-video">
                    <?php the_post_thumbnail( 'medium_large', array( 'class' => 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-700' ) ); ?>
                </div>
                <?php endif; ?>

                <div class="flex justify-between items-start mb-4 relative z-10">
                    <span class="font-accent text-[10px] tracking-widest text-gold/60 uppercase">
                        <?php echo esc_html( get_the_category_list(', ') ); ?>
                    </span>
                    <span class="font-accent text-[10px] tracking-widest text-cream/40 uppercase">
                        <?php echo esc_html( get_the_date('M j, Y') ); ?>
                    </span>
                </div>

                <h2 class="font-hero text-xl text-cream mb-4 group-hover:text-gold-light transition-colors relative z-10">
                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                </h2>

                <p class="font-body text-cream/60 leading-relaxed mb-6 flex-grow relative z-10 text-sm">
                    <?php echo esc_html( get_the_excerpt() ); ?>
                </p>

                <div class="flex justify-between items-center mt-auto pt-6 border-t border-gold/10 relative z-10">
                    <span class="font-accent text-[10px] tracking-widest text-cream/40 uppercase">
                        <?php echo esc_html( get_the_time('g:i A') ); ?>
                    </span>
                    <a href="<?php the_permalink(); ?>" class="font-accent text-[10px] tracking-widest text-gold uppercase flex items-center hover:text-gold-light transition-colors">
                        Read <span class="ml-1 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                    </a>
                </div>
            </article>
            <?php endwhile; ?>
        </div>

        <!-- Pagination -->
        <div class="mt-16 flex justify-center">
            <?php
            the_posts_pagination( array(
                'mid_size'  => 2,
                'prev_text' => '← Older',
                'next_text' => 'Newer →',
                'class'     => 'flex gap-4 font-accent text-xs tracking-widest uppercase text-gold',
            ) );
            ?>
        </div>

        <?php else : ?>
        <div class="text-center py-32">
            <p class="font-hero text-3xl text-gold/40 mb-4">No articles yet</p>
            <p class="font-body text-cream/40">Cosmic wisdom is being compiled. Check back soon.</p>
        </div>
        <?php endif; ?>
    </div>
</div>

<?php get_footer(); ?>
