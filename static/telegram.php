<?php

// ! Full Access to another domain
// !!!!!!!для работы разкомментируй !!!!!!!!
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

// TOKEN
$token = "5212048628:AAEppZjza7e-v_v3HMf8jHFxsYfmildAhro";

/*
  GET CHAT ID
  go to: 'https://api.telegram.org/bot5212048628:AAEppZjza7e-v_v3HMf8jHFxsYfmildAhro/getUpdates',
  where "5076496335:AAE66iPy4oKdpw2XvkekYMY8gyelCdM51L4" is bot token (from @botfather)
*/

$chat_id = "-641984161";

// Grab js data
$_DATA = json_decode(file_get_contents('php://input'), true);

foreach($_DATA as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  die();
} else {
  echo "Error";die();
}
