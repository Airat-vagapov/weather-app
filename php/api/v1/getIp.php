<?php
function get_ip_address()
{
    $ip = file_get_contents('https://api.ipify.org');
    return $ip;
}

