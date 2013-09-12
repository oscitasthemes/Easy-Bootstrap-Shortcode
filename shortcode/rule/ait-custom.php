<?php
/* **********************************************************
 * RULES
 * **********************************************************/
function theme_rule( $params, $content = null) {
  return "<div class=\"rule\"></div>";
}
add_shortcode( 'rule', 'theme_rule' );

function theme_rule_top( $params, $content = null) {
  return "<div class=\"rule\"><span class=\"top\">" . __( 'top' ) . "</span></div>";
}

add_shortcode( 'rule_top', 'theme_rule_top' );

