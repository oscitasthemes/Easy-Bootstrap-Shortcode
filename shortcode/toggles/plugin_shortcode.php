<?php
/* **********************************************************
 * jQuery UI Accordion (toggles)
 * **********************************************************/

$_oscitas_accordion = array();
function osc_theme_toggles( $params, $content = null) {
    global $_oscitas_accordion;
    extract( shortcode_atts( array(
    	'id' => count($_oscitas_accordion),
    ), $params ) );
    $_oscitas_accordion[$id] = array();
	$scontent = do_shortcode($content);
    //print_r($_oscitas_accordion);
	if(trim($scontent) != ""){
		$output = '<div class="panel-group" id="oscitas-accordion-'.$id.'">'.implode('', $_oscitas_accordion[$id]['details']);
		$output .= '</div>';
		return $output;
	} else {
		return "";
	}
}
add_shortcode( 'toggles', 'osc_theme_toggles' );

function osc_theme_toggle( $params, $content = null) {
    global $_oscitas_accordion;
    extract( shortcode_atts( array(
        'title' => 'title'
    ), $params ) );
    $index = count($_oscitas_accordion)-1;
    $id = 'details-'.$index.'-'.count($_oscitas_accordion[$index]['details']);
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
            <div id="{$id}" class="panel-collapse collapse">
              <div class="panel-body">{$content}</div>
            </div>
        </div>
EOS;

}
add_shortcode( 'toggle', 'osc_theme_toggle' );