<?php

$localhost = "localhost";
$username = "root";
$password = "";
$database = "axios_crud";

$conn = mysqli_connect($localhost, $username, $password, $database);


$create_table = "CREATE TABLE student(  
    id int NOT NULL primary key AUTO_INCREMENT comment 'primary key',
    username varchar(255) comment '',
    age varchar(255) comment '',
    city varchar(255) comment ''
) default charset utf8 comment '';
";

mysqli_query($conn, $create_table);