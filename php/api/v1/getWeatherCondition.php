<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $code = json_decode($data->code);
}

$translateData = file_get_contents('../conditions.json');
$arr = json_decode($translateData);

$conditionCode = $code->conditionCode;

foreach ($arr as $elem) {
    foreach ($elem as $key => $value) {
        if ($key === 'code' && $value === $conditionCode) {
            $languages = $elem->languages;
            foreach ($languages as $lang) {
                if ($lang->lang_iso === 'ru') {
                    $resultDay = $lang->day_text;
                    $resultNight = $lang->night_text;
                }
            }
        }
    };
};


$conditionRus = [
    'code' => $conditionCode,
    'day' => $resultDay,
    'night' => $resultNight
];


$result = json_encode($conditionRus);

// header('Content-Type: application/json');
echo $result;