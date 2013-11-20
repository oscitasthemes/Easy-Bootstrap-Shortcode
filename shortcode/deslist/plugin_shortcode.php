<?php

function osc_theme_deslist($params, $content = null) {
    extract(shortcode_atts(array(
                'class' => '',
			    'style' =>''
                    ), $params));
    $content = str_replace("]<br />", ']', $content);
    $content = str_replace("]<br />\n", ']', $content);
    $content = str_replace("<br />\n[", '[', $content);
    return '<dl class="osc-deslist ' . $style . ' '.$class.'">' . do_shortcode($content) . '</dl>';
}

add_shortcode('dl', 'osc_theme_deslist');

function osc_theme_dlitem($params, $content = null) {
    extract(shortcode_atts(array(
                'heading' => ''
                    ), $params));
	$out='<dt>'.do_shortcode($heading).'</dt>';
	$out.='<dd>'.do_shortcode($content).'</dd>';
	return $out;
}

add_shortcode('dlitem', 'osc_theme_dlitem');