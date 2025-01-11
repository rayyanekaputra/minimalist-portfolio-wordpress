<?php 
// https://youtu.be/-h7gOJbIpmo

function minimalist_theme_setup() {
    add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'minimalist_theme_setup' );


function minimalist_register_styles(){
    $version = wp_get_theme()->get('Version'); // Dynamically fetch theme version
    wp_enqueue_style('minimalist-main-css', get_template_directory_uri() . "/style.css", [], $version, 'all');
    wp_enqueue_style('minimalist-mobile-css', get_template_directory_uri() . "/mobile-style.css", [], $version, 'all');
    wp_enqueue_style('locomotive-scroll-style', 'https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.css', [], '4.1.4');
}
add_action('wp_enqueue_scripts', 'minimalist_register_styles');

function minimalist_register_scripts(){
    
    // Enqueue jQuery from Google's CDN
    wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js', [], null, false);

    // Enqueue Locomotive Scroll JS and CSS
    wp_enqueue_script('locomotive-scroll', 'https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js', [], '4.1.4', false);


    // Enqueue GSAP
    wp_enqueue_script('gsap', 'https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js', [], '3.12.5', false);

    // Enqueue Grained.js
    wp_enqueue_script('grained', 'https://cdn.jsdelivr.net/gh/sarathsaleem/grained@master/grained.js', [], null, false);

    // Enqueue custom scripts
    wp_enqueue_script('navbar-and-scrolls', get_template_directory_uri() . '/navbarAndScrolls.js', ['jquery'], null, true);
    wp_enqueue_script('hover-animation', get_template_directory_uri() . '/hoverAnimation.js', ['jquery'], null, true);
    wp_enqueue_script('early-fade', get_template_directory_uri() . '/earlyFade.js', ['jquery'], null, true);
}

add_action( 'wp_enqueue_scripts', 'minimalist_register_scripts');
?>