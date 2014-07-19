<?php

function osc_theme_btngrp($params, $content = null) {
    extract(shortcode_atts(array(
        'style' => '',
        'class' => ''
    ), $params));
    $content = str_replace("]<br />", ']', $content);
    $content = str_replace("]<br />\n", ']', $content);
    $content = str_replace("<br />\n[", '[', $content);
    $out='';
    if ($style =='vertical') {
        $out .= '<div class="btn-group-vertical '  . $class.EBS_CONTAINER_CLASS . '">' . do_shortcode($content) . '</div>';
    } elseif ($style =='justified') {
        $out .= '<div class="btn-group btn-group-justified '  . $class .EBS_CONTAINER_CLASS. '">' . do_shortcode($content) . '</div>';
    }else{
        $out .= '<div class="btn-group '  . $class.EBS_CONTAINER_CLASS . '">' . do_shortcode($content) . '</div>';
    }

    return $out;
}

ebs_backward_compatibility_callback('buttongroup', 'osc_theme_btngrp');
