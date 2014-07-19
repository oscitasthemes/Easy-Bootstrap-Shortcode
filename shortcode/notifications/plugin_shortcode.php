<?php

function osc_theme_notification($atts, $content = null) {
    extract(shortcode_atts(array(
                'type' => '',
                'close' => 'false',
                'class' => ''
                    ), $atts));
    $type = ($close == 'true' ? $type . ' alert-dismissable' : $type);


    $result = '<div class = "alert ' . $type . ' ' . $class .EBS_CONTAINER_CLASS. '">';
    if ($close == 'true') {
        $result .= '<button type = "button" class = "close'.EBS_CONTAINER_CLASS.'" data-dismiss = "alert" aria-hidden = "true">&times;
    </button>';
    }
    $result .= do_shortcode($content);
    $result .= '</div>';

    return $result;
}

ebs_backward_compatibility_callback('notification', 'osc_theme_notification');



