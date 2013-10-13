<?php

/* * *********************************************************
 * BUTTONS
 * ********************************************************* */

function osc_theme_icon($params, $content = null) {
    extract(shortcode_atts(array(
                'type' => '',
                'class' => '',
                    ), $params));
    $out = '<i class="glyphicon ' . $type . ' ' . $class . '"></i>';
    return $out;
}

add_shortcode('icon', 'osc_theme_icon');

