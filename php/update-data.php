<?php

include "config.php";


$input = file_get_contents("php://input");
$decode = json_decode($input, true);


$id = $decode["id"];
$username = $decode["username"];
$age = $decode["age"];
$city = $decode["city"];

$sql = "UPDATE student SET username='{$username}' , age='{$age}',city='{$city}' WHERE id='{$id}'";

if (mysqli_query($conn, $sql)) {
    echo json_encode(array("update" => "success"));
} else {
    echo json_encode(array("update" => "faild"));
}