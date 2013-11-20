<?php

/* * *********************************************************
 * BUTTONS
 * ********************************************************* */

function osc_theme_progressbar($params, $content = null) {
	extract(shortcode_atts(array(
				'value' => '50',
				'barstyle' => '',
				'bartype' => '',
				'class' => '',
				'label' => ''
			), $params));
	$out = $label != '' ? '<div class="osc_bar_outer"><label class="osc-progressbar-label">' . $label . '</label>' : '';
	$out.='<div class="progress ' . $barstyle . ' ' . $class . ' osc-progressbar">
  <div class="progress-bar ' . $bartype . '"  role="progressbar" aria-valuenow="' . $value . '" aria-valuemin="0" aria-valuemax="100" style="width: ' . $value . '%">
    <span class="sr-only">' . $value . '% Complete</span>
  </div>
</div>';
	$out .= $label != '' ?'</div>':'';
	return $out;
}

add_shortcode('progressbar', 'osc_theme_progressbar');

