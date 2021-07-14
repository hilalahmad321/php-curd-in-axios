<?php

include "config.php";


$input = file_get_contents("php://input");
$decode = json_decode($input, true);

$username = $decode["username"];
$age = $decode["age"];
$city = $decode["city"];

$sql = "INSERT INTO student (username,age,city) VALUES ('{$username}','{$age}','{$city}')";

if (mysqli_query($conn, $sql)) {
    echo json_encode(array("insert" => "success"));
} else {
    echo json_encode(array("insert" => "faild"));
}