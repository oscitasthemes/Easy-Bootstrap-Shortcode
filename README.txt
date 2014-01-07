=== Easy Bootstrap Shortcode ===
Contributors: oscitas
Link: http://www.osCitasthemes.com
Tags: Wordpress Shortcodes, Wordpress Bootstrap, Wordpress Bootstrap Shortcode, Bootstrap, Responsive pages, Editor plugin, Bootstrap Shortcode, TinyMCE
Requires at least: 3.0
Tested up to: 3.8
Stable tag: 2.4.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Easy Bootstrap Shortcode enable you to add bootstrap 3.0.3 styles in your pages, post and custom post in simplest manner.

== Description ==

Easy Bootstrap Shortcode is bootstrap 3.0.3 compatible plugin which add icons to wordpress editor (tinyMCE Shortcode Buttons) and one can add bootstrap style to their website just by clicking on tinyMCE  editor icon.

http://www.youtube.com/watch?v=8T0IC1PsdTw

New column hide functionality
http://www.youtube.com/watch?v=eSrFVAro8Nc

[Easy Bootstrap Shortcode Demo](http://demo.oscitasthemes.com/demos/easy-bootstrap-shortcode/)

[Easy Bootstrap Shortcode Documentation](http://oscitasthemes.com/documentation/easy-bootstrap-shortcodes/)



[PRO VERSION with exciting Premium SHORTCODES, Easy Bootstrap Shortcode Pro](http://oscitasthemes.com/products/easy-bootstrap-shortcodes-pro/)



Looking for parallax slider, check this [Easy Wordpress Parallax Slider](http://wordpress.org/plugins/easy-wp-parallax-slider/)

Want to implement responsive tabs to your pages, check this [Easy Responsive Tabs](http://wordpress.org/plugins/easy-responsive-tabs/)

= For best results use with bootstrap 3.0.3 responsive theme =

= Features: =

* simplest bootstrap style plugin ever.
* IE 6+ compatible
* Bootstrap 3.0.3 compatible.
* No need to paste shortcode in editor.
* Add icons to editor.
* Shortcode added to editor by clicking on icon.
* Customize grid size on small, extra-small and medium sized screens.
* More control over the css, you can add your own custom class to shortcodes.
* Now you can use js file from CDN or disable the plugin js.
* You can use your own css file by disabling the plugin css, which gives you more flexibility over styling.



Easy Bootstrap Shortcode provides following styles

= Grid Columns =
1. Add multiple columns in a row
2. Choose desired column width
3. Add offset to columns
4. Provide facility to customize a column according to medium, small and extra-small sized screens.
5. Responsive columns

= Shortcodes for =

1. Accordion (Collapsible Menus)
2. Tabs
3. List
4. Notification
5. Popover
6. Tooltip
7. Panel
8. Progress Bars with labels
9. Icons
10. Labels
11. Buttons
12. Icon Heading
13. Tables
14. Responsive Image
15. Image Effects (Round, Thumbnail, Square)
16. Well
17. Button Dropdown
18. Button Group
19. Button Group Toolbar
20. Description List


= How to embed this plugin to your theme =

We have provided few new settings so that anybody can give inbuilt compatibility with our plugin. Such as if you are creating theme/plugin and want to use our plugin, to give your users more flexibility to add responsive content, however you like to use your own custom css/js files. So now you can do this.

Now we are supporting filters so that you can easily give inbuilt support of this plugin in your themes/plugins

You can Write these filter into your theme's functions.php to make plugin compatible to your theme, You can use any of these filters as per your requirements.


Filter for Custom options

`function apply_ebs_custom_option( $prevent ) {
	return true;
}
add_filter( 'ebs_custom_option', 'apply_ebs_custom_option' );`




Filter for bootstrap_admin.css

`function apply_ebs_custom_bootstrap_admin_css( $prevent ) {
	return true;
}
add_filter( 'ebs_custom_bootstrap_admin_css', 'apply_ebs_custom_bootstrap_admin_css' );`



Filter for bootstrap.min.js url this filter is only applicable if you selected js inclusion from plugin in EBS Settings


`function apply_ebs_bootstrap_js_url( $url ) {
	$ebs_js_url='';// write your desired bootstrap.min.js url here
	return $ebs_js_url;
}
add_filter( 'ebs_bootstrap_js_url', 'apply_ebs_bootstrap_js_url' );`



Filter for bootstrap.min.js CDN path this filter is only applicable if you selected js inclusion from CDN in EBS Settings

`function apply_ebs_bootstrap_js_cdn( $url ) {
	$ebs_cdn_url='';// write your bootstrap.min.js cdn path here
	return $ebs_cdn_url;
}
add_filter( 'ebs_bootstrap_js_cdn', 'apply_ebs_bootstrap_js_cdn' );`


Filter for bootstrap.min.css urlthis filter is only applicable if you selected css inclusion from plugin in EBS Settings

`function apply_ebs_bootstrap_css_url( $url ) {
	$ebs_css_url='';// write your bootstrap.min.css  url here
	return $ebs_css_url;
}
add_filter( 'ebs_bootstrap_css_url', 'apply_ebs_bootstrap_css_url' );`



Filter for bootstrap-icon.min.css url this filter is only applicable if you selected css inclusion from plugin or theme in EBS Settings


`function apply_ebs_bootstrap_icon_css_url( $url ) {
	$ebs_icon_url='';// write your bootstrap-icon.min.css url here
	return $ebs_icon_url;
}
add_filter( 'ebs_bootstrap_icon_css_url', 'apply_ebs_bootstrap_icon_css_url' );`


We have removed the support of the following options 


<blockquote>After adding this code user will not be able to change the files location for EBS plugin as user can't see the EBS  Settings link of LHS menu in admin panel</blockquote>

`update_option( 'EBS_CUSTOM_OPTION', 1 );
update_option( 'EBS_BOOTSTRAP_JS_LOCATION', 2 );
update_option( 'EBS_BOOTSTRAP_CSS_LOCATION', 2 );`

To give use the custom css for icons
`update_option( 'EBS_CUSTOM_BOOTSTRAP_ICON_CSS', 1 );`

And to give use the custom css for admin
`update_option( 'EBS_CUSTOM_BOOTSTRAP_ADMIN_CSS', 1 );`


If you'd like to contribute to this plugin, you can find it [hosted on GitHub](https://github.com/oscitasthemes/Easy-Bootstrap-Shortcode).

Follow us [@Twitter](https://twitter.com/oscitasthemes), [@facebook](https://www.facebook.com/oscitasthemes), [@google+](https://plus.google.com/109122908951553852347/posts)



== Installation ==

1.Upload:
Unzip easy_bootstrap_shortcode.zip file, and upload all files to your blog folder: <root>/wp-content/plugins/easy_bootstrap_shortcode

2.Activate:
In the admin panel, find Plugins->Plugins,click it, active Easy Bootstrap Shortcode.

3.Use:
Now you can see the few new buttons in the TinyMCE Editor in post and pages, use these buttons to create great responsive pages/posts content.

It's that simple ... just what the name suggests

== Screenshots ==

1. how it looks after installation
2. different shortcode options this plugin provides
3. columns shortcode
4. table shortcode
5. You can create this kind of page content very easily.
6. mobile view
7. few samples which can be created using this plugin
8. sample 2 I
9. sample 2 II
10. sample 3
11. sample 4 I
12. sample 4 II


== Changelog ==

= 2.4.7 =

* [Fixed] Image issue resolved for setting page.

= 2.4.6 =

* Add Icons for new Dropdown menu in TinyMCE Editor.

= 2.4.5 =

* Add New Dropdown Menu Option in TinyMCE Editor.

= 2.4.4 =

* [Fixed] css for admin popups.

= 2.4.3 =

* [Fixed] Few js issues.
* [Fixed] css for admin popups.

= 2.4.2 =

* [Fixed] Resolved the image upload issue in Thumbnail and Image Shortcodes.

= 2.4.1 =

* [Fixed] Removed the Fancybox.

= 2.4.0 =

* [Update] Updated to Twitter Bootstrap 3.0.3.
* [Update] Choose custom color option for icon in Icons Shortcode.
* [Update] Choose font size option for icon in Icons Shortcode.
* [Update] Choose custom color option for icon in Icon Heading Shortcode.
* [Update] Choose custom color option for icon in Button Shortcode.


= 2.3.6 =

* [fixed] Button Group, Button Group Toolbar, Description List icon issues fixed.


= 2.3.5 =

* [update] Banner of Easy Bootstrap Shortcodes PRO Version in settings page.


= 2.3.4 =

* [update] Implemented filter to add buttons to tinyMCE, Credit goes to Nikoya.
* [Fixed] Added class to Columns shortcode popup.
* [Fixed] Resolved issue 'Gravity Form not validating within plugin column shortcode'

= 2.3.3 =

* [update] Included respond.js to support IE 6,7,8. Of course, you can choose either you want to include it or not from settings page.
* [update] New Shortcode to create Button Group
* [update] New Shortcode to create Button Group Tool Bar
* [update] New Shortcode to create Description List
* [update] Yes, now Progress Bar shortcode supports Label too.

= 2.3.2 =


* [fixed]  Fixed wpcolumns add class issues.


= 2.3.1 =


* [update] Clear left functionality added in responsive columns. Credit goes to Nikoya.
* [update] Added class to dialog box. Credit goes to Nikoya.
* [update] Bootstrap css and js updated to v3.0.2
* [fixed] Undefined index issue in toggles.



= 2.3.0 =


* [Update] now supports filters, so that you can easily give inbuilt support to this plugin to create responsive themes (Suggested by Swashata).
* [Update] Implemented support of "in" class for toggles


= 2.2.5 =


* [fixed] bootstrap icon css in frontend issue resolved.
* [fixed] Column col-xx-12 issue resolved, now it will add col-xx-12 to columns


= 2.2.4 =


* [fixed] On plugin activation TinyMCE visual editor disappear issue resolved.


= 2.2.1 =


* [Update] Removed the extra table dependency to save the plugin settings
* [fixed] css file location settings issue.


= 2.2.0 =


* [Update] now you can set the visibility of columns or full row for different screen such as large, medium, small, ex-small


= 2.1.1 =


* [Update] now use min files for bootstrap js/css files and css files for admin
* [fixed] Button shortcode target(Open in new window) flag not working issue.
* [fixed] tabs issue


= 2.0.0 =

* [New] New shortcodes for labels, progressbar, image effect, responsive image, well, dropdown button, icons
* [New] Settings option to add bootstrap.js from CDN, disable plugin js/css file.
* [Update] More control over the css, you can add your own custom class to shortcodes.
* [Update] In columns shortcode now you can add different offsets for different columns for different screen sizes such as medium, small, ex-small.


= 1.1 =
* fixed columns alternate color issue in admin panel


