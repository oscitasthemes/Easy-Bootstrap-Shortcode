<?php

function osc_theme_panel($atts, $content = null) {
    extract(shortcode_atts(array(
                'style' => '',
                'class' => ''
                    ), $atts));
    $content = str_replace("]<br />", ']', $content);

    $content = str_replace("<br />\n[", '[', $content);
    $result = '<div class="panel ' . $style . ' ' . $class . EBS_CONTAINER_CLASS.'">';
    $result .= do_shortcode($content);
    $result .= '</div>';

    return $result;
}

ebs_backward_compatibility_callback('panel', 'osc_theme_panel');

function osc_theme_panel_footer($atts, $content = null) {
    $result = '<div class="panel-footer'.EBS_CONTAINER_CLASS.'">';
    $result .= do_shortcode($content);
    $result .= '</div>';
    return $result;
}

ebs_backward_compatibility_callback('panel-footer', 'osc_theme_panel_footer');

function osc_theme_panel_heading($atts, $content = null) {
    $result = '<div class="panel-heading'.EBS_CONTAINER_CLASS.'">';
    $result .= do_shortcode($content);
    $result .= '</div>';
    return $result;
}

ebs_backward_compatibility_callback('panel-header', 'osc_theme_panel_heading');

function osc_theme_panel_content($atts, $content = null) {
    $result = '<div class="panel-body'.EBS_CONTAINER_CLASS.'">';
    $result .= do_shortcode($content);
    $result .= '</div>';
    return $result;
}

ebs_backward_compatibility_callback('panel-content', 'osc_theme_panel_content');