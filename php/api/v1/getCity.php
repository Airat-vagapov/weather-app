<?php
    require 'getIp.php';

    $ip = get_ip_address();
    $api_key = '0654849dcf1945c5916194147232501';
    $url = "http://api.weatherapi.com/v1/ip.json?key=$api_key&q=$ip";

    $result = file_get_contents($url);
    echo $result;
