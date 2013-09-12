<?php

function get_current_post_type() {
    global $post, $typenow, $current_screen;

//we have a post so we can just get the post type from that
    if ($post && $post->post_type)
        return $post->post_type;
//check the global $typenow - set in admin.php
    elseif ($typenow)
        return $typenow;
//check the global $current_screen object - set in sceen.php
    elseif ($current_screen && $current_screen->post_type)
        return $current_screen->post_type;
//lastly check the post_type querystring
    elseif (isset($_REQUEST['post_type']))
        return sanitize_key($_REQUEST['post_type']);
//we do not know the post type!
    elseif (isset($_REQUEST['post']))
        return get_post_type($_REQUEST['post']);
    return null;
}

// Add Shortcode buttons in TinyMCE
$elements = array(
    'toggles',
    'tabs',
    'lists',
    'buttons',
    'notifications',
    'wpcolumns',
    //'rule',
    'tables',
    'tooltip',
    'iconhead',
    'panel',
    'popover'
);





foreach ($elements as $element) {
    include( $element . '/plugin_shortcode.php');
}

include('widgets-shortcodes.php');

// --------------------------------------------------------------------------------------------------------------

function my_refresh_mce($ver) {
    $ver += 3;
    return $ver;
}

add_action('init', 'add_custom_button');

function add_custom_button() {
    //global $elements;
    // Don't bother doing this stuff if the current user lacks permissions
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages'))
        return;

    // Add only in Rich Editor mode
    if (get_user_option('rich_editing') == 'true') {

        add_filter("mce_external_plugins", "add_custom_plugin");
        add_filter('mce_buttons_3', 'register_custom_button');
    }
}

function register_custom_button($buttons) {

    global $elements;
    foreach ($elements as $element) {
        $buttons[] = 'oscitas' . $element;
    }
    return $buttons;
}

// Load the TinyMCE plugin : editor_plugin.js (wp2.5)
function add_custom_plugin($plugin_array) {
    //print_r($elements); exit;
    global $elements;
    foreach ($elements as $element) {
        $plugin_array['oscitas' . $element] = plugins_url('', __FILE__) . '/' . $element . '/' . $element . '_plugin.js';
    }
    /// return $buttons;
    return $plugin_array;
}

?>
