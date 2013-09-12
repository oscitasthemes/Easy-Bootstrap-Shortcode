<?php
/* **********************************************************
 * BUTTONS
 * **********************************************************/
function osc_theme_button( $params, $content = null) {
    extract( shortcode_atts( array(
        'title' => 'osCitas',
        'link' => '',
        'btntag' => 'a',
        'class' => '',
        'target' => '',
    ), $params ) );
    $out = '';

    if ($btntag == 'a') {
        $out = '<a class="btn '.$class.'" href="'.$link.'" target="'.($target).'">'.$title.'</a>';
    } elseif ($btntag == 'button' || $btntag == 'submit') {
        $out = '<input class="btn '.$class.'" type="'.$btntag.'" value="'.$title.'">';
    }
    return $out;
}
add_shortcode( 'button', 'osc_theme_button' );

