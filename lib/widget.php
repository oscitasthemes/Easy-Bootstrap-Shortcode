<?php
/*
 * Create EBS widgets to to parse EBS shortcodes in sidebar
 */
add_action('widgets_init', 'osc_ebsp_content_widget');

function osc_ebsp_content_widget() {
    register_widget('Ebs_Custom_Widget');
}



class Ebs_Custom_Widget extends WP_Widget {

    function __construct() {
        global $wp_version;
        $widget_ops = array('classname' => 'ebs_custom_widget', 'description' => __('EBS widget to show EBS/other shortcodes in sidebar.','ebs'));
        $control_ops = array('id_base' => 'ebsp-widget');
        parent::__construct('ebsp-widget', __('EBS Shortcode Compiler', 'ebs'), $widget_ops, $control_ops);
    }

    function widget($args, $instance) {
        extract($args);

        $title = apply_filters('widget_title', $instance['title']);
        $ebs_content = $instance['ebs_content'];


        echo $before_widget;

        if ($title) {
            echo $before_title . $title . $after_title;
        }

        if ($ebs_content) {

                    ?>
                    <div class="ebs_widget_content">
                        <?php echo do_shortcode($ebs_content);?>
                           </div>
                    <div class="clear"></div>
                <?php
                }



        echo $after_widget;
    }

    function update($new_instance, $old_instance) {
        $instance = $old_instance;

        $instance['title'] = strip_tags($new_instance['title']);
        $instance['ebs_content'] = $new_instance['ebs_content'];


        return $instance;
    }

    function form($instance) {
        $defaults = array('title' => 'EBS Shortcode', 'ebs_content' => '');
        $instance = wp_parse_args((array) $instance, $defaults);
        ?>

        <p>
            <label for="<?php echo $this->get_field_id('title'); ?>"><?php echo __('Title', 'easy-bootstrap-shoercodes'); ?>:</label>
            <input class="osc_ebs_input" style=" width: 100%; display: block;" id="<?php echo $this->get_field_id('title'); ?>" type="text" name="<?php echo $this->get_field_name('title'); ?>" value="<?php echo $instance['title']; ?>" />
        </p>

        <p>
            <label for="<?php echo $this->get_field_id('ebs_content'); ?>"><?php echo __('Shortcode', 'easy-bootstrap-shoercodes'); ?>:</label>
            <textarea class="osc_ebs_input" style=" height: 250px;
    width: 100%; display: block;" id="<?php echo $this->get_field_id('ebs_content'); ?>" name="<?php echo $this->get_field_name('ebs_content'); ?>" ><?php echo $instance['ebs_content']; ?></textarea>
        </p>


    <?php
    }

}
?>