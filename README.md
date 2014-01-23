# Wordpress Easy Bootstrap Shortcode Plugin

**Wordpress Easy Bootstrap Shortcode Plugin** is bootstrap 3.0 compatible plugin which add icons to **wordpress editor (tinyMCE Shortcode Buttons)** and one can add bootstrap style to their website just by clicking on tinyMCE  editor icon.

![Wordpress Bootstrap Shortcode](https://lh5.googleusercontent.com/-8bTnKlHff2g/UlJohqD8eUI/AAAAAAAACmM/LbQoznWWILo/s576/screenshot-1.png)

![Wordpress Bootstrap Shortcode](https://lh3.googleusercontent.com/-yxDp2JbZ-TU/UlJohjgOc0I/AAAAAAAACmE/XdYBbEhzBM0/s576/screenshot-2.png)

![Wordpress Bootstrap Shortcode](https://lh3.googleusercontent.com/-gJbLsdkEbio/UlJpHW7nbRI/AAAAAAAACm4/yNO9N0xA6EU/h120/template-4.png)

![Wordpress Bootstrap Shortcode](https://lh4.googleusercontent.com/-sxZvHGySIew/UlJpGVqQaJI/AAAAAAAACmo/GwSSklHl778/h120/template-2.png)

## Features:

* Simplest bootstrap style plugin ever.
* Bootstrap 3.0 compatible.
* IE6+ Compatible.
* No need to paste shortcode in editor.
* Add icons to editor.
* Shortcode added to editor by clicking on icon.
* Customize grid size on small, extra-small and medium sized screens.
* More control over the css, you can add your own custom class to shortcodes.
* Now you can use js file from CDN or disable the plugin js.
* You can use your own css file by disabling the plugin css, which gives you more flexibility over styling.


Easy Bootstrap Shortcode provides following styles

## Grid Columns
1. Add multiple columns in a row
2. Choose desired column width
3. Add offset to columns
4. Provide facility to customize a column according to medium, small and extra-small sized screens.
5. Responsive columns

## Shortcodes for

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
18. Service Box

## Plugin Filters
The following filters are available to alter plugin functionality.

###Preventing CSS/JS Enqueue for Admin/Frontend
The filters described below will help you prevent enqueuing default CSS and JS for both admin as well as front-end area.

####oscitas_check_theme
If returned true then the following components are completely disabled:
* The Admin Menu (EBS Settings)
* Scripts and Styles used in the Shortcode Generator buttons within WP Editor (TinyMCE Buttons). Most likely the generator will break, if you do not include necessary CSS and JS files yourself.
* Frontend enqueue. No CSS and/or JS will be included on the front-end.

Example:
```
function ebs_theme_check( $prevent ) {
	return true;
}
add_filter( 'oscitas_check_theme', 'ebs_theme_check' );
```
> If you want to just disable enqueue on the front-end, then do not use this filter. Use the following one instead.

####ebs_custom_option
If returned true, then the following components will be disabled:
* The Admin Menu (EBS Settings).
* Frontend enqueue. No CSS and/or JS will be included on the front-end.
The Shortcode Generator will continue to work as expected and admin enqueues will still be performed on New/Edit posts screen.

Example:
```
function apply_ebs_custom_option( $prevent ) {
	return true;
}
add_filter( 'ebs_custom_option', 'apply_ebs_custom_option' );
```

*Note for Developers:* If you are developing a theme and want to enqueue CSS and JS files from your theme only (on the front-end area) then using just the filter above will suffice.

####ebs_custom_bootstrap_icon_css
If returned true then bootstrap icon CSS will not be enqueued on the New/Edit posts screen.

####ebs_custom_bootstrap_admin_css
If returned true then bootstrap admin CSS will not be enqueued on the New/Edit posts screen and EBS settings page.

###Altering CSS/JS for frontend enqueue

Use the following filters to alter the URL of the CSS/JS enqueue on the frontend.

####ebs_bootstrap_js_url
The URL to the bootstrap.min.js file.
This is used, if user has opted for the JS file from the plugin itself (From EBS Settings).

####ebs_bootstrap_js_cdn
The URL to the bootstrap.min.js CDN.
This is used, if user has opted for the JS file from the CDN and it will override any custom URL user had entered.

####ebs_bootstrap_css_url
The URL to the bootstrap.min.css file.
This is used, if user has opted for the CSS file from the plugin itself (From EBS Settings).

####ebs_bootstrap_icon_url
The URL to the glyphicon CSS file. It is loaded only if user has selected to load bootstrap CSS file from plugins or themes.

Examples:

```
/**
 * Alter the JS CDN from cdnjs.com
 *
 * This forces to use cdnjs only no matter what the user has entered
 */
function ebs_alter_js_cdn( $url ) {
	return '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.0/js/bootstrap.min.js';
}
apply_filters( 'ebs_bootstrap_js_cdn', 'ebs_alter_js_cdn' );
```

## License
The WordPress Plugin Easy Bootstrap Shortcodes is licensed under the GPL v2 or later.

> This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License, version 2, as published by the Free Software Foundation.

> This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

> You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA

## Important Notes

### Licensing
The Easy Bootstrap Shortcode Plugin is licensed under the GPL v2 or later; however, if you opt to use third-party code that is not compatible with v2, then you may need to switch to using code that is GPL v3 compatible.

For reference, here's a discussion that covers the Apache 2.0 License used by [Bootstrap](http://www.getbootstrap.com/).
