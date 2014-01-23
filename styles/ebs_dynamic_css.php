<?php
header("Content-type: text/css");
if(!session_id())
    session_start();
echo $_SESSION['ebs_dynamic_css'];
