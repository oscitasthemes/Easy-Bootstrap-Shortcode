<?php

/*
  Plugin Name: Easy Bootstrap Shortcode
  Plugin URI: http://www.oscitasthemes.com
  Description: Add bootstrap 3.0 styles to your theme by wordpress editor shortcode buttons.
  Version: 2.1.1
  Author: Oscitas Themes
  Author URI: http://www.oscitasthemes.com
  License: Under the GPL v2 or later
 */
register_activation_hook(__FILE__, 'osc_ebs_activate_plugin');
register_deactivation_hook(__FILE__, 'osc_ebs_deactivate_plugin');
add_action('admin_enqueue_scripts', 'osc_add_admin_ebs_scripts');
add_action('wp_enqueue_scripts', 'osc_add_frontend_ebs_scripts');
add_action('admin_menu', 'osc_ebs_add_admin_menu');

function osc_ebs_activate_plugin() {
    global $wpdb;
    $sqlebs = "CREATE TABLE IF NOT EXISTS " . $wpdb->prefix . "ebs_settings (
				id int(10) unsigned NOT NULL AUTO_INCREMENT,
			  	ebs_js varchar(100),
			  	ebs_css varchar(100),
                                ebs_cdn_path varchar(500),
                                PRIMARY KEY (id)
                                )";

    $wpdb->query($sqlebs);
    $wpdb->insert(
            $wpdb->prefix . 'ebs_settings', array(
        'ebs_js' => 'plugin',
        'ebs_css' => 'plugin',
        'ebs_cdn_path' => 'http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js'
            ), array(
        '%s',
        '%s',
        '%s'
            )
    );
}
function osc_ebs_settings_link( $links ) {
    $settings_link = '<a href="admin.php?page=ebs/ebs-settings.php">Settings</a>';
    array_push( $links, $settings_link );
    return $links;
}

add_filter( "plugin_action_links_".plugin_basename( __FILE__ ), 'osc_ebs_settings_link' );

function osc_ebs_deactivate_plugin() {
    global $wpdb;
    $wpdb->query("DROP TABLE IF EXISTS " . $wpdb->prefix . "ebs_settings");
}

function osc_ebs_add_admin_menu() {
    add_menu_page('EBS Settings', ' EBS Settings', 'manage_options', 'ebs/ebs-settings.php', 'osc_ebs_setting_page', plugins_url('/images/icon.png', __FILE__));
}

function osc_ebs_setting_page() {
    global $wpdb;
    $result = $wpdb->get_results('SELECT * from ' . $wpdb->prefix . "ebs_settings where id=1");
    foreach ($result as $res) {
        $js = $res->ebs_js;
        $css = $res->ebs_css;
        $cdn = $res->ebs_cdn_path;
    }
    include 'ebs_settings.php';
    if (isset($_POST['ebs_submit'])) {
//        $cdnins = ($_POST['b_js'] == 'cdn') ? $_POST['cdn_path'] : '';
        $sqlins = 'UPDATE ' . $wpdb->prefix . 'ebs_settings set ebs_js="' . $_POST['b_js'] . '", ebs_css="' . $_POST['b_css'] . '", ebs_cdn_path="' . $_POST['cdn_path'] . '" where id=1';
        $wpdb->query($sqlins);
        echo ' <script type="text/javascript">window.location=document.URL;</script>';
    }
}

//            add_submenu_page('optine
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
        wp_enqueue_style('bootstrap-icons', plugins_url('/styles/bootstrap-icon.min.css', __FILE__));
        wp_enqueue_style('bootstrap_admin', plugins_url('/styles/bootstrap_admin.min.css', __FILE__));
    }
}

function osc_add_frontend_ebs_scripts() {
    wp_enqueue_script('jquery');
    global $wpdb;
    $result = $wpdb->get_results('SELECT * from ' . $wpdb->prefix . "ebs_settings where id=1");
    foreach ($result as $res) {
        $js = $res->ebs_js;
        $css = $res->ebs_css;
        $cdn = $res->ebs_cdn_path;
    }
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

// Shortcodes
include('shortcode/functions.php');


