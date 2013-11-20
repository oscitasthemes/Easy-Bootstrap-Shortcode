<?php

function osc_theme_btngrp($params, $content = null) {
    extract(shortcode_atts(array(
                'style' => '',
                'class' => ''
                    ), $params));
    $content = str_replace("]<br />", ']', $content);
    $content = str_replace("]<br />\n", ']', $content);
    $content = str_replace("<br />\n[", '[', $content);
    if ($style =='vertical') {
	    $out = '<div class="btn-group-vertical '  . $class . '">' . do_shortcode($content) . '</div>';
    } elseif ($style =='justified') {
	    $out = '<div class="btn-group btn-group-justified '  . $class . '">' . do_shortcode($content) . '</div>';
    }else{
	    $out = '<div class="btn-group '  . $class . '">' . do_shortcode($content) . '</div>';
    }


    return $out;
}

add_shortcode('buttongroup', 'osc_theme_btngrp');

?>