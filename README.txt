=== Easy Bootstrap Shortcode ===
Contributors: oscitas
Link: http://www.osCitasthemes.com
Tags: Wordpress Shortcodes, Wordpress Bootstrap, Wordpress Bootstrap Shortcode, Bootstrap, Responsive pages, Editor plugin, Bootstrap Shortcode, TinyMCE
Requires at least: 3.0
Tested up to: 3.6.1
Stable tag: 3.7
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Easy Bootstrap Shortcode enable you to add bootstrap 3.0 styles in your pages, post and custom post in simplest manner.

== Description ==

Easy Bootstrap Shortcode is bootstrap 3.0 compatible plugin which add icons to wordpress editor (tinyMCE Shortcode Buttons) and one can add bootstrap style to their website just by clicking on tinyMCE  editor icon.

http://www.youtube.com/watch?v=8T0IC1PsdTw

New column hide functionality
http://www.youtube.com/watch?v=eSrFVAro8Nc

= Try our new [Easy Wordpress Parallax Slider](http://wordpress.org/plugins/easy-wp-parallax-slider/). =

= For best results use with bootstrap 3.0 responsive theme =

= Features: =

* simplest bootstrap style plugin ever.
* Bootstrap 3.0 compatible.
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
8. Progress Bars
9. Icons
10. Labels
11. Buttons
12. Icon Heading
13. Tables
14. Responsive Image
15. Image Effects (Round, Thumbnail, Square)
16. Well
17. Button Dropdown


= How to embed this plugin to your theme =

We have provided few new settings so that anybody can give inbuilt compatibility with our plugin. Such as if you are creating theme/plugin and want to use our plugin to give your users more flexibility to add responsive content, however you like to use your own custom css/js files. So now you can do this, and don't worry, for this you just have to paste the following code to your init hook or install hook of your plugin/theme and it will start working

<blockquote>After adding this code user will not be able to change the files location for EBS plugin as user can't see the EBS  Settings link of LHS menu in admin panel</blockquote>

`update_option( 'EBS_CUSTOM_OPTION', 1 );
update_option( 'EBS_BOOTSTRAP_JS_LOCATION', 2 );
update_option( 'EBS_BOOTSTRAP_CSS_LOCATION', 2 );`

To give use the custom css for icons
`update_option( 'EBS_CUSTOM_BOOTSTRAP_ICON_CSS', 1 );`

And to give use the custom css for admin
`update_option( 'EBS_CUSTOM_BOOTSTRAP_ADMIN_CSS', 1 );`


If you'd like to contribute to this plugin, you can find it [hosted on GitHub](https://github.com/oscitasthemes/Easy-Bootstrap-Shortcode).

Try our new [Easy Wordpress Parallax Slider](http://wordpress.org/plugins/easy-wp-parallax-slider/).

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

= 2.2.1 =

[Update] Removed the extra table dependency to save the plugin settings

= 2.2.0 =

[Update] now you can set the visibility of columns or full row for different screen such as large, medium, small, ex-small


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

