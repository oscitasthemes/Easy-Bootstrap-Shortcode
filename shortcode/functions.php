<?php

// Add Shortcode buttons in TinyMCE
$elements = array(
    'toggles',
    'tabs',
    'lists',
    'deslist',
    'buttons',
    'btngrptool',
    'btngrp',
    'notifications',
    'wpcolumns',
    'tables',
    'tooltip',
    'iconhead',
    'panel',
    'oscpopover',
    'dropdown',
    'labels',
    'well',
    'thumbnail',
    'icon',
    'image',
    'progressbar',
     
);

foreach ($elements as $element) {
    include( $element . '/plugin_shortcode.php');
}

add_action('init', 'osc_add_ebs_buttons_to_tinymce');

function osc_add_ebs_buttons_to_tinymce() {
    $ebsp_editor_opt=get_option('EBS_EDITOR_OPT','icon');
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages'))
        return;

    if (get_user_option('rich_editing') == 'true') {
        add_filter("mce_external_plugins", "osc_add_ebs_plugin");
        if($ebsp_editor_opt=='icon'){
            add_filter('mce_buttons_3', 'osc_register_ebs_button');
        } else{
            add_filter('mce_buttons', 'osc_register_ebs_dropdown');
        }
    }
}
function osc_register_ebs_dropdown($buttons){
    $buttons[] = 'oscitas_main_dropdown_button';
    return $buttons;
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
    $plugin_array['oscitas_main_dropdown']=EBS_PLUGIN_URL.'js/oscitas_main_dropdown.js';
    return $plugin_array;
    return $plugin_array;
}
