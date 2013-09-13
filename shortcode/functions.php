<?php

// Add Shortcode buttons in TinyMCE
$elements = array(
    'toggles',
    'tabs',
    'lists',
    'buttons',
    'notifications',
    'wpcolumns',
    'tables',
    'tooltip',
    'iconhead',
    'panel',
    'popover'
);

foreach ($elements as $element) {
    include( $element . '/plugin_shortcode.php');
}


// --------------------------------------------------------------------------------------------------------------

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
