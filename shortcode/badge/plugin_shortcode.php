<?php

/* * *********************************************************
 * Badges
 * ********************************************************* */

function osc_theme_badge($params, $content = '') {
    extract(shortcode_atts(array(
        'bgcolor' => '',
        'color' => '',
        'value' => '',
        'float_right' => '',
        'class' => ''
    ), $params));
    $out = '';
    $content = str_replace('<br class="osc" />', '', $content);
    $content = str_replace('<br class="osc" />\n', '', $content);
    $style=$bgcolor!=''?'background:'.$bgcolor.';':'';
    $style.=$color!=''?'color:'.$color.';':'';
    $style=$style!=''?' style="'.$style.'"':'';
    $float_right=$float_right=='true'?' pull-right':'';
    $out = '<span class="badge ' . $class .$float_right.EBS_CONTAINER_CLASS. '"'.$style.'>' . ($value) . '</span>';
    return $out;
}

ebs_backward_compatibility_callback('badge', 'osc_theme_badge');
