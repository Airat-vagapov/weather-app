<?php

// https://documentation-resources.opendatasoft.com/api/v2/catalog/datasets/gold-prices/records?limit=2&offset=0

$data = array(
    'dataset' => 'geonames-all-cities-with-a-population-1000',
    'q' => 'Kazan',
    'lang' => 'en',
    'rows' => 2,
    'sort' => 'name',
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

$result = array();
foreach ($result_arr as $el) {
    $fields = $el->fields;
    $city = $fields->name;
    $country = $fields->cou_name_en;
    $population = $fields->population;
    $item = array(
        'city' => $city,
        'country' => $country,
        'population' => $population
    );

    $result[] = $item;
};

echo json_encode($result);
