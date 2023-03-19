<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $params = json_decode($json);
    $cityName = json_decode($params->city);
}

$data = array(
    'dataset' => 'geonames-all-cities-with-a-population-1000',
    'q' => "name=$cityName",
    'lang' => 'en',
    'rows' => 15,
    'sort' => 'population',
    'facet' => 'feature_code',
    'facet' => 'cou_name_en',
    'facet' => 'timezone',
);

$url = "https://documentation-resources.opendatasoft.com//api/records/1.0/search/?" . http_build_query($data);

$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl);

curl_close($curl);

$json = json_decode($response);

$result_arr = $json->records;

$cities = array();
foreach ($result_arr as $el) {
    $fields = $el->fields;
    $city = $fields->name;
    $country = $fields->cou_name_en;
    $population = $fields->population;
    $coordinates1 = strVal($fields->coordinates[0]);
    $coordinates2 = strVal($fields->coordinates[1]);

    $coordinates = $coordinates1 . ',' . $coordinates2;

    if ($population > 1000) {
        $item = array(
            'city' => $city,
            'country' => $country,
            'population' => $population,
            'coordinates' => $coordinates
        );
        $cities[] = $item;
    }
};

function arrComparsionByPopulation($a, $b)
{
    if ($a['population'] == $b['population']) {
        return 0;
    }
    return ($a['population'] < $b['population']) ? 1 : -1;
};

usort($cities, 'arrComparsionByPopulation');

echo json_encode($cities);
