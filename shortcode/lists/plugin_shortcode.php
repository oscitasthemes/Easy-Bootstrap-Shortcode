<?php

function osc_theme_list($params, $content = null) {
    extract(shortcode_atts(array(
                'class' => ''
                    ), $params));
    $content = str_replace("]<br />", ']', $content);
    $content = str_replace("]<br />\n", ']', $content);
    $content = str_replace("<br />\n[", '[', $content);
    return '<ul class="list-group ' . $class . '">' . do_shortcode($content) . '</ul>';
}

add_shortcode('list', 'osc_theme_list');

function osc_theme_li($params, $content = null) {
    extract(shortcode_atts(array(
                'type' => ''
                    ), $params));
    if ($type != '') {
        $osc_class = '<span class="glyphicon ' . $type . '"></span> ';
    } else {
        $osc_class = '';
    }
    return '<li class="list-group-item">' . $osc_class . do_shortcode($content) . '</li>';
}

add_shortcode('li', 'osc_theme_li');