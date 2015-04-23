<?php

/* * *********************************************************
 * Tooltip
 * ********************************************************* */

function osc_theme_tooltip($params, $content = 'Tooltip') {
    extract(shortcode_atts(array(
                'type' => '',
                'link' => '',
                'tooltip' => '',
                'style' => '',
                'class' => '',
                'target' => '',
                    ), $params));
    $out = '';
    if ($type == 'link') {
        $out = '<a  href="' . $link . '" data-placement="' . $style . '" title="' . $tooltip . '"  class="osc_tooltip ' . $class .'" target="'.$target.'">' . do_shortcode($content) . '</a>
';
    } elseif ($type == 'button') {
        $out = '<button type="button"  data-toggle="tooltip" data-placement="' . $style . '" title="' . $tooltip . '" class="btn osc_tooltip ' . $class  . '">' . do_shortcode($content) . '</button>';
    }

    if(EBS_TOOLTIP_TEMPLATE==''){
        $out .= "
    <script>
        jQuery(document).ready(function() {
            jQuery('.osc_tooltip').tooltip();
        });
    </script>
    ";

    } else{
        $out .= "
    <script>
       jQuery(document).ready(function(){
        jQuery('.osc_tooltip').tooltip({template:'".EBS_TOOLTIP_TEMPLATE."'});
        });
    </script>
    ";
    }


    return $out;
}

ebs_backward_compatibility_callback('tooltip', 'osc_theme_tooltip');