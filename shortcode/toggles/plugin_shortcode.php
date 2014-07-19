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
        $output .= '<div class="panel-group ' . $class .EBS_CONTAINER_CLASS. '" id="oscitas-accordion-' . $id . '">' . $scontent;
        $output .= '</div>';
    }
    return $output;
}

ebs_backward_compatibility_callback('toggles', 'osc_theme_toggles');

function osc_theme_toggle($params, $content = null) {
    global $_oscitas_accordion;
    extract(shortcode_atts(array(
                'title' => 'title',
                'class' => ''
                    ), $params));
    $con = do_shortcode($content);
    $index = count($_oscitas_accordion) - 1;
    $id = isset($_oscitas_accordion[$index]['details'])?'details-' . $index . '-' . count($_oscitas_accordion[$index]['details']):'details-' . $index . '-0';
    $const = get_defined_constants();
    $_oscitas_accordion[$index]['details'][] = <<<EOS
        <div class="panel panel-default{$const['EBS_CONTAINER_CLASS']}">
            <div class="panel-heading{$const['EBS_CONTAINER_CLASS']}">
              <h4 class="panel-title{$const['EBS_CONTAINER_CLASS']}">
                <a class="accordion-toggle{$const['EBS_CONTAINER_CLASS']}" data-toggle="collapse"
                data-parent="#oscitas-accordion-{$index}"
                href="#{$id}">
                {$title}
                </a>
              </h4>
            </div>
            <div id="{$id}" class="panel-collapse collapse {$class}{$const['EBS_CONTAINER_CLASS']}">
              <div class="panel-body{$const['EBS_CONTAINER_CLASS']}">{$con}</div>
            </div>
        </div>
EOS;
}

ebs_backward_compatibility_callback('toggle', 'osc_theme_toggle');