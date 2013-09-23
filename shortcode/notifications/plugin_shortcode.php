<?php

function osc_theme_notification($atts, $content = null) {
    extract(shortcode_atts(array(
                'type' => '',
                'close' => 'false',
                'class' => ''
                    ), $atts));
    $type = ($close == 'true' ? $type . ' alert-dismissable' : $type);


    $result = '<div class = "alert ' . $type . ' ' . $class . '">';
    if ($close == 'true') {
        $result .= '<button type = "button" class = "close" data-dismiss = "alert" aria-hidden = "true">&times;
    </button>';
    }
    $result .= do_shortcode($content);
    $result .= '</div>';

    return $result;
}

add_shortcode('notification', 'osc_theme_notification');





