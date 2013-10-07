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
    'popover',
    'dropdown',
    'labels',
    'well',
    'thumbnail',
    'icon',
    'image',
    'progressbar'
);

foreach ($elements as $element) {
    include( $element . '/plugin_shortcode.php');
}

add_action('init', 'osc_add_ebs_buttons_to_tinymce');

function osc_add_ebs_buttons_to_tinymce() {
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages'))
        return;

    if (get_user_option('rich_editing') == 'true') {
        add_filter("mce_external_plugins", "osc_add_ebs_plugin");
        add_filter('mce_buttons_3', 'osc_register_ebs_button');
    }
}

function osc_register_ebs_button($buttons) {
    global $elements;
    foreach ($elements as $element) {
        $buttons[] = 'oscitas' . $element;
    }
    return $buttons;
}

function osc_add_ebs_plugin($plugin_array) {
    global $elements;
    foreach ($elements as $element) {
        $plugin_array['oscitas' . $element] = plugins_url('', __FILE__) . '/' . $element . '/' . $element . '_plugin.js';
    }
    return $plugin_array;
}