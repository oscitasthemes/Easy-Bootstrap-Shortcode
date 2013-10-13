<?php

function osc_theme_dropdown($params, $content = null) {
    extract(shortcode_atts(array(
                'dropup' => '',
                'class' => ''
                    ), $params));
    $content = str_replace("]<br />", ']', $content);
    $content = str_replace("]<br />\n", ']', $content);
    $content = str_replace("<br />\n[", '[', $content);
    if ($dropup != 'dropup') {
        $dropup = '';
    }
    $out = '<div class="btn-group ' . $dropup . ' ' . $class . '">' . do_shortcode($content) . '</div>';
    $out .= "
    <script>
       jQuery(document).ready(function(){
        jQuery('.dropdown-toggle').dropdown();
        });
    </script>
    ";
    return $out;
}

add_shortcode('dropdown', 'osc_theme_dropdown');

function osc_theme_dropdown_head($params, $content = null) {
    extract(shortcode_atts(array(
                'size' => '',
                'style' => '',
                'split' => ''), $params));
    $out = '';
    if ($split == "split") {
        $out = '<button type="button" class="btn ' . $size . ' ' . $style . '">' . $content . '</button>';

        $out .= '<button type="button" class="btn ' . $size . ' ' . $style . ' dropdown-toggle" data-toggle="dropdown">';
        $out .= '<span class="caret"></span></button>';
    } else {
        $out = ' <button type="button" class="btn ' . $size . ' ' . $style . ' dropdown-toggle" data-toggle="dropdown">';
        $out .= $content . ' <span class="caret"></span> </button>';
    }

    return $out;
}

add_shortcode('dropdownhead', 'osc_theme_dropdown_head');

function osc_theme_dropdown_body($params, $content = null) {
    $content = str_replace("]<br />", ']', $content);
    $content = str_replace("]<br />\n", ']', $content);
    $content = str_replace("<br />\n[", '[', $content);
    $out = '<ul class="dropdown-menu" role="menu">' . do_shortcode($content) . '</ul>';
    return $out;
}

add_shortcode('dropdownbody', 'osc_theme_dropdown_body');

function osc_theme_dropdown_items($params, $content = null) {
    extract(shortcode_atts(array(
                'type' => '',
                'link' => '',
                'disabled' => ''), $params));
    $out = '';
    if ($type == "divider") {
        $out = '<li class="divider"></li>';
    } elseif ($type == "menuitem") {
        if ($disabled == 'disabled') {
            $out = '<li class="disabled"><a href="' . $link . '">' . do_shortcode($content) . '</a></li>';
        } else {
            $out = '<li><a href="' . $link . '">' . do_shortcode($content) . '</a></li>';
        }
    }
    return $out;
}

add_shortcode('dropdownitem', 'osc_theme_dropdown_items');
?>