<?php

/* * *********************************************************
 * BUTTONS
 * ********************************************************* */

function osc_theme_icon($params, $content = null) {
    extract(shortcode_atts(array(
        'type' => '',
        'color'=>'',
        'class' => '',
        'fontsize'=>''
    ), $params));
    if($color!=''){
        $color='color:'.$color.';';
    }
    if($fontsize!=''){
        $fontsize=' font-size:'.$fontsize.'px;';
    }
    $iconcount=explode(' ',$type);
    array_filter($iconcount);
    if(count($iconcount)==1){
        $type= 'glyphicon '.$type;
    }
    $out = '<i class=" ' . $type . ' ' . $class . '" style="'.$color.$fontsize.'"></i>';
    return $out;
}

ebs_backward_compatibility_callback('icon', 'osc_theme_icon');