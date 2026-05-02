<?php
/**
 * Vedic Cosmic Theme functions and definitions
 */

if ( ! function_exists( 'vedic_cosmic_setup' ) ) :
    function vedic_cosmic_setup() {
        add_theme_support( 'automatic-feed-links' );
        add_theme_support( 'title-tag' );
        add_theme_support( 'post-thumbnails' );

        register_nav_menus( array(
            'primary' => esc_html__( 'Primary Menu', 'vedic-cosmic' ),
        ) );

        add_theme_support( 'html5', array(
            'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script',
        ) );
    }
endif;
add_action( 'after_setup_theme', 'vedic_cosmic_setup' );

/**
 * Enqueue scripts and styles.
 */
function vedic_cosmic_scripts() {
    // Google Fonts
    wp_enqueue_style( 'vedic-cosmic-fonts', 'https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=Josefin+Sans:wght@400;600&family=Noto+Serif+Devanagari:wght@400;600&display=swap', array(), null );

    // Tailwind Compiled CSS (from Vite build)
    wp_enqueue_style( 'vedic-cosmic-tailwind', get_template_directory_uri() . '/assets/index.css', array(), '1.0.1' );

    // Theme Main CSS
    wp_enqueue_style( 'vedic-cosmic-style', get_stylesheet_uri(), array('vedic-cosmic-tailwind'), '1.0.1' );

    // Enqueue React App on Tool pages
    if ( is_page_template( 'page-tool.php' ) ) {
        // Enqueue as a module if possible, or just a standard script
        wp_enqueue_script( 'vedic-cosmic-react-app', get_template_directory_uri() . '/assets/index.js', array(), '1.0.1', true );
        
        // Add type="module" to the React script tag for Vite compatibility
        add_filter('script_loader_tag', function($tag, $handle, $src) {
            if ('vedic-cosmic-react-app' !== $handle) {
                return $tag;
            }
            return '<script type="module" src="' . esc_url($src) . '" id="' . esc_attr($handle) . '-js"></script>';
        }, 10, 3);
    }
}
add_action( 'wp_enqueue_scripts', 'vedic_cosmic_scripts' );

/**
 * Custom Body Classes
 */
function vedic_cosmic_body_classes( $classes ) {
    $classes[] = 'bg-primary text-cream font-body antialiased selection:bg-gold/30 flex flex-col min-h-screen';
    return $classes;
}
add_filter( 'body_class', 'vedic_cosmic_body_classes' );

/**
 * Custom Menu Walker for Tailwind Styling
 */
class Vedic_Cosmic_Walker extends Walker_Nav_Menu {
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args, $depth));
        
        $output .= '<li class="' . esc_attr($class_names) . '">';
        
        $attributes = !empty($item->url) ? ' href="' . esc_attr($item->url) . '"' : '';
        $active_class = in_array('current-menu-item', $classes) ? 'text-gold' : 'text-cream/80 hover:text-gold';
        
        $item_output = $args->before;
        $item_output .= '<a class="font-accent uppercase text-sm tracking-widest transition-colors relative group ' . $active_class . '"' . $attributes . '>';
        $item_output .= $args->link_before . apply_filters('the_title', $item->title, $item->ID) . $args->link_after;
        $item_output .= '<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>';
        $item_output .= '</a>';
        $item_output .= $args->after;
        
        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }
}

