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
	// Add a filter for the oscitaschecktheme
	// There is no need to have global scope as we are going to filter it anyway
	// Return true for this filter
	// If you do not want the settings panel and other admin/frontend scripts/css to be added
	$oscitaschecktheme = apply_filters( 'oscitas_check_theme', false );
    if ( $oscitaschecktheme == false ) {
        add_action('admin_enqueue_scripts', 'osc_add_admin_ebs_scripts');
        add_action('wp_enqueue_scripts', 'osc_add_frontend_ebs_scripts');
        add_action('admin_menu', 'osc_ebs_add_admin_menu');
    }
}

register_activation_hook(__FILE__, 'osc_ebs_activate_plugin');
/**
 * We do not want to delete options on plugin deactivation
 * Instead use uninstall.php
 * @link http://codex.wordpress.org/Plugin_API#Activation.2FDeactivation.2FUninstall WordPress Plugin API
 */
// register_deactivation_hook(__FILE__, 'osc_ebs_deactivate_plugin');
//add_action('admin_enqueue_scripts', 'osc_add_admin_ebs_scripts');
//add_action('wp_enqueue_scripts', 'osc_add_frontend_ebs_scripts');
//add_action('admin_menu', 'osc_ebs_add_admin_menu');

/**
 * Activatation hook
 *
 * We will add the option anyway, because these will be filtered before the actual enqueue
 * If we do not add the option, then when the compatible theme/plugin is deactivated, things will break
 * @return void
 */
function osc_ebs_activate_plugin() {
    // EBS_BOOTSTRAP_JS_LOCATION   '1' - for plugin file, '2' - don't user EBS files but use from other plugin or theme, '3' - to user CDN path
    update_option( 'EBS_BOOTSTRAP_JS_LOCATION', 1 );
    update_option( 'EBS_BOOTSTRAP_JS_CDN_PATH', 'http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js' );

    // EBS_BOOTSTRAP_CSS_LOCATION   '1' - for plugin file, '2' - don't user EBS files but use from other plugin or theme
    update_option( 'EBS_BOOTSTRAP_CSS_LOCATION', 1 );
}

function osc_ebs_settings_link( $links ) {
    $ebs_custom_option = get_ebs_custom_option();
    if ( ! $ebs_custom_option ) {
        $settings_link = '<a href="admin.php?page=ebs/ebs-settings.php">Settings</a>';
        array_push( $links, $settings_link );
    }
    return $links;
}

add_filter( "plugin_action_links_".plugin_basename( __FILE__ ), 'osc_ebs_settings_link' );

function osc_ebs_add_admin_menu() {
    $ebs_custom_option = get_ebs_custom_option();
    if ( ! $ebs_custom_option ) {
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
        if ( ! get_ebs_custom_bootstrap_icon_css() ) {
            wp_enqueue_style('bootstrap-icons', plugins_url('/styles/bootstrap-icon.min.css', __FILE__));
        }
        if ( ! get_ebs_custom_bootstrap_admin_css() ) {
            wp_enqueue_style('bootstrap_admin', plugins_url('/styles/bootstrap_admin.min.css', __FILE__));
        }
    }
}

function osc_add_frontend_ebs_scripts() {
    wp_enqueue_script('jquery');
    $ebs_custom_option = get_ebs_custom_option();
    if ( ! $ebs_custom_option ) {
        $js = get_option( 'EBS_BOOTSTRAP_JS_LOCATION', 1 );
        $cdn = get_option( 'EBS_BOOTSTRAP_JS_CDN_PATH', 'http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js' );
        $css = get_option( 'EBS_BOOTSTRAP_CSS_LOCATION', 1 );

        $js_url = apply_filters( 'ebs_bootstrap_js_url', plugins_url( '/js/bootstrap.min.js', __FILE__ ) );
        $cdn_url = apply_filters( 'ebs_bootstrap_js_cdn', $cdn );
        $css_url = apply_filters( 'ebs_bootstrap_css_url', plugins_url( '/styles/bootstrap.min.css', __FILE__ ) );
        $icon_url = apply_filters( 'ebs_bootstrap_icon_url', plugins_url( '/styles/bootstrap-icon.min.css', __FILE__ ) );

        if ($js == '1') {
            wp_enqueue_script( 'bootstrap', $js_url );
        } elseif ($js == '3') {
            wp_enqueue_script( 'bootstrap', $cdn_url );
        }
        if ($css == '1') {
            wp_enqueue_style( 'bootstrap', $css_url );
        } else {
            wp_enqueue_style( 'bootstrap-icon', $icon_url );
        }
    }
}

/**
 * Get the EBS Custom Option by applying necessary filter
 *
 * Set this to true to prevent adding any of the frontend EBS components
 * viz, all js, css and icon files. You still need to supply these within your
 * plugin/theme to make it work.
 *
 * @param  boolean $default The initial value of the variable (Optional, defaults to false)
 * @return bool             False by default (if no other plugins/themes are overriding it)
 */
function get_ebs_custom_option( $default = false ) {
    return apply_filters( 'ebs_custom_option', $default );
}

/**
 * Get the EBS Custom Bootstrap ICON CSS for the admin enqueue
 *
 * Set this to true to prevent adding the CSS
 * @param  boolean $default The default value of the filter (defaults to false)
 * @return boolean          False will make the admin enqueue occur, true will prevent
 */
function get_ebs_custom_bootstrap_icon_css( $default = false ) {
    return apply_filters( 'ebs_custom_bootstrap_icon_css', $default );
}

/**
 * Get the EBS Custom Bootstrap Admin CSS for the admin enqueue
 *
 * Set this to true to prevent adding the CSS
 * @param  boolean $default The default value of the filter (defaults to false)
 * @return boolean          False will make the admin enqueue occur, true will prevent
 */
function get_ebs_custom_bootstrap_admin_css( $default = false ) {
    return apply_filters( 'ebs_custom_bootstrap_admin_css', $default );
}

// Shortcodes
include('shortcode/functions.php');
