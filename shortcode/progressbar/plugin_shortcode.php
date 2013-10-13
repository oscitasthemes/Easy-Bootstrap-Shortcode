<?php

/* * *********************************************************
 * BUTTONS
 * ********************************************************* */

function osc_theme_progressbar($params, $content = null) {
    extract(shortcode_atts(array(
                'value' => '50',
                'barstyle' => '',
                'bartype' => '',
                'class' => ''
                    ), $params));
    $out = '<div class="progress ' . $barstyle . ' ' . $class . ' oscitas-progressbar">
  <div class="progress-bar ' . $bartype . '"  role="progressbar" aria-valuenow="' . $value . '" aria-valuemin="0" aria-valuemax="100" style="width: ' . $value . '%">
    <span class="sr-only">' . $value . '% Complete</span>
  </div>
</div>';

    return $out;
}

add_shortcode('progressbar', 'osc_theme_progressbar');

