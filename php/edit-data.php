<?php

include "config.php";

$id = $_GET["id"];
$sql = "SELECT * FROM student WHERE id='{$id}'";
$run_sql = mysqli_query($conn, $sql);
$output = [];
if (mysqli_num_rows($run_sql) > 0) {
    while ($row = mysqli_fetch_assoc($run_sql)) {
        $output[] = $row;
    }
}

echo json_encode($output);

mysqli_close($conn);