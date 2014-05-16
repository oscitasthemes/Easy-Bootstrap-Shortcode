<?php

/* * *********************************************************
 * jQuery UI Tabs
 * ********************************************************* */
$_oscitas_tabs = array();

function osc_theme_tabs($params, $content = null) {
    global $_oscitas_tabs, $fade;
    extract(shortcode_atts(array(
                'id' => count($_oscitas_tabs),
                'class' => ''
                'fade' => ''
                    ), $params));
    $_oscitas_tabs[$id] = array();
    do_shortcode($content);
    $scontent = '<ul class="nav nav-tabs " id="oscitas-tabs-' . $id . '">' . implode('', $_oscitas_tabs[$id]['tabs']) . '</ul><div
    class="tab-content">' . implode('', $_oscitas_tabs[$id]['panes']) . '</div>';
    if (trim($scontent) != "") {
        $output = '<div class="' . $class . '">' . $scontent;
        $output .= '</div>';

        return $output;
    } else {
        return "";
    }
}
add_shortcode('tabs', 'osc_theme_tabs');

function osc_theme_tab($params, $content = null) {
    global $_oscitas_tabs, $fade;
    if ( $fade ) {
        $fade = "fade";
    }
    extract(shortcode_atts(array(
                'title' => 'title',
                'active' => '',
                    ), $params));

    if ( $active == 'active' ) {
        $fade .= ' in';
    }

    $index = count($_oscitas_tabs) - 1;
    if (!isset($_oscitas_tabs[$index]['tabs'])) {
        $_oscitas_tabs[$index]['tabs'] = array();
    }
    $pane_id = 'pane-' . $index . '-' .  count($_oscitas_tabs[$index]['tabs']);
    $_oscitas_tabs[$index]['tabs'][] = '<li class="' . $active . '"><a href="#' . $pane_id . '" data-toggle="tab">' . $title
            . '</a></li>';
    $_oscitas_tabs[$index]['panes'][] = '<div class="tab-pane ' . $fade . ' ' . $active . '" id="'
            . $pane_id . '">'
            . do_shortcode
                    (trim($content)) . '</div>';
}
add_shortcode('tab', 'osc_theme_tab');
