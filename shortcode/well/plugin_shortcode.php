<?php

/* * *********************************************************
 * BUTTONS
 * ********************************************************* */

function osc_theme_well($params, $content = 'Label') {
    extract(shortcode_atts(array(
                'type' => '',
                'class' => ''
                    ), $params));
    $out = '';
    $content = str_replace('<br class="osc" />', '', $content);
    $content = str_replace('<br class="osc" />\n', '', $content);
    $out = '<div class="well ' . $type . ' ' . $class . '">' . do_shortcode($content) . '</div>';
    return $out;
}

add_shortcode('well', 'osc_theme_well');

