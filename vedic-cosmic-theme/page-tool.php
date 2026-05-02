<?php
/**
 * Template Name: Astrology Tool (React)
 * 
 * This template loads a specific React astrology tool based on the page slug.
 */

get_header(); 

// Map slugs to React root IDs
$slug = get_post_field( 'post_name', get_the_ID() );
$root_id = 'root'; // default

switch ($slug) {
    case 'forecast':
        $root_id = 'forecast-root';
        break;
    case 'numerology':
        $root_id = 'numerology-root';
        break;
    case 'birth-chart':
        $root_id = 'birthchart-root';
        break;
    case 'matchmaker':
        $root_id = 'matchmaker-root';
        break;
    case 'panchang':
        $root_id = 'panchang-root';
        break;
    case 'vastu-compass':
        $root_id = 'vastu-root';
        break;
    case 'oracle':
        $root_id = 'oracle-root';
        break;
}
?>

<div id="<?php echo esc_attr($root_id); ?>" class="flex-grow flex flex-col">
    <!-- React app will mount here -->
    <div class="flex-grow flex items-center justify-center py-40">
        <div class="text-center">
            <div class="w-16 h-16 border-4 border-gold/20 border-t-gold rounded-full animate-spin mb-6 mx-auto"></div>
            <p class="font-accent text-xs tracking-[0.2em] text-gold uppercase animate-pulse">Calculating Cosmic Alignment...</p>
        </div>
    </div>
</div>

<?php get_footer(); ?>
