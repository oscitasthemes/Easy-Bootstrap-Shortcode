<?php


function osc_theme_hrrule($params, $content = null) {
    extract(shortcode_atts(array(
        'class' => '',
                    ), $params));
    $out = '';
    $out = '<hr class="' . $class . '" />';

    return $out;
}

add_shortcode('rule', 'osc_theme_hrrule');

