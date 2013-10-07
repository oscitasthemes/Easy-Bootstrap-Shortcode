<?php

/* * *********************************************************
 * BUTTONS
 * ********************************************************* */

function osc_theme_button($params, $content = null) {
    extract(shortcode_atts(array(
                'title' => 'osCitas',
                'link' => '',
                'type' => 'link',
                'style' => '',
                'align' => '',
                'target' => '',
                'icon' => '',
                'class' => ''
                    ), $params));
    $out = '';
    if($icon!=''){
        if($align=='right'){
            $value=$title.' <i class="glyphicon '.$icon.'"></i>';
        } else{
            $value='<i class="glyphicon '.$icon.'"></i> '.$title;
        }
    }else{
        $value=$title;
    }
    $target = ' target="'.($target != 'false' ? '_blank':'_self').'"';
    if ($type == 'link') {
        $out = '<a class="btn ' . $style . ' ' . $class . '" href="' . $link . '" ' . ($target) . '>' . $value . '</a>';
    } elseif ($type == 'button') {
        $out = '<button class="btn ' . $style . ' ' . $class . '" >' . $value . '</button>';
    }
    return $out;
}

add_shortcode('button', 'osc_theme_button');

