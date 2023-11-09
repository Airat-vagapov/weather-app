<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: *");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $code = json_decode($data->code);
    $isDay = json_decode(($data->isDay));
}

// $translateData = file_get_contents('../conditions.json');
// $iconsByCondition = file_get_contents(('../icons-by-condition.json'));
$iconsByCondition = file_get_contents(('/weather-app/icons-by-condition.json'));

$arr = json_decode($iconsByCondition);

foreach ($arr as $elem) {
    $arr_code = $elem->code;
    
    if ($arr_code == $code) {
        
        if ($isDay == 1) {
            $iconName = $elem->iconDay;
        } else {
            $iconName = $elem->iconNight;
            // var_dump($night);
        }
        $result = $iconName;
    }
};
// $arr = json_decode($translateData);

// $conditionCode = $code->conditionCode;

// foreach ($arr as $elem) {
//     foreach ($elem as $key => $value) {
//         if ($key === 'code' && $value === $conditionCode) {
//             $languages = $elem->languages;
//             foreach ($languages as $lang) {
//                 if ($lang->lang_iso === 'ru') {
//                     $resultDay = $lang->day_text;
//                     $resultNight = $lang->night_text;
//                 }
//             }
//         }
//     };
// };


// $conditionRus = [
//     'code' => $conditionCode,
//     'day' => $resultDay,
//     'night' => $resultNight
// ];

// var_dump($result);
$json = json_encode($result);

// // header('Content-Type: application/json');
echo $json;
