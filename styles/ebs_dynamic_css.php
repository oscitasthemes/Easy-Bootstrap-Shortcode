<?php
header("Content-type: text/css");
if(!session_id()) @session_start();
//echo $_SESSION['ebs_dynamic_css'];
if(isset($_SESSION['ebs_dynamic_css'])){
    echo $_SESSION['ebs_dynamic_css'];
}

if(isset($_SESSION['ebs_slider_css'])){
    foreach($_SESSION['ebs_slider_css'] as $val){
        echo $_SESSION['ebs_slider_each_'.$val];
    }
}

//session_write_close();