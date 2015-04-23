<?php

/* * *********************************************************
 * BUTTONS
 * ********************************************************* */

function osc_theme_image($params, $content = 'Label') {
    extract(shortcode_atts(array(
                'src' => '',
                'class' => '',
                'shape' => ''
                    ), $params));
    $out = '';


    $out = '<img src="' . $src . '" class="' . $class .' '. $shape .EBS_CONTAINER_CLASS. '">';

    return $out;
}

ebs_backward_compatibility_callback('image', 'osc_theme_image');