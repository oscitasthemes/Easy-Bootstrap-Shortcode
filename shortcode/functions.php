<?php
/*
 * Add Bootstrap container class if no bootstrap option chosen in css inclusion
 */
// Add Shortcode buttons in TinyMCE
$css = get_option( 'EBS_BOOTSTRAP_CSS_LOCATION', 1 );
if($css==3){
    define('EBS_CONTAINER_CLASS',' oscitas-bootstrap-container');
    define('EBS_POPOVER_TEMPLATE','<div class="popover'.EBS_CONTAINER_CLASS.'"><div class="arrow'.EBS_CONTAINER_CLASS.'"></div><h3 class="popover-title'.EBS_CONTAINER_CLASS.'"></h3><div class="popover-content'.EBS_CONTAINER_CLASS.' "></div></div>');
    define('EBS_TOOLTIP_TEMPLATE','<div class="tooltip'.EBS_CONTAINER_CLASS.'"><div class="tooltip-arrow'.EBS_CONTAINER_CLASS.'"></div><div class="tooltip-inner'.EBS_CONTAINER_CLASS.'"></div></div>');
} else{
    define('EBS_CONTAINER_CLASS','');
    define('EBS_POPOVER_TEMPLATE','');
    define('EBS_TOOLTIP_TEMPLATE','');
}

/*
 * EBS shortcode list
 */
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
    'servicebox',
    'slider',
    'badge',

);
function ebs_groups($grps=array()){
    $grps=array('basic'=>array(
        'name'=>'Basic Elements',
        'icon'=>'elements.png'
    ),'interactive'=>array('name'=>'Interactive', 'icon'=>'interaction.png'),'content'=>array('name'=>'Content', 'icon'=>'content.png'),
        'miscellaneous'=>array('name'=>'Miscellaneous', 'icon'=>'misc.png'),'columns'=>array('name'=>'Columns', 'icon'=>'column.png')
    );
    return $grps;
}
function ebs_shortcodes($shortcodes=array()){
    $shortcodes=array(
        'buttons'=>array('group'=>'basic',
            'name'=>'Button',
            'width'=>800,
            'height'=>''
        ),
        'btngrp'=>array('group'=>'basic',
            'name'=>'Button Group',
            'width'=>1200,
            'height'=>''
        ),
        'btngrptool'=>array('group'=>'basic',
            'name'=>'Button Group Toolbar',
            'width'=>'',
            'height'=>''
        ),
        'notifications'=>array('group'=>'basic',
            'name'=>'Notifications',
            'width'=>'',
            'height'=>''
        ),
        'tooltip'=>array('group'=>'basic',
            'name'=>'Tooltip',
            'width'=>'',
            'height'=>''
        ),
        'oscpopover'=>array('group'=>'basic',
            'name'=>'Popover',
            'width'=>'',
            'height'=>''
        ),
        'dropdown'=>array('group'=>'basic',
            'name'=>'Button Dropdown',
            'width'=>'',
            'height'=>''
        ),
        'progressbar'=>array('group'=>'basic',
            'name'=>'Progress Bar',
            'width'=>800,
            'height'=>''
        ),
        'toggles'=>array('group'=>'interactive',
            'name'=>'Accordion',
            'width'=>980,
            'height'=>''
        ),

        'tabs'=>array('group'=>'interactive',
            'name'=>'Tabs',
            'width'=>1170,
            'height'=>''
        ),
        'tables'=>array('group'=>'interactive',
            'name'=>'Tables',
            'width'=>'',
            'height'=>''
        ),
        'panel'=>array('group'=>'interactive',
            'name'=>'Panel',
            'width'=>'',
            'height'=>''
        ),
        'slider'=>array('group'=>'interactive',
            'name'=>'Slider',
            'width'=>1100,
            'height'=>''
        ),
        'lists'=>array('group'=>'content',
            'name'=>'List',
            'width'=>800,
            'height'=>''
        ),
        'iconhead'=>array('group'=>'content',
            'name'=>'Icon Heading',
            'width'=>800,
            'height'=>''
        ),
        'labels'=>array('group'=>'content',
            'name'=>'Label',
            'width'=>'',
            'height'=>''
        ),
        'well'=>array('group'=>'content',
            'name'=>'Well',
            'width'=>'',
            'height'=>''
        ),
        'deslist'=>array('group'=>'content',
            'name'=>'Description List',
            'width'=>'',
            'height'=>''
        ),
        'servicebox'=>array('group'=>'content',
            'name'=>'Servicebox',
            'width'=>800,
            'height'=>''
        ),
        'thumbnail'=>array('group'=>'miscellaneous',
            'name'=>'Responsive Image',
            'width'=>800,
            'height'=>''
        ),
        'icon'=>array('group'=>'miscellaneous',
            'name'=>'Icon',
            'width'=>800,
            'height'=>''
        ),
        'image'=>array('group'=>'miscellaneous',
            'name'=>'Image Effects',
            'width'=>800,
            'height'=>''
        ),
        'wpcolumns'=>array('group'=>'columns',
            'name'=>'Columns',
            'width'=>1094,
            'height'=>''
        )

    );


    return $shortcodes;
}

/*
 * include each shortcode php file
 */
foreach ($elements as $element) {
    include( $element . '/plugin_shortcode.php');
}

add_action('init', 'osc_add_ebs_buttons_to_tinymce');
/*
 * Add each shortcode js to tinymce editor and create button for it
 */
function osc_add_ebs_buttons_to_tinymce() {
    $ebsp_editor_opt=get_option('EBS_EDITOR_OPT','icon');
    if (!current_user_can('edit_posts') && !current_user_can('edit_pages'))
        return;

    if (get_user_option('rich_editing') == 'true') {
        add_filter("mce_external_plugins", "osc_add_ebs_plugin");
        if($ebsp_editor_opt=='icon'){
            add_filter('mce_buttons_3', 'osc_register_ebs_button',1375.261);
        } else{
            add_filter('mce_buttons', 'osc_register_ebs_dropdown',1375.261);
        }
    }
}

/*
 * Create EBS dropdown button
 */
function osc_register_ebs_dropdown($buttons){
    $buttons[] = 'oscitas_main_dropdown_button';
    return $buttons;
}
/*
 * Create EBS button for each shortcode
 */
function osc_register_ebs_button($buttons) {
    global $elements;
    foreach ($elements as $element) {
        $buttons[] = 'oscitas' . $element;
    }
    return $buttons;
}

/*
 * Include shortcode js
 */
function osc_add_ebs_plugin($plugin_array) {
    global $elements;
    foreach ($elements as $element) {
        $plugin_array['oscitas' . $element] = plugins_url('', __FILE__) . '/' . $element . '/' . $element . '_plugin.js';
    }
    $version=floatval(get_bloginfo('version'));
    if($version<3.9){
        $plugin_array['oscitas_main_dropdown']=EBS_PLUGIN_URL.'js/oscitas_main_dropdown.js';
    } else{
        $plugin_array['oscitas_main_dropdown']=EBS_PLUGIN_URL.'js/oscitas_dropdown_3_9.js';
    }
    return $plugin_array;

}

/*
 * Provide shortcode prefix support
 */
function ebs_backward_compatibility_callback($shortcode,$callback){

$val=get_option('EBS_SHORTCODE_PREFIX','');
    add_shortcode($val.$shortcode, $callback);

}