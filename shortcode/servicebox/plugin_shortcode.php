<?php

/* * *********************************************************
 * Servicebox
 * ********************************************************* */
$_ebsp_servicebox=array();
ebs_session_start();
$_SESSION['ebs_servicebox_css']=array();
ebs_session_end();
function osc_theme_servicebox($params, $content = null) {
    global $_ebsp_servicebox;
    extract(shortcode_atts(array(
        'id' => count($_ebsp_servicebox),
        'icon' => '',
        'type'=>'icon',
        'icontype'=>'glyphicon',
        'icon_size'=>40,
        'iconbg_size'=>100,
        'iconbg_radius'=>50,
        'margin_bottom'=>30,
        'margin_top'=>30,
        'iconbgcolor'=>'#FFFFFF',
        'iconcolor'=>'#777777',
        'headingtype' => 'h3',
        'heading' => '',
        'class' => '',
        'readmore'=>'',
        'readmore_link'=>'',
        'readmore_text'=>'',
        'readmore_type'=>'',
        'readmorestyle'=>'default',
        'readmore_bgcolor'=>'',
        'readmore_fgcolor'=>''
    ), $params));
    $out = '';$style='';
    $_ebsp_servicebox[$id]=array();

    $out.='<div id="osc_servicebox_'.$id.'" class="osc_servicebox '.$class.'">';

    if($icon!=''){
        $out.= '<span class="'.$icontype.' ' . $icon . ' icon_bg iconcircle"></span>';
    }

    if($heading!=''){
        $out.='<'.$headingtype.'>'.$heading.'</'.$headingtype.'>';
    }
    $out.='<div class="osc_servicebox_content">';
    $out.=do_shortcode($content);
    $out.='</div>';
    if($readmore=='true'){
        if($readmore_type!=''){
            $btnclass=' btn '.$readmore_type;
        } else{
            $btnclass=' osc_servicebox_readmore';
        }
        $out.='<a href="'.$readmore_link.'" class="osc_servicebox_readmore_css'.$btnclass.'">'.$readmore_text.'</a>';
    }
    $out.='</div>';

    if($readmore=='true' && $readmorestyle=='custom' ){
        $style.='
	#osc_servicebox_'.$id.' .osc_servicebox_readmore_css{
	color:'.$readmore_fgcolor.';
	background-color:'.$readmore_bgcolor.';
	}';
    }
    $lineheight=intval($iconbg_size)-10;
    $style.='
	#osc_servicebox_'.$id.' .iconcircle{

	}
	#osc_servicebox_'.$id.' span.iconcircle {
	    color:'.$iconcolor.';
	    font-size:'.$icon_size.'px;
	    line-height:'.$lineheight.'px;
	   background-color:'.$iconbgcolor.';
	    height:'.$iconbg_size.'px;
	    width:'.$iconbg_size.'px;
	    margin-top:'.$margin_top.'px;
	    margin-bottom:'.$margin_bottom.'px;
	    border-radius:'.$iconbg_radius.'%;
        -moz-border-radius: '.$iconbg_radius.'%;
	    -webkit-border-radius: '.$iconbg_radius.'%;
	    -ms-border-radius: '.$iconbg_radius.'%;
        -o-border-radius: '.$iconbg_radius.'%;
    ;
	}';
    ebs_session_start();
    $_SESSION['ebs_servicebox_css'][]= 'ebs_servicebox_css_id_'.$id;
    $_SESSION['ebs_servicebox_css_id_'.$id]=$style;
    ebs_session_end();
    wp_enqueue_style('ebs-dstyle',EBS_PLUGIN_URL.'styles/ebs-dstyle.php');
    return $out;
}

ebs_backward_compatibility_callback('servicebox', 'osc_theme_servicebox');