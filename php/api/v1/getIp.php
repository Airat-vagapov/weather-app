<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: *");
function get_ip_address()
{
    $ip = file_get_contents('https://api.ipify.org');
    return $ip;
}

