<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: *");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);
}

$iconsByCondition = file_get_contents(('/weather-app/icons-by-condition.json'));

$arr = json_decode($iconsByCondition);


for ($i = 0; $i < 24; $i++) {

    $code = $data[$i]->condition->code;
    $isDay = $data[$i]->is_day;

    foreach ($arr as $elem) {
        $arr_code = $elem->code;

        if ($arr_code == $code) {

            if ($isDay == 1) {
                $iconName = $elem->iconDay;
            } else {
                $iconName = $elem->iconNight;
            }
        }
    }

    $data[$i]->condition->iconName = $iconName;
}


$result_json = json_encode($data);
echo $result_json;
