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
                'class' => '',
        'iconcolor'=>''
                    ), $params));
    $out = '';
    if($icon!=''){
        if($iconcolor!=''){
            $iconcolor='style="color:'.$iconcolor.';"';
        }
        if($align=='right'){
            $value=$title.' <i class="glyphicon '.$icon.'" '.$iconcolor.'></i>';
        } else{
            $value='<i class="glyphicon '.$icon.'" '.$iconcolor.'></i> '.$title;
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

