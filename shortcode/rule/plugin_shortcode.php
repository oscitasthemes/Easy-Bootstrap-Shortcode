<?php

/* * *********************************************************
 * HR Rule
 * ********************************************************* */

function theme_hrrule($params, $content = null) {
    extract(shortcode_atts(array(
                'style' => '',
                'class' => '',
                'margin' => ''
                    ), $params));
    $out = '';$margin1='';
    if ($margin != '') {
        $margin1 = ' style="margin:' . $margin . 'px 0"';
    }
    $out = '<hr ' . $margin1 . 'class="' . $class . ' ' . $style . ' osc-rule" />';

    return $out;
}

add_shortcode('rule', 'theme_hrrule');

