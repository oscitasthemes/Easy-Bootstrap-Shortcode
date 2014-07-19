<?php
/****************************************************************
* Write these filter into your theme's functions.php to make plugin
* compatible to your theme, You can use all of selective filters
* according to your need.
*****************************************************************/

/*
  * Filter for Custom options
  */
function apply_ebs_custom_option( $prevent ) {
	return true;
}
add_filter( 'ebs_custom_option', 'apply_ebs_custom_option' );



/*
 *Filter for bootstrap_admin.css
 */
function apply_ebs_custom_bootstrap_admin_css( $prevent ) {
	return true;
}
add_filter( 'ebs_custom_bootstrap_admin_css', 'apply_ebs_custom_bootstrap_admin_css' );


/*
  * Filter for bootstrap.min.js url this filter is only applicable if you selected js inclusion from plugin in EBS Settings
  */

function apply_ebs_bootstrap_js_url( $url ) {
	$ebs_js_url='';// write your desired bootstrap.min.js url here
	return $ebs_js_url;
}
add_filter( 'ebs_bootstrap_js_url', 'apply_ebs_bootstrap_js_url' );


/*
  * Filter for bootstrap.min.js CDN path this filter is only applicable if you selected js inclusion from CDN in EBS Settings
  */

function apply_ebs_bootstrap_js_cdn( $url ) {
	$ebs_cdn_url='';// write your bootstrap.min.js cdn path here
	return $ebs_cdn_url;
}
add_filter( 'ebs_bootstrap_js_cdn', 'apply_ebs_bootstrap_js_cdn' );

function apply_ebs_bootstrap_respond_url( $url ) {
	$ebs_respond_url='';// write your desired bootstrap.min.js url here
	return $ebs_respond_url;
}
add_filter( 'ebs_bootstrap_respond_url', 'apply_ebs_bootstrap_respond_url' );

/*
  * Filter for respond.min.js CDN path this filter is only applicable if you selected js inclusion from CDN in EBS Settings
  */

function apply_ebs_bootstrap_respond_cdn( $url ) {
	$ebs_respond_cdn_url='';// write your bootstrap.min.js cdn path here
	return $ebs_respond_cdn_url;
}
add_filter( 'ebs_bootstrap_respond_cdn', 'apply_ebs_bootstrap_respond_cdn' );

/*
  * Filter for bootstrap.min.css urlthis filter is only applicable if you selected css inclusion from plugin in EBS Settings
  */

function apply_ebs_bootstrap_css_url( $url ) {
	$ebs_css_url='';// write your bootstrap.min.css  url here
	return $ebs_css_url;
}
add_filter( 'ebs_bootstrap_css_url', 'apply_ebs_bootstrap_css_url' );

/*
  * Filter for custom bootstrap css when your theme is not a bootstrap theme. this filter is only applicable if you selected css inclusion option as 'no bootstrap theme'
  */

function apply_ebs_no_bootstrap_theme_css_url( $url ) {
	$ebs_nobs_css_url='';// write your custom bootstrap css  url here
	return $ebs_nobs_css_url;
}
add_filter( 'ebs_no_bootstrap_theme_css_url', 'apply_ebs_no_bootstrap_theme_css_url' );

/*
  * Filter for bootstrap-icon.min.css url this filter is only applicable if you selected css inclusion from plugin or theme in EBS Settings
  */

function apply_ebs_bootstrap_icon_css_url( $url ) {
	$ebs_icon_url='';// write your bootstrap-icon.min.css url here
	return $ebs_icon_url;
}
add_filter( 'ebs_bootstrap_icon_css_url', 'apply_ebs_bootstrap_icon_css_url' );
?>
