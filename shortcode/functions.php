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


add_action( 'admin_enqueue_scripts', 'ebs_js_translation_assets' );
function ebs_js_translation_assets($hook) {
    wp_enqueue_script( 'ebs-js-translation-scripts', plugin_dir_url( __FILE__ ) . 'scripts' );
    wp_localize_script( 'ebs-js-translation-scripts', 'ebsjstrans', array(

    	'addnewitem' => __( 'Add New Item', 'easy-bootstrap-shortcodes' ),
        'alignment' => __( 'Alignment', 'easy-bootstrap-shortcodes' ),
    	'arrow' => __( 'Arrow', 'easy-bootstrap-shortcodes' ),
    	'auto' => __( 'Auto', 'easy-bootstrap-shortcodes' ),
    	'animated' => __( 'Animated', 'easy-bootstrap-shortcodes' ),
    	'add' => __( 'Add', 'easy-bootstrap-shortcodes' ),
    	'active' => __( 'Active', 'easy-bootstrap-shortcodes' ),
    	'alternate' => __( 'Alternate', 'easy-bootstrap-shortcodes' ),
    	'accordionnumber' => __( 'Accordion Number', 'easy-bootstrap-shortcodes' ),
    	'' => __( '', 'easy-bootstrap-shortcodes' ),




    	'bgcolor' => __( 'Background Color', 'easy-bootstrap-shortcodes' ),
    	'bg' => __( 'Background', 'easy-bootstrap-shortcodes' ),
        'badge' => __( 'Badge', 'easy-bootstrap-shortcodes' ),
        'btngrpftrs' => __( 'Button Group Features', 'easy-bootstrap-shortcodes' ),
    	'button' => __( 'Button', 'easy-bootstrap-shortcodes' ),
    	'bottom' => __( 'Bottom', 'easy-bootstrap-shortcodes' ),
    	'btngrp_items' => __( 'Button Group Items', 'easy-bootstrap-shortcodes' ),
    	'bar' => __( 'Bar', 'easy-bootstrap-shortcodes' ),
    	'border' => __( 'Border', 'easy-bootstrap-shortcodes' ),
    	'bullets' => __( 'Bullets', 'easy-bootstrap-shortcodes' ),
    	'bordered' => __( 'Bordered', 'easy-bootstrap-shortcodes' ),
    	'' => __( '', 'easy-bootstrap-shortcodes' ),




        'customclass' => __( 'Custom Class', 'easy-bootstrap-shortcodes' ),
    	'color' => __( 'Color', 'easy-bootstrap-shortcodes' ),
    	'content' => __( 'Content', 'easy-bootstrap-shortcodes' ),
        'close' => __( 'Close', 'easy-bootstrap-shortcodes' ),
        'circle' => __( 'Circle', 'easy-bootstrap-shortcodes' ),
        'check' => __( 'Check', 'easy-bootstrap-shortcodes' ),
        'click' => __( 'Click', 'easy-bootstrap-shortcodes' ),
        'custom' => __( 'Custom', 'easy-bootstrap-shortcodes' ),
    	'controls' => __( 'Controls', 'easy-bootstrap-shortcodes' ),
    	'cyclic' => __( 'Cyclic', 'easy-bootstrap-shortcodes' ),
    	'caption' => __( 'Caption', 'easy-bootstrap-shortcodes' ),
    	'columns' => __( 'Columns', 'easy-bootstrap-shortcodes' ),
    	'column' => __( 'Column', 'easy-bootstrap-shortcodes' ),
    	'clear' => __( 'Clear', 'easy-bootstrap-shortcodes' ),
    	'' => __( '', 'easy-bootstrap-shortcodes' ),





        'default' => __( 'Default', 'easy-bootstrap-shortcodes' ),
        'danger' => __( 'Danger', 'easy-bootstrap-shortcodes' ),
        'description' => __( 'Description', 'easy-bootstrap-shortcodes' ),
        'dropdown' => __( 'Drop Down', 'easy-bootstrap-shortcodes' ),
        'dropup' => __( 'Drop Up', 'easy-bootstrap-shortcodes' ),
    	'dotted' => __( 'Dotted', 'easy-bootstrap-shortcodes' ),
    	'dashed' => __( 'Dashed', 'easy-bootstrap-shortcodes' ),
    	'double' => __( 'Double', 'easy-bootstrap-shortcodes' ),
    	'diagonal' => __( 'Diagonal', 'easy-bootstrap-shortcodes' ),
    	'doublethickthin' => __( 'Double Thick Thin', 'easy-bootstrap-shortcodes' ),
    	'doublefadecorner' => __( 'Double Fade Corner', 'easy-bootstrap-shortcodes' ),
    	'division' => __( 'Division', 'easy-bootstrap-shortcodes' ),
    	'' => __( '', 'easy-bootstrap-shortcodes' ),





        'exsmall' => __( 'Ex-small', 'easy-bootstrap-shortcodes' ),
        'enternumval' => __( 'Enter a numeric value', 'easy-bootstrap-shortcodes' ),
    	'effect' => __( 'Effect', 'easy-bootstrap-shortcodes' ),
    	'' => __( '', 'easy-bootstrap-shortcodes' ),





        'floatright' => __( 'Float Right', 'easy-bootstrap-shortcodes' ),
        'features' => __( 'Features', 'easy-bootstrap-shortcodes' ),
        'font' => __( 'Font', 'easy-bootstrap-shortcodes' ),
        'footer' => __( 'Footer', 'easy-bootstrap-shortcodes' ),
        'fadecorner' => __( 'Fade Corner', 'easy-bootstrap-shortcodes' ),
        'foreground' => __( 'Foreground', 'easy-bootstrap-shortcodes' ),
    	'for' => __( 'For', 'easy-bootstrap-shortcodes' ),
    	'four' => __( 'Four', 'easy-bootstrap-shortcodes' ),
    	'five' => __( 'Five', 'easy-bootstrap-shortcodes' ),
    	'' => __( '', 'easy-bootstrap-shortcodes' ),





        'grp' => __( 'Group', 'easy-bootstrap-shortcodes' ),
        'goes' => __( 'Goes', 'easy-bootstrap-shortcodes' ),
    	'' => __( '', 'easy-bootstrap-shortcodes' ),





        'horizontal' => __( 'Horizontal', 'easy-bootstrap-shortcodes' ),
        'heading' => __( 'Heading', 'easy-bootstrap-shortcodes' ),
        'hover' => __( 'Hover', 'easy-bootstrap-shortcodes' ),
    	'here' => __( 'Here', 'easy-bootstrap-shortcodes' ),
    	'hide' => __( 'Hide', 'easy-bootstrap-shortcodes' ),
    	'' => __( '', 'easy-bootstrap-shortcodes' ),




        'insert' => __( 'Insert', 'easy-bootstrap-shortcodes' ),
        'information' => __( 'Information', 'easy-bootstrap-shortcodes' ),
        'icon' => __( 'Icon', 'easy-bootstrap-shortcodes' ),
        'item' => __( 'Item', 'easy-bootstrap-shortcodes' ),
    	'image' => __( 'Image', 'easy-bootstrap-shortcodes' ),
    	'include' => __( 'Include', 'easy-bootstrap-shortcodes' ),
    	'interval' => __( 'Interval', 'easy-bootstrap-shortcodes' ),
    	'' => __( '', 'easy-bootstrap-shortcodes' ),





        'justified' => __( 'Justified', 'easy-bootstrap-shortcodes' ),
    	'jumbotron' => __( 'Jumbotron', 'easy-bootstrap-shortcodes' ),
    	'' => __( '', 'easy-bootstrap-shortcodes' ),





        'large' => __( 'Large', 'easy-bootstrap-shortcodes' ),
        'link' => __( 'Link', 'easy-bootstrap-shortcodes' ),
        'left' => __( 'Left', 'easy-bootstrap-shortcodes' ),
        'list' => __( 'List', 'easy-bootstrap-shortcodes' ),
    	'label' => __( 'Label', 'easy-bootstrap-shortcodes' ),
    	'' => __( '', 'easy-bootstrap-shortcodes' ),





        'makeblock' => __( 'Make block', 'easy-bootstrap-shortcodes' ),
    	'minus' => __( 'Minus', 'easy-bootstrap-shortcodes' ),
    	'margin' => __( 'Margin', 'easy-bootstrap-shortcodes' ),
    	'more' => __( 'More', 'easy-bootstrap-shortcodes' ),
    	'me' => __( 'Me', 'easy-bootstrap-shortcodes' ),
    	'medium' => __( 'Medium', 'easy-bootstrap-shortcodes' ),
    	'' => __( '', 'easy-bootstrap-shortcodes' ),





        'newwindow' => __( 'Open in New Window', 'easy-bootstrap-shortcodes' ),
        'newtarget' => __( 'Open in new window', 'easy-bootstrap-shortcodes' ),
        'noof' => __( 'No of', 'easy-bootstrap-shortcodes' ),
    	'notification' => __( 'Notification', 'easy-bootstrap-shortcodes' ),
    	'navigation' => __( 'Navigation', 'easy-bootstrap-shortcodes' ),
    	'new' => __( 'New', 'easy-bootstrap-shortcodes' ),
    	'' => __( '', 'easy-bootstrap-shortcodes' ),




        'option' => __( 'Option', 'easy-bootstrap-shortcodes' ),
        'on' => __( 'On', 'easy-bootstrap-shortcodes' ),
    	'offset' => __( 'Offset', 'easy-bootstrap-shortcodes' ),
    	'one' => __( 'One', 'easy-bootstrap-shortcodes' ),
    	'' => __( '', 'easy-bootstrap-shortcodes' ),




        'primary' => __( 'Primary', 'easy-bootstrap-shortcodes' ),
    	'plus' => __( 'Plus', 'easy-bootstrap-shortcodes' ),
    	'popover' => __( 'Popover', 'easy-bootstrap-shortcodes' ),
    	'panel' => __( 'Panel', 'easy-bootstrap-shortcodes' ),
    	'progress' => __( 'Progress', 'easy-bootstrap-shortcodes' ),
    	'pause' => __( 'Pause', 'easy-bootstrap-shortcodes' ),
    	'' => __( '', 'easy-bootstrap-shortcodes' ),




        'rel' => __( 'Rel', 'easy-bootstrap-shortcodes' ),
        'right' => __( 'Right', 'easy-bootstrap-shortcodes' ),
        'rounded' => __( 'Rounded', 'easy-bootstrap-shortcodes' ),
        'rule' => __( 'Rule', 'easy-bootstrap-shortcodes' ),
        'radius' => __( 'Radius', 'easy-bootstrap-shortcodes' ),
        'read' => __( 'Read', 'easy-bootstrap-shortcodes' ),
        'rows' => __( 'Rows', 'easy-bootstrap-shortcodes' ),
        'row' => __( 'Row', 'easy-bootstrap-shortcodes' ),
        'responsive' => __( 'Responsive', 'easy-bootstrap-shortcodes' ),
        '' => __( '', 'easy-bootstrap-shortcodes' ),




    	'size' => __( 'Size', 'easy-bootstrap-shortcodes' ),
    	'style' => __( 'Style', 'easy-bootstrap-shortcodes' ),
    	'small' => __( 'Small', 'easy-bootstrap-shortcodes' ),
        'simple' => __( 'Simple', 'easy-bootstrap-shortcodes' ),
        'success' => __( 'Success', 'easy-bootstrap-shortcodes' ),
        'select' => __( 'Select', 'easy-bootstrap-shortcodes' ),
        'split' => __( 'Split', 'easy-bootstrap-shortcodes' ),
        'shape' => __( 'Shape', 'easy-bootstrap-shortcodes' ),
        'show' => __( 'Show', 'easy-bootstrap-shortcodes' ),
        'stripped' => __( 'Stripped', 'easy-bootstrap-shortcodes' ),
        'shadow' => __( 'Shadow', 'easy-bootstrap-shortcodes' ),
        'servicebox' => __( 'Service Box', 'easy-bootstrap-shortcodes' ),
        'slider' => __( 'Slider', 'easy-bootstrap-shortcodes' ),
        'slides' => __( 'Slides', 'easy-bootstrap-shortcodes' ),
        'self' => __( 'Self', 'easy-bootstrap-shortcodes' ),
        'screen' => __( 'Screen', 'easy-bootstrap-shortcodes' ),
        'specification' => __( 'Specification', 'easy-bootstrap-shortcodes' ),
        '' => __( '', 'easy-bootstrap-shortcodes' ),



        'type' => __( 'Type', 'easy-bootstrap-shortcodes' ),
        'title' => __( 'Title', 'easy-bootstrap-shortcodes' ),
        'text' => __( 'Text', 'easy-bootstrap-shortcodes' ),
        'thumnail' => __( 'Thumbnail', 'easy-bootstrap-shortcodes' ),
        'top' => __( 'Top', 'easy-bootstrap-shortcodes' ),
        'trigger' => __( 'Trigger', 'easy-bootstrap-shortcodes' ),
        'thick' => __( 'Thick', 'easy-bootstrap-shortcodes' ),
        'thin' => __( 'Thin', 'easy-bootstrap-shortcodes' ),
        'table' => __( 'Table', 'easy-bootstrap-shortcodes' ),
        'tabnum' => __( 'Tab number', 'easy-bootstrap-shortcodes' ),
        'tab' => __( 'Tab', 'easy-bootstrap-shortcodes' ),
        'target' => __( 'Target', 'easy-bootstrap-shortcodes' ),
        'toggle' => __( 'Toggle', 'easy-bootstrap-shortcodes' ),
        'tooltip' => __( 'Tooltip', 'easy-bootstrap-shortcodes' ),
        'two' => __( 'Two', 'easy-bootstrap-shortcodes' ),
        'three' => __( 'Three', 'easy-bootstrap-shortcodes' ),
        '' => __( '', 'easy-bootstrap-shortcodes' ),


        'upload' => __( 'Upload', 'easy-bootstrap-shortcodes' ),
        '' => __( '', 'easy-bootstrap-shortcodes' ),



    	'vertical' => __( 'Vertical', 'easy-bootstrap-shortcodes' ),
    	'value' => __( 'Value', 'easy-bootstrap-shortcodes' ),
        '' => __( '', 'easy-bootstrap-shortcodes' ),

    	'warning' => __( 'Warning', 'easy-bootstrap-shortcodes' ),
    	'wave' => __( 'Wave', 'easy-bootstrap-shortcodes' ),
    	'width' => __( 'Width', 'easy-bootstrap-shortcodes' ),
    	'well' => __( 'Well', 'easy-bootstrap-shortcodes' ),
    	'' => __( '', 'easy-bootstrap-shortcodes' ),


        'xsmall' => __( 'X-small', 'easy-bootstrap-shortcodes' ),
        '' => __( '', 'easy-bootstrap-shortcodes' ),
        '' => __( '', 'easy-bootstrap-shortcodes' ),



    	'your' => __( 'Your', 'easy-bootstrap-shortcodes' ),

    	'' => __( '', 'easy-bootstrap-shortcodes' ),
    	'' => __( '', 'easy-bootstrap-shortcodes' ),
    	'' => __( '', 'easy-bootstrap-shortcodes' ),


    	'enterval0to100' => __( 'Enter a numeric value between 0 to 100, Default value is 50', 'easy-bootstrap-shortcodes' ),
    	'enternumvaleg20' => __( 'Enter a numeric value Ex. 20', 'easy-bootstrap-shortcodes' ),
    	'cantchange' => __( "Can't Change, exceeds the limit", 'easy-bootstrap-shortcodes' ),
    	'youcanselect' => __( 'You can select different column style for different screens such as medium, small(e.g < 992px), x-small(e.g < 768px)', 'easy-bootstrap-shortcodes' ),
    	'' => __( '', 'easy-bootstrap-shortcodes' ),


    ));

    // '+ebsjstrans.+'
}