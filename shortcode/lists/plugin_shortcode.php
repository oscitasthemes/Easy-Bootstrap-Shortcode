<?php

function osc_theme_list($params, $content = null) {
    extract(shortcode_atts(array(
                'type' => 'arrow'
                    ), $params));
    $content = str_replace("]<br />", ']', $content);
    $content = str_replace("]<br />\n", ']', $content);
    $content = str_replace("<br />\n[", '[', $content);
    return '<ul class="list-group ' . $type . '">' . do_shortcode($content) . '</ul>';
}

add_shortcode('list', 'osc_theme_list');

function osc_theme_li($params, $content = null) {
    return '<li class="list-group-item">' . $content . '</li>';
}

add_shortcode('li', 'osc_theme_li');