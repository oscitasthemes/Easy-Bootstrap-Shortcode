<?php

/* * *********************************************************
 * Jumbotron
 * ********************************************************* */

function osc_theme_jumbotron($params, $content = 'Label') {
    extract(shortcode_atts(array(
                'bgcolor' => '',
                'class' => ''
                    ), $params));
    $out = '';
    $content = str_replace('<br class="osc" />', '', $content);
    $content = str_replace('<br class="osc" />\n', '', $content);
    $style=$bgcolor!=''?' style="background:'.$bgcolor.';"':'';
    $out = '<div class="jumbotron ' . $class .EBS_CONTAINER_CLASS. '"'.$style.'>' . do_shortcode($content) . '</div>';
    return $out;
}

ebs_backward_compatibility_callback('jumbotron', 'osc_theme_jumbotron');