<?php

function osc_theme_btngrptoolbar($params, $content = null) {
	extract(shortcode_atts(array(
				'style' => '',
				'class' => ''
			), $params));
	$content = str_replace("]<br />", ']', $content);
	$content = str_replace("]<br />\n", ']', $content);
	$content = str_replace("<br />\n[", '[', $content);
	$out = '<div class="btn-toolbar '.$class.'" role="toolbar">' . do_shortcode($content) . '</div>';

	return $out;
}

add_shortcode('btngrptoolbar', 'osc_theme_btngrptoolbar');

?>