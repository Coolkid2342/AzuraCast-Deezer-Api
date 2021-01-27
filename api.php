<?php
$string = file_get_contents("config.json");
$json_a = json_decode($string,true);
$url = $json_a["url"];
$json = file_get_contents($url);
$obj = json_decode($json, true);
$nowplaying = $obj["now_playing"]["song"]["artist"] . " " . $obj["now_playing"]["song"]["title"];
$lookup = urlencode($nowplaying);
$search = "https://api.deezer.com/search?q=" . $lookup . "&limit=1";
$deezer = file_get_contents($search);
echo $deezer;
?>