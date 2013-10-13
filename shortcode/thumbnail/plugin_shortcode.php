<?php

/* * *********************************************************
 * BUTTONS
 * ********************************************************* */

function osc_theme_oscitasthumbnail($params, $content = 'Label') {
    extract(shortcode_atts(array(
                'src' => '',
                'class' => '',
                'link' => '',
                'border'=>''
                    ), $params));
    $out = '';
    $borderClass = '';
    $imageBorderClass = 'img-responsive';
    if ($border != '') {
        $borderClass = 'img-thumbnail ';
        $imageBorderClass = '';
    }

    $out = ' <div class="' . $borderClass.$class . '">';

    //$out = ' <div class="img-thumbnail ' . $class . '">';
    if ($link != '') {
        $out .='<a href="' . $link . '">';
    }
    $out .= '<img src="' . $src . '" '.($imageBorderClass? ' class="'.$imageBorderClass.'"':'').'>';
    if ($link != '') {
        $out .='</a>';
    }

    $out .= '</div>';
    return $out;
}

add_shortcode('thumbnail', 'osc_theme_oscitasthumbnail');

