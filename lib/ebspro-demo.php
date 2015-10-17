<div class="ebs-prodemo-outer">
    <div class="ebspro-titlebar">
        <h1>osCitas Plugin <?php echo __('Offeres', 'easy-bootstrap-shoercodes'); ?></h1>
        <div class="osc-logo">
            <img src="<?php echo EBS_PLUGIN_URL.'images/osc-logo.png';?>"  alt="" />
        </div>
    </div>

    <div class="ebs-pro-content" style="margin-top: 10px; text-align: center;">
        <?php
            $arg = array ( 'method' => 'GET');
            $response = wp_remote_request ( 'http://offers.oscitas.com/index.php' , $arg );
            echo $response['body'];
        ?>
    </div>
</div>