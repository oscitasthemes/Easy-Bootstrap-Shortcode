<?php

/* * *********************************************************
 * BUTTONS
 * ********************************************************* */

function osc_theme_oscitasthumbnail($params, $content = 'Label') {
    extract(shortcode_atts(array(
                'src' => '',
                'class' => '',
                'link' => '',
                'border'=>'',
                'target'=>'_self',
                'alt'=>'',
                    ), $params));
    $out = '';
	if ($border != '') {
		$borderClass = 'img-thumbnail';
	} else {
		$borderClass = 'img-responsive';
	}


	//$out = ' <div class="img-thumbnail ' . $class . '">';
	if ($link != '') {
		$out .='<a href="' . $link . '" target="'.$target.'">';
	}
	$out .= '<img src="' . $src . '" class="' . $borderClass.EBS_CONTAINER_CLASS . ' oscitas-res-image" alt="'.$alt.'">';
	if ($link != '') {
		$out .='</a>';
	}
    return $out;
}

ebs_backward_compatibility_callback('thumbnail', 'osc_theme_oscitasthumbnail');