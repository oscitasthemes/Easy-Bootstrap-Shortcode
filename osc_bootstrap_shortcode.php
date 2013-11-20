<?php

/*
  Plugin Name: Easy Bootstrap Shortcode
  Plugin URI: http://www.oscitasthemes.com
  Description: Add bootstrap 3.0 styles to your theme by wordpress editor shortcode buttons.
  Version: 2.3.1
  Author: oscitas
  Author URI: http://www.oscitasthemes.com
  License: Under the GPL v2 or later
 */

add_action('init','is_oscitas_theme_exists');
function is_oscitas_theme_exists(){
    global $oscitaschecktheme;
	add_action('admin_enqueue_scripts', 'osc_add_admin_ebs_scripts');
    if(!apply_filters('plugin_oscitas_theme_check',false)){

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
    $isSet=apply_filters('ebs_custom_option',false);
    if (!$isSet) {

        // EBS_BOOTSTRAP_JS_LOCATION   '1' - for plugin file, '2' - don't user EBS files but use from other plugin or theme, '3' - to user CDN path
        update_option( 'EBS_BOOTSTRAP_JS_LOCATION', 1 );
        update_option( 'EBS_BOOTSTRAP_JS_CDN_PATH', 'http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js' );
	    update_option( 'EBS_BOOTSTRAP_RESPOND_CDN_PATH', 'http://cdnjs.cloudflare.com/ajax/libs/respond.js/1.3.0/respond.min.js' );
	    // EBS_BOOTSTRAP_RESPOND_LOCATION   '1' - for plugin file, '2' - don't user EBS files but use from other plugin or theme, '3' - to user CDN path
	    update_option('EBS_BOOTSTRAP_RESPOND_LOCATION',2);

        // EBS_BOOTSTRAP_CSS_LOCATION   '1' - for plugin file, '2' - don't user EBS files but use from other plugin or theme
        update_option( 'EBS_BOOTSTRAP_CSS_LOCATION', 1 );
    }

}
function osc_ebs_settings_link( $links ) {
    $isSet=apply_filters('ebs_custom_option',false);
    if (!$isSet) {
        $settings_link = '<a href="admin.php?page=ebs/ebs-settings.php">Settings</a>';
        array_push( $links, $settings_link );
    }
    return $links;
}

add_filter( "plugin_action_links_".plugin_basename( __FILE__ ), 'osc_ebs_settings_link' );

function osc_ebs_deactivate_plugin() {
    $isSet=apply_filters('ebs_custom_option',false);
    if (!$isSet) {
        delete_option( 'EBS_BOOTSTRAP_JS_LOCATION' );
        delete_option( 'EBS_BOOTSTRAP_JS_CDN_PATH' );
        delete_option( 'EBS_BOOTSTRAP_CSS_LOCATION');
	    delete_option( 'EBS_BOOTSTRAP_RESPOND_LOCATION' );
	    delete_option( 'EBS_BOOTSTRAP_RESPOND_CDN_PATH' );
    }
}

function osc_ebs_add_admin_menu() {
    $isSet=apply_filters('ebs_custom_option',false);
    if (!$isSet) {
        add_menu_page('EBS Settings', ' EBS Settings', 'manage_options', 'ebs/ebs-settings.php', 'osc_ebs_setting_page', plugins_url('/images/icon.png', __FILE__));
    }
}

function osc_ebs_setting_page() {
	if (isset($_POST['ebs_submit'])) {
		update_option( 'EBS_BOOTSTRAP_JS_LOCATION', $_POST['b_js'] );
		update_option( 'EBS_BOOTSTRAP_JS_CDN_PATH', $_POST['cdn_path'] );
		update_option( 'EBS_BOOTSTRAP_CSS_LOCATION', $_POST['b_css'] );
		update_option( 'EBS_BOOTSTRAP_RESPOND_LOCATION', $_POST['b_js'] );
		update_option( 'EBS_BOOTSTRAP_RESPOND_CDN_PATH', $_POST['cdn_path'] );


		$js = $_POST['b_js'];
		$cdn = $_POST['cdn_path'];
		$css = $_POST['b_css'];
		$respond = $_POST['respond_js'];
		$respondcdn = $_POST['respond_cdn_path'];

	}
	else {
		$js = get_option( 'EBS_BOOTSTRAP_JS_LOCATION', 1 );
		$cdn = get_option( 'EBS_BOOTSTRAP_JS_CDN_PATH', 'http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js' );
		$css = get_option( 'EBS_BOOTSTRAP_CSS_LOCATION', 1 );
		$respond = get_option( 'EBS_BOOTSTRAP_RESPOND_LOCATION', 2 );
		$respondcdn = get_option( 'EBS_BOOTSTRAP_RESPOND_CDN_PATH', 'http://cdnjs.cloudflare.com/ajax/libs/respond.js/1.3.0/respond.min.js' );
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
        if (!apply_filters('ebs_bootstrap_icon_css_url',false)) {
            wp_enqueue_style('bootstrap-icon', plugins_url('/styles/bootstrap-icon.min.css', __FILE__));
        } else{
            wp_enqueue_style('bootstrap-icon', apply_filters('ebs_bootstrap_icon_css_url',false));
        }
        if (!apply_filters('ebs_custom_bootstrap_admin_css',false)) {
            wp_enqueue_style('bootstrap_admin', plugins_url('/styles/bootstrap_admin.min.css', __FILE__));
        }
    }
}

function osc_add_frontend_ebs_scripts() {
    wp_enqueue_script('jquery');
    $isSet=apply_filters('ebs_custom_option',false);
	if (!$isSet) {
		$js = get_option( 'EBS_BOOTSTRAP_JS_LOCATION', 1 );
		$respond = get_option( 'EBS_BOOTSTRAP_RESPOND_LOCATION', 2 );
		$cdn = get_option( 'EBS_BOOTSTRAP_JS_CDN_PATH', 'http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js' );
		$respondcdn = get_option( 'EBS_BOOTSTRAP_RESPOND_CDN_PATH', 'http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js' );
		$css = get_option( 'EBS_BOOTSTRAP_CSS_LOCATION', 1 );

//			http://cdnjs.cloudflare.com/ajax/libs/respond.js/1.3.0/respond.min.js


		if ($js == 1) {
			if (!apply_filters('ebs_bootstrap_js_url',false)) {
                wp_enqueue_script('bootstrap', plugins_url('/js/bootstrap.min.js', __FILE__));
			} else{
				wp_enqueue_script('bootstrap', apply_filters('ebs_bootstrap_js_url',false));
			}
		} elseif ($js == 3) {
			if (!apply_filters('ebs_bootstrap_js_cdn',false)) {
				wp_enqueue_script('bootstrap', $cdn);
			} else{
				wp_enqueue_script('bootstrap', apply_filters('ebs_bootstrap_js_cdn',false));
			}
		}
		if(preg_match('/(?i)msie [1-8]/',$_SERVER['HTTP_USER_AGENT'])){
			if ($respond == 1) {
				if (!apply_filters('ebs_bootstrap_respond_url',false)) {
					wp_enqueue_script('bootstrap_respond', plugins_url('/js/respond.min.js', __FILE__));
				} else{
					wp_enqueue_script('bootstrap_respond', apply_filters('ebs_bootstrap_respond_url',false));
				}
			} elseif ($respond == 3) {
				if (!apply_filters('ebs_bootstrap_respond_cdn',false)) {
					wp_enqueue_script('bootstrap_respond', $respondcdn);
				} else{
					wp_enqueue_script('bootstrap_respond', apply_filters('ebs_bootstrap_respond_cdn',false));
				}
			}
		}
        if ($css == 1) {
            if (!apply_filters('ebs_bootstrap_css_url',false)) {
                wp_enqueue_style('bootstrap', plugins_url('/styles/bootstrap.min.css', __FILE__));
            } else {
                wp_enqueue_style('bootstrap', apply_filters('ebs_bootstrap_css_url',false));
            }
        } else {
            if (!apply_filters('ebs_bootstrap_icon_css_url',false)) {
                //wp_enqueue_style('bootstrap-icon', plugins_url('/styles/bootstrap-icon.min.css', __FILE__));
            } else{
                wp_enqueue_style('bootstrap-icon', apply_filters('ebs_bootstrap_icon_css_url',false));
            }
        }
    }
}

// Shortcodes
include('shortcode/functions.php');