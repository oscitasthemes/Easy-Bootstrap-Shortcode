<?php

/* * *********************************************************
 * BUTTONS
 * ********************************************************* */

function osc_theme_button($params, $content = null) {
    extract(shortcode_atts(array(
                'title' => 'osCitas',
                'link' => '',
                'linkrel' => '',
                'type' => 'link',
                'style' => '',
                'align' => '',
                'target' => '',
                'icon' => '',
                'class' => '',
        'iconcolor'=>''
                    ), $params));
    $out = '';
    $iconcount = array();
    if ($icon) $iconcount=explode(' ',$icon);
    array_filter($iconcount);
    if(count($iconcount)==1){
        $icon= 'glyphicon '.$icon;
    }
    if($icon!=''){
        if($iconcolor!=''){
            $iconcolor='style="color:'.$iconcolor.';"';
        }
        if($align=='right'){
            $value=$title.' <i class="'.$icon.'" '.$iconcolor.'></i>';
        } else{
            $value='<i class="'.$icon.'" '.$iconcolor.'></i> '.$title;
        }
    }else{
        $value=$title;
    }
    $target = ' target="'.($target != 'false' ? '_blank':'_self').'"';
    if ($type == 'link') {
        $out = '<a class="btn ' . $style . ' ' . $class . ' '.EBS_CONTAINER_CLASS.'" href="' . $link . '"  rel="' . $linkrel . '" ' . ($target) . '>' . $value . '</a>';
    } elseif ($type == 'button') {
        $out = '<button class="btn ' . $style . ' ' . $class . ' '.EBS_CONTAINER_CLASS.'" >' . $value . '</button>';
    }
    return $out;
}

ebs_backward_compatibility_callback('button', 'osc_theme_button');