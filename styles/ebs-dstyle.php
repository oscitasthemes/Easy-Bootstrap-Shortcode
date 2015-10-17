<?php
header("Content-type: text/css");
if(!session_id()) @session_start();

$css_ebs=<<<EOF
.osc_servicebox {
    padding: 1px;
    text-align: center;
    transition: background-color 0.2s linear 0s, color 0.2s linear 0s;
    width: 100%;
    margin: 0 0 10px 0;
}

.icon_bg{
    font-size: 40px;
}
.osc_servicebox h1, .osc_servicebox h2, .osc_servicebox h3, .osc_servicebox h4, .osc_servicebox h5, .osc_servicebox h6{
    font-size: 20px;
    font-weight: normal;
    letter-spacing: -1px;
    margin: 9px 0;
    padding-bottom: 9px;
    padding-top: 3px;
    text-align: center;
    text-transform: uppercase;
}
.osc_servicebox_readmore {
    border-radius: 5px;
    display: inline-block;
    margin: 15px 0 20px;
    padding: 8px 15px;
    text-decoration:none;
}
.iconcircle{
    margin: 30px auto;
}

.iconcircle{ background-color: #FFFFFF; border-radius: 50%; -moz-border-radius: 50%; -webkit-border-radius: 50%; -ms-border-radius: 50%;
    -o-border-radius: 50%; height: 100px;  line-height: 90px;   width: 100px; }
EOF;
echo $css_ebs;
if(isset($_SESSION['ebs_servicebox_css']) && is_array($_SESSION['ebs_servicebox_css']) && count($_SESSION['ebs_servicebox_css'])>0){
    foreach($_SESSION['ebs_servicebox_css'] as $sbox){
        echo $_SESSION[$sbox];
    }
}

//session_write_close();