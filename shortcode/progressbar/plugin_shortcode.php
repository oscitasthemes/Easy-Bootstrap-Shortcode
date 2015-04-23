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
	$out = $label != '' ? '<div class="osc_bar_outer"><label class="osc-progressbar-label'.EBS_CONTAINER_CLASS.'">' . $label . '</label>' : '';
	$out.='<div class="progress ' . $barstyle . ' ' . $class . ' osc-progressbar'.EBS_CONTAINER_CLASS.'">
  <div class="progress-bar ' . $bartype . EBS_CONTAINER_CLASS.'"  role="progressbar" aria-valuenow="' . $value . '" aria-valuemin="0" aria-valuemax="100" style="width: ' . $value . '%">
    <span class="sr-only'.EBS_CONTAINER_CLASS.'">' . $value . '% Complete</span>
  </div>
</div>';
	$out .= $label != '' ?'</div>':'';
	return $out;
}

ebs_backward_compatibility_callback('progressbar', 'osc_theme_progressbar');