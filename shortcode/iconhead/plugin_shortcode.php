<?php

function osc_theme_iconhead($params, $content = null) {
    extract(shortcode_atts(array(
        'class' => '',
                    ), $params));
    $out = '';
    $out = '<h3><span class="glyphicon '.$class.'"></span> '.$content.'</h3>';

    return $out;
}

add_shortcode('iconheading', 'osc_theme_iconhead');

