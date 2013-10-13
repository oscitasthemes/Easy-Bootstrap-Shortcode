<?php
/**
 * The uninstallation script
 * Deletes all the options when the plugin is uninstalled
 */
if ( !defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit();
}
if ( 'uninstall.php' == basename($_SERVER['SCRIPT_FILENAME'] ) ) {
	die ('<h2>Direct File Access Prohibited</h2>');
}

/**
 * Delete the options
 */
delete_option( 'EBS_BOOTSTRAP_JS_LOCATION' );
delete_option( 'EBS_BOOTSTRAP_JS_CDN_PATH' );
delete_option( 'EBS_BOOTSTRAP_CSS_LOCATION');
