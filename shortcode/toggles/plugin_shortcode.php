<?php

/* * *********************************************************
 * jQuery UI Accordion (toggles)
 * ********************************************************* */

$_oscitas_accordion = array();

function osc_theme_toggles($params, $content = null) {
    global $_oscitas_accordion;
    extract(shortcode_atts(array(
                'id' => count($_oscitas_accordion),
                'class' => ''
                    ), $params));
    $_oscitas_accordion[$id] = array();
    $scontent = do_shortcode($content);

    $output = '';
    if (trim($scontent) != '' || count($_oscitas_accordion[$id]['details'])) {
        $scontent = isset($_oscitas_accordion[$id]['details']) && is_array($_oscitas_accordion[$id]['details']) ? implode('', $_oscitas_accordion[$id]['details']) : '';
        $output .= '<div class="panel-group ' . $class . '" id="oscitas-accordion-' . $id . '">' . $scontent;
        $output .= '</div>';
    }
    return $output;
}

add_shortcode('toggles', 'osc_theme_toggles');

function osc_theme_toggle($params, $content = null) {
    global $_oscitas_accordion;
    extract(shortcode_atts(array(
                'title' => 'title',
                'class' => ''
                    ), $params));
    $con = do_shortcode($content);
    $index = count($_oscitas_accordion) - 1;
    $id = 'details-' . $index . '-' . count($_oscitas_accordion[$index]['details']);
    $_oscitas_accordion[$index]['details'][] = <<<EOS
        <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a class="accordion-toggle" data-toggle="collapse"
                data-parent="#oscitas-accordion-{$index}"
                href="#{$id}">
                {$title}
                </a>
              </h4>
            </div>
            <div id="{$id}" class="panel-collapse collapse {$class}">
              <div class="panel-body">{$con}</div>
            </div>
        </div>
EOS;
}

add_shortcode('toggle', 'osc_theme_toggle');