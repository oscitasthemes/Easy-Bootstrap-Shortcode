<?php

/* * *********************************************************
 * Servicebox
 * ********************************************************* */
$_ebsp_servicebox=array();
if(!session_id()){
    session_start();
}

$_SESSION['ebs_servicebox_css']='';
function osc_theme_servicebox($params, $content = null) {
    global $_ebsp_servicebox;
    extract(shortcode_atts(array(
        'id' => count($_ebsp_servicebox),
        'icon' => '',
        'type'=>'icon',
        'icontype'=>'glyphicon',
        'icon_size'=>40,
        'iconbg_size'=>100,
        'iconbgcolor'=>'#FFFFFF',
        'iconcolor'=>'#777777',
        'headingtype' => 'h3',
        'heading' => '',
        'class' => '',
        'readmore'=>'',
        'readmore_link'=>'',
        'readmore_text'=>'',
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
        $out.='<a href="'.$readmore_link.'" class="osc_servicebox_readmore">'.$readmore_text.'</a>';
    }
    $out.='</div>';

    if($readmore=='true' && $readmorestyle=='custom' ){
        $style.='
	#osc_servicebox_'.$id.' .osc_servicebox_readmore{
	color:'.$readmore_fgcolor.';
	background-color:'.$readmore_bgcolor.';
	}';
    }
    $lineheight=intval($iconbg_size);
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
	}';
    $_SESSION['ebs_servicebox_css'].=$style;
    wp_enqueue_style('ebs-dstyle',EBS_PLUGIN_URL.'styles/ebs-dstyle.php');
    return $out;
}

add_shortcode('servicebox', 'osc_theme_servicebox');

