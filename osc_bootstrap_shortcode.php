<?php

/*
  Plugin Name: Easy Bootstrap Shortcode
  Plugin URI: http://www.oscitasthemes.com
  Description: Add bootstrap 3.0 styles to your theme by wordpress editor shortcode buttons.
  Version: 1.1
  Author: Oscitas Themes
  Author URI: http://www.oscitasthemes.com
  License: Under the GPL v2 or later
 */

add_action('admin_enqueue_scripts', 'osc_add_admin_shortcode_scripts');
add_action('wp_enqueue_scripts', 'osc_add_frontend_shortcode_scripts');

function osc_add_admin_shortcode_scripts() {
    global $pagenow;
    if ('post-new.php' == $pagenow || 'post.php' == $pagenow) {
        wp_enqueue_script('jquery');
        wp_enqueue_script('colorpickerjs', plugins_url('/js/colorpicker.js', __FILE__));
        wp_enqueue_script('jquery.fancybox', plugins_url('/js/jquery.fancybox.js', __FILE__));
        wp_enqueue_style('fancyboxcss', plugins_url('/styles/jquery.fancybox.css', __FILE__));
        wp_enqueue_style('colorpickercss', plugins_url('/styles/colorpicker.css', __FILE__));
        wp_enqueue_style('bootstrap-icon', plugins_url('/styles/bootstrap-icon.css', __FILE__));
        wp_enqueue_style('bootstrap_admin', plugins_url('/styles/bootstrap_admin.css', __FILE__));
    }
}

function osc_add_frontend_shortcode_scripts() {
    wp_enqueue_script('jquery');
    wp_enqueue_script('bootstrap', plugins_url('/js/bootstrap.js', __FILE__));
    wp_enqueue_style('bootstrap', plugins_url('/styles/bootstrap.css', __FILE__));
}

// Shortcodes
include('shortcode/functions.php');
