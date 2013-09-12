<?php

function osc_theme_panel($atts, $content = null) {
    extract(shortcode_atts(array(
                'class' => '',
                    ), $atts));
    $content = str_replace("]<br />", ']', $content);

    $content = str_replace("<br />\n[", '[', $content);
    $result = '<div class="panel ' . $class . '">';
    $result .= do_shortcode($content);
    $result .= '</div>';

    return $result;
}

add_shortcode('panel', 'osc_theme_panel');

function osc_theme_panel_footer($atts, $content = null) {
    $result = '<div class="panel-footer">';
    $result .= do_shortcode($content);
    $result .= '</div>';
    return $result;
}

add_shortcode('panel-footer', 'osc_theme_panel_footer');

function osc_theme_panel_heading($atts, $content = null) {
    $result = '<div class="panel-heading">';
    $result .= do_shortcode($content);
    $result .= '</div>';
    return $result;
}

add_shortcode('panel-header', 'osc_theme_panel_heading');

function osc_theme_panel_content($atts, $content = null) {
    $result = '<div class="panel-body">';
    $result .= do_shortcode($content);
    $result .= '</div>';
    return $result;
}

add_shortcode('panel-content', 'osc_theme_panel_content');