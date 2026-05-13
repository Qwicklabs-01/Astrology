<?php
/**
 * Vedic Cosmic Theme functions and definitions
 */

if ( ! function_exists( 'vedic_cosmic_setup' ) ) :
    function vedic_cosmic_setup() {
        add_theme_support( 'automatic-feed-links' );
        add_theme_support( 'title-tag' );
        add_theme_support( 'post-thumbnails' );
        add_theme_support( 'woocommerce' );
        add_theme_support( 'responsive-embeds' );
        add_theme_support( 'align-wide' );

        register_nav_menus( array(
            'primary' => esc_html__( 'Primary Menu', 'vedic-cosmic' ),
            'footer'  => esc_html__( 'Footer Menu', 'vedic-cosmic' ),
        ) );

        add_theme_support( 'html5', array(
            'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script',
        ) );
    }
endif;
add_action( 'after_setup_theme', 'vedic_cosmic_setup' );

/**
 * Auto-create all required pages on theme activation or when visiting admin.
 * This ensures Home, tool pages, and content pages exist with correct templates.
 */
function vedic_cosmic_create_pages() {
    // Only run if user can manage options
    if ( ! current_user_can( 'manage_options' ) ) return;

    $pages = array(
        // [ title, slug, template ]
        array( 'Home',              '',               'front-page.php'     ),
        array( 'Services',          'services',       'page-services.php'  ),
        array( 'About',             'about',          'page-about.php'     ),
        array( 'Contact',           'contact',        'page-contact.php'   ),
        array( 'Knowledge Hub',     'knowledge',      'page-knowledge.php' ),
        array( 'Blog',              'blog',           ''                   ),
        array( 'Vedic Forecast',    'forecast',       'page-forecast.php'  ),
        array( 'Birth Chart',       'birth-chart',    'page-birth-chart.php' ),
        array( 'Numerology',        'numerology',     'page-numerology.php' ),
        array( 'Panchang',          'panchang',       'page-panchang.php'  ),
        array( 'Vastu Compass',     'vastu-compass',  'page-vastu-compass.php' ),
        array( 'Instant Oracle',    'oracle',         'page-oracle.php'    ),
        array( 'Matchmaker',        'matchmaker',     'page-matchmaker.php' ),
    );

    $changed = false;
    foreach ( $pages as $p ) {
        list( $title, $slug, $template ) = $p;

        // Skip if page already exists
        $existing = $slug
            ? get_page_by_path( $slug )
            : get_option( 'page_on_front' );

        if ( $existing ) {
            // Check if template is correct
            if ( $template && get_post_meta( is_object($existing) ? $existing->ID : $existing, '_wp_page_template', true ) !== $template ) {
                update_post_meta( is_object($existing) ? $existing->ID : $existing, '_wp_page_template', $template );
            }
            continue;
        }

        $page_id = wp_insert_post( array(
            'post_title'   => $title,
            'post_name'    => $slug,
            'post_status'  => 'publish',
            'post_type'    => 'page',
            'post_content' => '<!-- Page auto-created by Vedic Cosmic Theme -->',
        ) );

        if ( $page_id && ! is_wp_error( $page_id ) ) {
            $changed = true;
            if ( $template ) {
                update_post_meta( $page_id, '_wp_page_template', $template );
            }

            if ( $slug === '' ) {
                update_option( 'show_on_front', 'page' );
                update_option( 'page_on_front', $page_id );
            }

            if ( $slug === 'blog' ) {
                update_option( 'page_for_posts', $page_id );
            }
        }
    }

    if ( $changed ) {
        flush_rewrite_rules();
    }
}
add_action( 'admin_init', 'vedic_cosmic_create_pages' );

/**
 * Force pretty permalinks if they are not set.
 */
function vedic_cosmic_check_permalinks() {
    if ( ! current_user_can( 'manage_options' ) ) return;
    if ( get_option('permalink_structure') == '' ) {
        update_option( 'permalink_structure', '/%postname%/' );
        flush_rewrite_rules();
    }
}
add_action( 'admin_init', 'vedic_cosmic_check_permalinks' );


/**
 * Tool page templates — React JS is loaded on all of these.
 */
function vedic_cosmic_is_tool_page() {
    $tool_templates = array(
        'page-tool.php',
        'page-forecast.php',
        'page-numerology.php',
        'page-birth-chart.php',
        'page-matchmaker.php',
        'page-panchang.php',
        'page-vastu-compass.php',
        'page-oracle.php',
    );
    foreach ( $tool_templates as $tpl ) {
        if ( is_page_template( $tpl ) ) return true;
    }
    return false;
}

/**
 * BUG FIX #1: type="module" filter moved to global scope.
 * Previously this filter was registered INSIDE the vedic_cosmic_scripts()
 * if-block, meaning it was never registered when the React script was enqueued
 * via the shortcode — so shortcode-embedded tools silently loaded without
 * type="module" and crashed as ES module syntax is invalid as a classic script.
 */
add_filter( 'script_loader_tag', function( $tag, $handle, $src ) {
    if ( 'vedic-cosmic-react-app' !== $handle ) return $tag;
    return '<script type="module" src="' . esc_url( $src ) . '" id="vedic-cosmic-react-app-js"></script>' . "\n";
}, 10, 3 );

/**
 * Enqueue scripts and styles.
 */
function vedic_cosmic_scripts() {
    // Google Fonts
    wp_enqueue_style( 'vedic-cosmic-fonts',
        'https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=Josefin+Sans:wght@400;600&family=Noto+Serif+Devanagari:wght@400;600&display=swap',
        array(), null
    );

    // Tailwind Compiled CSS (from Vite build)
    wp_enqueue_style( 'vedic-cosmic-tailwind', get_template_directory_uri() . '/assets/index.css', array(), '1.0.2' );

    // Theme Main CSS
    wp_enqueue_style( 'vedic-cosmic-style', get_stylesheet_uri(), array( 'vedic-cosmic-tailwind' ), '1.0.2' );

    // BUG FIX #2: Load React bundle only on tool pages (no inline filter here anymore)
    if ( vedic_cosmic_is_tool_page() ) {
        wp_enqueue_script( 'vedic-cosmic-react-app', get_template_directory_uri() . '/assets/index.js', array(), '1.0.2', true );
    }
}
add_action( 'wp_enqueue_scripts', 'vedic_cosmic_scripts' );

/**
 * Custom Body Classes
 */
function vedic_cosmic_body_classes( $classes ) {
    $classes[] = 'bg-primary text-cream font-body antialiased';
    return $classes;
}
add_filter( 'body_class', 'vedic_cosmic_body_classes' );

/**
 * Custom Menu Walker for Tailwind Styling
 */
class Vedic_Cosmic_Walker extends Walker_Nav_Menu {
    function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) {
        $classes      = empty( $item->classes ) ? array() : (array) $item->classes;
        $class_names  = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item, $args, $depth ) );
        $output      .= '<li class="' . esc_attr( $class_names ) . '">';
        $attributes   = ! empty( $item->url ) ? ' href="' . esc_attr( $item->url ) . '"' : '';
        $active_class = in_array( 'current-menu-item', $classes ) ? 'text-gold' : 'text-cream/80 hover:text-gold';
        $item_output  = $args->before;
        $item_output .= '<a class="font-accent uppercase text-sm tracking-widest transition-colors relative group ' . $active_class . '"' . $attributes . '>';
        $item_output .= $args->link_before . apply_filters( 'the_title', $item->title, $item->ID ) . $args->link_after;
        $item_output .= '<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>';
        $item_output .= '</a>';
        $item_output .= $args->after;
        $output      .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
    }
}

/**
 * Shortcodes for embedding React tools anywhere in WordPress content.
 * BUG FIX #3: Now also enqueues the compiled CSS so tools look correct
 * when embedded via shortcode on non-tool pages.
 */
function vedic_tool_shortcode( $atts ) {
    $atts = shortcode_atts( array( 'tool' => 'forecast' ), $atts, 'vedic_tool' );
    $map  = array(
        'forecast'      => 'forecast-root',
        'numerology'    => 'numerology-root',
        'birth-chart'   => 'birthchart-root',
        'matchmaker'    => 'matchmaker-root',
        'panchang'      => 'panchang-root',
        'vastu-compass' => 'vastu-root',
        'oracle'        => 'oracle-root',
    );
    $root_id = isset( $map[ $atts['tool'] ] ) ? $map[ $atts['tool'] ] : 'forecast-root';

    // Ensure React JS + CSS are enqueued when shortcode is used outside tool pages
    wp_enqueue_style( 'vedic-cosmic-tailwind', get_template_directory_uri() . '/assets/index.css', array(), '1.0.2' );
    wp_enqueue_script( 'vedic-cosmic-react-app', get_template_directory_uri() . '/assets/index.js', array(), '1.0.2', true );

    return '<div id="' . esc_attr( $root_id ) . '" class="vedic-tool-root min-h-screen">
        <div class="flex items-center justify-center py-32">
            <div class="text-center">
                <div class="w-16 h-16 border-4 border-gold/20 border-t-gold rounded-full animate-spin mb-6 mx-auto"></div>
                <p class="font-accent text-xs tracking-widest text-gold uppercase">Loading Cosmic Alignment...</p>
            </div>
        </div>
    </div>';
}
add_shortcode( 'vedic_tool', 'vedic_tool_shortcode' );

/**
 * Excerpt length
 */
function vedic_cosmic_excerpt_length( $length ) { return 30; }
add_filter( 'excerpt_length', 'vedic_cosmic_excerpt_length', 999 );

function vedic_cosmic_excerpt_more( $more ) { return '...'; }
add_filter( 'excerpt_more', 'vedic_cosmic_excerpt_more' );

/**
 * Contact Form Handler (admin-post.php action).
 * BUG FIX: The contact form previously had no backend handler — it would
 * submit and do nothing. This processes the form, validates nonce & honeypot,
 * and sends an email via wp_mail.
 */
function vedic_handle_contact_form() {
    // Verify nonce
    if ( ! isset( $_POST['vedic_contact_nonce'] ) ||
         ! wp_verify_nonce( $_POST['vedic_contact_nonce'], 'vedic_contact_form' ) ) {
        wp_die( 'Security check failed.', 'Error', array( 'response' => 403 ) );
    }

    // Honeypot check
    if ( ! empty( $_POST['website'] ) ) {
        wp_safe_redirect( wp_get_referer() );
        exit;
    }

    $name    = sanitize_text_field( $_POST['contact_name']    ?? '' );
    $email   = sanitize_email(      $_POST['contact_email']   ?? '' );
    $subject = sanitize_text_field( $_POST['contact_subject'] ?? 'General Inquiry' );
    $message = sanitize_textarea_field( $_POST['contact_message'] ?? '' );

    if ( empty( $name ) || empty( $email ) || empty( $message ) || ! is_email( $email ) ) {
        wp_safe_redirect( add_query_arg( 'sent', '0', wp_get_referer() ) );
        exit;
    }

    $to      = get_option( 'admin_email' );
    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'Reply-To: ' . $name . ' <' . $email . '>',
    );

    wp_mail(
        $to,
        '[Vedic Cosmic] ' . $subject . ' from ' . $name,
        "Name: {$name}\nEmail: {$email}\nSubject: {$subject}\n\nMessage:\n{$message}",
        $headers
    );

    wp_safe_redirect( add_query_arg( 'sent', '1', wp_get_referer() ) );
    exit;
}
add_action( 'admin_post_vedic_contact_submit',        'vedic_handle_contact_form' );
add_action( 'admin_post_nopriv_vedic_contact_submit', 'vedic_handle_contact_form' );

/**
 * Knowledge Hub Rewrite Rules.
 * BUG FIX: /knowledge/{slug} was returning 404 because WordPress had no
 * rewrite rule for sub-paths under the knowledge page slug.
 * This flushes rewrite rules on theme activation and adds the required rule.
 */
function vedic_cosmic_add_rewrite_rules() {
    add_rewrite_rule(
        '^knowledge/([a-z0-9-]+)/?$',
        'index.php?pagename=knowledge&knowledge_category=$matches[1]',
        'top'
    );
}
add_action( 'init', 'vedic_cosmic_add_rewrite_rules' );

function vedic_cosmic_register_query_vars( $vars ) {
    $vars[] = 'knowledge_category';
    return $vars;
}
add_filter( 'query_vars', 'vedic_cosmic_register_query_vars' );

function vedic_cosmic_flush_rewrite_on_activate() {
    vedic_cosmic_add_rewrite_rules();
    flush_rewrite_rules();
}
register_activation_hook( __FILE__, 'vedic_cosmic_flush_rewrite_on_activate' );

