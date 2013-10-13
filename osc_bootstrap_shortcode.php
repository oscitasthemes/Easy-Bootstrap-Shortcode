<?php

/*
  Plugin Name: Easy Bootstrap Shortcode
  Plugin URI: http://www.oscitasthemes.com
  Description: Add bootstrap 3.0 styles to your theme by wordpress editor shortcode buttons.
  Version: 2.2.1
  Author: oscitas
  Author URI: http://www.oscitasthemes.com
  License: Under the GPL v2 or later
 */

add_action('init','is_oscitas_theme_exists');
function is_oscitas_theme_exists(){
    global $oscitaschecktheme;
    if(!function_exists('oscitas_theme_check') || isset($oscitaschecktheme)==false){
        add_action('admin_enqueue_scripts', 'osc_add_admin_ebs_scripts');
        add_action('wp_enqueue_scripts', 'osc_add_frontend_ebs_scripts');
        add_action('admin_menu', 'osc_ebs_add_admin_menu');
    }
}

register_activation_hook(__FILE__, 'osc_ebs_activate_plugin');
register_deactivation_hook(__FILE__, 'osc_ebs_deactivate_plugin');
//add_action('admin_enqueue_scripts', 'osc_add_admin_ebs_scripts');
//add_action('wp_enqueue_scripts', 'osc_add_frontend_ebs_scripts');
//add_action('admin_menu', 'osc_ebs_add_admin_menu');

function osc_ebs_activate_plugin() {
    $isSet = get_option('EBS_CUSTOM_OPTION', '');
    if (!$isSet) {

        // EBS_BOOTSTRAP_JS_LOCATION   '1' - for plugin file, '2' - don't user EBS files but use from other plugin or theme, '3' - to user CDN path
        update_option( 'EBS_BOOTSTRAP_JS_LOCATION', 1 );
        update_option( 'EBS_BOOTSTRAP_JS_CDN_PATH', 'http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js' );

        // EBS_BOOTSTRAP_CSS_LOCATION   '1' - for plugin file, '2' - don't user EBS files but use from other plugin or theme
        update_option( 'EBS_BOOTSTRAP_CSS_LOCATION', 1 );
    }

}
function osc_ebs_settings_link( $links ) {
    $isSet = get_option('EBS_CUSTOM_OPTION', '');
    if (!$isSet) {
        $settings_link = '<a href="admin.php?page=ebs/ebs-settings.php">Settings</a>';
        array_push( $links, $settings_link );
    }
    return $links;
}

add_filter( "plugin_action_links_".plugin_basename( __FILE__ ), 'osc_ebs_settings_link' );

function osc_ebs_deactivate_plugin() {
    $isSet = get_option('EBS_CUSTOM_OPTION', '');
    if (!$isSet) {
        delete_option( 'EBS_BOOTSTRAP_JS_LOCATION' );
        delete_option( 'EBS_BOOTSTRAP_JS_CDN_PATH' );
        delete_option( 'EBS_BOOTSTRAP_CSS_LOCATION');
    }
}

function osc_ebs_add_admin_menu() {
    $isSet = get_option('EBS_CUSTOM_OPTION', '');
    if (!$isSet) {
        add_menu_page('EBS Settings', ' EBS Settings', 'manage_options', 'ebs/ebs-settings.php', 'osc_ebs_setting_page', plugins_url('/images/icon.png', __FILE__));
    }
}

function osc_ebs_setting_page() {
    if (isset($_POST['ebs_submit'])) {
        update_option( 'EBS_BOOTSTRAP_JS_LOCATION', $_POST['b_js'] );
        update_option( 'EBS_BOOTSTRAP_JS_CDN_PATH', $_POST['cdn_path'] );
        update_option( 'EBS_BOOTSTRAP_CSS_LOCATION', $_POST['b_css'] );

        $js = $_POST['b_js'];
        $cdn = $_POST['cdn_path'];
        $css = $_POST['b_css'];
    } else {
        $js = get_option( 'EBS_BOOTSTRAP_JS_LOCATION', 1 );
        $cdn = get_option( 'EBS_BOOTSTRAP_JS_CDN_PATH', 'http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js' );
        $css = get_option( 'EBS_BOOTSTRAP_CSS_LOCATION', 1 );
    }
    include 'ebs_settings.php';
}

// add_submenu_page('optine
function osc_add_admin_ebs_scripts() {
    global $pagenow;
    $screen = get_current_screen();
    if ($screen->id == 'toplevel_page_ebs/ebs-settings') {
        wp_enqueue_style('ebs-setting', plugins_url('/styles/ebs-setting.min.css', __FILE__));
    }
    if ('post-new.php' == $pagenow || 'post.php' == $pagenow) {
        wp_enqueue_script('jquery');
        wp_enqueue_style('thickbox');
        wp_enqueue_script('media-upload');
        wp_enqueue_script('thickbox');
        wp_enqueue_script('jquery.fancybox', plugins_url('/js/jquery.fancybox.js', __FILE__));
        wp_enqueue_style('fancyboxcss', plugins_url('/styles/jquery.fancybox.css', __FILE__));
        if (!get_option('EBS_CUSTOM_BOOTSTRAP_ICON_CSS', '')) {
            wp_enqueue_style('bootstrap-icons', plugins_url('/styles/bootstrap-icon.min.css', __FILE__));
        }
        if (!get_option('EBS_CUSTOM_BOOTSTRAP_ADMIN_CSS', '')) {
            wp_enqueue_style('bootstrap_admin', plugins_url('/styles/bootstrap_admin.min.css', __FILE__));
        }
    }
}

function osc_add_frontend_ebs_scripts() {
    wp_enqueue_script('jquery');
    $isSet = get_option('EBS_CUSTOM_OPTION', '');
    if (!$isSet) {
        $js = get_option( 'EBS_BOOTSTRAP_JS_LOCATION', 1 );
        $cdn = get_option( 'EBS_BOOTSTRAP_JS_CDN_PATH', 'http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js' );
        $css = get_option( 'EBS_BOOTSTRAP_CSS_LOCATION', 1 );

        if ($js == 'plugin') {
            wp_enqueue_script('bootstrap', plugins_url('/js/bootstrap.min.js', __FILE__));
        } elseif ($js == 'cdn') {
            wp_enqueue_script('bootstrap', $cdn);
        }
        if ($css == 'plugin') {
            wp_enqueue_style('bootstrap', plugins_url('/styles/bootstrap.min.css', __FILE__));
        } else {
            wp_enqueue_style('bootstrap-icon', plugins_url('/styles/bootstrap-icon.min.css', __FILE__));
        }
    }
}

// Shortcodes
include('shortcode/functions.php');