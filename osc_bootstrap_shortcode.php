<?php

/*
  Plugin Name: Easy Bootstrap Shortcode
  Plugin URI: http://www.oscitasthemes.com
  Description: Add bootstrap 3.0.3 styles to your theme by wordpress editor shortcode buttons.
  Version: 4.5.0
  Author: oscitas
  Author URI: http://www.oscitasthemes.com
  License: Under the GPL v2 or later
  Text Domain: easy-bootstrap-shortcodes
  Domain Path: /languages
 */

/*
 * function used to check whether ebs activated this check included in EBS Pro
 */
$_EBS_SESSION_STARTED = false;
function osc_ebs_plugin_exists( $prevent ) {
    return 'ebs';
}
$checkplugin=apply_filters('osc_ebs_pro_plugin_exists',false);
if(isset($checkplugin) && $checkplugin=='ebsp'):
    add_action('admin_notices', 'ebs_showAdminMessages');

    function ebs_showMessage($message, $errormsg = false)
    {
        if ($errormsg) {
            echo '<div id="message" class="error ebs_notification">';
        }
        else {
            echo '<div id="message" class="update-nag ebs_notification">';
        }
        echo '<p><strong>' . __($message, 'easy-bbotstrap-shoercodes') . '</strong></p></div>';
    }

    /*
     * Show message when EBS and EBS pro both activated
     */
    function ebs_showAdminMessages()
    {
        ebs_showMessage(__("Easy Bootstrap Shortcode Pro activated, deactivate Easy Bootstrap Shortcode free version", 'easy-bootstrap-shoercodes'), false);
    }
else:
    /*
    Define Global variable and constants
    */
    add_filter( 'osc_ebs_plugin_exists', 'osc_ebs_plugin_exists' );
    define('EBS_PLUGIN_URL',plugins_url('/',__FILE__));
    define('EBS_JS_CDN','http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js');
    define('EBS_RESPOND_CDN','http://cdnjs.cloudflare.com/ajax/libs/respond.js/1.3.0/respond.min.js');
    add_action('admin_init','check_ebsp_status');
    function check_ebsp_status(){
        $file   = basename( __FILE__ );
        $folder = basename( dirname( __FILE__ ) );
        $hook = "after_plugin_row_{$folder}/{$file}";
        add_action( $hook, 'ebsp_register_licence_key');
    }
    function ebsp_register_licence_key( $plugin_name )

    {
        $ebsprefix='ebsp';
        $plugin_name='easy-bootstrap-shortcode-pro/osc_bootstrap_shortcode.php ';
        echo '</tr><tr class="plugin-update-tr"><td colspan="3" class="plugin-update"><div class="update-message">'  . __('Easy Bootstrap Shortcode Pro also available, <a href="http://oscitasthemes.com/products/easy-bootstrap-shortcodes-pro/">click here</a> to purchase one now', 'easy-bootstrap-shoercodes') . '</div></td>';
    }

    add_action('admin_enqueue_scripts', 'osc_add_admin_ebs_scripts');
    add_action('admin_menu', 'osc_ebs_add_admin_menu');
    add_action('wp_enqueue_scripts', 'osc_add_dynamic_css',100);
    add_filter('mce_external_plugins', 'osc_editor_enable_mce');
    /*
     * Include bootstrap js and css file if activated theme is not an oscitas product
     */
    if(!apply_filters('plugin_oscitas_theme_check',false)){
        add_action('wp_enqueue_scripts', 'osc_add_frontend_ebs_scripts',-100);
    }



    register_activation_hook(__FILE__, 'osc_ebs_activate_plugin');
    register_deactivation_hook(__FILE__, 'osc_ebs_deactivate_plugin');

    /*
     * Plugin activation hook set default plugin setting on activation
     */
    function osc_ebs_activate_plugin() {
        $isSet=apply_filters('ebs_custom_option',false);
        if (!$isSet) {

            // EBS_BOOTSTRAP_JS_LOCATION   '1' - for plugin file, '2' - don't user EBS files but use from other plugin or theme, '3' - to user CDN path
            update_option( 'EBS_BOOTSTRAP_JS_LOCATION', 1 );
            update_option( 'EBS_BOOTSTRAP_JS_CDN_PATH', EBS_JS_CDN );
            update_option( 'EBS_BOOTSTRAP_RESPOND_CDN_PATH', EBS_RESPOND_CDN );
            // EBS_BOOTSTRAP_RESPOND_LOCATION   '1' - for plugin file, '2' - don't user EBS files but use from other plugin or theme, '3' - to user CDN path
            update_option('EBS_BOOTSTRAP_RESPOND_LOCATION',2);

            // EBS_BOOTSTRAP_CSS_LOCATION   '1' - for plugin file, '2' - don't user EBS files but use from other plugin or theme
            update_option( 'EBS_BOOTSTRAP_CSS_LOCATION', 1 );
            update_option( 'EBS_EDITOR_OPT','icon');
            update_option( 'EBS_EDITOR_OPT','icon');
            if(get_option('EBS_SHORTCODE_PREFIX')==false){
                update_option( 'EBS_SHORTCODE_PREFIX', '' );
            }
            update_option( 'EBS_INCLUDE_FA',1);
            update_option( 'EBS_SESSION_CLOSE',0);
            if(get_option('EBS_CUSTOM_CSS')==''){
                update_option( 'EBS_CUSTOM_CSS','');
            }
        }

    }

    /*
     * Plugin deactivation hook, delete option on deactivation
     */
    function osc_ebs_deactivate_plugin() {
        $isSet=apply_filters('ebs_custom_option',false);
        if (!$isSet) {
            delete_option( 'EBS_BOOTSTRAP_JS_LOCATION' );
            delete_option( 'EBS_BOOTSTRAP_JS_CDN_PATH' );
            delete_option( 'EBS_BOOTSTRAP_CSS_LOCATION');
            delete_option( 'EBS_BOOTSTRAP_RESPOND_LOCATION' );
            delete_option( 'EBS_BOOTSTRAP_RESPOND_CDN_PATH' );
            delete_option('EBS_EDITOR_OPT');
            delete_option('EBS_INCLUDE_FA');
            delete_option('EBS_SESSION_CLOSE');
        }
    }

    /*
     * Add plugin setting page on plugin listing page after activation
     */
    function osc_ebs_settings_link( $links ) {
        $isSet=apply_filters('ebs_custom_option',false);
        if (!$isSet) {
            $settings_link = '<a href="admin.php?page=ebs/ebs-settings.php">'.__('Settings', 'easy-bootstrap-shoercodes').'</a>';
            array_push( $links, $settings_link );
        }
        return $links;
    }

    add_filter( "plugin_action_links_".plugin_basename( __FILE__ ), 'osc_ebs_settings_link' );

    /*
     * Create EBS admin Menu
     */
    function osc_ebs_add_admin_menu() {
        $isSet=apply_filters('ebs_custom_option',false);
        if (!$isSet) {
            add_menu_page(__('EBS Settings', 'easy-bootstrap-shoercodes'), __('EBS Settings', 'easy-bootstrap-shoercodes'), 'manage_options', 'ebs/ebs-settings.php', 'osc_ebs_setting_page', plugins_url('/images/icon.png', __FILE__));

            $sub_page= add_submenu_page( 'ebs/ebs-settings.php',__('osCitas Offers', 'easy-bootstrap-shoercodes'), __('osCitas Offers', 'easy-bootstrap-shoercodes'), 'manage_options', 'ebs-pro-demo', 'osc_ebs_pro_demo_page' );
            add_action('admin_print_styles-' . $sub_page, 'ebsProDemoPage_register_admin_styles');
        }
    }


    /*
     * Add EBS pto Demo page css
     */
    function ebsProDemoPage_register_admin_styles(){
        wp_enqueue_style('ebs_pro_demo', EBS_PLUGIN_URL.'styles/ebs_pro_demo.css');
    }
    function osc_ebs_pro_demo_page(){
        include 'lib/ebspro-demo.php';
    }

/*
 * Render EBS Setting Page & update EBS options
 */
    function osc_ebs_setting_page() {
        if (isset($_POST['ebs_submit'])) {
            update_option( 'EBS_BOOTSTRAP_JS_LOCATION', isset($_POST['b_js'])?$_POST['b_js']:1 );
            update_option( 'EBS_BOOTSTRAP_JS_CDN_PATH',isset($_POST['cdn_path'])? $_POST['cdn_path']:EBS_JS_CDN );
            update_option( 'EBS_BOOTSTRAP_CSS_LOCATION', isset($_POST['b_css'])?$_POST['b_css']:1 );
            update_option( 'EBS_BOOTSTRAP_RESPOND_LOCATION', isset($_POST['respond_js'])?$_POST['respond_js']:2 );
            update_option( 'EBS_BOOTSTRAP_RESPOND_CDN_PATH', isset($_POST['respond_cdn_path'])?$_POST['respond_cdn_path']:EBS_RESPOND_CDN );
            update_option( 'EBS_EDITOR_OPT', isset($_POST['ebsp_editor_opt'])?$_POST['ebsp_editor_opt']:'icon' );
            update_option( 'EBS_CUSTOM_CSS', isset($_POST['ebs_custom_css'])?$_POST['ebs_custom_css']:'' );
            update_option( 'EBS_INCLUDE_FA', isset($_POST['fa_icon'])?$_POST['fa_icon']:'' );
            update_option( 'EBS_SESSION_CLOSE', isset($_POST['use_ebs_session_close'])
                ?$_POST['use_ebs_session_close']:'0' );
            ebs_session_start();
            $_SESSION['ebs_dynamic_css'] =$_POST['ebs_custom_css'];
            ebs_session_end();
            update_option( 'EBS_SHORTCODE_PREFIX', isset($_POST['shortcode_prefix'])?$_POST['shortcode_prefix']:'' );

            $fa_icon=isset($_POST['fa_icon'])?$_POST['fa_icon']:'' ;
            $js =isset($_POST['b_js'])?$_POST['b_js']:1;
            $cdn = isset($_POST['cdn_path'])? $_POST['cdn_path']:EBS_JS_CDN;
            $css = isset($_POST['b_css'])?$_POST['b_css']:1;
            $respond = isset($_POST['respond_js'])?$_POST['respond_js']:2;
            $respondcdn = isset($_POST['respond_cdn_path'])?$_POST['respond_cdn_path']:EBS_RESPOND_CDN;
            $ebsp_editor_opt=isset($_POST['ebsp_editor_opt'])?$_POST['ebsp_editor_opt']:'icon' ;
            $ebs_custom_css=isset($_POST['ebs_custom_css'])?$_POST['ebs_custom_css']:'' ;
            $shortcode_prefix = $_POST['shortcode_prefix'];
        } else {
            $js = get_option( 'EBS_BOOTSTRAP_JS_LOCATION', 1 );
            $cdn = get_option( 'EBS_BOOTSTRAP_JS_CDN_PATH', EBS_JS_CDN );
            $css = get_option( 'EBS_BOOTSTRAP_CSS_LOCATION', 1 );
            $respond = get_option( 'EBS_BOOTSTRAP_RESPOND_LOCATION', 2 );
            $respondcdn = get_option( 'EBS_BOOTSTRAP_RESPOND_CDN_PATH', EBS_RESPOND_CDN );
            $ebsp_editor_opt=get_option('EBS_EDITOR_OPT','icon');
            $ebs_custom_css=get_option('EBS_CUSTOM_CSS','');
            $shortcode_prefix=get_option('EBS_SHORTCODE_PREFIX','');
            $fa_icon=get_option('EBS_INCLUDE_FA',1);
            $use_ebs_session_close=get_option('EBS_SESSION_CLOSE',0);
        }
        include 'ebs_settings.php';
    }

    /*
     * Define global JS variable for admin panel
     */
    add_action('admin_head', 'osc_ebs_ajax_ul');
    function osc_ebs_ajax_ul(){
        $ebsp_editor_opt=get_option('EBS_EDITOR_OPT','icon');

        ?>
        <script type="text/javascript">
            var ebs_ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';
            var ebs_url='<?php echo EBS_PLUGIN_URL;?>';
            var ebs_editor_opt='<?php echo $ebsp_editor_opt; ?>'
            var ebs_dropdown_obj='<?php echo json_encode(ebs_shortcodes()); ?>';
            var ebs_dropdown_grp='<?php echo json_encode(ebs_groups()); ?>';

        </script>
    <?php
    }

    /*
     * Add css and scripts to admin panel
     */
    function osc_add_admin_ebs_scripts() {
        global $pagenow;
        $fa_icon=get_option('EBS_INCLUDE_FA',1);
        $use_ebs_session_close=get_option('EBS_SESSION_CLOSE',0);
        $screen = get_current_screen();
        if ($screen->id == 'toplevel_page_ebs/ebs-settings') {
            wp_enqueue_style('ebs-setting', plugins_url('/styles/ebs-setting.min.css', __FILE__));
        }
        wp_enqueue_script('ebs-main', plugins_url('/js/ebs_main.js', __FILE__));
        $shortcode_prefix=get_option('EBS_SHORTCODE_PREFIX','');
        wp_localize_script( 'ebs-main', 'ebs', array(
            'font_awe'=>$fa_icon,
            'ebs_prefix'=>$shortcode_prefix
        ));

    }

    /*
     * Add additional css to tinymce editor
     */
    add_action('admin_print_styles','ebsp_tinymce_button_css');
    function ebsp_tinymce_button_css() {

        wp_register_style('ebsp_tinymce_button_css', plugins_url('/styles/editor.css', __FILE__), array());

        wp_enqueue_style('ebsp_tinymce_button_css');


        wp_enqueue_style('dashicons');

    }
/*
 * Add css to tinymce editor
 */
    function osc_editor_enable_mce($plugin_array){
        $fa_icon=get_option('EBS_INCLUDE_FA',1);
        $use_ebs_session_close=get_option('EBS_SESSION_CLOSE',0);
        wp_enqueue_script('jquery');
        wp_enqueue_style('thickbox');
        wp_enqueue_script('media-upload');
        wp_enqueue_script('thickbox');
        wp_enqueue_style('wp-color-picker');
        wp_enqueue_script('wp-color-picker');
        wp_enqueue_script('jquery-ui-slider');
//        wp_enqueue_script('jquery-ui-dialog');
//        wp_enqueue_style ( 'wp-jquery-ui-dialog');
        wp_enqueue_style('ebs-magnific-popup', plugins_url('/styles/magnific-popup.css', __FILE__));  wp_enqueue_script('ebs-magnific-popup', plugins_url('/js/magnific-popup.js', __FILE__));
        wp_enqueue_style('EBS_jquery-ui-slider-css', plugins_url('/styles/slider.css', __FILE__));
        if (!apply_filters('ebs_bootstrap_icon_css_url',false)) {
            wp_enqueue_style('bootstrap-icon', plugins_url('/styles/bootstrap-icon.min.css', __FILE__));
        } else{
            wp_enqueue_style('bootstrap-icon', apply_filters('ebs_bootstrap_icon_css_url',false));
        }

        if (!apply_filters('ebs_custom_bootstrap_admin_css',false)) {
            wp_enqueue_style('ebs_bootstrap_admin', plugins_url('/styles/bootstrap_admin.min.css', __FILE__));
        } if($fa_icon==1){
            wp_enqueue_style('bootstrap-fa-icon', plugins_url('/styles/font-awesome.min.css', __FILE__));
        }
        return $plugin_array;
    }

    /*
     * Add dynamic css to ebs frontend
     */
    function osc_add_dynamic_css(){
        ebs_session_start();
        $_SESSION['ebs_dynamic_css'] = get_option('EBS_CUSTOM_CSS','');
        ebs_session_end();
        wp_enqueue_style('ebs_dynamic_css', plugins_url('/styles/ebs_dynamic_css.php', __FILE__));

    }

    /*
     * Add bootstrap css and js to frontend if current theme is not an oscitas theme
     */
    function osc_add_frontend_ebs_scripts() {
        wp_enqueue_script('jquery');
        $isSet=apply_filters('ebs_custom_option',false);
        if (!$isSet) {
            $js = get_option( 'EBS_BOOTSTRAP_JS_LOCATION', 1 );
            $respond = get_option( 'EBS_BOOTSTRAP_RESPOND_LOCATION', 2 );
            $cdn = get_option( 'EBS_BOOTSTRAP_JS_CDN_PATH', EBS_JS_CDN );
            $respondcdn = get_option( 'EBS_BOOTSTRAP_RESPOND_CDN_PATH', EBS_RESPOND_CDN );
            $css = get_option( 'EBS_BOOTSTRAP_CSS_LOCATION', 1 );
            $fa_icon=get_option('EBS_INCLUDE_FA',1);
            $use_ebs_session_close=get_option('EBS_SESSION_CLOSE',0);
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
            }
            elseif($css==3){
                if (!apply_filters('ebs_no_bootstrap_theme_css_url',false)) {
                    wp_enqueue_style('bootstrap', plugins_url('/styles/bootstrap-oscitas.css', __FILE__));
                } else {
                    wp_enqueue_style('bootstrap', apply_filters('ebs_no_bootstrap_theme_css_url',false));
                }

            }
            else {
                if (!apply_filters('ebs_bootstrap_icon_css_url',false)) {
                    //wp_enqueue_style('bootstrap-icon', plugins_url('/styles/bootstrap-icon.min.css', __FILE__));
                } else{
                    wp_enqueue_style('bootstrap-icon', apply_filters('ebs_bootstrap_icon_css_url',false));
                }
            }
            if($fa_icon==1){
                if(!apply_filters('ebs_bootstrap_fa_icon_include_from_theme_or_plugin',false)){
                    if (!apply_filters('ebs_bootstrap_fa_icon_frontend_css_url',false)) {
                        wp_enqueue_style('bootstrap-fa-icon', plugins_url('/styles/font-awesome.min.css', __FILE__));
                    } else{
                        wp_enqueue_style('bootstrap-fa-icon', apply_filters('ebs_bootstrap_fa_icon_frontend_css_url',false));
                    }
                }
            }
        }
    }

// Shortcodes

    add_action('init','ebs_session_start');
    function ebs_session_start() {
        global $_EBS_SESSION_STARTED;
        if(!session_id()){
            @session_start();
            $_EBS_SESSION_STARTED = true;
        }
    }

    function ebs_session_end() {
        global $_EBS_SESSION_STARTED;
        if ($_EBS_SESSION_STARTED && get_option('EBS_SESSION_CLOSE',0)) {
            @session_write_close();
            $_EBS_SESSION_STARTED = false;
        }
    }

    include('shortcode/functions.php');
    include('lib/widget.php');
endif;
