<?php

/* * *********************************************************
 * jQuery UI Tabs
 * ********************************************************* */
$_oscitas_tabs = array();

function osc_theme_tabs($params, $content = null) {
    global $_oscitas_tabs;
    extract(shortcode_atts(array(
                'id' => count($_oscitas_tabs),
                'class' => ''
                    ), $params));
    $_oscitas_tabs[$id] = array();
    do_shortcode($content);
    $scontent = '<ul class="nav nav-tabs'.EBS_CONTAINER_CLASS.'" id="oscitas-tabs-' . $id . '">' . implode('', $_oscitas_tabs[$id]['tabs']) . '</ul><div class="tab-content'.EBS_CONTAINER_CLASS.'">' . implode('', $_oscitas_tabs[$id]['panes']) . '</div>';
    if (trim($scontent) != "") {
        $output = '<div class="' . $class . '">' . $scontent;
        $output .= '</div>';

        return $output;
    } else {
        return "";
    }
}
ebs_backward_compatibility_callback('tabs', 'osc_theme_tabs');

function osc_theme_tab($params, $content = null) {
    global $_oscitas_tabs;
    extract(shortcode_atts(array(
                'title' => 'title',
                'active' => '',
                    ), $params));

    $index = count($_oscitas_tabs) - 1;
    if (!isset($_oscitas_tabs[$index]['tabs'])) {
        $_oscitas_tabs[$index]['tabs'] = array();
    }
    $pane_id = 'pane-' . $index . '-' .  count($_oscitas_tabs[$index]['tabs']);
    $_oscitas_tabs[$index]['tabs'][] = '<li class="' . $active.EBS_CONTAINER_CLASS. '"><a class="'.EBS_CONTAINER_CLASS.'" href="#' . $pane_id . '" data-toggle="tab">' . $title
            . '</a></li>';
    $_oscitas_tabs[$index]['panes'][] = '<div class="tab-pane ' . $active .EBS_CONTAINER_CLASS. '" id="'
            . $pane_id . '">'
            . do_shortcode
                    (trim($content)) . '</div>';
}
ebs_backward_compatibility_callback('tab', 'osc_theme_tab');