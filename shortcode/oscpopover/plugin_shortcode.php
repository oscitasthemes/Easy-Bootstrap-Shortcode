<?php

function osc_theme_popover($params, $content = 'Popover') {
    extract(shortcode_atts(array(
        'trigger' => '',
        'title' => '',
        'pop_content' => '',
        'style' => '',
        'size' => '',
        'type' => '',
        'class' => ''
    ), $params));
    $out = '';
    $out = '<button class="osc_popover btn ' . $size . ' ' . $type . ' ' . $class .EBS_CONTAINER_CLASS. '" data-content="' . $pop_content . '" data-placement="' . $style . '" data-toggle="popover" data-trigger="' . $trigger . '" data-container="body" type="button" data-title="' . $title . '"> ' . do_shortcode($content) . ' </button>';

    if(EBS_POPOVER_TEMPLATE==''){
        $out .= "
    <script>
       jQuery(document).ready(function(){
        jQuery('.osc_popover').popover();
        });
    </script>
    ";


    } else{
        $out .= "
    <script>
       jQuery(document).ready(function(){
        jQuery('.osc_popover').popover({template:'".EBS_POPOVER_TEMPLATE."'});
        });
    </script>
    ";
    }
    return $out;
}
$_osc_popover_array=array('count'=>0);
function osc_theme_popover_new($params, $content = '') {
    global $_osc_popover_array;
    extract(shortcode_atts(array(
        'id'=>count($_osc_popover_array),
        'trigger' => '',
        'title' => '',
        'button_text' => 'Popover',
        'style' => '',
        'size' => '',
        'type' => '',
        'class' => ''
    ), $params));
    $_osc_popover_array[$id]=array();
    $out = '';
    $out = '<button class="osc_popover_new btn ' . $size . ' ' . $type . ' ' . $class .EBS_CONTAINER_CLASS. '"  data-placement="' . $style . '" data-toggle="popover" data-trigger="' . $trigger . '" data-container="body" type="button" data-title="' . $title . '" data-contentwrapper="osc_popover_'.$id.'"> ' .$button_text . ' </button>';
    $out.='<div id="osc_popover_'.$id.'" style="display:none;">'.do_shortcode($content).'</div>';

    if(EBS_POPOVER_TEMPLATE==''){
        $out .= "
    <script>
       jQuery(document).ready(function(){
        jQuery('.osc_popover_new').popover({
            html:true,
            content:function(){
                return jQuery('#'+jQuery(this).data('contentwrapper')).html();
            }

        });
        });
    </script>
    ";


    } else{
        $out .= "
    <script>
        jQuery(document).ready(function(){
            jQuery('.osc_popover_new').popover({
                template:'".EBS_POPOVER_TEMPLATE."',
                html:true,
                content:function(){
                     return jQuery('#'+jQuery(this).data('contentwrapper')).html();
                }
            });
        });
    </script>
    ";
    }
    return $out;
}

ebs_backward_compatibility_callback('popover', 'osc_theme_popover');
ebs_backward_compatibility_callback('popovernew', 'osc_theme_popover_new');