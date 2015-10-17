<?php

/* * *********************************************************
 * jQuery UI Accordion (sliders)
 * ********************************************************* */

$_oscitas_slider = array();
$_oscitas_slider_slides=array();
function osc_theme_sliders($params, $content = null) {
    global $_oscitas_slider, $_oscitas_slider_counter;

    if (!count($_oscitas_slider)) {
        $_oscitas_slider = array('current_id'=>0);
    }
    ebs_session_start();
    if(!isset($_SESSION['ebs_slider_css'])){
        $_SESSION['ebs_slider_css']=array();
    }
    ebs_session_end();
    extract(shortcode_atts(array(
        'id' => count($_oscitas_slider),
        'class' => '',
        'interval'=>'',
        'controls'=>'',
        'bullets'=>'',
        'pause'=>'',
        'wrap'=>'',
        'captioncolor'=>'',
        'navcolor'=>''
    ), $params));
    wp_enqueue_script('ebs_fit_text',EBS_PLUGIN_URL.'js/jquery.fittext.js');
    $_oscitas_slider[$id] = array();
    $_oscitas_slider['current_id'] = count($_oscitas_slider)-1;
    $_oscitas_slider_slides[$_oscitas_slider['current_id']]=array();
    $bulllet_content='';

    $scontent = do_shortcode($content);
    if (count($_oscitas_slider[$id]['bullets'])) {
        $bulllet_content = isset($_oscitas_slider[$id]['bullets']) && is_array($_oscitas_slider[$id]['bullets']) ? implode('', $_oscitas_slider[$id]['bullets']) : '';
    }
    $output = '';
    if (trim($scontent) != '' || count($_oscitas_slider[$id]['details'])) {
        $scontent = isset($_oscitas_slider[$id]['details']) && is_array($_oscitas_slider[$id]['details']) ? implode('', $_oscitas_slider[$id]['details']) : '';

        $output.='<div id="oscitas-slider-' . $id . '" class="carousel ebs-carousel slide '.$class. EBS_CONTAINER_CLASS.'" data-ride="carousel" data-interval="'.$interval.'" data-pause="'.$pause.'" data-wrap="'.$wrap.'">';
        if($bullets!=''){
            $output.=' <ol class="carousel-indicators">'.$bulllet_content.'</ol>';
        }

        $output .= ' <div class="carousel-inner '  .EBS_CONTAINER_CLASS. '" >' . $scontent;
        $output .= '</div>';

        if($controls!=''){
            $output.=' <a class="left carousel-control" href="#oscitas-slider-' . $id . '" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#oscitas-slider-' . $id . '" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>';
        }

        $output .= '</div>';
        ebs_session_start();
        $_SESSION['ebs_slider_css'][$id]=$id;
        $_SESSION['ebs_slider_each_'.$id]="
#oscitas-slider-{$id} a.carousel-control span{
    color:{$navcolor};
}
#oscitas-slider-{$id} ol.carousel-indicators {
    margin:0;
}
#oscitas-slider-{$id} ol.carousel-indicators li{
    border-color:{$navcolor};
    margin :1px;
    float: left;
}
#oscitas-slider-{$id} ol.carousel-indicators li.active{
    background-color:{$navcolor};
}
#oscitas-slider-{$id} .carousel-caption .ebs-caption{
    color:#FFFFFF;
    color:{$captioncolor};
    line-height:1.5;
    margin:0;
    padding:0;
}
#oscitas-slider-{$id} .carousel-inner > .item > img,  #oscitas-slider-{$id} .carousel-inner > .item > a > img{
    width:100%;
}
        ";
        ebs_session_end();
    }
    $_oscitas_slider['current_id'] -= 1;
    return $output;
}

ebs_backward_compatibility_callback('slider', 'osc_theme_sliders');

function osc_theme_slider($params, $content = null) {

    global $_oscitas_slider, $_oscitas_slider_slides;

    $index = $_oscitas_slider['current_id'];
    if(!isset($_oscitas_slider_slides[$index])){
        $_oscitas_slider_slides[$index]=array();
    }
    extract(shortcode_atts(array(
        'title' => 'title',
        'image'=>'',
        'caption'=>'',
        'active'=>'',
        'slideid'=>count($_oscitas_slider_slides[$index])
    ), $params));

    $const = get_defined_constants();
    if(!empty($image)){
        $_oscitas_slider[$index]['bullets'][]='<li data-target="#oscitas-slider-' . $index . '" data-slide-to="'.$slideid.'" class="'.$active.'"></li>';
        $_oscitas_slider_slides[$index][$slideid]=array();
        $_oscitas_slider[$index]['details'][] = <<<EOS
        <div class="item {$active}{$const['EBS_CONTAINER_CLASS']}">
      <img src="{$image}" >
      <div class="carousel-caption{$const['EBS_CONTAINER_CLASS']}">
        <h3 class="ebs-caption">{$title}</h3>
        <p class="ebs-caption">{$caption}</p>
      </div>
      </div>
EOS;
    }
}

ebs_backward_compatibility_callback('slide', 'osc_theme_slider');